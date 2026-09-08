import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { Github, Linkedin, Mail } from "lucide-react";

const ROLES = [
  "Full-Stack MERN Developer",
  "Next.js Enthusiast",
  "UI/UX Focused Engineer",
  "Open Source Contributor",
];

const PARTICLES = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 2.5 + 1,
  duration: Math.random() * 12 + 8,
  delay: Math.random() * 8,
}));

const TypewriterText = ({ texts }: { texts: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[currentIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (displayText.length < current.length) {
        timeout = setTimeout(() => {
          setDisplayText(current.slice(0, displayText.length + 1));
        }, 60);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2200);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(current.slice(0, displayText.length - 1));
        }, 35);
      } else {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex, texts]);

  return (
    <span>
      <span className="gradient-text">{displayText}</span>
      <span className="animate-blink-cursor text-primary ml-0.5">|</span>
    </span>
  );
};

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8"
      ref={ref}
    >
      {/* Dark background */}
      <div className="absolute inset-0 -z-20 bg-[#020617]" />

      {/* Radial Glow — primary */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10
        w-[500px] h-[500px] md:w-[700px] md:h-[700px]
        bg-teal-400/10 blur-[150px] rounded-full pointer-events-none" />

      {/* Secondary indigo glow */}
      <div className="absolute top-1/4 right-1/4 -z-10
        w-[300px] h-[300px]
        bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Particles */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {PARTICLES.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-teal-400/30 animate-particle"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle, hsl(174 72% 56%) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="w-full max-w-6xl">
        <motion.div
          className="max-w-3xl mx-auto text-center sm:text-left"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Greeting */}
          <motion.p
            variants={itemVariants}
            className="text-teal-400 font-mono text-xs sm:text-sm tracking-widest mb-4 uppercase"
          >
            👋 Hi, my name is
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl
              font-bold leading-[1.05] text-slate-100 mb-5"
          >
            Kaushik{" "}
            <span className="gradient-text">Gupta</span>
          </motion.h1>

          {/* Typewriter Role */}
          <motion.h2
            variants={itemVariants}
            className="text-lg sm:text-2xl md:text-3xl font-semibold text-slate-400 mb-6 min-h-[2.5rem]"
          >
            <TypewriterText texts={ROLES} />
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-slate-400 text-sm sm:text-base md:text-lg
              leading-relaxed max-w-2xl mx-auto sm:mx-0 mb-10"
          >
            I build scalable, high-performance web applications with a strong
            focus on clean architecture, accessibility, and real-world user
            experience — turning complex ideas into reliable digital products.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start"
          >
            <a
              href="#projects"
              className="relative px-8 py-4 rounded-xl font-semibold
                bg-teal-400 text-slate-900
                shadow-[0_14px_40px_-12px_rgba(45,212,191,0.6)]
                hover:shadow-[0_14px_50px_-8px_rgba(45,212,191,0.8)]
                hover:scale-[1.05] active:scale-[0.98] transition-all duration-300
                overflow-hidden group"
            >
              <span className="relative z-10">View My Work</span>
              <span className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            <a
              href="#contact"
              className="px-8 py-4 rounded-xl font-semibold
                border border-teal-400/40 text-teal-300
                hover:bg-teal-400/10 hover:border-teal-400/70
                hover:scale-[1.04] active:scale-[0.98] transition-all duration-300"
            >
              Get In Touch
            </a>

            <a
              href="https://drive.google.com/file/d/1dqPjIIEhWTRFCBTtgn3fcMscZQmd2QNB/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl font-semibold
                text-slate-100
                bg-gradient-to-br from-slate-800 to-slate-900
                border border-slate-700/60
                hover:border-teal-400/50 hover:scale-[1.04]
                active:scale-[0.98] transition-all duration-300"
            >
              📄 View Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex gap-6 mt-10 justify-center sm:justify-start"
          >
            {[
              { icon: Github, href: "https://github.com/kaushik62", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/kaushikgupta256/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:kaushik62041@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className="p-2.5 rounded-lg text-slate-500 
                  border border-transparent
                  hover:text-teal-400 hover:border-teal-400/30 hover:bg-teal-400/5
                  hover:-translate-y-1 transition-all duration-300"
              >
                <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-slate-600 font-mono tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5 text-teal-400/60 animate-bounce-down" />
      </motion.div>
    </section>
  );
};

export default Hero;