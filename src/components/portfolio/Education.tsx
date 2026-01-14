import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const education = [
  {
    institute: "Indian Institute of Information Technology, Ranchi",
    degree: "B.Tech in Computer Science & Engineering",
    period: "2023 – 2027 (June)",
    points: [
      "Currently pursuing a Bachelor's degree with a strong foundation in Data Structures, Algorithms, and core Computer Science concepts.",
      "Actively involved in technical and entrepreneurial activities, including hackathons, projects, and campus initiatives.",
      "Developed multiple full-stack web applications using the MERN stack as part of academic and personal projects.",
      "Serving as an E-Cell Coordinator, contributing to leadership, event management, and startup ecosystem development on campus.",
    ],
  },
  {
    institute: "Allen Career Institute, Kota",
    degree: "JEE (Main & Advanced) Preparation",
    period: "2022 – 2023",
    points: [
      "Completed intensive coaching for JEE Main and Advanced.",
      "Developed disciplined study habits, strong time management, and problem-solving skills in a competitive academic environment.",
      "Built analytical thinking and conceptual clarity through consistent practice and evaluation.",
    ],
  },

  {
    institute: "Class 12th (CBSE)",
    degree: "Class XII – Science (PCM)",
    period: "2020 – 2022",
    points: [
      "Completed senior secondary education with Physics, Chemistry, and Mathematics as core subjects.",
      "Developed strong analytical thinking and problem-solving skills through academic coursework.",
      "Built early interest in programming fundamentals and logical reasoning.",
    ],
  },
  {
    institute: "Class 10th (CBSE)",
    degree: "Class X",
    period: "2019 – 2020",
    points: [
      "Completed secondary education under the CBSE curriculum with a strong focus on Mathematics and Science.",
      "Secured 88.8% in the Class X Board Examination.",
      "Developed disciplined study habits and a strong academic foundation through consistent performance.",
    ],
  },  
];

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      id="education"
      ref={ref}
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Heading */}
          <h2 className="section-heading flex items-center gap-3 sm:gap-4">
            <span className="text-primary font-mono text-lg sm:text-xl">
              03.
            </span>
            <span className="text-lg sm:text-xl md:text-2xl">Education</span>
            <span className="md:block h-px bg-border flex-1 max-w-xs" />
          </h2>

          {/* Content */}
          <div className="mt-8 flex flex-col md:flex-row gap-6 md:gap-10">
            {/* Tabs */}
            <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-border scrollbar-hide">
              {education.map((edu, index) => (
                <button
                  key={edu.institute}
                  onClick={() => setActiveTab(index)}
                  className={`min-w-[220px] md:min-w-0 px-4 py-3 text-left font-mono text-sm transition-all duration-300 ${
                    activeTab === index
                      ? "text-primary bg-primary/10 border-b-2 md:border-b-0 md:border-l-2 border-primary"
                      : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {edu.institute}
                </button>
              ))}
            </div>

            {/* Panel */}
            <div className="flex-1">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                  {education[activeTab].degree}
                </h3>

                <p className="text-primary font-mono text-sm mt-1">
                  {education[activeTab].institute}
                </p>

                <p className="text-muted-foreground font-mono text-xs sm:text-sm mt-1 mb-5">
                  {education[activeTab].period}
                </p>

                <ul className="space-y-3 sm:space-y-4">
                  {education[activeTab].points.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex gap-3 text-sm sm:text-base text-muted-foreground"
                    >
                      <span className="text-primary mt-1">▹</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
