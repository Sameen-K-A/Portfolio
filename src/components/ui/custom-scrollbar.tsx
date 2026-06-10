import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const TRACK_HEIGHT = 200;
const THUMB_SIZE = 20;

const Scrollbar = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  const [thumbTop, setThumbTop] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const updateScrollbar = () => {
      if (isDragging) return;

      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
      const maxThumbPosition = TRACK_HEIGHT - THUMB_SIZE;

      setThumbTop(progress * maxThumbPosition);
    };

    window.addEventListener("scroll", updateScrollbar);
    updateScrollbar();

    return () => {
      window.removeEventListener("scroll", updateScrollbar);
    };
  }, [isDragging]);

  // Drag logic
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || !trackRef.current) return;

      const rect = trackRef.current.getBoundingClientRect();
      let newTop = e.clientY - rect.top - THUMB_SIZE / 2;

      const maxThumbPosition = TRACK_HEIGHT - THUMB_SIZE;
      newTop = Math.max(0, Math.min(newTop, maxThumbPosition));

      setThumbTop(newTop);

      const progress = newTop / maxThumbPosition;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

      window.scrollTo({ top: progress * scrollHeight, behavior: "auto" });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div className="fixed right-6 top-1/2 z-50 hidden -translate-y-1/2 md:flex items-center justify-center" data-cursor-hide>

      <div
        ref={trackRef}
        className="relative w-0.5 rounded-full bg-accent"
        style={{ height: TRACK_HEIGHT }}
      >

        <motion.div
          className="absolute left-1/2 cursor-grab rounded-full bg-primary active:cursor-grabbing shadow-sm shadow-background/50"
          animate={{ top: thumbTop, scale: isDragging ? 1.2 : 1 }}
          transition={{
            type: "spring",
            stiffness: 140,
            damping: 20,
          }}
          onMouseDown={() => setIsDragging(true)}
          style={{
            width: THUMB_SIZE,
            height: THUMB_SIZE,
            x: "-50%",
          }}
        />

      </div>
    </div>
  );
};

export default Scrollbar;