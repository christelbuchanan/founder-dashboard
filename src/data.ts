import type { OpenLoop, PriorityItem, TimelineItem, Workstream } from './types';

export const subtitle = 'Thursday, 10 September 2026 · Singapore';

export const strategicSynthesis =
  'Today you sharpened the fundraising story, advanced Living Brain distribution, and clarified how context becomes creation.';

export const kpis = [
  { label: 'Workstreams advanced', value: '8' },
  { label: 'Strategic decisions clarified', value: '3' },
  { label: 'Open loops', value: '6' },
  { label: 'Recommended priorities for tomorrow', value: '3' }
];

export const baseWorkstreams: Workstream[] = [
  {
    id: 'fundraising',
    title: 'Fundraising narrative',
    status: 'Advanced',
    impact: 'Critical',
    summary:
      'Refined an approximately $10M financing narrative at a $50M post-money valuation, targeted for completion within 30 days. Strengthened the power-wedge, three-engine GTM, cross-stack traction and interoperability story. Explored percentage-based traction disclosure while keeping absolute revenue available under NDA.',
    outcome:
      'A more investor-ready narrative focused on velocity, quality of growth, portable context and agents as the monetisation layer.',
    nextAction:
      'Reconcile every percentage against billing/product records and create an investor metric table with period, denominator and source.',
    confidence: 'Confirmed from today’s founder work; financial metrics pending reconciliation.'
  },
  {
    id: 'mcp-distribution',
    title: 'Living Brain MCP distribution',
    status: 'Advanced',
    impact: 'Critical',
    summary:
      'Advanced the “Living Brain MCP Distribution Strategy — Wave 2 & Wave 3” document and worked on discoverability, activation, ecosystem distribution and proof. Living Brain is available on MCP-connected Codex, ChatGPT and Claude surfaces.',
    outcome: 'Stronger distribution narrative: “Build the Brain once. Use it wherever you work.”',
    nextAction: 'Finalise canonical documentation, onboarding and the ChatGPT app submission package.',
    confidence: 'Confirmed.',
    evidenceUrl: 'https://docs.google.com/document/d/1djGpSkFhGFdDVSZ3ZIUjAq_dyn3L0h9uJzHoAMDOh6A/edit'
  },
  {
    id: 'convergence',
    title: 'Product convergence: ChatAndBuild → ChatChat',
    status: 'Clarified',
    impact: 'Critical',
    summary:
      'Clarified the future product direction: ChatAndBuild’s coding and product-building capabilities are being brought directly into ChatChat, creating one flow from persistent context and agent collaboration to websites and intelligent products.',
    truthBoundary:
      'ChatAndBuild does not currently support a Living Brain MCP connection, and website building is not yet back in ChatChat. Never imply otherwise.',
    outcome: 'Clearer product architecture and customer story: Brain knows. Agents act. Build manifests.',
    nextAction: 'Align product, support and marketing on one approved “Available now / Coming next” matrix.',
    confidence: 'Confirmed in today’s product discussion.'
  },
  {
    id: 'nys',
    title: 'High-intent customer response',
    status: 'Advanced',
    impact: 'High',
    summary:
      'Developed a visionary but accurate response for Nys, a customer who recently upgraded to Max, explaining portable Living Brain context, current Codex/ChatGPT/Claude availability and the future integration of coding capabilities into ChatChat.',
    outcome:
      'Turned a support question into a product-vision and activation moment without misrepresenting current functionality.',
    nextAction: 'Send the approved response, ask what Nys wants to build and capture the use case as product evidence.',
    confidence: 'Confirmed.'
  },
  {
    id: 'ux-simplification',
    title: 'Intelligence UX simplification',
    status: 'Proposed',
    impact: 'High',
    summary:
      'Considered simplifying an overloaded experience into four selectors, including a clearer “Genius” mode, rather than presenting too many choices or no guidance.',
    outcome: 'Direction toward progressive disclosure and clearer user-intent selection.',
    nextAction:
      'Define the four modes, intended user for each, default behaviour and a lightweight usability test.',
    confidence: 'Founder hypothesis; requires validation.'
  },
  {
    id: 'trust-scoring',
    title: 'Living Brain trust and scoring',
    status: 'Advanced',
    impact: 'High',
    summary:
      'The “Living Brain Four-Score Intelligence Policy — Technical Specification v0.3” was updated today, supporting a more explicit intelligence and trust framework.',
    outcome: 'Progress toward explainable intelligence policy and stronger governance foundations.',
    nextAction:
      'Convert technical scoring into user-facing language and determine how it relates to any “Genius” mode.',
    confidence: 'Document activity confirmed; precise founder contribution may involve collaborators.',
    evidenceUrl: 'https://docs.google.com/document/d/186F6DgbhbpOc4VgR-xkAKJiJ7brDN448YO6kqWIvo6s/edit'
  },
  {
    id: 'legal-readiness',
    title: 'Legal and launch readiness',
    status: 'In progress',
    impact: 'Medium',
    summary: 'Checked whether LivingBrain.com terms, privacy policy and support email are current and operational.',
    outcome: 'Surfaced launch-readiness dependencies affecting credibility and app/platform submission.',
    nextAction: 'Obtain explicit owner sign-off for T&C, privacy policy and support@livingbrain.com.',
    confidence: 'Confirmed from today’s operating messages.'
  },
  {
    id: 'oxford',
    title: 'Oxford / thought leadership',
    status: 'Advanced',
    impact: 'Medium',
    summary:
      'Created and refined “[University of Oxford Interview] Who Owns the Past? — Interview Guide v1.3 (Proposed),” connecting founder work with wider questions of memory, ownership and AI.',
    outcome: 'Advanced a credible thought-leadership and research asset aligned with Living Brain’s market narrative.',
    nextAction: 'Final review of questions, evidence standards and interview flow.',
    confidence: 'Confirmed.',
    evidenceUrl: 'https://docs.google.com/document/d/1jqstOR6jbdb7gbHz77cmDeJO8kCMDWwSHmOiCn-LjjI/edit'
  },
  {
    id: 'team-activity',
    title: 'Abundant Intelligence website update',
    status: 'In progress',
    impact: 'Medium',
    summary:
      'A website-update brief was created today by the team. Founder relevance is oversight/alignment, not necessarily direct authorship.',
    outcome: 'Team activity / founder oversight',
    nextAction: 'Confirm alignment points and publication dependencies.',
    confidence: 'Confirmed.',
    sourceLabel: 'Team activity / founder oversight',
    evidenceUrl: 'https://docs.google.com/document/d/1MVZ7LbXg9hYr_uPnJl-_iCT8MH3Gg3-bYu4QkqkDaNM/edit'
  }
];

export const decisionLedger = [
  'Portable context is the category story: Living Brain belongs to the user and travels across supported AI surfaces.',
  'Separate current truth from roadmap: MCP is live for Codex, ChatGPT and Claude; not for ChatAndBuild; integrated building inside ChatChat is forthcoming.',
  'Use percentages responsibly in fundraising: every percentage needs a period, denominator and source; absolute figures remain available under NDA.'
];

export const openLoops: OpenLoop[] = [
  {
    id: 'loop-1',
    text: 'Confirm precise timeline and release language for coding/building inside ChatChat.',
    owner: 'Product',
    urgency: 'Critical'
  },
  {
    id: 'loop-2',
    text: 'Finalise Living Brain MCP documentation and onboarding.',
    owner: 'Product/Developer',
    urgency: 'Critical'
  },
  {
    id: 'loop-3',
    text: 'Produce ChatGPT app submission JSON/package and review before submission.',
    owner: 'Developer/Founder',
    urgency: 'High'
  },
  {
    id: 'loop-4',
    text: 'Reconcile fundraising percentages and build source-of-truth metric table.',
    owner: 'Finance/Founder',
    urgency: 'Critical'
  },
  {
    id: 'loop-5',
    text: 'Confirm LivingBrain.com T&C, privacy policy and support email.',
    owner: 'Legal/Ops',
    urgency: 'High'
  },
  {
    id: 'loop-6',
    text: 'Send Nys response and capture intended website use case.',
    owner: 'Customer/Product',
    urgency: 'High'
  }
];

export const priorities: PriorityItem[] = [
  { id: 'priority-1', text: 'Lock the “Available now / Coming next” product-truth matrix.' },
  { id: 'priority-2', text: 'Finalise the investor traction metric table with defensible percentages.' },
  {
    id: 'priority-3',
    text: 'Complete MCP documentation/submission materials and activate the Nys use case.'
  }
];

export const timeline: TimelineItem[] = [
  { period: 'Morning', detail: 'MCP distribution strategy document created and refined.' },
  {
    period: 'Afternoon',
    detail: 'Oxford interview guide created/refined; Four-Score Intelligence Policy updated with collaborators.'
  },
  {
    period: 'Evening',
    detail: 'Customer/product messaging clarified around Nys, ChatAndBuild, ChatChat and MCP; legal/readiness checks advanced.'
  }
];

export const footerText =
  'Compiled from today’s founder conversation, accessible operating messages and document activity. Some items reflect strategic direction or team activity rather than completed product functionality. Verify externally used claims against the source of truth.';
