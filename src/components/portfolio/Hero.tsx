import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { resume_link } from "./resume";
import {
  ArrowDown,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  FileText,
} from "lucide-react";

const PARTICLES = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  x: (i * 37 + 13) % 100,
  y: (i * 53 + 17) % 100,
  size: (i % 3) + 1,
  duration: 12 + (i % 7) * 2,
  delay: (i % 8) * 0.7,
}));

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/kaushik62",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/kaushikgupta256/",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:kaushik62041@gmail.com",
    label: "Email",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut" as const,
    },
  },
};

const Hero = () => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex min-h-[90svh] items-center overflow-hidden px-4 py-24 sm:min-h-screen sm:px-6 lg:px-8"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.08] blur-[130px] sm:h-[600px] sm:w-[600px]" />

        <div className="absolute -right-24 top-1/4 h-72 w-72 rounded-full bg-violet-500/[0.06] blur-[110px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {!shouldReduceMotion &&
          PARTICLES.map((particle) => (
            <motion.span
              key={particle.id}
              className="absolute rounded-full bg-primary/30"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: particle.size,
                height: particle.size,
              }}
              animate={{
                y: [0, -18, 0],
                opacity: [0.2, 0.65, 0.2],
              }}
              transition={{
                duration: particle.duration,
                delay: particle.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
      </div>

      <div className="relative mx-auto w-full max-w-6xl">
        <motion.div
          className="mx-auto w-full max-w-4xl text-center sm:mx-0 sm:text-left"
          variants={containerVariants}
          initial={shouldReduceMotion ? false : "hidden"}
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.p
            variants={itemVariants}
            className="mb-4 text-sm font-medium tracking-wide text-muted-foreground sm:text-base"
          >
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="w-full whitespace-nowrap text-[clamp(1.65rem,8.2vw,5.5rem)] font-bold leading-[1.1] tracking-[-0.04em] text-foreground"
          >
            Kaushik{" "}
            <span className="gradient-text">Gupta</span>
            <span className="text-primary">.</span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="mt-6 text-xl font-semibold tracking-tight sm:text-2xl md:text-3xl"
          >
            <span className="gradient-text">
              Full Stack Software Developer
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-muted-foreground sm:mx-0 sm:text-base sm:leading-8 md:text-lg"
          >
            I build full-stack applications, scalable backend systems, and
            AI-powered solutions that solve real-world problems. I enjoy
            turning ideas into reliable products through clean code, thoughtful
            architecture, and practical engineering.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-9 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap sm:justify-start"
          >
            <a
              href="#projects"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Explore My Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-border bg-card/70 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <Mail className="h-4 w-4" />
              Get In Touch
            </a>

            <a
              href={resume_link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-border bg-transparent px-6 py-3 text-sm font-semibold text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <FileText className="h-4 w-4" />
              View Resume
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-9 flex items-center justify-center gap-3 sm:justify-start"
          >
            <span className="mr-1 text-xs font-medium text-muted-foreground">
              Find me on
            </span>

            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={label === "Email" ? undefined : "_blank"}
                rel={
                  label === "Email" ? undefined : "noopener noreferrer"
                }
                aria-label={label}
                title={label}
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border/70 bg-card/60 text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/5 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <Icon className="h-[18px] w-[18px]" />
              </a>
            ))}
          </motion.div>
        </motion.div>         
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About Me"
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: shouldReduceMotion ? 0 : 1.2,
          duration: 0.5,
        }}
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:bottom-8"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.2em]">
          Scroll to explore
        </span>

        {!shouldReduceMotion && (
          <ArrowDown className="h-4 w-4 animate-bounce" />
        )}
      </motion.a>
    </section>
  );
};

export default Hero;