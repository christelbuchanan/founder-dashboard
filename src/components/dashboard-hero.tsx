import { kpis, strategicSynthesis, subtitle } from '../data';

interface DashboardHeroProps {
  momentum: number;
}

export function DashboardHero({ momentum }: DashboardHeroProps) {
  const clamped = Math.max(0, Math.min(100, momentum));

  return (
    <header className="print-surface rounded-3xl border border-stone-200 bg-white/90 p-6 shadow-soft backdrop-blur">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Private founder operating dashboard</p>
      <h1 className="mt-2 font-serif text-4xl leading-tight text-ink sm:text-5xl">Founder Dashboard</h1>
      <p className="mt-2 text-base font-medium text-slate-600">{subtitle}</p>
      <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-700">{strategicSynthesis}</p>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {kpis.map((kpi) => (
          <section key={kpi.label} className="rounded-xl border border-stone-200 bg-white p-4">
            <p className="text-sm text-slate-600">{kpi.label}</p>
            <p className="mt-1 text-2xl font-bold text-ink">{kpi.value}</p>
            <p className="text-xs text-slate-500">Dashboard summary</p>
          </section>
        ))}
      </div>

      <section className="mt-5 rounded-2xl border border-stone-200 bg-white/94 p-4" aria-label="Founder momentum directional progress">
        <div className="flex items-end justify-between gap-2">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-600">Founder Momentum</p>
          <p className="text-lg font-bold text-indigo">Directional · {clamped}%</p>
        </div>
        <div className="mt-2 h-3 w-full overflow-hidden rounded-full bg-indigo-100" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={clamped} aria-label="Directional momentum">
          <div className="h-full rounded-full bg-indigo transition-all duration-500" style={{ width: `${clamped}%` }} />
        </div>
      </section>
    </header>
  );
}
