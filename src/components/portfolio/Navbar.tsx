import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollProgress from "./ScrollProgress";

const navItems = [
  { label: "About", href: "#about", id: "about" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Education", href: "#education", id: "education" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Contact", href: "#contact", id: "contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to section
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      e.preventDefault();

      const section = document.getElementById(id);

      if (!section) {
        console.warn(`Section #${id} not found`);
        return;
      }

      // Close mobile menu first
      setMobileMenuOpen(false);

      // Wait for menu animation/state update
      requestAnimationFrame(() => {
        const navbar = document.querySelector("nav");

        const navbarHeight = navbar
          ? navbar.getBoundingClientRect().height
          : 80;

        const sectionTop =
          section.getBoundingClientRect().top +
          window.scrollY -
          navbarHeight -
          20;

        window.scrollTo({
          top: Math.max(0, sectionTop),
          behavior: "smooth",
        });

        // Update URL hash without triggering browser's default jump
        window.history.pushState(null, "", `#${id}`);
      });
    },
    []
  );

  // Scroll spy
  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const handleScrollSpy = () => {
      const navbar = document.querySelector("nav");

      const navbarHeight = navbar
        ? navbar.getBoundingClientRect().height
        : 80;

      const scrollPosition =
        window.scrollY + navbarHeight + window.innerHeight * 0.2;

      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionBottom
        ) {
          currentSection = section.id;
        }
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    handleScrollSpy();

    window.addEventListener("scroll", handleScrollSpy, {
      passive: true,
    });

    window.addEventListener("resize", handleScrollSpy);

    return () => {
      window.removeEventListener("scroll", handleScrollSpy);
      window.removeEventListener("resize", handleScrollSpy);
    };
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Prevent background scrolling while mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <ScrollProgress />

      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass-card py-3 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
            : "py-5"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();

              setMobileMenuOpen(false);

              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });

              window.history.pushState(null, "", "#");
            }}
            className="text-xl font-bold font-mono gradient-text hover:opacity-80 transition-opacity"
          >
            {"<Kaushik Gupta />"}
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-2">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.id;

              return (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: -16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.08 + 0.3,
                  }}
                  className="relative"
                >
                  <a
                    href={item.href}
                    onClick={(e) =>
                      handleNavClick(e, item.id)
                    }
                    className={`relative px-3 py-2 rounded-lg font-medium text-sm transition-colors duration-200 block ${
                      isActive
                        ? "text-primary"
                        : "text-muted-foreground hover:text-primary"
                    }`}
                  >
                    <span className="font-mono text-xs text-primary/60 mr-1">
                      0{index + 1}.
                    </span>

                    {item.label}

                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-lg bg-primary/10 border border-primary/20 -z-10"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                  </a>
                </motion.li>
              );
            })}

            {/* Resume */}
            <motion.li
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <a
                href="https://drive.google.com/file/d/1dqPjIIEhWTRFCBTtgn3fcMscZQmd2QNB/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 px-4 py-2 border border-primary/50 text-primary rounded-lg hover:bg-primary/10 hover:border-primary hover:scale-[1.04] active:scale-[0.98] transition-all duration-200 text-sm font-medium"
              >
                Resume
              </a>
            </motion.li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="relative z-[60] md:hidden min-h-11 min-w-11 p-2 rounded-lg text-foreground hover:text-primary hover:bg-primary/5 transition-colors touch-manipulation flex items-center justify-center"
            onClick={() =>
              setMobileMenuOpen((prev) => !prev)
            }
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={
              mobileMenuOpen ? "Close menu" : "Open menu"
            }
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-navigation"
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
              className="md:hidden overflow-hidden"
            >
              <div className="glass-card mt-2 mx-4 rounded-xl border border-border/50">
                <ul className="py-4 px-6 space-y-1">
                  {navItems.map((item, index) => {
                    const isActive =
                      activeSection === item.id;

                    return (
                      <li key={item.id}>
                        <a
                          href={item.href}
                          onClick={(e) =>
                            handleNavClick(e, item.id)
                          }
                          className={`flex items-center gap-2 py-3 px-3 rounded-lg transition-colors duration-200 ${
                            isActive
                              ? "text-primary bg-primary/10"
                              : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                          }`}
                        >
                          <span className="text-primary font-mono text-xs">
                            0{index + 1}.
                          </span>

                          <span className="font-medium text-sm">
                            {item.label}
                          </span>
                        </a>
                      </li>
                    );
                  })}

                  {/* Mobile Resume */}
                  <li className="pt-2">
                    <a
                      href="https://drive.google.com/file/d/1dqPjIIEhWTRFCBTtgn3fcMscZQmd2QNB/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() =>
                        setMobileMenuOpen(false)
                      }
                      className="block w-full text-center py-2.5 px-3 rounded-lg border border-primary/40 text-primary text-sm font-medium hover:bg-primary/10 transition-colors"
                    >
                      Resume
                    </a>
                  </li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;