import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink, Sparkles } from "lucide-react";

const projects = [
  {
    title: "Eventify",
    subtitle: "AI-Powered Event Booking Platform",
    description:
      "An AI-powered event booking platform that allows users to discover and book events, organizers to create and manage events, and admins to oversee the platform. Built with a full-stack architecture featuring secure authentication, role-based access control, and online payments.",
    image:
      "https://res.cloudinary.com/dwvwvzwcv/image/upload/v1788878878/event_booking_m7qhys.png",
    tech: [
      "Next.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "TypeScript",
      "Tailwind CSS",
      "Razorpay",
    ],
    github: "https://github.com/kaushik62/eventify",
    live: "https://eventify-sigma-dusky.vercel.app/",
    accent: "teal",
  },

  {
    title: "Short Link",
    subtitle: "URL Shortener & Link Management Platform",
    description:
      "A full-stack URL shortening platform that converts long URLs into compact, shareable links. Features secure user authentication, fast redirection, and Redis-based caching to optimize link retrieval and reduce database queries. Built with PostgreSQL, Redis, and Docker for efficient and scalable link management.",
    image: "https://res.cloudinary.com/dwvwvzwcv/image/upload/v1790802203/short_link_gszm7l.png",
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
  },

  {
    title: "Signal Desk AI",
    subtitle: "AI-Powered Lead Management & Sales Automation",
    description:
      "An AI-powered sales automation platform that helps businesses manage leads, streamline follow-ups, and automate customer communication. Features AI-generated personalized follow-up emails, background email processing with BullMQ and Redis, and an interactive dashboard to track lead activity. Built with PostgreSQL, Node.js, and Docker for reliable and scalable business automation.",
    image: "https://res.cloudinary.com/dwvwvzwcv/image/upload/v1790802103/Signal_Desk_AI_r2kgvy.png",
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
    accent: "emerald",
  },  
];

const accentMap: Record<
  string,
  { border: string; badge: string; glow: string; tag: string }
> = {
  teal: {
    border: "group-hover:border-teal-400/50",
    badge: "bg-teal-400/10 text-teal-300 border-teal-400/20",
    glow: "group-hover:shadow-[0_0_50px_-10px_rgba(45,212,191,0.35)]",
    tag: "from-teal-400/20 to-teal-400/5",
  },
  blue: {
    border: "group-hover:border-blue-400/50",
    badge: "bg-blue-400/10 text-blue-300 border-blue-400/20",
    glow: "group-hover:shadow-[0_0_50px_-10px_rgba(96,165,250,0.35)]",
    tag: "from-blue-400/20 to-blue-400/5",
  },
  emerald: {
    border: "group-hover:border-emerald-400/50",
    badge: "bg-emerald-400/10 text-emerald-300 border-emerald-400/20",
    glow: "group-hover:shadow-[0_0_50px_-10px_rgba(52,211,153,0.35)]",
    tag: "from-emerald-400/20 to-emerald-400/5",
  },
  indigo: {
    border: "group-hover:border-indigo-400/50",
    badge: "bg-indigo-400/10 text-indigo-300 border-indigo-400/20",
    glow: "group-hover:shadow-[0_0_50px_-10px_rgba(99,102,241,0.35)]",
    tag: "from-indigo-400/20 to-indigo-400/5",
  },
  violet: {
    border: "group-hover:border-violet-400/50",
    badge: "bg-violet-400/10 text-violet-300 border-violet-400/20",
    glow: "group-hover:shadow-[0_0_50px_-10px_rgba(167,139,250,0.35)]",
    tag: "from-violet-400/20 to-violet-400/5",
  },
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Header */}
          <header className="mb-16">
            <h2 className="section-heading flex items-center gap-3 mb-4">
              <span className="text-primary font-mono text-base sm:text-lg">
                04.
              </span>
              <span className="text-xl sm:text-2xl md:text-3xl">Projects</span>
              <span className="hidden sm:block h-px bg-gradient-to-r from-border to-transparent flex-1 max-w-xs" />
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl">
              Selected projects that demonstrate my approach to building
              scalable, well-structured, and user-focused applications.
            </p>
          </header>

          {/* Projects Grid */}
          <div className="space-y-8">
            {projects.map((project, index) => {
              const accent = accentMap[project.accent] || accentMap.teal;
              return (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 32 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    delay: index * 0.15,
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`group rounded-2xl border border-border bg-card/40 backdrop-blur-sm overflow-hidden
                    ${accent.border} ${accent.glow}
                    transition-all duration-400`}
                >
                  <div
                    className={`grid lg:grid-cols-2 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
                  >
                    {/* Image */}
                    <div
                      className={`relative overflow-hidden ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
                    >
                      <div className="overflow-hidden aspect-video lg:aspect-auto lg:h-full min-h-[220px]">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                        />
                        {/* Overlay gradient */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-r ${index % 2 === 1 ? "lg:from-transparent lg:to-card/60" : "lg:from-card/60 lg:to-transparent"} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div
                      className={`flex flex-col justify-center p-6 sm:p-8 lg:p-10 space-y-4 ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}
                    >
                      {/* Featured badge */}
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-primary" />
                        <span className="text-primary font-mono text-xs uppercase tracking-wider">
                          Featured Project
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {project.title}
                        <span className="block text-sm font-normal text-muted-foreground mt-1">
                          {project.subtitle}
                        </span>
                      </h3>

                      {/* Description card */}
                      <div className="rounded-xl bg-background/60 border border-border/50 p-4">
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Tech stack */}
                      <ul className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <li
                            key={tech}
                            className={`px-2.5 py-1 rounded-lg border text-xs font-mono transition-all duration-200 ${accent.badge}`}
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>

                      {/* Links */}
                      <div className="flex items-center gap-4 pt-1">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} GitHub`}
                          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200 text-sm font-medium"
                        >
                          <Github size={18} />
                          <span>Source</span>
                        </a>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} Live Demo`}
                          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200 text-sm font-medium"
                        >
                          <ExternalLink size={18} />
                          <span>Live Demo</span>
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
