import { useEffect, useState } from 'react';

export function AmbientBackground() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) => setReducedMotion(event.matches);
    mediaQuery.addEventListener('change', handler);

    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return (
    <div className="ambient-layer fixed inset-0 -z-10 overflow-hidden print-hide" aria-hidden="true">
      {!reducedMotion && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover opacity-60"
          poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' x2='1' y1='0' y2='1'%3E%3Cstop stop-color='%23F7F6F2'/%3E%3Cstop offset='1' stop-color='%23E8EDF7'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23g)' width='1200' height='800'/%3E%3C/svg%3E"
        >
          <source src="https://cdn.coverr.co/videos/coverr-abstract-color-gradient-9715/1080p.mp4" type="video/mp4" />
        </video>
      )}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(82,106,205,0.15),transparent_40%),radial-gradient(circle_at_85%_20%,rgba(216,107,92,0.12),transparent_32%),linear-gradient(180deg,rgba(247,246,242,0.88),rgba(247,246,242,0.98))]" />
    </div>
  );
}
