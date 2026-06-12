import { motion, AnimatePresence } from "framer-motion";

interface TooltipProps {
  text: string;
  isVisible: boolean;
}

export const Tooltip = ({ text, isVisible }: TooltipProps) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute left-full top-1/2 -translate-y-1/2 ml-4 px-3 py-1.5 bg-primary text-primary-foreground text-sm font-medium rounded-lg shadow-lg whitespace-nowrap pointer-events-none z-50"
        >
          {text}
          <div
            className="absolute right-full top-1/2 -translate-y-1/2"
            style={{
              width: 0,
              height: 0,
              borderTop: "6px solid transparent",
              borderBottom: "6px solid transparent",
              borderRight: "6px solid hsl(var(--primary))",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};