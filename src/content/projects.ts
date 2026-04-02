export type Project = {
  name: string;
  description: string;
  stack: string[];
  link?: string;
  status?: 'live' | 'wip' | 'internal';
};

export const projects: Project[] = [
  {
    name: 'BBX Toolkit',
    description:
      'SQLite-backed bug bounty CLI for artifact ingestion, triage scoring, tagging, presets, and export workflows.',
    stack: ['Python', 'SQLite', 'CLI'],
    link: 'https://github.com/tperich/bbx',
    status: 'live',
  },
  {
    name: 'ZeroTier Device Monitor',
    description:
      'React dashboard + proxy API for monitoring ZeroTier members and online status across networks.',
    stack: ['React', 'Vite', 'Node.js', 'Express'],
    status: 'wip',
  },
  {
    name: 'Personal Ops Automation',
    description:
      'Windows automation stack with watchdogs, remote evidence capture, and low-noise background task orchestration.',
    stack: ['PowerShell', 'Task Scheduler', 'Telegram'],
    status: 'internal',
  },
];
