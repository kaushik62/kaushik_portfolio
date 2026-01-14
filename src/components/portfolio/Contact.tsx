import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
          w-[260px] h-[260px] sm:w-[360px] sm:h-[360px] md:w-[420px] md:h-[420px] 
          bg-primary/25 blur-[120px] rounded-full" />

        <div className="absolute bottom-1/4 right-1/2 translate-x-1/2 
          w-[260px] h-[260px] sm:w-[360px] sm:h-[360px] md:w-[420px] md:h-[420px] 
          bg-indigo-500/20 blur-[120px] rounded-full" />
      </div>

      {/* Subtle Grid */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.035]
        bg-[linear-gradient(to_right,theme(colors.border)_1px,transparent_1px),
        linear-gradient(to_bottom,theme(colors.border)_1px,transparent_1px)]
        bg-[size:56px_56px]"
      />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="max-w-6xl mx-auto"
      >
        {/* Gradient Border */}
        <div className="relative rounded-3xl p-[1.5px] 
          bg-gradient-to-r from-primary/60 via-indigo-500/40 to-purple-500/60"
        >
          <div
            className="rounded-[22px] sm:rounded-[26px]
            bg-background/75 backdrop-blur-xl
            px-6 sm:px-10 md:px-16
            py-10 sm:py-14 md:py-20"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
              
              {/* Left */}
              <div className="text-center lg:text-left">
                <span
                  className="inline-flex items-center justify-center lg:justify-start gap-2
                  px-3 py-1.5 sm:px-4 sm:py-1.5 mb-5 sm:mb-6
                  rounded-full text-xs sm:text-sm font-mono
                  border border-primary/30 bg-primary/10 text-primary"
                >
                  <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                  Available for Opportunities
                </span>

                <h2
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                  font-bold leading-tight mb-6 sm:mb-8"
                >
                  Let’s Build <br className="hidden sm:block" />
                  <span
                    className="bg-gradient-to-r from-primary to-indigo-400
                    bg-clip-text text-transparent"
                  >
                    Something Remarkable
                  </span>
                </h2>

                <p
                  className="text-muted-foreground text-base sm:text-lg md:text-xl
                  leading-relaxed max-w-xl mx-auto lg:mx-0"
                >
                  I’m a Full Stack Developer focused on crafting scalable,
                  high-performance web applications with exceptional user
                  experience. If you’re building something meaningful,
                  I’d love to be part of it.
                </p>
              </div>

              {/* Right */}
              <div className="relative w-full max-w-md mx-auto lg:max-w-none">
                <div className="rounded-2xl border border-border bg-background/85 
                  p-6 sm:p-8 md:p-10 shadow-2xl text-center"
                >
                  <p className="uppercase tracking-widest text-xs text-muted-foreground mb-3">
                    Contact
                  </p>

                  <h3 className="text-xl sm:text-2xl font-semibold mb-4">
                    Start a Conversation
                  </h3>

                  <p className="text-muted-foreground text-sm sm:text-base mb-8">
                    Whether it’s a job opportunity, freelance project, or
                    collaboration — I usually respond within 24 hours.
                  </p>

                  <motion.a
                    href="mailto:kaushik62041@gmail.com"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.96 }}
                    className="inline-flex w-full justify-center items-center
                      px-8 py-4 sm:py-5 rounded-xl
                      text-base sm:text-lg font-semibold
                      bg-primary text-primary-foreground
                      shadow-[0_16px_50px_-14px_rgba(var(--primary),0.8)]
                      transition-all"
                  >
                    Say Hello 👋
                  </motion.a>

                  {/* Micro Trust Text */}
                  <p className="mt-4 text-xs text-muted-foreground">
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
