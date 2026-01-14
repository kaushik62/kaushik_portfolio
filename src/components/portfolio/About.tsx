import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  "JavaScript (ES6+)",
  "TypeScript",
  "React",
  "Node.js",
  "Next.js",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "DSA (Data Structure and Algorithm)",
  "OS (Operating System)",
  "DBMS (DataBase Management System)"
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Heading */}
          <h2 className="section-heading flex items-center gap-3 sm:gap-4">
            <span className="text-primary font-mono text-lg sm:text-xl">
              01.
            </span>
            <span className="text-lg sm:text-xl md:text-2xl">
              About Me
            </span>
            <span className="md:block h-px bg-border flex-1 max-w-xs" />
          </h2>

          {/* Content */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Text Section */}
            <div className="md:col-span-2 space-y-4 sm:space-y-5">
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Hello! I'm Kaushik Gupta, a passionate full-stack MERN developer
                and a Computer Science and Engineering undergraduate at IIIT
                Ranchi. I enjoy building modern, scalable, and user-focused web
                applications — from responsive websites to complete full-stack
                platforms.
              </p>

              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                My journey into web development began in 2023 during my time at
                college, when curiosity pushed me to explore how real-world web
                products are built. Along the way, I’ve collaborated on projects
                in <span className="text-primary">startup environments</span>,{" "}
                <span className="text-primary">
                  team-based academic projects
                </span>
                , and{" "}
                <span className="text-primary">real-world applications</span>,
                strengthening both my technical and problem-solving skills.
              </p>

              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Currently, my main focus is building accessible, inclusive, and
                performance-driven digital products using the MERN stack. I
                enjoy working across the entire development lifecycle — from
                clean UI design to efficient APIs and databases.
              </p>

              {/* Skills */}
              <div className="pt-4">
                <p className="text-foreground mb-3 sm:mb-4 text-sm sm:text-base">
                  Technologies I’ve been working with recently:
                </p>
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-2 text-muted-foreground text-sm"
                    >
                      <span className="text-primary">▹</span>
                      <span className="font-mono">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Image Section */}
            <div className="relative mx-auto max-w-[240px] sm:max-w-[280px] md:max-w-full group">
              <div className="relative rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all duration-300 z-10" />
                <img
                  src="https://res.cloudinary.com/dwvwvzwcv/image/upload/v1768299164/WhatsApp_Image_2026-01-13_at_3.41.06_PM_fydl6o.jpg"
                  alt="Kaushik Gupta"
                  className="w-full aspect-square object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>

              <div className="absolute -inset-2 border-2 border-primary rounded-lg -z-10 translate-x-3 translate-y-3 group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-300" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;