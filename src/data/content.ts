// All page content lives here. Components only loop over it.
// Copy marked "placeholder" in the design handoff should be replaced with real content.

export interface Screen {
  src: string;
  alt: string;
}

export interface Project {
  id: string;
  num: string;
  name: string;
  blurb: string;
  meta: string;
  cover: Screen;
  screens: Screen[];
}

export interface ApproachItem {
  num: string;
  title: string;
  body: string;
}

export interface CapabilityGroup {
  group: string;
  items: string[];
}

export interface EducationItem {
  school: string;
  degree: string;
  years: string;
}

export const profile = {
  name: 'Tyler Bakogeorge',
  title: 'Software engineer',
  headline: ['Hi, I’m Tyler.', 'I build software for people.'],
  intro:
    'I’m a software engineer who likes turning rough ideas into things that feel good to use. Below are a few projects I’ve poured a lot of late nights into.',
  portrait: { src: '/images/portrait.svg', alt: 'Portrait of Tyler Bakogeorge' },
  cv: '/cv.pdf',
  footerPrompt: 'Want to build something together?',
  // Placeholders: replace with real links.
  links: {
    email: 'mailto:hello@example.com',
    github: 'https://github.com/your-handle',
    linkedin: 'https://www.linkedin.com/in/your-handle',
  },
};

/** Show or hide the "Role · Stack · Year" line on each project. */
export const showMeta = true;

function screensFor(id: string, name: string, count = 3): Screen[] {
  return Array.from({ length: count }, (_, i) => ({
    src: `/images/${id}/screen-${i + 1}.svg`,
    alt: `${name} screen ${i + 1}`,
  }));
}

function project(id: string, num: string, name: string): Project {
  return {
    id,
    num,
    name,
    blurb: `A sentence or two about what ${name} is, who it’s for, and the part you built.`,
    meta: 'Role · Stack · Year',
    cover: { src: `/images/${id}/cover.svg`, alt: `${name} screenshot` },
    screens: screensFor(id, name),
  };
}

export const projects: Project[] = [
  project('starin', '01', 'StarIn'),
  project('outreach', '02', 'Outreach'),
  project('callimations', '03', 'Callimations'),
];

export const approach: ApproachItem[] = [
  {
    num: '01',
    title: 'Start with the person using it',
    body: 'Before I write code I try to understand who it’s for and what would make their day easier. The rest of the decisions get simpler from there.',
  },
  {
    num: '02',
    title: 'Ship small, learn fast',
    body: 'I like getting a working version in front of people early, then improving it in small, steady steps instead of one big reveal.',
  },
  {
    num: '03',
    title: 'Leave it better than I found it',
    body: 'Readable code, sensible tests and a short note for whoever comes next. I want the things I build to be easy to keep building on.',
  },
];

export const capabilities: CapabilityGroup[] = [
  { group: 'Languages', items: ['TypeScript', 'JavaScript', 'Python', 'SQL'] },
  { group: 'Frontend', items: ['React', 'Next.js', 'CSS / animation'] },
  { group: 'Backend', items: ['Node.js', 'REST & GraphQL APIs', 'PostgreSQL'] },
  { group: 'Tooling', items: ['Git', 'CI/CD', 'Cloud deploys', 'Testing'] },
];

export const education: EducationItem[] = [
  { school: 'University name', degree: 'B.S. in Computer Science', years: 'Year – Year' },
];
