import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28">
      <div className="mx-auto max-w-6xl w-full">
        {/* Mobile-first container */}
        <div className="max-w-3xl mx-auto text-center sm:text-left">
          {/* Intro */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-primary font-mono text-xs sm:text-sm mb-3"
          >
            Hi, my name is
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-3"
          >
            Kaushik Gupta
          </motion.h1>

          {/* Role */}
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="text-base sm:text-xl md:text-2xl font-semibold text-muted-foreground mb-5"
          >
            Full-Stack MERN Developer
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed mb-8 px-2 sm:px-0"
          >
            I build clean, accessible, and performance-driven web applications,
            transforming ideas into impactful digital products with a strong
            focus on user experience, scalability, and maintainable
            architecture.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center sm:justify-start"
          >
            <a
              href="#projects"
              className="inline-flex justify-center items-center px-6 py-3 sm:px-8 sm:py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:scale-[1.03] hover:glow-effect transition-all duration-300"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-flex justify-center items-center px-6 py-3 sm:px-8 sm:py-4 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-all duration-300"
            >
              Get In Touch
            </a>
            <a
              href="https://drive.google.com/file/d/1VMAi9M0pDM91VNeELTkPo3dGfVgYEBER/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-8 py-4
             rounded-xl font-semibold tracking-wide text-white
             bg-gradient-to-br from-rose-600 via-pink-600 to-fuchsia-600
             border border-pink-400/50
             shadow-[0_10px_28px_-8px_rgba(236,72,153,0.55)]
             hover:scale-[1.06]
             transition-all duration-300 ease-out
             overflow-hidden"
            >
              {/* subtle highlight sweep */}
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <span className="relative flex items-center gap-2">
                <span className="text-lg">📄</span>
                View Resume
              </span>
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex gap-6 mt-8 sm:mt-10 justify-center sm:justify-start"
          >
            {[
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
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300"
              >
                <Icon size={20} className="sm:w-6 sm:h-6" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
