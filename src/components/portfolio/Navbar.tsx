import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollProgress from "./ScrollProgress";

const navItems = [
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Education", id: "education" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

const RESUME_URL =
  "https://drive.google.com/file/d/1dqPjIIEhWTRFCBTtgn3fcMscZQmd2QNB/view?usp=sharing";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // --------------------------------------------------
  // Detect navbar scroll state
  // --------------------------------------------------
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // --------------------------------------------------
  // Active section detection
  // --------------------------------------------------
  useEffect(() => {
    const handleActiveSection = () => {
      const scrollPosition = window.scrollY + 150;

      let currentSection = "";

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);

        if (!section) return;

        const sectionTop = section.offsetTop;
        const sectionBottom =
          sectionTop + section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionBottom
        ) {
          currentSection = item.id;
        }
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    handleActiveSection();

    window.addEventListener(
      "scroll",
      handleActiveSection,
      { passive: true }
    );

    window.addEventListener(
      "resize",
      handleActiveSection
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleActiveSection
      );

      window.removeEventListener(
        "resize",
        handleActiveSection
      );
    };
  }, []);

  // --------------------------------------------------
  // Navigation function
  // --------------------------------------------------
  const navigateToSection = (id: string) => {
    const section = document.getElementById(id);

    if (!section) {
      console.error(
        `Navigation error: #${id} section not found`
      );
      return;
    }

    // Close mobile menu
    setMobileMenuOpen(false);

    // Calculate navbar height
    const navbar = document.querySelector("nav");

    const navbarHeight = navbar
      ? navbar.getBoundingClientRect().height
      : 80;

    // Calculate exact scroll position
    const sectionPosition =
      section.getBoundingClientRect().top +
      window.scrollY -
      navbarHeight -
      20;

    // Scroll
    window.scrollTo({
      top: Math.max(0, sectionPosition),
      behavior: "smooth",
    });

    // Update active state immediately
    setActiveSection(id);

    // Update URL without browser jumping
    window.history.pushState(
      null,
      "",
      `#${id}`
    );
  };

  // --------------------------------------------------
  // Handle nav click
  // --------------------------------------------------
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    e.stopPropagation();

    navigateToSection(id);
  };

  // --------------------------------------------------
  // Logo click
  // --------------------------------------------------
  const handleLogoClick = (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();

    setMobileMenuOpen(false);
    setActiveSection("");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    window.history.pushState(
      null,
      "",
      window.location.pathname
    );
  };

  // --------------------------------------------------
  // Close menu when clicking outside
  // --------------------------------------------------
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, [mobileMenuOpen]);

  // --------------------------------------------------
  // Prevent background scrolling
  // --------------------------------------------------
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

      {/* ================= NAVBAR ================= */}
      <motion.nav
        initial={{
          y: -100,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled
            ? "glass-card py-3 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
            : "py-5"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* ================= LOGO ================= */}
          <a
            href="/"
            onClick={handleLogoClick}
            className="text-xl font-bold font-mono gradient-text hover:opacity-80 transition-opacity"
          >
            {"<Kaushik Gupta />"}
          </a>

          {/* ================= DESKTOP NAV ================= */}
          <ul className="hidden md:flex items-center gap-2">
            {navItems.map((item, index) => {
              const isActive =
                activeSection === item.id;

              return (
                <motion.li
                  key={item.id}
                  initial={{
                    opacity: 0,
                    y: -16,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay:
                      index * 0.08 + 0.3,
                  }}
                >
                  <a
                    href={`#${item.id}`}
                    onClick={(e) =>
                      handleNavClick(
                        e,
                        item.id
                      )
                    }
                    className={`relative flex items-center px-3 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                      isActive
                        ? "text-primary bg-primary/10 border border-primary/20"
                        : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                    }`}
                  >
                    <span className="font-mono text-xs text-primary/60 mr-1">
                      0{index + 1}.
                    </span>

                    {item.label}
                  </a>
                </motion.li>
              );
            })}

            {/* Resume */}
            <motion.li
              initial={{
                opacity: 0,
                y: -16,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.7,
              }}
            >
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 px-4 py-2 border border-primary/50 text-primary rounded-lg hover:bg-primary/10 hover:border-primary hover:scale-[1.04] active:scale-[0.98] transition-all duration-200 text-sm font-medium"
              >
                Resume
              </a>
            </motion.li>
          </ul>

          {/* ================= MOBILE BUTTON ================= */}
          <button
            type="button"
            aria-label={
              mobileMenuOpen
                ? "Close menu"
                : "Open menu"
            }
            aria-expanded={mobileMenuOpen}
            onClick={() =>
              setMobileMenuOpen(
                (prev) => !prev
              )
            }
            className="md:hidden relative z-[120] flex items-center justify-center w-11 h-11 rounded-lg text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
          >
            {mobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </motion.nav>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              onClick={() =>
                setMobileMenuOpen(false)
              }
              className="fixed inset-0 z-[90] bg-black/40 md:hidden"
            />

            {/* Menu */}
            <motion.div
              initial={{
                opacity: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.2,
              }}
              className="fixed top-[80px] left-4 right-4 z-[110] md:hidden"
            >
              <div className="glass-card rounded-xl border border-border/50 shadow-xl overflow-hidden">
                <ul className="p-4 space-y-1">
                  {navItems.map(
                    (item, index) => {
                      const isActive =
                        activeSection ===
                        item.id;

                      return (
                        <li
                          key={item.id}
                        >
                          <a
                            href={`#${item.id}`}
                            onClick={(e) =>
                              handleNavClick(
                                e,
                                item.id
                              )
                            }
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                              isActive
                                ? "text-primary bg-primary/10"
                                : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                            }`}
                          >
                            <span className="font-mono text-xs text-primary/70">
                              0{index + 1}.
                            </span>

                            <span className="font-medium text-sm">
                              {item.label}
                            </span>
                          </a>
                        </li>
                      );
                    }
                  )}

                  {/* Resume */}
                  <li className="pt-3">
                    <a
                      href={RESUME_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() =>
                        setMobileMenuOpen(
                          false
                        )
                      }
                      className="block w-full text-center py-3 px-4 rounded-lg border border-primary/40 text-primary text-sm font-medium hover:bg-primary/10 transition-all"
                    >
                      Resume
                    </a>
                  </li>
                </ul>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;