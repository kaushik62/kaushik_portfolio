import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type SkillCategory = {
  label: string;
  color: string;
  skills: string[];
};

const skillCategories: SkillCategory[] = [
  {
    label: "Frontend",
    color: "teal",
    skills: ["JavaScript (ES6+)", "TypeScript", "React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    label: "Backend",
    color: "indigo",
    skills: ["Node.js", "Express.js"],
  },
  {
    label: "Databases",
    color: "violet",
    skills: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    label: "CS Fundamentals",
    color: "amber",
    skills: ["DSA", "Operating Systems", "DBMS"],
  },
];

const colorMap: Record<string, { badge: string; dot: string; label: string }> = {
  teal:   { badge: "border-teal-400/20 bg-teal-400/5 text-teal-300 hover:bg-teal-400/15 hover:border-teal-400/40", dot: "bg-teal-400", label: "text-teal-400 border-teal-400/30 bg-teal-400/10" },
  indigo: { badge: "border-indigo-400/20 bg-indigo-400/5 text-indigo-300 hover:bg-indigo-400/15 hover:border-indigo-400/40", dot: "bg-indigo-400", label: "text-indigo-400 border-indigo-400/30 bg-indigo-400/10" },
  violet: { badge: "border-violet-400/20 bg-violet-400/5 text-violet-300 hover:bg-violet-400/15 hover:border-violet-400/40", dot: "bg-violet-400", label: "text-violet-400 border-violet-400/30 bg-violet-400/10" },
  amber:  { badge: "border-amber-400/20 bg-amber-400/5 text-amber-300 hover:bg-amber-400/15 hover:border-amber-400/40", dot: "bg-amber-400", label: "text-amber-400 border-amber-400/30 bg-amber-400/10" },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring" as const, stiffness: 260, damping: 20 } },
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Heading */}
          <h2 className="section-heading flex items-center gap-3 sm:gap-4 mb-12">
            <span className="text-primary font-mono text-base sm:text-lg">01.</span>
            <span className="text-xl sm:text-2xl md:text-3xl">About Me</span>
            <span className="hidden sm:block h-px bg-gradient-to-r from-border to-transparent flex-1 max-w-xs" />
          </h2>

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-16 items-start">
            {/* Text Section */}
            <div className="md:col-span-3 space-y-5">
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Hello! I'm{" "}
                <span className="text-foreground font-medium">Kaushik Gupta</span>, a
                passionate full-stack MERN developer and a Computer Science &
                Engineering undergraduate at{" "}
                <span className="text-primary">IIIT Ranchi</span>. I enjoy building
                modern, scalable, and user-focused web applications — from responsive
                websites to complete full-stack platforms.
              </p>

              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                My journey into web development began in 2023, when curiosity pushed me
                to explore how real-world web products are built. Along the way, I've
                collaborated in{" "}
                <span className="text-primary">startup environments</span>,{" "}
                <span className="text-primary">team-based academic projects</span>, and{" "}
                <span className="text-primary">real-world applications</span>,
                strengthening both my technical and problem-solving skills.
              </p>

              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Currently, my main focus is building accessible, inclusive, and
                performance-driven digital products using the MERN stack. I enjoy
                working across the entire development lifecycle — from clean UI design
                to efficient APIs and databases.
              </p>

              {/* Categorized Skills */}
              <div className="pt-4 space-y-5">
                <p className="text-foreground font-medium text-sm sm:text-base">
                  Technologies I work with:
                </p>
                {skillCategories.map((cat) => {
                  const colors = colorMap[cat.color];
                  return (
                    <div key={cat.label}>
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-mono font-medium mb-3 ${colors.label}`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
                        {cat.label}
                      </span>
                      <motion.ul
                        className="flex flex-wrap gap-2"
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                      >
                        {cat.skills.map((skill) => (
                          <motion.li key={skill} variants={badgeVariants}>
                            <span
                              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium border cursor-default transition-all duration-200 ${colors.badge}`}
                            >
                              {skill}
                            </span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Image Section */}
            <div className="md:col-span-2 relative mx-auto max-w-[240px] sm:max-w-[280px] md:max-w-full">
              {/* Animated gradient ring */}
              <div className="relative p-[3px] rounded-2xl"
                style={{
                  background: "linear-gradient(135deg, hsl(174 72% 56% / 0.8), hsl(199 89% 48% / 0.6), hsl(258 90% 66% / 0.6), hsl(174 72% 56% / 0.8))",
                  backgroundSize: "300% 300%",
                  animation: "shimmer 4s linear infinite",
                }}
              >
                <div className="relative rounded-2xl overflow-hidden group">
                  {/* Teal overlay on hover remove */}
                  <div className="absolute inset-0 bg-primary/15 group-hover:bg-transparent transition-all duration-500 z-10" />
                  <img
                    src="https://res.cloudinary.com/dwvwvzwcv/image/upload/v1768299164/WhatsApp_Image_2026-01-13_at_3.41.06_PM_fydl6o.jpg"
                    alt="Kaushik Gupta"
                    className="w-full aspect-square object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;