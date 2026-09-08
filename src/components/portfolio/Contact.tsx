import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Linkedin, ArrowRight } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-24 sm:py-28 md:py-36 px-4 sm:px-6 overflow-hidden"
    >
      {/* Background Gradients */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 
          w-[300px] h-[300px] sm:w-[450px] sm:h-[450px]
          bg-primary/15 blur-[130px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/3
          w-[250px] h-[250px] sm:w-[350px] sm:h-[350px]
          bg-indigo-500/15 blur-[120px] rounded-full" />
      </div>

      {/* Dot grid */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, hsl(174 72% 56%) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-5xl mx-auto"
      >
        {/* Gradient border wrapper */}
        <div
          className="relative rounded-3xl p-[1.5px]"
          style={{
            background:
              "linear-gradient(135deg, hsl(174 72% 56% / 0.6), hsl(199 89% 48% / 0.4), hsl(258 90% 66% / 0.5))",
          }}
        >
          <div className="rounded-[22px] bg-background/80 backdrop-blur-xl px-6 sm:px-10 md:px-14 py-10 sm:py-14 md:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              
              {/* Left — Headline */}
              <div className="text-center lg:text-left">
                {/* Availability badge */}
                <div className="inline-flex items-center justify-center lg:justify-start gap-2
                  px-4 py-2 mb-6 rounded-full text-xs sm:text-sm font-mono
                  border border-primary/30 bg-primary/10 text-primary"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                  </span>
                  Available for Opportunities
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
                  Let's Build{" "}
                  <span className="block">
                    <span className="bg-gradient-to-r from-primary to-indigo-400 bg-clip-text text-transparent">
                      Something Remarkable
                    </span>
                  </span>
                </h2>

                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
                  I'm a Full Stack Developer focused on crafting scalable,
                  high-performance web applications with exceptional user experience.
                  If you're building something meaningful, I'd love to be part of it.
                </p>
              </div>

              {/* Right — CTA Card */}
              <div className="relative w-full max-w-md mx-auto lg:max-w-none">
                <div className="rounded-2xl border border-border bg-background/60 backdrop-blur-sm p-6 sm:p-8 shadow-2xl">
                  <p className="uppercase tracking-widest text-xs text-muted-foreground mb-2 font-mono">
                    Contact
                  </p>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                    Start a Conversation
                  </h3>
                  <p className="text-muted-foreground text-sm mb-7 leading-relaxed">
                    Whether it's a job opportunity, freelance project, or
                    collaboration — I usually respond within 24 hours.
                  </p>

                  {/* Primary CTA — Email */}
                  <motion.a
                    href="mailto:kaushik62041@gmail.com"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex w-full items-center justify-center gap-2
                      px-6 py-4 rounded-xl mb-3
                      text-base font-semibold
                      bg-gradient-to-r from-primary to-teal-500
                      text-slate-900
                      shadow-[0_8px_30px_-8px_rgba(45,212,191,0.6)]
                      hover:shadow-[0_10px_40px_-8px_rgba(45,212,191,0.8)]
                      transition-all duration-200"
                  >
                    <Mail size={18} />
                    Say Hello 👋
                    <ArrowRight size={16} className="ml-auto" />
                  </motion.a>

                  {/* Secondary CTAs */}
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    <motion.a
                      href="https://www.linkedin.com/in/kaushikgupta256/"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="flex items-center justify-center gap-2
                        px-4 py-3 rounded-xl text-sm font-medium
                        border border-border text-muted-foreground
                        hover:text-primary hover:border-primary/40 hover:bg-primary/5
                        transition-all duration-200"
                    >
                      <Linkedin size={16} />
                      LinkedIn
                    </motion.a>
                    <motion.a
                      href="https://github.com/kaushik62"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="flex items-center justify-center gap-2
                        px-4 py-3 rounded-xl text-sm font-medium
                        border border-border text-muted-foreground
                        hover:text-primary hover:border-primary/40 hover:bg-primary/5
                        transition-all duration-200"
                    >
                      <Github size={16} />
                      GitHub
                    </motion.a>
                  </div>

                  <p className="text-center text-xs text-muted-foreground">
                    No spam. Just meaningful conversations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
