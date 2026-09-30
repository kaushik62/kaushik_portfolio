import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    company: "AeroVerve Travels",
    title: "Web Developer Intern",
    period: "May 2025 – December 2025",
    type: "Internship",
    color: "teal",
    points: [
      "Developed a streamlined CRM dashboard that centralized sales, leads, and customer data, reducing manual processes by 40% and improving overall team productivity by 35%.",
      "Integrated Supabase for real-time data synchronization, secure user authentication, and scalable role-based access control.",
      "Built high-performance, responsive UI using React, Next.js, TypeScript, and Tailwind CSS.",
      "Collaborated with product and business teams to translate requirements into scalable solutions.",
      "Optimized frontend performance and component architecture for maintainability and speed.",
    ],
  },
  {
    company: "E-Cell IIIT, Ranchi",
    title: "Social Media & Marketing Coordinator",
    period: "November 2024 – Present",
    type: "Campus Role",
    color: "indigo",
    points: [
      "Planned and executed institute-level entrepreneurship and innovation events.",
      "Collaborated with startups, incubators, and industry leaders for workshops and sessions.",
      "Managed promotions, registrations, and on-ground event operations.",
      "Strengthened the campus entrepreneurial ecosystem through outreach initiatives.",
    ],
  },
];

const colorMap: Record<string, { border: string; dotBg: string; dotGlow: string; badge: string; glow: string }> = {
  teal: {
    border: "border-teal-400/50 hover:border-teal-400",
    dotBg: "bg-teal-400",
    dotGlow: "bg-teal-400 shadow-[0_0_12px_rgba(45,212,191,0.6)]",
    badge: "text-teal-300 bg-teal-400/10 border-teal-400/30",
    glow: "hover:shadow-[0_0_30px_-5px_rgba(45,212,191,0.25)]",
  },
  indigo: {
    border: "border-indigo-400/50 hover:border-indigo-400",
    dotBg: "bg-indigo-400",
    dotGlow: "bg-indigo-400 shadow-[0_0_12px_rgba(99,102,241,0.6)]",
    badge: "text-indigo-300 bg-indigo-400/10 border-indigo-400/30",
    glow: "hover:shadow-[0_0_30px_-5px_rgba(99,102,241,0.25)]",
  },
};

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" ref={ref} className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Heading */}
          <h2 className="section-heading flex items-center gap-3 sm:gap-4 mb-14">
            <span className="text-primary font-mono text-base sm:text-lg">02.</span>
            <span className="text-xl sm:text-2xl md:text-3xl">Where I've Worked</span>
            <span className="hidden sm:block h-px bg-gradient-to-r from-border to-transparent flex-1 max-w-xs" />
          </h2>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-3.5 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-border to-transparent" />

            <div className="space-y-10">
              {experiences.map((exp, index) => {
                const colors = colorMap[exp.color] || colorMap.teal;
                return (
                  <motion.div
                    key={exp.company}
                    initial={{ opacity: 0, x: -24 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="relative pl-12"
                  >
                    {/* Timeline dot */}
                    <div className={`absolute left-0 top-5 w-7 h-7 rounded-full border-2 border-background flex items-center justify-center ${colors.dotBg}`}>
                      <div className={`w-3 h-3 rounded-full ${colors.dotGlow}`} />
                    </div>

                    {/* Card */}
                    <div
                      className={`rounded-2xl border bg-card/50 backdrop-blur-sm p-6 sm:p-8
                        border-l-2 ${colors.border} ${colors.glow}
                        transition-all duration-300`}
                    >
                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
                        <div>
                          <h3 className="text-base sm:text-lg font-semibold text-foreground">
                            {exp.title}{" "}
                            <span className="text-primary">@ {exp.company}</span>
                          </h3>
                        </div>
                        <span className={`px-2.5 py-1 rounded-full border text-xs font-mono ${colors.badge}`}>
                          {exp.type}
                        </span>
                      </div>

                      {/* Period */}
                      <div className="flex items-center gap-1.5 text-muted-foreground font-mono text-xs mb-5 mt-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </div>

                      {/* Points */}
                      <ul className="space-y-3">
                        {exp.points.map((point, idx) => (
                          <li key={idx} className="flex gap-3 text-sm text-muted-foreground">
                            <span className="text-primary mt-[3px] shrink-0">▹</span>
                            <span className="leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
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