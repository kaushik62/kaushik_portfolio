import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Github,
  ExternalLink,
  ArrowUpRight,
  FolderCode,
} from "lucide-react";

const projects = [
  {
    title: "Eventify",
    subtitle: "Event Booking & Management Platform",
    description:
      "A full-stack event booking platform where users discover and book events, organizers manage listings, and administrators oversee platform activity. Includes secure authentication, role-based access control, online payments, and event management workflows.",
    image:
      "https://res.cloudinary.com/dwvwvzwcv/image/upload/v1788878878/event_booking_m7qhys.png",
    imageAlt: "Eventify event booking platform interface",
    tech: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Tailwind CSS",
      "LangGraph",
      "Agentic AI",
      "Razorpay",
      "Groq API",
    ],
    github: "https://github.com/kaushik62/eventify",
    live: "https://eventify-sigma-dusky.vercel.app/",
    accent: "teal",
    number: "01",
  },
  {
    title: "Short Link",
    subtitle: "URL Shortener & Link Management",
    description:
      "A URL shortening platform that transforms long URLs into compact, shareable links. Implements secure authentication, fast redirection, PostgreSQL-backed link storage, and Redis caching to improve retrieval performance and reduce repeated database queries.",
    image:
      "https://res.cloudinary.com/dwvwvzwcv/image/upload/v1790802203/short_link_gszm7l.png",
    imageAlt: "Short Link URL management dashboard",
    tech: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Redis",
      "JWT",
      "Docker",
    ],
    github: "https://github.com/kaushik62/shortlink",
    live: "https://shortlink-alpha-eight.vercel.app/",
    accent: "blue",
    number: "02",
  },
  {
    title: "Signal Desk AI",
    subtitle: "Lead Management & Sales Automation",
    description:
      "A business automation platform that helps teams manage leads and streamline customer follow-ups. Features AI-generated personalized emails, background job processing with BullMQ and Redis, and a dashboard for tracking lead activity and sales workflows.",
    image:
      "https://res.cloudinary.com/dwvwvzwcv/image/upload/v1790802103/Signal_Desk_AI_r2kgvy.png",
    imageAlt: "Signal Desk AI lead management dashboard",
    tech: [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Redis",
      "BullMQ",
      "Groq API",
      "Docker",
    ],
    github: "https://github.com/kaushik62/signal-desk-ai",
    live: "https://signal-desk-ai-taupe.vercel.app/",
    accent: "violet",
    number: "03",
  },
];

const accentStyles = {
  teal: {
    label: "text-teal-600 dark:text-teal-400",
    border: "hover:border-teal-500/40",
    badge:
      "border-teal-500/15 bg-teal-500/[0.04] text-teal-700 dark:text-teal-300",
    dot: "bg-teal-500",
  },
  blue: {
    label: "text-blue-600 dark:text-blue-400",
    border: "hover:border-blue-500/40",
    badge:
      "border-blue-500/15 bg-blue-500/[0.04] text-blue-700 dark:text-blue-300",
    dot: "bg-blue-500",
  },
  violet: {
    label: "text-violet-600 dark:text-violet-400",
    border: "hover:border-violet-500/40",
    badge:
      "border-violet-500/15 bg-violet-500/[0.04] text-violet-700 dark:text-violet-300",
    dot: "bg-violet-500",
  },
};

const Projects = () => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-80px",
  });

  return (
    <section
      id="projects"
      ref={ref}
      className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <header className="mb-12 sm:mb-16">
            <div className="mb-3 flex items-center gap-3">
              <span className="font-mono text-sm text-primary">04</span>
              <span className="h-px w-8 bg-primary/50" />
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Selected Work
              </span>
            </div>

            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Projects<span className="text-primary">.</span>
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
              A selection of applications I've built, combining frontend
              engineering, backend architecture, data management, and
              practical automation.
            </p>
          </header>

          <div className="space-y-6 sm:space-y-8">
            {projects.map((project, index) => {
              const styles = accentStyles[project.accent];

              return (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={
                    isInView
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 24 }
                  }
                  transition={{
                    duration: 0.55,
                    delay: 0.12 * index,
                    ease: "easeOut",
                  }}
                  className={`group overflow-hidden rounded-2xl border border-border/70 bg-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/[0.03] dark:hover:shadow-black/10 ${styles.border}`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} live demo`}
                      className={`relative block overflow-hidden bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary ${index % 2 === 1
                        ? "lg:order-2"
                        : "lg:order-1"
                        }`}
                    >
                      <div className="relative aspect-[16/10] h-full min-h-[220px] overflow-hidden lg:min-h-[340px]">
                        <img
                          src={project.image}
                          alt={project.imageAlt}
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.025]"
                        />

                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-30" />

                        <span className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-lg border border-white/20 bg-black/55 px-3 py-2 text-xs font-medium text-white opacity-100 backdrop-blur-md transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100">
                          View Project
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </span>
                      </div>
                    </a>

                    <div
                      className={`flex flex-col justify-center gap-5 p-5 sm:p-7 lg:p-9 ${index % 2 === 1
                        ? "lg:order-1"
                        : "lg:order-2"
                        }`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span
                          className={`font-mono text-xs font-medium ${styles.label}`}
                        >
                          PROJECT / {project.number}
                        </span>

                        <FolderCode
                          className="h-4 w-4 text-muted-foreground/60"
                          strokeWidth={1.7}
                        />
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold tracking-tight text-foreground transition-colors duration-200 group-hover:text-primary sm:text-2xl">
                          {project.title}
                        </h3>

                        <p className="mt-1.5 text-sm font-medium text-muted-foreground">
                          {project.subtitle}
                        </p>
                      </div>

                      <p className="text-sm leading-7 text-muted-foreground">
                        {project.description}
                      </p>

                      <div>
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                          Technologies
                        </p>

                        <ul className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <li
                              key={tech}
                              className={`rounded-lg border px-2.5 py-1.5 text-xs font-medium ${styles.badge}`}
                            >
                              {tech}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap items-center gap-3 border-t border-border/70 pt-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.title} source code on GitHub`}
                          className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-border px-3.5 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                        >
                          <Github className="h-4 w-4" />
                          Source Code
                        </a>

                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open ${project.title} live demo`}
                          className="inline-flex min-h-10 items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                        >
                          Live Demo
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;