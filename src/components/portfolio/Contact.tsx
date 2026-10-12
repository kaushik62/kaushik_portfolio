import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import {
  Mail,
  Github,
  Linkedin,
  ArrowUpRight,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

const contactLinks = [
  {
    label: "LinkedIn",
    description: "Connect professionally",
    href: "https://www.linkedin.com/in/kaushikgupta256/",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    description: "Explore my projects",
    href: "https://github.com/kaushik62",
    icon: Github,
  },
];

const Contact = () => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-80px",
  });
  const shouldReduceMotion = useReducedMotion();

  const entrance = (delay = 0) => ({
    initial: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 18,
    },
    animate: isInView
      ? { opacity: 1, y: 0 }
      : { opacity: 0, y: shouldReduceMotion ? 0 : 18 },
    transition: {
      duration: shouldReduceMotion ? 0 : 0.55,
      delay: shouldReduceMotion ? 0 : delay,
      ease: "easeOut" as const,
    },
  });

  return (
    <section
      id="contact"
      ref={ref}
      className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-1/2 top-1/3 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-primary/[0.07] blur-[110px] sm:h-[450px] sm:w-[450px]" />

        <div className="absolute bottom-0 right-0 h-[250px] w-[250px] rounded-full bg-violet-500/[0.05] blur-[100px] sm:h-[350px] sm:w-[350px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          {...entrance()}
          className="mb-12 sm:mb-16"
        >
          <div className="mb-3 flex items-center gap-3">
            <span className="font-mono text-sm text-primary">05</span>
            <span className="h-px w-8 bg-primary/50" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Get In Touch
            </span>
          </div>

          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Let&apos;s Connect<span className="text-primary">.</span>
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
            Have an opportunity, an interesting project, or an idea worth
            exploring? I&apos;d be happy to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5 lg:gap-8">
          <motion.div
            {...entrance(0.1)}
            className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/70 bg-card p-6 sm:p-9 lg:col-span-3 lg:p-10"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/[0.06] blur-3xl"
            />

            <div className="relative">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-2 text-xs font-medium text-primary">
                <MessageCircle className="h-3.5 w-3.5" />
                Open to meaningful opportunities
              </div>

              <h3 className="max-w-lg text-2xl font-semibold leading-tight tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                Have something in mind?
                <span className="mt-1 block text-muted-foreground">
                  Let&apos;s talk about it.
                </span>
              </h3>

              <p className="mt-5 max-w-lg text-sm leading-7 text-muted-foreground sm:text-base">
                I&apos;m interested in software engineering, full-stack
                development, and AI-powered business automation. Whether
                you&apos;re hiring, building a product, or exploring a
                collaboration, feel free to reach out.
              </p>
            </div>

            <div className="relative mt-9">
              <a
                href="mailto:kaushik62041@gmail.com"
                className="group inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:w-auto"
              >
                <Mail className="h-4 w-4" />
                Send Me an Email
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <p className="mt-4 break-all text-xs text-muted-foreground">
                kaushik62041@gmail.com
              </p>
            </div>
          </motion.div>

          <motion.div
            {...entrance(0.2)}
            className="flex flex-col rounded-2xl border border-border/70 bg-card p-6 sm:p-8 lg:col-span-2"
          >
            <div className="mb-6">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Find me online
              </p>

              <h3 className="mt-2 text-xl font-semibold text-foreground">
                Let&apos;s stay connected
              </h3>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Explore my work or connect with me professionally.
              </p>
            </div>

            <div className="space-y-3">
              {contactLinks.map(({ label, description, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${label}: ${description}`}
                  className="group flex items-center gap-4 rounded-xl border border-border/70 bg-background/50 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-foreground">
                      {label}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {description}
                    </p>
                  </div>

                  <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </a>
              ))}
            </div>

            <div className="mt-auto pt-7">
              <div className="h-px bg-border/70" />
              <p className="pt-5 text-xs leading-5 text-muted-foreground">
                I welcome thoughtful conversations, professional connections,
                and opportunities to build useful products.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;