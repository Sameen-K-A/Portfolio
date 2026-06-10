import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type LoadingScreenProps = {
  onComplete: () => void;
};

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [startExit, setStartExit] = useState(false);

  useEffect(() => {
    let current = 0;
    setProgress(0);

    const firstPhase = setInterval(() => {
      current += Math.random() * 6 + 3;

      if (current >= 70) {
        current = 70;

        clearInterval(firstPhase);

        // Small delay
        setTimeout(() => {
          const secondPhase = setInterval(() => {
            current += Math.random() * 8 + 4;

            if (current >= 100) {
              current = 100;

              clearInterval(secondPhase);

              setTimeout(() => {
                setCompleted(true);
              }, 300);
            }

            setProgress(Math.floor(current));
          }, 90);
        }, 900);
      }

      setProgress(Math.floor(current));
    }, 70);

    return () => {
      clearInterval(firstPhase);
    };
  }, []);

  const handleStart = () => {
    window.scrollTo({ top: 0, behavior: "instant" });

    setStartExit(true);

    setTimeout(() => {
      onComplete();
    }, 1400);
  };

  return (
    <motion.div
      className="fixed inset-0 z-9999 flex items-center justify-center bg-background"
      animate={{ opacity: startExit ? 0 : 1 }}
      transition={{
        duration: 0.7,
        delay: startExit ? 0.5 : 0,
        ease: [0.76, 0, 0.24, 1],
      }}
    >
      <motion.div
        className="flex flex-col items-center"
        animate={{
          opacity: startExit ? 0 : 1,
          y: startExit ? 30 : 0,
          scale: startExit ? 0.96 : 1,
        }}
        transition={{
          duration: 0.5,
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 h-20 w-20 overflow-hidden rounded-full bg-accent pt-1"
        >
          <img
            src="/svgs/avatar.svg"
            alt="Avatar"
            className="h-full w-full object-cover"
          />
        </motion.div>

        <AnimatePresence mode="wait">
          {!completed ? (
            <motion.div
              key="progress"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="w-64"
            >
              <div className="mb-2 flex justify-between text-sm text-accent">
                <span>Loading</span>
                <motion.span
                  key={progress}
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {progress}%
                </motion.span>
              </div>

              <div className="h-1 overflow-hidden rounded-full bg-primary/30">
                <motion.div
                  className="h-full rounded-full bg-primary"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut", duration: 0.25 }}
                />
              </div>
            </motion.div>
          ) : (
            <motion.button
              key="button"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              onClick={handleStart}
              className="w-45 cursor-pointer rounded-full border border-accent bg-transparent py-2 text-sm font-medium tracking-[0.25em] text-accent transition-colors duration-300 hover:bg-accent hover:text-background"
            >
              START
            </motion.button>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}