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
  /** "Role · Year" */
  meta: string;
  /** Tech used; the first few show, the rest sit behind a "+N more" toggle. */
  tags: string[];
  /** Live site, shown as "Visit site". */
  url?: string;
  /** Public repo, shown as "View code". */
  repo?: string;
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
  url?: string;
  image?: Screen & { width: number; height: number };
}

const email = 'tbako1234@gmail.com';

export const profile = {
  name: 'Tyler Bakogeorge',
  title: 'Full Stack Developer',
  headline: ['Full Stack Developer', 'building products people actually use'],
  intro:
    'I’ve tested software as a user and built it as a developer, so I notice what’s confusing or broken early. I like shipping full-stack projects that feel clear and reliable to use, from the first idea through to something people can actually open and try.',
  portrait: { src: '/images/portrait.svg', alt: 'Portrait of Tyler Bakogeorge' },
  cv: '/cv.pdf',
  footerPrompt: 'Want to build something together?',
  email,
  links: {
    email: `mailto:${email}`,
    github: 'https://github.com/TylerBako',
    linkedin: 'https://www.linkedin.com/in/tyler-bakogeorge-aaa762261',
  },
};

export const contact = {
  /**
   * Web3Forms access key (free; request one with your email at https://web3forms.com).
   * While this is empty, "Send" opens the visitor's email app with the message filled in.
   * The key is designed to be public, so it is safe to commit.
   */
  web3formsKey: '',
  subject: 'New message from your portfolio',
};

/** Show or hide the "Role · Year" line on each project. */
export const showMeta = true;

function screensFor(id: string, name: string, count = 3): Screen[] {
  return Array.from({ length: count }, (_, i) => ({
    src: `/images/${id}/screen-${i + 1}.svg`,
    alt: `${name} screen ${i + 1}`,
  }));
}

/** Placeholder project; pass real fields in `details` as they arrive. */
function project(id: string, num: string, name: string, details: Partial<Project> = {}): Project {
  return {
    id,
    num,
    name,
    blurb: `A sentence or two about what ${name} is, who it’s for, and the part you built.`,
    meta: 'Role · Year',
    tags: [],
    cover: { src: `/images/${id}/cover.svg`, alt: `${name} screenshot` },
    screens: screensFor(id, name),
    ...details,
  };
}

const starinHome: Screen = {
  src: '/images/starin/home.png',
  alt: 'StarIn home page: “Your Gateway to the German Job Market” with a visa route, preparation progress and an Angel mentor card',
};

export const projects: Project[] = [
  project('starin', '01', 'StarIn', {
    blurb:
      'StarIn helps Brazilian professionals find visa routes and jobs in the German market, with mentorship, job-fit scoring, CV and cover letter support. Built with a team over a three-week sprint for a live client. I owned the authentication flow, job-fit tool and application tracker.',
    meta: 'Full Stack Engineer · 2026',
    tags: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Supabase', 'Prisma', 'Zod', 'Claude', 'Git', 'Fly.io'],
    url: 'https://starin.fly.dev/',
    cover: starinHome,
    screens: [
      starinHome,
      {
        src: '/images/starin/job-application.png',
        alt: 'StarIn job application page: a job-posting URL scored at 84% fit potential, above an application tracker listing companies, fit scores and statuses',
      },
      {
        src: '/images/starin/job-fit-form.png',
        alt: 'StarIn job-fit form asking for the job posting URL, company, role and full description before analysing fit',
      },
    ],
  }),
  project('outreach', '02', 'Outreach', {
    blurb:
      'Outreach is a social platform where people struggling with mental health can post, share and support one another. AI-powered moderation helps keep the community safe by spotting posts that suggest someone is in distress and pointing them to support resources. I designed and built it solo, from the feed to the moderation pipeline.',
    meta: 'Full Stack Engineer · 2026',
    tags: ['TypeScript', 'React', 'Claude API', 'Node.js', 'PostgreSQL', 'Express', 'Prisma', 'Tailwind CSS', 'Vite'],
    url: 'https://outreach-client-woad.vercel.app/',
  }),
  project('callimations', '03', 'Callimations', {
    blurb:
      'Callimations is a portfolio site for a 2D animator and digital artist. It brings his showreel, digital art and a music video he animated for a major UK artist together in one place. I designed and built it for him as a client project, keeping the focus on the work rather than the site around it.',
    meta: 'Web Developer · 2025',
    tags: ['HTML5', 'CSS', 'PHP'],
  }),
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
  { group: 'Languages', items: ['TypeScript', 'JavaScript', 'HTML5', 'CSS', 'PHP'] },
  { group: 'Frontend', items: ['React', 'Next.js', 'Vite', 'Tailwind CSS', 'shadcn/ui'] },
  { group: 'Backend', items: ['Node.js', 'Express', 'RESTful APIs', 'Claude API', 'Zod'] },
  { group: 'Data', items: ['PostgreSQL', 'MongoDB', 'Prisma', 'Supabase'] },
  { group: 'Tooling', items: ['Git', 'GitHub', 'Vercel', 'Fly.io'] },
];

export const education: EducationItem[] = [
  {
    school: 'Arol.dev at Norrsken House',
    degree: 'Full-Stack Engineering',
    years: '2026',
    url: 'https://www.arol.dev/',
    image: {
      src: '/images/education/arol-dev.jpg',
      alt: 'Students working at their desks in the Arol.dev classroom at Norrsken House, Barcelona',
      width: 1024,
      height: 683,
    },
  },
];
