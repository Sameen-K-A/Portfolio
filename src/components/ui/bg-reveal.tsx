import { useRef, type ReactNode } from "react"

interface BgRevealProps {
  children: ReactNode
  hoverText?: ReactNode
  className?: string
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div"
}

export function BgReveal({ children, hoverText, className = "", as: Component = "div" }: BgRevealProps) {
  const spanRef = useRef<HTMLSpanElement>(null)

  const handleMouseEnter = () => {
    if (spanRef.current) {
      spanRef.current.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
    }
  }

  const handleMouseLeave = () => {
    if (spanRef.current) {
      spanRef.current.style.clipPath = "polygon(0 50%, 100% 50%, 100% 50%, 0 50%)"
    }
  }

  return (
    <Component
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <span
        ref={spanRef}
        className="absolute inset-0 bg-primary text-accent flex items-center transition-all duration-400 pointer-events-none overflow-hidden font-bold **:text-background!"
        style={{ clipPath: "polygon(0 50%, 100% 50%, 100% 50%, 0 50%)", }}
      >
        {hoverText || children}
      </span>
    </Component>
  )
}