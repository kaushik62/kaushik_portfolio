import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/kaushik62", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/kaushikgupta256/",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:kaushik62041@gmail.com", label: "Email" },
];

const Footer = () => {
  return (
    <footer className="py-12 px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Mobile Social Links */}
        <div className="flex justify-center gap-6 mb-8 md:hidden">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label={label}
            >
              <Icon size={20} />
            </a>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://github.com/kaushik62"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors text-sm font-mono"
          >
            <p>Designed & Built by Kaushik Gupta</p>
            <p className="mt-2">
              © {new Date().getFullYear()} All Rights Reserved
            </p>
          </a>
        </div>
      </div>

      {/* Desktop Side Elements */}
      <div className="hidden md:flex fixed bottom-0 left-10 flex-col items-center gap-6 after:content-[''] after:w-px after:h-24 after:bg-muted-foreground">
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300"
            aria-label={label}
          >
            <Icon size={20} />
          </a>
        ))}
      </div>

      <div className="hidden md:flex fixed bottom-0 right-10 flex-col items-center gap-6 after:content-[''] after:w-px after:h-24 after:bg-muted-foreground">
        <a
          href="mailto:kaushik62041@gmail.com"
          className="text-muted-foreground hover:text-primary transition-colors font-mono text-sm [writing-mode:vertical-rl]"
        >
          kaushik62041@gmail.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
