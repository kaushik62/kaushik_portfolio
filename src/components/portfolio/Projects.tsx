import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Interview AI - Smart Interview Preparation Platform",
    description:
      "An AI-powered interview preparation platform designed to help users practice technical and HR interviews effectively. Users can generate role-based interview questions, receive AI-generated answers, and improve confidence through real-time practice sessions. Features personalized learning experience and progress tracking.",
    image:
      "https://res.cloudinary.com/dwvwvzwcv/image/upload/v1777469566/Interview_AI_q4syij.png",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "OpenAI API",
      "Gemini API",
      "HTML5",
      "CSS3",
      "Javascript",
      "Tailwind CSS",
      "Vercel",
      "Render",
    ],
    github: "https://github.com/kaushik62/interview_ai",
    live: "https://interview-ai-orpin-nu.vercel.app/",
    featured: true,
  },
  {
    title: "Connectify - Social Media Application",
    description:
      "A scalable social media platform built to foster meaningful connections and real-time interaction. Users can create and share posts, like, comment, and chat instantly, enhancing engagement. Features follow/unfollow functionality to deliver personalized feeds and a connected social experience.",
    image:
      "https://res.cloudinary.com/dwvwvzwcv/image/upload/v1768323413/pexels-tranmautritam-69432_ehn2rp.jpg",
    tech: [
      "React.js",
      "Node.js",
      "PostgreSQL",
      "MySQL",
      "WebSockets",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Vercel",
      "Cloudinary",
    ],
    github: "https://github.com/kaushik62/connectify",
    live: "https://connectify-ten-xi.vercel.app/",
    featured: true,
  },
  {
    title: "Weather Application Dashboard",
    description:
      "A real-time weather application that provides accurate, up-to-date weather information for any location. Displays live temperature, humidity, wind speed, and forecast data with a clean, user-friendly interface. Built for performance and reliability, enabling users to track weather conditions instantly.",

    image:
      "https://res.cloudinary.com/dwvwvzwcv/image/upload/v1768323630/pexels-ian-panelo-35642583_ehl7w2.jpg",
    tech: ["HTML5", "CSS3", "Javascript", "Firebase", "OpenWeather API"],
    github: "https://github.com/kaushik62/realtime_weather_app",
    live: "https://weatherappp9977.netlify.app/",
    featured: true,
  },
];

const otherProjects = [
  {
    title: "Interview AI - Smart Interview Preparation Platform",
    description:
      "An AI-powered interview preparation platform with role-based questions, mock interviews, AI-generated answers, resume review, and progress tracking for better placement success.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "OpenAI API",
      "Gemini API",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Vercel",
      "Render",
    ],
    github: "https://github.com/kaushik62/interview_ai",
  },
  {
    title: "Connectify - Social Media Application",
    description:
      "A scalable social media platform with real-time posts, likes, comments, chat, and follow features for personalized user engagement.",
    tech: [
      "React.js",
      "Node.js",
      "PostgreSQL",
      "MySQL",
      "WebSockets",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Vercel",
      "Cloudinary",
    ],
    github: "https://github.com/kaushik62/connectify",
  },
  {
    title: "E-Commerce Shopping",
    description:
      "A modern e-commerce platform enabling seamless product browsing, cart management, real-time updates, and a fast, scalable, user-friendly shopping experience.",
    tech: ["HTML5", "CSS3", "Javascript", "Tailwind CSS", "Firebase"],
    github: "https://github.com/kaushik62/e_shopping",
  },
  {
    title: "Weather Application Dashboard",
    description:
      "A real-time weather application showing live temperature, humidity, wind speed, and forecasts with a clean, reliable, user-friendly interface.",
    tech: ["HTML5", "CSS3", "Javascript", "Firebase", "OpenWeather API"],
    github: "https://github.com/kaushik62/realtime_weather_app",
  },
  {
    title: "Task Manager - Todo List",
    description:
      "A task manager - Todo list application that helps users organize, track, and complete daily tasks efficiently with a simple interface.",
    tech: ["HTML, CSS, React.js, Node Js, Tailwind CSS, Cloudinary, Vercel"],
    github: "https://github.com/kaushik62/todo_list",
  },
  {
    title: "Digital Clock",
    description:
      "A digital clock application displaying real-time hours, minutes, and seconds with a clean, responsive interface for accurate time tracking.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/kaushik62/clock",
  },
  {
    title: "Temperature Converter",
    description:
      "A temperature converter application that instantly converts values between Celsius and Fahrenheit with accurate results and a simple interface.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/kaushik62/temperature_converter",
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

          {/* Divider */}
          <div className="my-32 h-px bg-border" />

          {/* Other Projects */}
          <section>
            <h3 className="text-xl sm:text-2xl font-semibold text-center mb-12">
              Other Projects
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <article
                  key={project.title}
                  className="rounded-xl border border-border p-6 hover:-translate-y-1 hover:shadow-md transition-all"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="font-semibold">{project.title}</h4>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary"
                    >
                      <Github size={18} />
                    </a>
                  </div>

                  <p className="text-muted-foreground text-sm mb-6">
                    {project.description}
                  </p>

                  <ul className="flex flex-wrap gap-2 text-xs font-mono text-muted-foreground">
                    {project.tech.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
