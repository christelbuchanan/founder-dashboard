import type { ImpactLevel, WorkstreamStatus } from '../types';

interface DashboardControlsProps {
  statusFilter: WorkstreamStatus | 'All';
  impactFilter: ImpactLevel | 'All';
  evidenceMode: boolean;
  copyFeedback: string;
  onStatusFilterChange: (value: WorkstreamStatus | 'All') => void;
  onImpactFilterChange: (value: ImpactLevel | 'All') => void;
  onToggleViewMode: () => void;
  onOpenAddModal: () => void;
  onCopyDailyBrief: () => void;
  onPrint: () => void;
}

export function DashboardControls({
  statusFilter,
  impactFilter,
  evidenceMode,
  copyFeedback,
  onStatusFilterChange,
  onImpactFilterChange,
  onToggleViewMode,
  onOpenAddModal,
  onCopyDailyBrief,
  onPrint
}: DashboardControlsProps) {
  return (
    <section className="print-hide mt-6 flex flex-wrap items-center gap-2 rounded-2xl border border-stone-200 bg-white/92 p-3">
      <label className="text-sm text-slate-700">
        Status
        <select value={statusFilter} onChange={(event) => onStatusFilterChange(event.target.value as WorkstreamStatus | 'All')} className="ml-2 rounded-md border border-stone-300 px-2 py-1">
          <option value="All">All</option>
          <option value="Advanced">Advanced</option>
          <option value="Clarified">Clarified</option>
          <option value="Proposed">Proposed</option>
          <option value="In progress">In progress</option>
        </select>
      </label>

      <label className="text-sm text-slate-700">
        Impact
        <select value={impactFilter} onChange={(event) => onImpactFilterChange(event.target.value as ImpactLevel | 'All')} className="ml-2 rounded-md border border-stone-300 px-2 py-1">
          <option value="All">All</option>
          <option value="Critical">Critical</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
        </select>
      </label>

      <button onClick={onToggleViewMode} className="rounded-md border border-indigo px-3 py-1.5 text-sm font-semibold text-indigo hover:bg-indigo-50">
        {evidenceMode ? 'Executive view' : 'Evidence view'}
      </button>

      <button onClick={onOpenAddModal} className="rounded-md border border-indigo px-3 py-1.5 text-sm font-semibold text-indigo hover:bg-indigo-50">
        Add workstream
      </button>

      <button onClick={onCopyDailyBrief} className="rounded-md bg-indigo px-3 py-1.5 text-sm font-semibold text-white hover:bg-indigo-700">
        Copy daily brief
      </button>

      <button onClick={onPrint} className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm font-semibold text-slate-700 hover:bg-slate-100">
        Print / export
      </button>

      {copyFeedback && <p className="text-sm text-emerald">{copyFeedback}</p>}
    </section>
  );
}
