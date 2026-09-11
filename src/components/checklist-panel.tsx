interface ChecklistItem {
  id: string;
  text: string;
  meta: string;
  urgency?: string;
}

interface ChecklistPanelProps {
  title: string;
  tint: 'indigo' | 'coral';
  items: ChecklistItem[];
  checks: Record<string, boolean>;
  onToggle: (id: string) => void;
}

export function ChecklistPanel({ title, tint, items, checks, onToggle }: ChecklistPanelProps) {
  const surfaceClass = tint === 'coral' ? 'bg-rose-50 border-rose-100' : 'bg-indigo-50 border-indigo-100';

  return (
    <section className={`print-surface rounded-2xl border p-4 ${surfaceClass}`}>
      <h3 className="font-serif text-xl text-ink">{title}</h3>
      <ul className="mt-3 space-y-3">
        {items.map((item) => (
          <li key={item.id} className="rounded-xl border border-stone-200 bg-white/92 p-3">
            <label className="flex cursor-pointer gap-3">
              <input
                type="checkbox"
                checked={Boolean(checks[item.id])}
                onChange={() => onToggle(item.id)}
                className="mt-1 h-4 w-4 rounded border-stone-400 text-indigo focus:ring-indigo-500"
              />
              <span>
                <span className="block text-sm font-semibold text-ink">{item.text}</span>
                <span className="block text-xs text-slate-600">{item.meta}</span>
                {item.urgency && <span className="mt-1 inline-block text-xs font-semibold text-coral">Urgency: {item.urgency}</span>}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </section>
  );
}
