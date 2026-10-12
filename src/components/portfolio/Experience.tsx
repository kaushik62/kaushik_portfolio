import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  BriefcaseBusiness,
  CalendarDays,
  Building2,
  CheckCircle2,
} from "lucide-react";

const experiences = [
  {
    company: "AeroVerve Travels",
    title: "Web Developer Intern",
    period: "May 2025 – December 2025",
    type: "Internship",
    accent: "teal",
    points: [
      "Developed a centralized CRM dashboard for managing sales, leads, and customer data, streamlining workflows and improving team productivity.",
      "Integrated Supabase for real-time data synchronization, authentication, and role-based access control.",
      "Built responsive user interfaces using React, Next.js, TypeScript, and Tailwind CSS.",
      "Collaborated with product and business teams to translate requirements into maintainable web solutions.",
      "Improved frontend performance and component architecture for better maintainability and user experience.",
    ],
  },
  {
    company: "E-Cell IIIT Ranchi",
    title: "Social Media & Marketing Coordinator",
    period: "November 2024 – Present",
    type: "Campus Role",
    accent: "violet",
    points: [
      "Planned and coordinated entrepreneurship and innovation events at the institute level.",
      "Collaborated with startups, incubators, and industry professionals to organize workshops and interactive sessions.",
      "Managed event promotions, participant registrations, and on-ground coordination.",
      "Supported campus entrepreneurship initiatives through outreach, marketing, and community engagement.",
    ],
  },
];

const accentStyles = {
  teal: {
    icon: "bg-teal-500/10 text-teal-600 ring-teal-500/20 dark:text-teal-400",
    dot: "bg-teal-500",
    label: "text-teal-600 dark:text-teal-400",
    border: "hover:border-teal-500/40",
    bullet: "text-teal-500",
  },
  violet: {
    icon: "bg-violet-500/10 text-violet-600 ring-violet-500/20 dark:text-violet-400",
    dot: "bg-violet-500",
    label: "text-violet-600 dark:text-violet-400",
    border: "hover:border-violet-500/40",
    bullet: "text-violet-500",
  },
};

const Experience = () => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-80px",
  });

  return (
    <section
      id="experience"
      ref={ref}
      className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <div className="mb-12 sm:mb-16">
            <div className="mb-3 flex items-center gap-3">
              <span className="font-mono text-sm text-primary">02</span>
              <span className="h-px w-8 bg-primary/50" />
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Professional Journey
              </span>
            </div>

            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Where I&apos;ve Worked
              <span className="text-primary">.</span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
              Building practical software solutions, collaborating with teams,
              and contributing to technology and entrepreneurship initiatives.
            </p>
          </div>

          <div className="relative">
            <div className="absolute bottom-8 left-[19px] top-8 w-px bg-gradient-to-b from-primary/40 via-border to-transparent sm:left-[23px]" />

            <div className="space-y-6">
              {experiences.map((exp, index) => {
                const styles = accentStyles[exp.accent];
                const Icon =
                  exp.type === "Internship"
                    ? BriefcaseBusiness
                    : Building2;

                return (
                  <motion.article
                    key={exp.company}
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isInView
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 20 }
                    }
                    transition={{
                      duration: 0.5,
                      delay: 0.12 * index,
                      ease: "easeOut",
                    }}
                    className="group relative pl-12 sm:pl-14"
                  >
                    <div
                      className={`absolute left-[11px] top-7 z-10 h-[17px] w-[17px] rounded-full border-[4px] border-background ${styles.dot} shadow-sm sm:left-[15px]`}
                    />

                    <div
                      className={`rounded-2xl border border-border/70 bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/[0.03] sm:p-7 dark:hover:shadow-black/10 ${styles.border}`}
                    >
                      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                        <div className="flex min-w-0 gap-4">
                          <div
                            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ring-1 ${styles.icon}`}
                          >
                            <Icon
                              className="h-5 w-5"
                              strokeWidth={1.8}
                            />
                          </div>

                          <div className="min-w-0 flex-1">
                            <div className="mb-2 flex flex-wrap items-center gap-2">
                              <span
                                className={`text-[11px] font-semibold uppercase tracking-[0.14em] ${styles.label}`}
                              >
                                {exp.type}
                              </span>
                            </div>

                            <h3 className="text-base font-semibold leading-snug text-foreground sm:text-lg">
                              {exp.title}
                            </h3>

                            <p className="mt-1 flex items-center gap-1.5 text-sm font-medium text-muted-foreground">
                              <Building2 className="h-3.5 w-3.5 shrink-0" />
                              {exp.company}
                            </p>
                          </div>
                        </div>

                        <div className="flex shrink-0 items-center gap-2 self-start rounded-lg border border-border/70 bg-background/70 px-3 py-2 text-xs font-medium text-muted-foreground sm:mt-1">
                          <CalendarDays className="h-3.5 w-3.5" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      <div className="my-5 h-px bg-border/70" />

                      <div className="mb-3 flex items-center gap-2">
                        <CheckCircle2
                          className="h-4 w-4 text-primary"
                          strokeWidth={1.8}
                        />
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">
                          Key Contributions
                        </h4>
                      </div>

                      <ul className="space-y-3">
                        {exp.points.map((point, idx) => (
                          <li
                            key={`${exp.company}-${idx}`}
                            className="flex items-start gap-3 text-sm leading-6 text-muted-foreground"
                          >
                            <span
                              className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${styles.bullet}`}
                            />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;