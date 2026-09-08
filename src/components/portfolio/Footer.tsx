import { Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";

const socialLinks = [
  { icon: Github, href: "https://github.com/kaushik62", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/kaushikgupta256/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:kaushik62041@gmail.com", label: "Email" },
];

const SocialIcon = ({ icon: Icon, href, label }: { icon: React.ElementType; href: string; label: string }) => {
  const [tooltip, setTooltip] = useState(false);

  return (
    <div className="relative group">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        onMouseEnter={() => setTooltip(true)}
        onMouseLeave={() => setTooltip(false)}
        className="flex items-center justify-center w-9 h-9 rounded-lg
          text-muted-foreground border border-transparent
          hover:text-primary hover:border-primary/30 hover:bg-primary/5
          hover:-translate-y-1 transition-all duration-300"
      >
        <Icon size={18} />
      </a>
      {tooltip && (
        <div className="absolute -top-9 left-1/2 -translate-x-1/2 
          px-2.5 py-1 rounded-md bg-foreground text-background text-xs font-medium
          whitespace-nowrap pointer-events-none z-10 shadow-lg">
          {label}
        </div>
      )}
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="py-10 px-6">
      {/* Gradient divider */}
      <div className="container mx-auto max-w-5xl">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-10" />

        {/* Footer content */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left — Logo */}
          <a href="#" className="font-mono text-sm gradient-text font-bold hover:opacity-80 transition-opacity">
            {"<KG />"}
          </a>

          {/* Center — Copyright */}
          <p className="text-muted-foreground text-xs font-mono text-center">
            Designed & Built by{" "}
            <a
              href="https://github.com/kaushik62"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Kaushik Gupta
            </a>{" "}
            · © {new Date().getFullYear()}
          </p>

          {/* Right — Social Icons (mobile: shows below) */}
          <div className="flex items-center gap-2">
            {socialLinks.map(({ icon, href, label }) => (
              <SocialIcon key={label} icon={icon} href={href} label={label} />
            ))}
          </div>
        </div>
      </div>

      {/* Desktop side elements */}
      <div className="hidden md:flex fixed bottom-0 left-10 flex-col items-center gap-4
        after:content-[''] after:w-px after:h-24 after:bg-gradient-to-b after:from-muted-foreground after:to-transparent">
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            title={label}
            className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300 p-1"
          >
            <Icon size={18} />
          </a>
        ))}
      </div>

      <div className="hidden md:flex fixed bottom-0 right-10 flex-col items-center gap-6
        after:content-[''] after:w-px after:h-24 after:bg-gradient-to-b after:from-muted-foreground after:to-transparent">
        <a
          href="mailto:kaushik62041@gmail.com"
          className="text-muted-foreground hover:text-primary transition-colors font-mono text-xs
            [writing-mode:vertical-rl] tracking-wider"
        >
          kaushik62041@gmail.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
