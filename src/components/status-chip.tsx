import type { ImpactLevel, WorkstreamStatus } from '../types';

const statusStyles: Record<WorkstreamStatus, string> = {
  Advanced: 'bg-emerald-100 text-emerald-900',
  Clarified: 'bg-indigo-100 text-indigo-900',
  Proposed: 'bg-amber-100 text-amber-900',
  'In progress': 'bg-orange-100 text-orange-900'
};

const impactStyles: Record<ImpactLevel, string> = {
  Critical: 'bg-rose-100 text-rose-900',
  High: 'bg-amber-100 text-amber-900',
  Medium: 'bg-slate-100 text-slate-800'
};

interface StatusChipProps {
  type: 'status' | 'impact';
  value: WorkstreamStatus | ImpactLevel;
}

export function StatusChip({ type, value }: StatusChipProps) {
  const tone = type === 'status' ? statusStyles[value as WorkstreamStatus] : impactStyles[value as ImpactLevel];
  return <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold tracking-wide ${tone}`}>{value}</span>;
}
