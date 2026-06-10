import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 500,
    damping: 50,
  });

  const springY = useSpring(mouseY, {
    stiffness: 500,
    damping: 50,
  });

  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target as HTMLElement;

      setHidden(!!target.closest("[data-cursor-hide]"));
    };

    window.addEventListener("mousemove", moveCursor);

    document.body.style.cursor = "none";

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.body.style.cursor = "auto";
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      animate={{
        opacity: hidden ? 0 : 1,
        width: 32,
        height: 32,
      }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
      className="pointer-events-none fixed left-0 top-0 z-999 rounded-full bg-primary"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
      }}
    />
  );
}