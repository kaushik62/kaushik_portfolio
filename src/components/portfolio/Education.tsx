import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar } from "lucide-react";

const education = [
  {
    institute: "IIIT Ranchi",
    fullName: "Indian Institute of Information Technology, Ranchi",
    degree: "B.Tech in Computer Science & Engineering",
    period: "2023 – 2027",
    color: "teal",
    badge: "Current",
    points: [
      "Pursuing a Bachelor's degree with a strong foundation in Data Structures, Algorithms, and core CS concepts.",
      "Actively involved in technical and entrepreneurial activities — hackathons, projects, and campus initiatives.",
      "Developed multiple full-stack web applications using the MERN stack as part of academic and personal projects.",
      "Serving as an E-Cell Coordinator, contributing to leadership, event management, and startup ecosystem development.",
    ],
  },
  
  {
    institute: "Class 12th – CBSE",
    fullName: "Class XII – Science (PCM)",
    degree: "Senior Secondary – Physics, Chemistry & Mathematics",
    period: "2020 – 2022",
    color: "violet",
    badge: "CBSE",
    points: [
      "Completed senior secondary education with Physics, Chemistry, and Mathematics as core subjects.",
      "Developed strong analytical thinking and problem-solving skills through academic coursework.",
      "Built early interest in programming fundamentals and logical reasoning.",
    ],
  },
  {
    institute: "Class 10th – CBSE",
    fullName: "Class X",
    degree: "Secondary Education",
    period: "2019 – 2020",
    color: "amber",
    badge: "88.8%",
    points: [
      "Completed secondary education under the CBSE curriculum with a strong focus on Mathematics and Science.",
      "Secured 88.8% in the Class X Board Examination.",
      "Developed disciplined study habits and a strong academic foundation.",
    ],
  },
];

const colorMap: Record<string, { border: string; dot: string; badge: string; glow: string }> = {
  teal:   { border: "border-teal-400/50 hover:border-teal-400",   dot: "bg-teal-400",   badge: "text-teal-300 bg-teal-400/10 border-teal-400/30",   glow: "hover:shadow-[0_0_30px_-5px_rgba(45,212,191,0.2)]" },
  indigo: { border: "border-indigo-400/50 hover:border-indigo-400", dot: "bg-indigo-400", badge: "text-indigo-300 bg-indigo-400/10 border-indigo-400/30", glow: "hover:shadow-[0_0_30px_-5px_rgba(99,102,241,0.2)]" },
  violet: { border: "border-violet-400/50 hover:border-violet-400", dot: "bg-violet-400", badge: "text-violet-300 bg-violet-400/10 border-violet-400/30", glow: "hover:shadow-[0_0_30px_-5px_rgba(167,139,250,0.2)]" },
  amber:  { border: "border-amber-400/50 hover:border-amber-400",  dot: "bg-amber-400",  badge: "text-amber-300 bg-amber-400/10 border-amber-400/30",  glow: "hover:shadow-[0_0_30px_-5px_rgba(251,191,36,0.2)]" },
};

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" ref={ref} className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Heading */}
          <h2 className="section-heading flex items-center gap-3 sm:gap-4 mb-14">
            <span className="text-primary font-mono text-base sm:text-lg">03.</span>
            <span className="text-xl sm:text-2xl md:text-3xl">Education</span>
            <span className="hidden sm:block h-px bg-gradient-to-r from-border to-transparent flex-1 max-w-xs" />
          </h2>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-3.5 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-border to-transparent" />

            <div className="space-y-10">
              {education.map((edu, index) => {
                const colors = colorMap[edu.color] || colorMap.teal;
                return (
                  <motion.div
                    key={edu.institute}
                    initial={{ opacity: 0, x: -24 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="relative pl-12"
                  >
                    {/* Timeline dot */}
                    <div className={`absolute left-0 top-5 w-7 h-7 rounded-full border-2 border-background flex items-center justify-center ${colors.dot}`}>
                      <div className="w-3 h-3 rounded-full bg-background/80" />
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
                            {edu.degree}
                          </h3>
                          <p className={`text-sm font-medium mt-0.5 ${colors.badge.split(' ')[0]}`}>
                            {edu.fullName}
                          </p>
                        </div>
                        <span className={`px-2.5 py-1 rounded-full border text-xs font-mono whitespace-nowrap ${colors.badge}`}>
                          {edu.badge}
                        </span>
                      </div>

                      {/* Period */}
                      <div className="flex items-center gap-1.5 text-muted-foreground font-mono text-xs mb-5 mt-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {edu.period}
                      </div>

                      {/* Points */}
                      <ul className="space-y-3">
                        {edu.points.map((point, idx) => (
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

export default Education;
