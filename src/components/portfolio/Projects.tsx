import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Eventify – AI-Powered Event Booking Platform",
    description:
      "An AI-powered event booking platform that allows users to discover and book events, organizers to create and manage events, and admins to oversee the platform. Built with a full-stack architecture featuring secure authentication, role-based access control, and online payments.",
    image:
      "https://res.cloudinary.com/dwvwvzwcv/image/upload/v1788878878/event_booking_m7qhys.png",
    tech: [
      "Next.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "Razorpay",
    ],
    github: "https://github.com/kaushik62/eventify",
    live: "https://eventify-sigma-dusky.vercel.app/",
    featured: true,
  },

  {
    title: "Investo – Virtual Stock Trading Platform",
    description:
      "A virtual stock trading platform that allows users to buy and sell stocks using simulated funds, track portfolio performance, and monitor real time market data. Built with a full-stack architecture and WebSockets for real-time updates.",
    image:
      "https://res.cloudinary.com/dwvwvzwcv/image/upload/v1788587401/Investo_o8u13n.png",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "Mongo DB",
      "WebSockets",
      "JavaScript",
      "Tailwind CSS",
      "Docker",
    ],
    github: "https://github.com/kaushik62/investo",
    live: "https://investo-eight.vercel.app/",
    featured: true,
  },

  {
    title: "Interview AI - Smart Interview Preparation Platform",
    description:
      "An AI-powered interview preparation platform designed to help users practice technical and HR interviews effectively. Users can generate role-based interview questions, receive AI-generated answers, and improve confidence through real-time practice sessions. Features personalized learning experience and progress tracking.",
    image:
      "https://res.cloudinary.com/dwvwvzwcv/image/upload/v1788587647/Interview_AI_qis7om.png",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "LLM API",
      "Tailwind CSS",
      "Vercel",
      "Render",
    ],
    github: "https://github.com/kaushik62/interview_ai",
    live: "https://interview-ai-orpin-nu.vercel.app/",
    featured: true,
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section
      id="projects"
      ref={ref}
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <header className="mb-20 max-w-2xl">
            <h2 className="section-heading flex items-center gap-3">
              <span className="text-primary font-mono text-lg">04.</span>
              <span className="text-2xl sm:text-3xl font-semibold">
                Projects
              </span>
              <span className="md:block h-px bg-border flex-1 max-w-xs" />
            </h2>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              Selected projects that demonstrate my approach to building
              scalable, well-structured, and user-focused applications.
            </p>
          </header>

          {/* Featured Projects */}
          <div className="space-y-28">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                {/* Image */}
                <div
                  className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <div className="overflow-hidden rounded-2xl border border-border">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full aspect-video object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`space-y-4 ${
                    index % 2 === 1 ? "lg:text-left" : ""
                  }`}
                >
                  <p className="text-primary font-mono text-xs uppercase tracking-wider">
                    Featured Project
                  </p>

                  <h3 className="text-xl sm:text-2xl font-semibold">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <ul
                    className={`flex flex-wrap gap-2 text-xs font-mono ${
                      index % 2 === 1 ? "lg:justify-start" : ""
                    }`}
                  >
                    {project.tech.map((tech) => (
                      <li
                        key={tech}
                        className="px-3 py-1 rounded-full bg-muted text-muted-foreground"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  {/* Links */}
                  <div
                    className={`flex gap-5 pt-2 ${
                      index % 2 === 1 ? "lg:justify-start" : ""
                    }`}
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition"
                    >
                      <Github size={22} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition"
                    >
                      <ExternalLink size={22} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
