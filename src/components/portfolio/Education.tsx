import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CalendarDays, GraduationCap, School } from "lucide-react";

const education = [
  {
    institute: "Indian Institute of Information Technology, Ranchi",
    degree: "B.Tech in Computer Science & Engineering",
    period: "2023 – 2027",
    type: "Undergraduate",
    icon: GraduationCap,
    accent: "teal",
  },
  {
    institute: "Class XII · CBSE",
    degree: "Senior Secondary Education",
    specialization: "Physics, Chemistry & Mathematics",
    period: "2020 – 2022",
    type: "Higher Secondary",
    icon: School,
    accent: "violet",
  },
  {
    institute: "Class X · CBSE",
    degree: "Secondary Education",
    period: "2019 – 2020",
    type: "Secondary",
    icon: School,
    accent: "amber",
  },
];

const accentStyles = {
  teal: {
    icon: "bg-teal-500/10 text-teal-500 ring-teal-500/20",
    dot: "bg-teal-500",
    label: "text-teal-600 dark:text-teal-400",
    border: "hover:border-teal-500/40",
    line: "from-teal-500/60",
  },
  violet: {
    icon: "bg-violet-500/10 text-violet-500 ring-violet-500/20",
    dot: "bg-violet-500",
    label: "text-violet-600 dark:text-violet-400",
    border: "hover:border-violet-500/40",
    line: "from-violet-500/60",
  },
  amber: {
    icon: "bg-amber-500/10 text-amber-600 ring-amber-500/20",
    dot: "bg-amber-500",
    label: "text-amber-600 dark:text-amber-400",
    border: "hover:border-amber-500/40",
    line: "from-amber-500/60",
  },
};

const Education = () => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-80px",
  });

  return (
    <section
      id="education"
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
              <span className="font-mono text-sm text-primary">03</span>
              <span className="h-px w-8 bg-primary/50" />
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Academic Background
              </span>
            </div>

            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Education
              <span className="text-primary">.</span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
              My academic journey in computer science and
              foundational problem-solving.
            </p>
          </div>

          <div className="relative">
            <div className="absolute bottom-8 left-[19px] top-8 w-px bg-gradient-to-b from-primary/40 via-border to-transparent sm:left-[23px]" />

            <div className="space-y-5 sm:space-y-6">
              {education.map((edu, index) => {
                const styles = accentStyles[edu.accent];
                const Icon = edu.icon;

                return (
                  <motion.article
                    key={edu.institute}
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
                            <Icon className="h-5 w-5" strokeWidth={1.8} />
                          </div>

                          <div className="min-w-0 pt-0.5">
                            <p
                              className={`mb-1 text-[11px] font-semibold uppercase tracking-[0.14em] ${styles.label}`}
                            >
                              {edu.type}
                            </p>

                            <h3 className="text-base font-semibold leading-snug text-foreground sm:text-lg">
                              {edu.degree}
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-muted-foreground">
                              {edu.institute}
                            </p>

                            {edu.specialization && (
                              <p className="mt-1 text-sm text-muted-foreground/80">
                                {edu.specialization}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="flex shrink-0 items-center gap-2 self-start rounded-lg border border-border/70 bg-background/70 px-3 py-2 text-xs font-medium text-muted-foreground sm:mt-1">
                          <CalendarDays className="h-3.5 w-3.5" />
                          <span>{edu.period}</span>
                        </div>
                      </div>
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

export default Education;