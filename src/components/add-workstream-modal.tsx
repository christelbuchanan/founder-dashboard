import { useState, type FormEvent } from 'react';
import type { ImpactLevel, Workstream, WorkstreamStatus } from '../types';

interface AddWorkstreamModalProps {
  open: boolean;
  onClose: () => void;
  onAdd: (item: Workstream) => void;
}

const statuses: WorkstreamStatus[] = ['Advanced', 'Clarified', 'Proposed', 'In progress'];
const impacts: ImpactLevel[] = ['Critical', 'High', 'Medium'];

export function AddWorkstreamModal({ open, onClose, onAdd }: AddWorkstreamModalProps) {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [outcome, setOutcome] = useState('');
  const [nextAction, setNextAction] = useState('');
  const [confidence, setConfidence] = useState('Founder-added note');
  const [status, setStatus] = useState<WorkstreamStatus>('In progress');
  const [impact, setImpact] = useState<ImpactLevel>('Medium');

  if (!open) return null;

  const reset = () => {
    setTitle('');
    setSummary('');
    setOutcome('');
    setNextAction('');
    setConfidence('Founder-added note');
    setStatus('In progress');
    setImpact('Medium');
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onAdd({
      id: `manual-${Date.now()}`,
      title,
      status,
      impact,
      summary,
      outcome,
      nextAction,
      confidence,
      isManual: true
    });
    reset();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/35 p-4 print-hide" role="dialog" aria-modal="true" aria-label="Add workstream">
      <form onSubmit={onSubmit} className="w-full max-w-2xl rounded-2xl border border-stone-200 bg-white p-5 shadow-soft">
        <h2 className="font-serif text-2xl text-ink">Add workstream</h2>
        <p className="text-sm text-slate-600">Stored locally on this device.</p>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <label className="text-sm font-medium text-slate-700 sm:col-span-2">
            Title
            <input required value={title} onChange={(e) => setTitle(e.target.value)} className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2" />
          </label>

          <label className="text-sm font-medium text-slate-700">
            Status
            <select value={status} onChange={(e) => setStatus(e.target.value as WorkstreamStatus)} className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2">
              {statuses.map((entry) => (
                <option key={entry} value={entry}>{entry}</option>
              ))}
            </select>
          </label>

          <label className="text-sm font-medium text-slate-700">
            Impact
            <select value={impact} onChange={(e) => setImpact(e.target.value as ImpactLevel)} className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2">
              {impacts.map((entry) => (
                <option key={entry} value={entry}>{entry}</option>
              ))}
            </select>
          </label>

          <label className="text-sm font-medium text-slate-700 sm:col-span-2">
            Summary
            <textarea required rows={3} value={summary} onChange={(e) => setSummary(e.target.value)} className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2" />
          </label>

          <label className="text-sm font-medium text-slate-700 sm:col-span-2">
            Outcome
            <textarea required rows={2} value={outcome} onChange={(e) => setOutcome(e.target.value)} className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2" />
          </label>

          <label className="text-sm font-medium text-slate-700 sm:col-span-2">
            Next action
            <textarea required rows={2} value={nextAction} onChange={(e) => setNextAction(e.target.value)} className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2" />
          </label>

          <label className="text-sm font-medium text-slate-700 sm:col-span-2">
            Confidence label
            <input value={confidence} onChange={(e) => setConfidence(e.target.value)} className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2" />
          </label>
        </div>

        <div className="mt-5 flex justify-end gap-2">
          <button type="button" onClick={() => { reset(); onClose(); }} className="rounded-lg border border-indigo px-4 py-2 text-sm font-semibold text-indigo hover:bg-indigo-50">
            Cancel
          </button>
          <button type="submit" className="rounded-lg bg-indigo px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700">
            Add workstream
          </button>
        </div>
      </form>
    </div>
  );
}
