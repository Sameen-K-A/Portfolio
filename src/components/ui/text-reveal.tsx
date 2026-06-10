import { useRef, useEffect, useState } from "react";
import type { FC, CSSProperties } from "react";
import { useScroll, useTransform, motion, MotionValue, useSpring } from "framer-motion";

export interface TextRevealProps {
  children: string;
  highlightWords?: string[];
  textStyle?: CSSProperties;
}

interface Word {
  text: string;
  isHighlight: boolean;
}

interface Line {
  words: Word[];
  index: number;
}

interface LineRevealProps {
  line: Line;
  progress: MotionValue<number>;
  startAt: number;
  endAt: number;
}

const LineReveal: FC<LineRevealProps> = ({ line, progress, startAt, endAt }) => {
  const clipX = useTransform(progress, [startAt, endAt], [100, 0], { clamp: true });

  return (
    <span
      className="relative block"
      style={{
        paddingBottom: "0.13em",
        willChange: "transform",
      }}
    >
      {/* Base Layer */}
      <span aria-hidden>
        {line.words.map((word, i) => (
          <span
            key={i}
            className={word.isHighlight ? "text-primary/30" : "text-accent-foreground"}
            style={{
              marginRight: i === line.words.length - 1 ? 0 : "0.18em",
              display: "inline-block",
            }}
          >
            {word.text}
          </span>
        ))}
      </span>

      {/* Reveal Layer */}
      <motion.span
        className="absolute top-0 left-0"
        style={{
          width: "100%",
          bottom: "-0.15em",
          clipPath: useTransform(clipX, (v: number) => `inset(0 ${v}% 0 0 round 0px)`),
          willChange: "clip-path, transform",
          WebkitFontSmoothing: "antialiased",
          textRendering: "geometricPrecision",
          backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden",
          transform: "translate3d(0,0,0)",
          contain: "layout paint style",
        }}
      >
        {line.words.map((word, i) => (
          <span
            key={i}
            className={word.isHighlight ? "text-primary" : "text-accent"}
            style={{
              marginRight: i === line.words.length - 1 ? 0 : "0.18em",
              display: "inline-block",
            }}
          >
            {word.text}
          </span>
        ))}
      </motion.span>
    </span>
  );
};

export const TextReveal: FC<TextRevealProps> = ({ children, highlightWords = [], textStyle }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);
  const [lines, setLines] = useState<Line[]>([]);
  const [mounted, setMounted] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.95", "end 0.40"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.35 });

  const highlightSet = new Set(
    highlightWords.map((w) => w.toLowerCase())
  );

  const words: Word[] = children
    .split(/\s+/)
    .filter(Boolean)
    .map((text) => ({
      text,
      isHighlight: highlightSet.has(text.toLowerCase()),
    }));

  const defaultStyle: CSSProperties = {
    fontSize: "clamp(1.6rem, 4.5vw, 5rem)",
    fontWeight: 700,
    lineHeight: 0.95,
    letterSpacing: "-0.02em",
    ...textStyle,
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    let rafId: number;

    const measureLines = () => {
      const el = measureRef.current;

      if (!el) return;

      const wordElements = Array.from(
        el.querySelectorAll<HTMLSpanElement>("[data-word-index]")
      );

      if (wordElements.length === 0)
        return;

      const lineGroups = new Map<number, Array<{ index: number; top: number; }>>();

      wordElements.forEach(
        (span, index) => {
          const top = Math.round(span.offsetTop);

          if (!lineGroups.has(top)) {
            lineGroups.set(top, []);
          }

          lineGroups.get(top)!.push({ index, top });
        }
      );

      const sortedLines = Array.from(
        lineGroups.entries()
      )
        .sort((a, b) => a[0] - b[0])
        .map(([, wordIndices], lineIndex) => {
          const lineWords =
            wordIndices
              .sort((a, b) => a.index - b.index)
              .map(({ index }) => words[index]);

          return {
            words: lineWords,
            index: lineIndex,
          };
        }
        );

      setLines(sortedLines);
    };

    const debouncedMeasure = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }

      rafId = requestAnimationFrame(measureLines);
    };

    const resizeObserver =
      new ResizeObserver(debouncedMeasure);

    if (measureRef.current) {
      resizeObserver.observe(
        measureRef.current
      );
    }

    window.addEventListener("resize", debouncedMeasure);

    let lastDevicePixelRatio = window.devicePixelRatio;

    const checkZoom = () => {
      if (window.devicePixelRatio !== lastDevicePixelRatio) {
        lastDevicePixelRatio = window.devicePixelRatio;

        debouncedMeasure();
      }
    };

    window.addEventListener("resize", checkZoom);
    measureLines();

    document.fonts?.ready.then(() => {
      requestAnimationFrame(() => {
        requestAnimationFrame(measureLines);
      });
    });

    return () => {
      resizeObserver.disconnect();

      window.removeEventListener("resize", debouncedMeasure);
      window.removeEventListener("resize", checkZoom);

      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [mounted, children]);

  const numLines = lines.length || 1;
  const LEAD = 0.08;
  const TAIL = 0.08;
  const budget = (1 - LEAD - TAIL) / numLines;

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden"
    >
      {/* Measurement Layer */}
      <div
        ref={measureRef}
        aria-hidden
        className="invisible absolute top-0 left-0 w-full"
        style={{
          ...defaultStyle,
          height: 0,
          pointerEvents: "none",
        }}
      >
        <div className="wrap-break-word">
          {words.map((word, i) => (
            <span
              key={i}
              data-word-index={i}
              style={{
                marginRight: "0.18em",
                display: "inline-block",
              }}
            >
              {word.text}
            </span>
          ))}
        </div>
      </div>

      {/* Visible Content */}
      <div
        className="w-full wrap-break-word"
        style={defaultStyle}
      >
        {lines.length > 0 ? (
          lines.map((line) => {
            const startAt = LEAD + line.index * budget;
            const endAt = LEAD + (line.index + 1) * budget;

            return (
              <LineReveal
                key={line.index}
                line={line}
                progress={smoothProgress}
                startAt={Math.max(0, startAt)}
                endAt={Math.min(1, endAt)}
              />
            );
          })
        ) : (
          <span className="text-accent-foreground">
            {children}
          </span>
        )}
      </div>
    </div>
  );
};