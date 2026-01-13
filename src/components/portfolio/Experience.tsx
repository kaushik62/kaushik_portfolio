import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const experiences = [
  {
    company: "AeroVerve Travels",
    title: "Web Developer Intern",
    period: "May 2025 - December 2025",
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
    period: "November 2024 - Present",
    points: [
      "Planned and executed institute-level entrepreneurship and innovation events.",
      "Collaborated with startups, incubators, and industry leaders for workshops and sessions.",
      "Managed promotions, registrations, and on-ground event operations.",
      "Strengthened the campus entrepreneurial ecosystem through outreach initiatives.",
    ],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      id="experience"
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
              02.
            </span>
            <span className="text-lg sm:text-xl md:text-2xl">
              Where I've Worked
            </span>
            <span className="hidden md:block h-px bg-border flex-1 max-w-xs" />
          </h2>

          {/* Content */}
          <div className="mt-8 flex flex-col md:flex-row gap-6 md:gap-10">
            {/* Tabs */}
            <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-border scrollbar-hide">
              {experiences.map((exp, index) => (
                <button
                  key={exp.company}
                  onClick={() => setActiveTab(index)}
                  className={`min-w-[180px] md:min-w-0 px-4 py-3 text-left font-mono text-sm transition-all duration-300 ${
                    activeTab === index
                      ? "text-primary bg-primary/10 border-b-2 md:border-b-0 md:border-l-2 border-primary"
                      : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {exp.company}
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
                  {experiences[activeTab].title}{" "}
                  <span className="text-primary">
                    @ {experiences[activeTab].company}
                  </span>
                </h3>

                <p className="text-muted-foreground font-mono text-xs sm:text-sm mt-1 mb-5">
                  {experiences[activeTab].period}
                </p>

                <ul className="space-y-3 sm:space-y-4">
                  {experiences[activeTab].points.map((point, idx) => (
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

export default Experience;