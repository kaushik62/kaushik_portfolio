import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

const CursorGlow = () => {
  const [visible, setVisible] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const x = useSpring(0, { stiffness: 80, damping: 20 });
  const y = useSpring(0, { stiffness: 80, damping: 20 });

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [visible, x, y]);

  if (!visible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    >
      <motion.div
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          position: "fixed",
          width: 480,
          height: 480,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(45,212,191,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
    </motion.div>
  );
};

export default CursorGlow;
