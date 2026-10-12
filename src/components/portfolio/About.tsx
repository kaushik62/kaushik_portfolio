import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  Server,
  Database,
  BrainCircuit,
  ArrowUpRight,
} from "lucide-react";

type SkillCategory = {
  label: string;
  color: "teal" | "violet" | "blue" | "amber";
  skills: string[];
  icon: typeof Code2;
};

const skillCategories: SkillCategory[] = [
  {
    label: "Frontend Development",
    color: "teal",
    icon: Code2,
    skills: [
      "JavaScript (ES6+)",
      "TypeScript",
      "React.js",
      "Next.js",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
  },
  {
    label: "Backend Development",
    color: "violet",
    icon: Server,
    skills: ["Node.js", "Express.js", "REST APIs", "JWT", "Socket.IO"],
  },
  {
    label: "Databases & Infrastructure",
    color: "blue",
    icon: Database,
    skills: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Redis",
      "Docker",
      "CI/CD",
    ],
  },
  {
    label: "Computer Science",
    color: "amber",
    icon: BrainCircuit,
    skills: ["Data Structures & Algorithms", "Operating Systems", "DBMS"],
  },
];

const colorStyles = {
  teal: {
    icon: "bg-teal-500/10 text-teal-600 dark:text-teal-400",
    badge:
      "border-teal-500/15 bg-teal-500/[0.04] hover:border-teal-500/40 hover:bg-teal-500/[0.08]",
    label: "text-teal-600 dark:text-teal-400",
    dot: "bg-teal-500",
  },
  violet: {
    icon: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
    badge:
      "border-violet-500/15 bg-violet-500/[0.04] hover:border-violet-500/40 hover:bg-violet-500/[0.08]",
    label: "text-violet-600 dark:text-violet-400",
    dot: "bg-violet-500",
  },
  blue: {
    icon: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    badge:
      "border-blue-500/15 bg-blue-500/[0.04] hover:border-blue-500/40 hover:bg-blue-500/[0.08]",
    label: "text-blue-600 dark:text-blue-400",
    dot: "bg-blue-500",
  },
  amber: {
    icon: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
    badge:
      "border-amber-500/15 bg-amber-500/[0.04] hover:border-amber-500/40 hover:bg-amber-500/[0.08]",
    label: "text-amber-600 dark:text-amber-400",
    dot: "bg-amber-500",
  },
};

const About = () => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-80px",
  });

  return (
    <section
      id="about"
      ref={ref}
      className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <div className="mb-12 sm:mb-16">
            <div className="mb-3 flex items-center gap-3">
              <span className="font-mono text-sm text-primary">01</span>
              <span className="h-px w-8 bg-primary/50" />
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Get to know me
              </span>
            </div>

            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              About Me<span className="text-primary">.</span>
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
              A software developer focused on building useful products,
              solving real-world problems, and turning ideas into reliable
              digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-5 md:gap-12 lg:gap-16">
            <div className="space-y-8 md:col-span-3">
              <div className="space-y-5">
                <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                  Hello, I&apos;m{" "}
                  <span className="font-semibold text-foreground">
                    Kaushik Gupta
                  </span>
                  , a Computer Science and Engineering undergraduate at{" "}
                  <span className="font-medium text-primary">
                    IIIT Ranchi
                  </span>
                  . I enjoy developing full-stack web applications, backend
                  systems, and AI-powered solutions that address practical
                  business needs.
                </p>

                <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                  Through my internship, personal projects, and campus
                  activities, I&apos;ve gained experience translating ideas
                  into working applications, building user interfaces,
                  integrating APIs, and managing application data. I also
                  enjoy collaborating with teams to turn requirements into
                  maintainable software.
                </p>

                <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                  My current interests include{" "}
                  <span className="font-medium text-foreground">
                    software engineering, full-stack development, and AI
                    agents for business automation
                  </span>
                  . I&apos;m particularly interested in building reliable
                  systems that simplify workflows and improve productivity.
                </p>
              </div>

              <div className="rounded-2xl border border-border/70 bg-card p-5 sm:p-6">
                <div className="mb-5">
                  <h3 className="text-base font-semibold text-foreground">
                    Technical Skills
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Technologies and concepts I use to build applications.
                  </p>
                </div>

                <div className="space-y-6">
                  {skillCategories.map((category, index) => {
                    const styles = colorStyles[category.color];
                    const Icon = category.icon;

                    return (
                      <motion.div
                        key={category.label}
                        initial={{ opacity: 0, y: 12 }}
                        animate={
                          isInView
                            ? { opacity: 1, y: 0 }
                            : { opacity: 0, y: 12 }
                        }
                        transition={{
                          duration: 0.4,
                          delay: 0.12 + index * 0.1,
                          ease: "easeOut",
                        }}
                      >
                        <div className="mb-3 flex items-center gap-2.5">
                          <div
                            className={`flex h-8 w-8 items-center justify-center rounded-lg ${styles.icon}`}
                          >
                            <Icon className="h-4 w-4" strokeWidth={1.8} />
                          </div>

                          <h4
                            className={`text-sm font-medium ${styles.label}`}
                          >
                            {category.label}
                          </h4>
                        </div>

                        <ul className="flex flex-wrap gap-2">
                          {category.skills.map((skill) => (
                            <li key={skill}>
                              <span
                                className={`inline-flex cursor-default items-center gap-2 rounded-lg border px-3 py-2 text-xs font-medium text-foreground/80 transition-colors duration-200 ${styles.badge}`}
                              >
                                <span
                                  className={`h-1.5 w-1.5 rounded-full ${styles.dot}`}
                                />
                                {skill}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>

            <motion.aside
              initial={{ opacity: 0, y: 20 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 20 }
              }
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: "easeOut",
              }}
              className="mx-auto w-full max-w-[320px] md:sticky md:top-24 md:col-span-2 md:max-w-none"
            >
              <div className="overflow-hidden rounded-2xl border border-border/70 bg-card p-3 shadow-sm transition-shadow duration-300 hover:shadow-lg">
                <div className="relative overflow-hidden rounded-xl bg-muted">
                  <img
                    src="https://res.cloudinary.com/dwvwvzwcv/image/upload/v1768299164/WhatsApp_Image_2026-01-13_at_3.41.06_PM_fydl6o.jpg"
                    alt="Portrait of Kaushik Gupta"
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/5] w-full object-cover object-center transition-transform duration-500 hover:scale-[1.03]"
                  />
                </div>
              </div>
            </motion.aside>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;