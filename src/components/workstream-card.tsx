import type { ChangeEvent } from 'react';
import type { Workstream } from '../types';
import { StatusChip } from './status-chip';

interface WorkstreamCardProps {
  item: Workstream;
  note: string;
  showEvidence: boolean;
  onNoteChange: (id: string, value: string) => void;
}

export function WorkstreamCard({ item, note, showEvidence, onNoteChange }: WorkstreamCardProps) {
  const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onNoteChange(item.id, event.target.value);
  };

  return (
    <article className="print-surface rounded-2xl border border-stone-200 bg-white/94 p-5 shadow-soft">
      <header className="mb-3 flex flex-wrap items-start justify-between gap-3">
        <h3 className="max-w-xl font-serif text-xl leading-tight text-ink">{item.title}</h3>
        <div className="flex gap-2">
          <StatusChip type="status" value={item.status} />
          <StatusChip type="impact" value={item.impact} />
        </div>
      </header>

      {item.sourceLabel && (
        <p className="mb-3 inline-flex rounded-lg bg-indigo-50 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-900">
          {item.sourceLabel}
        </p>
      )}

      <div className="space-y-3 text-sm leading-relaxed text-slate-700">
        <p><span className="font-semibold text-ink">Summary:</span> {item.summary}</p>
        <p><span className="font-semibold text-ink">Outcome:</span> {item.outcome}</p>
        <p><span className="font-semibold text-ink">Next action:</span> {item.nextAction}</p>
      </div>

      {showEvidence && (
        <div className="mt-4 space-y-2 rounded-xl border border-stone-200 bg-stone-50/80 p-3 text-sm text-slate-700">
          <p><span className="font-semibold text-ink">Confidence:</span> {item.confidence}</p>
          {item.truthBoundary && (
            <p className="rounded-md bg-amber-50 p-2 text-amber-900">
              <span className="font-semibold">Truth boundary:</span> {item.truthBoundary}
            </p>
          )}
          {item.evidenceUrl && (
            <a href={item.evidenceUrl} target="_blank" rel="noreferrer" className="font-semibold text-indigo hover:text-indigo-800 hover:underline">
              Open evidence source
            </a>
          )}
        </div>
      )}

      <label className="mt-4 block print-hide">
        <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-600">Founder note</span>
        <textarea
          value={note}
          onChange={onChange}
          rows={2}
          placeholder="Add a concise note, risk, or dependency..."
          className="w-full rounded-xl border border-stone-300 bg-white px-3 py-2 text-sm text-ink placeholder:text-slate-400"
        />
      </label>

      {note && (
        <p className="mt-3 rounded-lg bg-indigo-50/75 p-2 text-sm text-indigo-900">
          <span className="font-semibold">Founder note:</span> {note}
        </p>
      )}
    </article>
  );
}
