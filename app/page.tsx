import React from 'react';
import { Mail, Code2, Cpu, Terminal, Server, Database, Wrench, Briefcase, MapPin, Play } from 'lucide-react';
import CopyEmailButton from './components/CopyEmailButton';
import NavLinks from './components/NavLinks';

// Define typing for project data matching the STAR methodology
interface Project {
  title: string;
  description: string;
  situation: string;
  task: string;
  action: string;
  result: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

interface Role {
  title: string;
  project: string;
  company: string;
  location: string;
  dates: string;
  highlights: string[];
}

const GITHUB_URL = "https://github.com/marinetti-daniel";
const LINKEDIN_URL = "https://linkedin.com/in/daniel-marinetti";
const EMAIL = "marinetti.daniel@gmail.com";

const experience: Role[] = [
  {
    title: "Senior Software Engineer",
    project: "CAMPsight",
    company: "CAMP Physics / Great Lakes Consulting Services, Inc.",
    location: "Ann Arbor, MI",
    dates: "Feb 2026 - Apr 2026",
    highlights: [
      "Migrated a legacy .NET Framework multi-module codebase to a modern Go and HTMX stack, bypassing a costly .NET Core migration to leverage Go's reliability, versatility, and rapid feature deployment.",
      "Integrated HTMX for frontend interactions across 12+ views to replace heavy JavaScript/AJAX bundles, centralizing event triggers in HTML, simplifying debugging, and cutting bundle size by 35%.",
      "Leveraged LLM-assisted development workflows (Claude Code) to accelerate implementation across 15+ features, enforce architectural patterns, and generate consistent test scaffolding.",
      "Established a comprehensive testing strategy (Unit, E2E, BDD, PBT) achieving 95% test coverage to minimize regression risks and increase deployment confidence.",
      "Accelerated developer onboarding time by 40% for incoming engineers by generating comprehensive API documentation and enforcing package-level code comments."
    ]
  },
  {
    title: "Lead Front End Developer",
    project: "Net Revenue Forecast",
    company: "Trinity Health / Great Lakes Consulting Services, Inc.",
    location: "Ann Arbor, MI",
    dates: "Feb 2021 - Jan 2026",
    highlights: [
      "Served as sole frontend owner for a customer-facing financial forecasting app used by 30+ finance stakeholders, utilizing TypeScript and React to improve revenue projection accuracy.",
      "Modernized the frontend toolchain, cutting dependency count by 25% while improving build stability and security.",
      "Architected an internal API and client-facing auditing page providing real-time validation and edit verification, reducing data entry validation errors by 40%.",
      "Developed 20+ reusable analytics UI components (filters, tables, summary/detail views) with configurable metrics to drive a 30% increase in feature adoption.",
      "Directed technical client collaboration by leading weekly knowledge transfer sessions, mentoring 3 client engineers, and authoring comprehensive handoff documentation."
    ]
  },
  {
    title: "Lead Full Stack Developer",
    project: "Medicare Bad Debt",
    company: "Trinity Health / Great Lakes Consulting Services, Inc.",
    location: "Ann Arbor, MI",
    dates: "May 2020 - Feb 2021",
    highlights: [
      "Designed and delivered a high-performance full-stack application, managing end-to-end architecture, implementation, testing, and production deployment.",
      "Boosted backend performance and reduced load times by 50% using targeted MongoDB indexing, Python multiprocessing for large queries, and API-level optimizations.",
      "Deployed production APIs using Django alongside a background data loader that ingested and normalized 100k+ source rows daily into MongoDB, exposing multi-call progress update endpoints to the UI.",
      "Facilitated weekly technical workshops and mentored client teams on cloud architecture and best practices to ensure a 100% successful handoff."
    ]
  }
];

const projects: Project[] = [
  {
    title: "CAMPsight: .NET to Go + HTMX Modernization",
    description: "A rewrite of a legacy multi-module .NET Framework application into a modern, cross-platform Go and HTMX stack for CAMP Physics.",
    situation: "The application ran on an old version of the .NET Framework that only ran on Windows. Moving it to cross-platform .NET Core would have been a large, costly migration, and the frontend depended on heavy JavaScript/AJAX bundles that were hard to debug.",
    task: "Evaluate modern, cross-platform replacements through competing prototypes, then lead the full migration to the chosen stack without new regressions.",
    action: "Built a Next.js prototype while a teammate prototyped Go + HTMX. The principal consultant selected Go for its reliability, versatility, large ecosystem, and broad industry backing, and I then owned the migration end to end. Replaced JavaScript/AJAX interactions with HTMX across 12+ views, so each interaction starts at the HTML element that triggers it, moving logic and potential bugs to the backend. Used Claude Code workflows across 15+ features to enforce architectural patterns, and established a Unit, E2E, BDD, and PBT testing strategy.",
    result: "Freed the platform from Windows-only hosting, cut bundle size by 35% while shrinking and decluttering the frontend codebase, made debugging faster, reached 95% test coverage, and cut developer onboarding time by 40%.",
    tags: ["Go", "HTMX", "Cross-Platform", "Claude Code", "E2E / BDD / PBT"]
  },
  {
    title: "Excel Importer: Self-Serve Data Onboarding",
    description: "A high-capacity Excel importer for the Net Revenue Forecast app (Trinity Health) that lets users onboard thousands of rows of data on their own.",
    situation: "Onboarding new data into the forecasting app meant a full day of manual data entry, creating support touchpoints and rollout friction.",
    task: "Build a self-serve importer that could handle thousands of rows while guaranteeing data quality and idempotency.",
    action: "Built a frontend that parsed and normalized thousands of rows, called validation APIs to catch duplicates and errors before persistence, and invoked a row processor to save clean data. Surfaced row-level error UI and generated downloadable failure reports.",
    result: "Reduced a full day of manual data entry to a single automated upload, significantly reducing support touchpoints and rollout friction.",
    tags: ["TypeScript", "React", "REST APIs", "Data Validation"]
  },
  {
    title: "Data Loader: Real-Time Ingestion Progress Tracking",
    description: "A user-facing control and progress view for the background data loader in the Medicare Bad Debt application (Trinity Health).",
    situation: "The application loaded and normalized 100k+ source rows daily through a long-running background process, and users had no visibility into what it was doing or whether a load was already running.",
    task: "Build a UI that lets users start a data load and follow its progress live, while keeping a record of every run.",
    action: "Had the loader write a status log file at key steps of each run. Built the UI with Django and Dash, polling progress endpoints on a short interval that read the active process's log and returned rendered HTML components, so anyone opening the page could pick up a run already in progress.",
    result: "Gave users real-time visibility into loads covering 100k+ rows daily, and left a full history of every run that the team could review later.",
    tags: ["Python", "Django", "Dash", "MongoDB", "Polling"]
  },
  {
    title: "Wordle: Daily Word Game",
    description: "A playable Wordle clone with a shared daily word, an unlimited practice mode, and saved stats. Built as its own Next.js app and served on this site.",
    situation: "I wanted a small, fully working app on my portfolio that visitors can actually play, rather than only read about.",
    task: "Build a faithful Wordle clone that runs entirely in the browser and plugs into this site without merging the two codebases.",
    action: "Wrote the game rules as small pure TypeScript functions (two-pass scoring for duplicate letters, a date-based daily word so everyone gets the same puzzle with no server) and covered them with table-driven Vitest tests. Saved progress and stats in localStorage. Deployed it as a separate Next.js app under a /wordle base path, and used a Next.js rewrite so this portfolio serves it at /wordle.",
    result: "A playable game on the portfolio that lives in its own repo and deploys independently, so either app can change without touching the other.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vitest", "Multi-Zones"],
    githubUrl: "https://github.com/marinetti-daniel/wordle",
    liveUrl: "/wordle"
  }
];

const skillCategories = [
  {
    name: "Languages",
    icon: <Terminal className="w-5 h-5 text-indigo-400" />,
    skills: ["TypeScript", "Python", "Golang", "JavaScript", "HTML/CSS"]
  },
  {
    name: "Frontend",
    icon: <Code2 className="w-5 h-5 text-indigo-400" />,
    skills: ["React", "HTMX", "Dash", "Frontend Modernization & Tooling"]
  },
  {
    name: "Backend & APIs",
    icon: <Server className="w-5 h-5 text-indigo-400" />,
    skills: ["Node.js", "Django", "REST/GraphQL API Design & Integration"]
  },
  {
    name: "Databases & Caching",
    icon: <Database className="w-5 h-5 text-indigo-400" />,
    skills: ["PostgreSQL", "MongoDB", "Redis"]
  },
  {
    name: "DevOps & Testing",
    icon: <Cpu className="w-5 h-5 text-indigo-400" />,
    skills: ["Docker / Containerization", "Test-Driven Development", "TDD, BDD, E2E, PBT"]
  },
  {
    name: "Developer Tools",
    icon: <Wrench className="w-5 h-5 text-indigo-400" />,
    skills: ["Git", "Claude Code"]
  }
];

export default function Portfolio() {
  return (
    <div className="min-h-screen overflow-x-clip bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Dynamic Background Grid Mesh */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-slate-900 bg-slate-950/70 backdrop-blur-md">
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-lg font-bold tracking-tight whitespace-nowrap bg-linear-to-r stream-text from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            &lt;DanielMarinetti /&gt;
          </a>
          <NavLinks />
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6 pt-24 pb-32 relative z-10">
        {/* Hero Section */}
        <section className="max-w-3xl mb-32">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-xs font-semibold text-indigo-300 mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available immediately for full-stack &amp; frontend roles
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
            Turning manual workflows into self-serve automation with{" "}
            <span className="bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              TypeScript &amp; React
            </span>
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed mb-4 max-w-2xl">
            Hi, I&apos;m <span className="text-slate-100 font-semibold">Daniel Marinetti</span>, a Senior Software Engineer specializing in TypeScript, React, and full-stack architecture. I lead frontend modernizations, boost test coverage, and deliver high-performance applications that drive business impact.
          </p>
          <p className="flex items-center gap-1.5 text-sm text-slate-500 mb-8">
            <MapPin className="w-4 h-4" /> South Lyon, MI
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <a href="#experience" className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-lg transition-all shadow-lg shadow-indigo-600/20 active:scale-[0.98]">
              View My Experience
            </a>
            <div className="flex items-center gap-2 ml-2">
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="p-2.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-900 transition-colors" title="GitHub Profile">
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 fill-current"
                  xmlns="http://w3.org"
                >
                  <title>GitHub</title>
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="p-2.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-900 transition-colors" title="LinkedIn Profile">
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 fill-current"
                  xmlns="http://w3.org"
                >
                  <title>LinkedIn</title>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"/>
                </svg>
              </a>
              <a href={`mailto:${EMAIL}`} className="p-2.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-900 transition-colors" title="Email Direct">
                <Mail className="w-5 h-5" />
              </a>
              <CopyEmailButton email={EMAIL} />
            </div>
          </div>
        </section>

        {/* Work Experience Section */}
        <section id="experience" className="mb-32 scroll-mt-24">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-white mb-2">Work Experience</h2>
            <p className="text-slate-400">Six years of leading frontend, full-stack, and modernization work for healthcare and physics clients.</p>
          </div>

          <ol className="relative border-l border-slate-800 ml-3 space-y-12">
            {experience.map((role, idx) => (
              <li key={idx} className="pl-8 relative">
                <span className="absolute -left-4.25 top-1 flex items-center justify-center w-8 h-8 rounded-full bg-slate-950 border border-indigo-500/30">
                  <Briefcase className="w-4 h-4 text-indigo-400" />
                </span>
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-1 mb-1">
                  <h3 className="text-xl font-bold text-white">
                    {role.title}, <span className="text-indigo-400">{role.project}</span>
                  </h3>
                  <span className="text-sm font-medium text-slate-500 shrink-0">{role.dates}</span>
                </div>
                <p className="text-sm text-slate-400 mb-4">{role.company} · {role.location}</p>
                <ul className="space-y-2">
                  {role.highlights.map((item, hIdx) => (
                    <li key={hIdx} className="text-sm text-slate-300 leading-relaxed flex gap-3">
                      <span className="w-1.5 h-1.5 mt-2 rounded-full bg-indigo-500/50 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>

        {/* STAR Projects Section */}
        <section id="projects" className="mb-32 scroll-mt-24">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-white mb-2">Featured Engineering Projects</h2>
            <p className="text-slate-400">Production applications built to solve real business problems, broken down using the STAR methodology.</p>
          </div>

          <div className="grid grid-cols-1 gap-10">
            {projects.map((project, idx) => (
              <div key={idx} className="group relative border border-slate-900 bg-slate-900/20 rounded-2xl p-8 hover:border-slate-800 transition-all backdrop-blur-sm overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl group-hover:bg-indigo-500/10 transition-all pointer-events-none" />

                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors mb-2">{project.title}</h3>
                  <p className="text-slate-400 max-w-3xl text-base">{project.description}</p>
                </div>

                {/* STAR Breakdown Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-slate-900 pt-6 text-sm">
                  <div className="space-y-3">
                    <p className="leading-relaxed"><strong className="text-slate-300 uppercase tracking-wider text-[11px] block mb-0.5">Situation</strong>{project.situation}</p>
                    <p className="leading-relaxed"><strong className="text-slate-300 uppercase tracking-wider text-[11px] block mb-0.5">Task</strong>{project.task}</p>
                  </div>
                  <div className="space-y-3">
                    <p className="leading-relaxed"><strong className="text-slate-300 uppercase tracking-wider text-[11px] block mb-0.5">Action</strong>{project.action}</p>
                    <p className="leading-relaxed"><strong className="text-emerald-400 uppercase tracking-wider text-[11px] block mb-0.5">Result</strong><span className="text-slate-200 font-medium bg-emerald-500/5 border border-emerald-500/10 px-2 py-0.5 rounded-md inline-block mt-0.5">{project.result}</span></p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-400">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Only shown for projects that have a live demo or public repo. */}
                {(project.liveUrl || project.githubUrl) && (
                  <div className="flex flex-wrap gap-3 mt-6">
                    {project.liveUrl && (
                      <a href={project.liveUrl} className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded-lg transition-all active:scale-[0.98]">
                        <Play className="w-4 h-4" /> Play
                      </a>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white text-sm font-medium rounded-lg transition-all active:scale-[0.98]">
                        <Code2 className="w-4 h-4" /> Source
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Technical Stack Section */}
        <section id="skills" className="mb-32 scroll-mt-24">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-white mb-2">Technical Ecosystem</h2>
            <p className="text-slate-400">Languages, frameworks, and tools I use to build and ship reliable products.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, idx) => (
              <div key={idx} className="border border-slate-900 bg-slate-900/10 rounded-xl p-6 hover:border-slate-800/80 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-indigo-500/10 border border-indigo-500/20 rounded-lg">
                    {category.icon}
                  </div>
                  <h3 className="font-bold text-white text-base">{category.name}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="text-sm text-slate-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/50" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Simple CTA Footer Section */}
        <section id="contact" className="border-t border-slate-900 pt-16 text-center max-w-xl mx-auto scroll-mt-24">
          <h2 className="text-3xl font-bold tracking-tight text-white mb-4">Let&apos;s Build Something Impactful</h2>
          <p className="text-slate-400 mb-8">I&apos;m available to start immediately and open to full-stack and frontend software engineering opportunities.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="inline-flex items-center max-w-full bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-lg transition-all shadow-md">
              <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 min-w-0 pl-4 sm:pl-6 pr-3 py-3 text-sm sm:text-base text-white font-medium rounded-l-lg hover:bg-slate-800 transition-all active:scale-[0.98] break-all">
                <Mail className="w-4 h-4" /> {EMAIL}
              </a>
              <span className="w-px h-6 bg-slate-800" />
              <div className="px-1">
                <CopyEmailButton email={EMAIL} hoverBg="hover:bg-slate-800" />
              </div>
            </div>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-white font-medium rounded-lg transition-all shadow-md active:scale-[0.98]">
              LinkedIn
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
