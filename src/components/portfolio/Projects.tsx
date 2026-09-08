import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink, Sparkles } from "lucide-react";

const projects = [
  {
    title: "Eventify",
    subtitle: "AI-Powered Event Booking Platform",
    description:
      "An AI-powered event booking platform that allows users to discover and book events, organizers to create and manage events, and admins to oversee the platform. Built with a full-stack architecture featuring secure authentication, role-based access control, and online payments.",
    image: "https://res.cloudinary.com/dwvwvzwcv/image/upload/v1788878878/event_booking_m7qhys.png",
    tech: ["Next.js", "Node.js", "Express.js", "PostgreSQL", "TypeScript", "Tailwind CSS", "Razorpay"],
    github: "https://github.com/kaushik62/eventify",
    live: "https://eventify-sigma-dusky.vercel.app/",
    accent: "teal",
  },
  {
    title: "Investo",
    subtitle: "Virtual Stock Trading Platform",
    description:
      "A virtual stock trading platform that allows users to buy and sell stocks using simulated funds, track portfolio performance, and monitor real-time market data. Built with a full-stack architecture and WebSockets for live updates.",
    image: "https://res.cloudinary.com/dwvwvzwcv/image/upload/v1788587401/Investo_o8u13n.png",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "WebSockets", "Docker", "Tailwind CSS"],
    github: "https://github.com/kaushik62/investo",
    live: "https://investo-eight.vercel.app/",
    accent: "indigo",
  },
  {
    title: "Interview AI",
    subtitle: "Smart Interview Preparation Platform",
    description:
      "An AI-powered interview preparation platform designed to help users practice technical and HR interviews. Users can generate role-based questions, receive AI-generated answers, and improve confidence through real-time practice sessions with progress tracking.",
    image: "https://res.cloudinary.com/dwvwvzwcv/image/upload/v1788587647/Interview_AI_qis7om.png",
    tech: ["React.js", "Node.js", "Express.js", "MySQL", "LLM API", "Tailwind CSS", "Vercel"],
    github: "https://github.com/kaushik62/interview_ai",
    live: "https://interview-ai-orpin-nu.vercel.app/",
    accent: "violet",
  },
];

const accentMap: Record<string, { border: string; badge: string; glow: string; tag: string }> = {
  teal:   { border: "group-hover:border-teal-400/50",   badge: "bg-teal-400/10 text-teal-300 border-teal-400/20",   glow: "group-hover:shadow-[0_0_50px_-10px_rgba(45,212,191,0.35)]",   tag: "from-teal-400/20 to-teal-400/5" },
  indigo: { border: "group-hover:border-indigo-400/50", badge: "bg-indigo-400/10 text-indigo-300 border-indigo-400/20", glow: "group-hover:shadow-[0_0_50px_-10px_rgba(99,102,241,0.35)]", tag: "from-indigo-400/20 to-indigo-400/5" },
  violet: { border: "group-hover:border-violet-400/50", badge: "bg-violet-400/10 text-violet-300 border-violet-400/20", glow: "group-hover:shadow-[0_0_50px_-10px_rgba(167,139,250,0.35)]", tag: "from-violet-400/20 to-violet-400/5" },
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" ref={ref} className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Header */}
          <header className="mb-16">
            <h2 className="section-heading flex items-center gap-3 mb-4">
              <span className="text-primary font-mono text-base sm:text-lg">04.</span>
              <span className="text-xl sm:text-2xl md:text-3xl">Projects</span>
              <span className="hidden sm:block h-px bg-gradient-to-r from-border to-transparent flex-1 max-w-xs" />
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl">
              Selected projects that demonstrate my approach to building scalable,
              well-structured, and user-focused applications.
            </p>
          </header>

          {/* Projects Grid */}
          <div className="space-y-8">
            {projects.map((project, index) => {
              const accent = accentMap[project.accent];
              return (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 32 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className={`group rounded-2xl border border-border bg-card/40 backdrop-blur-sm overflow-hidden
                    ${accent.border} ${accent.glow}
                    transition-all duration-400`}
                >
                  <div className={`grid lg:grid-cols-2 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                    {/* Image */}
                    <div className={`relative overflow-hidden ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                      <div className="overflow-hidden aspect-video lg:aspect-auto lg:h-full min-h-[220px]">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                        />
                        {/* Overlay gradient */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${index % 2 === 1 ? "lg:from-transparent lg:to-card/60" : "lg:from-card/60 lg:to-transparent"} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`flex flex-col justify-center p-6 sm:p-8 lg:p-10 space-y-4 ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
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
