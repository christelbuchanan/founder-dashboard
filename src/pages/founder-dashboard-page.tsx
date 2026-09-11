import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AddWorkstreamModal } from '../components/add-workstream-modal';
import { AmbientBackground } from '../components/ambient-background';
import { ChecklistPanel } from '../components/checklist-panel';
import { DashboardControls } from '../components/dashboard-controls';
import { DashboardHero } from '../components/dashboard-hero';
import { WorkstreamCard } from '../components/workstream-card';
import { baseWorkstreams, decisionLedger, footerText, openLoops, priorities, timeline } from '../data';
import { useLocalStorageState } from '../hooks/use-local-storage';
import type { ImpactLevel, Workstream, WorkstreamStatus } from '../types';
import { buildDailyBriefMarkdown } from '../utils/build-brief';

interface FounderDashboardPageProps {
  mode: 'executive' | 'evidence';
}

export function FounderDashboardPage({ mode }: FounderDashboardPageProps) {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [fatalError, setFatalError] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<WorkstreamStatus | 'All'>('All');
  const [impactFilter, setImpactFilter] = useState<ImpactLevel | 'All'>('All');
  const [copyFeedback, setCopyFeedback] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);

  const manualWorkstreamsStore = useLocalStorageState<Workstream[]>('founder-dashboard-manual-workstreams', []);
  const notesStore = useLocalStorageState<Record<string, string>>('founder-dashboard-notes', {});
  const loopChecksStore = useLocalStorageState<Record<string, boolean>>('founder-dashboard-open-loop-checks', {});
  const priorityChecksStore = useLocalStorageState<Record<string, boolean>>('founder-dashboard-priority-checks', {});

  useEffect(() => {
    const timer = window.setTimeout(() => {
      try {
        setLoading(false);
      } catch {
        setFatalError('Unable to initialize dashboard view.');
      }
    }, 350);

    return () => window.clearTimeout(timer);
  }, []);

  const storageError =
    manualWorkstreamsStore.error || notesStore.error || loopChecksStore.error || priorityChecksStore.error;

  const allWorkstreams = useMemo(
    () => [...baseWorkstreams, ...manualWorkstreamsStore.value],
    [manualWorkstreamsStore.value]
  );

  const filteredWorkstreams = useMemo(
    () =>
      allWorkstreams.filter((item) => {
        const statusMatch = statusFilter === 'All' || item.status === statusFilter;
        const impactMatch = impactFilter === 'All' || item.impact === impactFilter;
        return statusMatch && impactMatch;
      }),
    [allWorkstreams, statusFilter, impactFilter]
  );

  const isEvidenceMode = mode === 'evidence';

  const toggleViewMode = () => {
    navigate(isEvidenceMode ? '/' : '/evidence');
  };

  const updateNote = (id: string, value: string) => {
    notesStore.setValue({ ...notesStore.value, [id]: value });
  };

  const toggleLoop = (id: string) => {
    loopChecksStore.setValue({ ...loopChecksStore.value, [id]: !loopChecksStore.value[id] });
  };

  const togglePriority = (id: string) => {
    priorityChecksStore.setValue({ ...priorityChecksStore.value, [id]: !priorityChecksStore.value[id] });
  };

  const addWorkstream = (item: Workstream) => {
    manualWorkstreamsStore.setValue([...manualWorkstreamsStore.value, item]);
  };

  const copyDailyBrief = async () => {
    try {
      const markdown = buildDailyBriefMarkdown(allWorkstreams, openLoops, priorities);
      await navigator.clipboard.writeText(markdown);
      setCopyFeedback('Daily brief copied as Markdown.');
    } catch {
      setCopyFeedback('Clipboard blocked. Use Print / export for sharing.');
    }
    window.setTimeout(() => setCopyFeedback(''), 2800);
  };

  if (loading || !manualWorkstreamsStore.ready || !notesStore.ready || !loopChecksStore.ready || !priorityChecksStore.ready) {
    return (
      <main className="min-h-screen bg-canvas px-4 py-24 text-center text-ink">
        <h1 className="font-serif text-4xl">Founder Dashboard</h1>
        <p className="mt-2 text-slate-600">Loading today’s operating brief...</p>
      </main>
    );
  }

  if (fatalError) {
    return (
      <main className="min-h-screen bg-canvas px-4 py-24 text-center">
        <p className="text-xl font-semibold text-coral">Unable to load dashboard</p>
        <p className="mt-2 text-slate-700">{fatalError}</p>
        <button onClick={() => window.location.reload()} className="mt-4 rounded-lg bg-indigo px-4 py-2 font-semibold text-white hover:bg-indigo-700">
          Retry
        </button>
      </main>
    );
  }

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <AmbientBackground />

      <AddWorkstreamModal open={showAddModal} onClose={() => setShowAddModal(false)} onAdd={addWorkstream} />

      <main className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-10">
        <DashboardHero momentum={78} />

        <DashboardControls
          statusFilter={statusFilter}
          impactFilter={impactFilter}
          evidenceMode={isEvidenceMode}
          copyFeedback={copyFeedback}
          onStatusFilterChange={setStatusFilter}
          onImpactFilterChange={setImpactFilter}
          onToggleViewMode={toggleViewMode}
          onOpenAddModal={() => setShowAddModal(true)}
          onCopyDailyBrief={copyDailyBrief}
          onPrint={() => window.print()}
        />

        {storageError && (
          <section className="mt-4 rounded-xl border border-rose-200 bg-rose-50 p-3 text-sm text-rose-800" role="alert">
            {storageError}
          </section>
        )}

        <section className="mt-6" aria-labelledby="workstreams-title">
          <div className="mb-3 flex items-center justify-between">
            <h2 id="workstreams-title" className="font-serif text-3xl text-ink">Workstreams</h2>
            <p className="text-sm text-slate-600">{filteredWorkstreams.length} shown</p>
          </div>

          {filteredWorkstreams.length === 0 ? (
            <div className="print-surface rounded-2xl border border-stone-200 bg-white/92 p-8 text-center text-slate-600">
              Empty state: no workstreams match the selected status and impact filters.
            </div>
          ) : (
            <div className="grid gap-4 lg:grid-cols-2">
              {filteredWorkstreams.map((item) => (
                <WorkstreamCard
                  key={item.id}
                  item={item}
                  note={notesStore.value[item.id] || ''}
                  showEvidence={isEvidenceMode}
                  onNoteChange={updateNote}
                />
              ))}
            </div>
          )}
        </section>

        <section className="mt-8 grid gap-4 lg:grid-cols-2" aria-label="Execution checklists">
          <ChecklistPanel
            title="Open loops"
            tint="coral"
            checks={loopChecksStore.value}
            onToggle={toggleLoop}
            items={openLoops.map((item) => ({
              id: item.id,
              text: item.text,
              meta: `Owner: ${item.owner}`,
              urgency: item.urgency
            }))}
          />

          <div className="space-y-4">
            <ChecklistPanel
              title="Tomorrow’s top three"
              tint="indigo"
              checks={priorityChecksStore.value}
              onToggle={togglePriority}
              items={priorities.map((item) => ({ id: item.id, text: item.text, meta: 'Priority item' }))}
            />

            <details className="print-surface rounded-xl border border-amber-200 bg-amber-50 p-4">
              <summary className="cursor-pointer font-semibold text-amber-900">Why these three</summary>
              <p className="mt-2 text-sm text-amber-900">
                They reduce miscommunication, accelerate fundraising credibility and turn current infrastructure into user adoption.
              </p>
            </details>
          </div>
        </section>

        <section className="mt-8 grid gap-4 lg:grid-cols-2" aria-label="Decisions and timeline">
          <article className="print-surface rounded-2xl border border-stone-200 bg-white/94 p-4 shadow-soft">
            <h3 className="font-serif text-2xl text-ink">Decision ledger</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              {decisionLedger.map((entry) => (
                <li key={entry} className="rounded-lg border border-stone-100 bg-stone-50/80 p-3">
                  {entry}
                </li>
              ))}
            </ul>
          </article>

          <article className="print-surface rounded-2xl border border-stone-200 bg-white/94 p-4 shadow-soft">
            <h3 className="font-serif text-2xl text-ink">Activity / evidence timeline</h3>
            <ul className="mt-3 space-y-3 text-sm text-slate-700">
              {timeline.map((item) => (
                <li key={item.period} className="rounded-lg border border-stone-100 bg-stone-50/80 p-3">
                  <p className="font-semibold text-ink">{item.period}</p>
                  <p>{item.detail}</p>
                </li>
              ))}
            </ul>
          </article>
        </section>

        <footer className="print-surface mt-8 rounded-xl border border-stone-200 bg-white/90 p-4 text-xs leading-relaxed text-slate-600">
          {footerText}
        </footer>
      </main>
    </div>
  );
}
