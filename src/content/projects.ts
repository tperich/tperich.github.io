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
      'SQLite-backed bug bounty CLI for artifact ingestion, triage scoring, tagging, presets, and export workflows focused on faster signal extraction.',
    stack: ['Python', 'SQLite', 'CLI'],
    link: 'https://github.com/tperich/bbx',
    status: 'live',
  },
  {
    name: 'ZeroTier Device Monitor',
    description:
      'React dashboard with Node proxy for monitoring ZeroTier members and online state across networks, designed for reliable remote ops visibility.',
    stack: ['React', 'Vite', 'Node.js', 'Express'],
    status: 'wip',
  },
  {
    name: 'Mobile CI/CD Release Factory',
    description:
      'Production mobile release pipeline using Fastlane + Jenkins + automated tests (unit/integration/E2E) that helped ship and stabilize app-store releases.',
    stack: ['React Native', 'Fastlane', 'Jenkins', 'Detox'],
    status: 'internal',
  },
];
