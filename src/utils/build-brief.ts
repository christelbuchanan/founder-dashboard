import type { OpenLoop, PriorityItem, Workstream } from '../types';

export function buildDailyBriefMarkdown(workstreams: Workstream[], loops: OpenLoop[], priorities: PriorityItem[]) {
  const lines: string[] = [];

  lines.push('# Founder Dashboard — Christel Buchanan');
  lines.push('**Thursday, 10 September 2026 · Singapore**');
  lines.push('');
  lines.push('## Strategic synthesis');
  lines.push('Today you sharpened the fundraising story, advanced Living Brain distribution, and clarified how context becomes creation.');
  lines.push('');
  lines.push('## Workstreams');

  workstreams.forEach((item) => {
    lines.push(`- **${item.title}** (${item.status}, ${item.impact})`);
    lines.push(`  - Outcome: ${item.outcome}`);
    lines.push(`  - Next action: ${item.nextAction}`);
  });

  lines.push('');
  lines.push('## Open loops');
  loops.forEach((item) => lines.push(`- [ ] ${item.text} (${item.owner}, ${item.urgency})`));

  lines.push('');
  lines.push('## Tomorrow\'s top three');
  priorities.forEach((item) => lines.push(`- [ ] ${item.text}`));

  return lines.join('\n');
}
