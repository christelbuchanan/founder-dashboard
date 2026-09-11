export type WorkstreamStatus = 'Advanced' | 'Clarified' | 'Proposed' | 'In progress';
export type ImpactLevel = 'Critical' | 'High' | 'Medium';

export interface Workstream {
  id: string;
  title: string;
  status: WorkstreamStatus;
  impact: ImpactLevel;
  summary: string;
  outcome: string;
  nextAction: string;
  confidence: string;
  evidenceUrl?: string;
  truthBoundary?: string;
  sourceLabel?: string;
  isManual?: boolean;
}

export interface OpenLoop {
  id: string;
  text: string;
  owner: string;
  urgency: 'Critical' | 'High';
}

export interface PriorityItem {
  id: string;
  text: string;
}

export interface TimelineItem {
  period: 'Morning' | 'Afternoon' | 'Evening';
  detail: string;
}
