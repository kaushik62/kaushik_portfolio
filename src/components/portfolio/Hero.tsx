import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      
      {/* Premium Background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-[#020617] via-[#020617] to-[#020617]" />

      {/* Radial Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] md:w-[520px] md:h-[520px]
          bg-teal-400/20 blur-[140px] rounded-full" />
      </div>

      <div className="w-full max-w-6xl">
        <div className="max-w-3xl mx-auto text-center sm:text-left">

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-teal-400 font-mono text-xs sm:text-sm tracking-wide mb-4"
          >
            Hi, my name is
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
              font-bold leading-tight text-slate-100 mb-4"
          >
            Kaushik Gupta
          </motion.h1>

          {/* Role */}
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-base sm:text-xl md:text-2xl 
              font-semibold text-slate-400 mb-6"
          >
            Full-Stack MERN Developer
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-slate-400 text-sm sm:text-base md:text-lg
              leading-relaxed max-w-2xl mx-auto sm:mx-0 mb-10"
          >
            I build scalable, high-performance web applications with a strong
            focus on clean architecture, accessibility, and real-world user
            experience — turning complex ideas into reliable digital products.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start"
          >
            <a
              href="#projects"
              className="px-8 py-4 rounded-xl font-semibold
                bg-teal-400 text-slate-900
                shadow-[0_14px_40px_-12px_rgba(45,212,191,0.6)]
                hover:scale-[1.05] transition-all duration-300"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="px-8 py-4 rounded-xl font-semibold
                border border-teal-400/40 text-teal-300
                hover:bg-teal-400/10 transition-all duration-300"
            >
              Get In Touch
            </a>

            <a
              href="https://drive.google.com/file/d/1Oj9Ibc0mmoQr8imiXH5ruBTc57PArHHt/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl font-semibold
                text-slate-100
                bg-gradient-to-br from-slate-800 to-slate-900
                border border-slate-700/60
                hover:border-teal-400/50
                hover:scale-[1.04]
                transition-all duration-300"
            >
              📄 View Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65 }}
            className="flex gap-6 mt-10 justify-center sm:justify-start"
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
                className="text-slate-500 hover:text-teal-400
                  hover:-translate-y-1 transition-all duration-300"
              >
                <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;