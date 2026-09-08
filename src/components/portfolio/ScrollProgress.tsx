import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const scaleX = useSpring(scrollProgress, { stiffness: 200, damping: 30 });

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? window.scrollY / totalHeight : 0;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[100] h-[3px] origin-left"
      style={{
        scaleX,
        background:
          "linear-gradient(90deg, hsl(174 72% 56%), hsl(199 89% 48%), hsl(258 90% 66%))",
      }}
    />
  );
};

export default ScrollProgress;
