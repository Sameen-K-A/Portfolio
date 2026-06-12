import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Tooltip } from "./tooltip";

const useContainerBounds = () => {
  const [bounds, setBounds] = useState({ left: 0, right: 0 });

  useEffect(() => {
    const updateBounds = () => {
      const container = document.querySelector('.max-w-500');
      if (container) {
        const rect = container.getBoundingClientRect();
        setBounds({
          left: rect.left,
          right: window.innerWidth - rect.right,
        });
      }
    };

    updateBounds();
    window.addEventListener('resize', updateBounds);
    window.addEventListener('scroll', updateBounds);
    return () => {
      window.removeEventListener('resize', updateBounds);
      window.removeEventListener('scroll', updateBounds);
    };
  }, []);

  return bounds;
};

const socials = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/sameen-ka/",
    icon: (
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    ),
  },
  {
    name: "GitHub",
    link: "https://github.com/Sameen-K-A",
    icon: (
      <path d="M12 .5C5.6.5.5 5.7.5 12.3c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2.2c-3.3.8-4-1.4-4-1.4-.5-1.5-1.3-1.9-1.3-1.9-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.3 1.8 1.3 1 .1 2.1.8 2.7 1.4.1-.8.4-1.4.7-1.7-2.7-.3-5.5-1.4-5.5-6.2 0-1.4.5-2.5 1.3-3.4-.1-.3-.6-1.6.1-3.3 0 0 1.1-.4 3.5 1.3 1-.3 2.1-.4 3.2-.4s2.2.1 3.2.4c2.4-1.7 3.5-1.3 3.5-1.3.7 1.7.2 3 .1 3.3.8.9 1.3 2 1.3 3.4 0 4.8-2.8 5.9-5.5 6.2.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.8-1.6 8.2-6.1 8.2-11.4C23.5 5.7 18.4.5 12 .5z" />
    ),
  },
  {
    name: "WhatsApp",
    link: "https://wa.me/919562718577",
    icon: (
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23-1.48 0-2.93-.39-4.19-1.15l-.3-.17-3.12.82.83-3.04-.2-.32a8.188 8.188 0 0 1-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.43.06-.66.31-.22.25-.87.85-.87 2.07 0 1.22.89 2.39 1 2.56.14.17 1.76 2.67 4.25 3.73.59.27 1.05.42 1.41.53.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.16-.48-.27-.25-.14-1.47-.74-1.69-.82-.23-.08-.37-.12-.56.12-.16.25-.64.81-.78.97-.15.17-.29.19-.53.07-.26-.13-1.06-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.44.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.11-.56-1.35-.77-1.84-.2-.48-.4-.42-.56-.43-.14-.01-.3-.01-.47-.01z" />
    ),
  },
  {
    name: "Gmail",
    link: "mailto:sameensameen60@gmail.com",
    icon: (
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    ),
  },
  {
    name: "Download CV",
    link: "/cv/Sameen_K_A.pdf",
    icon: (
      <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11zm-6-1l-4-4h2.5v-3h3v3H16l-4 4z" />
    ),
  },
];

const MagneticIcon = ({ icon, link, name }: { icon: React.ReactNode; link: string; name: string }) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const isDownload = name === "Download CV";

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current || !containerRef.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    // Apply magnetic pull to both icon and container (tooltip follows)
    const translateX = distanceX * 2.2;
    const translateY = distanceY * 2.2;

    ref.current.style.transform = `translate(${translateX}px, ${translateY}px)`;
    containerRef.current.style.transform = `translate(${translateX}px, ${translateY}px)`;
  };

  const handleMouseLeave = () => {
    if (!ref.current || !containerRef.current) return;

    ref.current.style.transform = "translate(0px, 0px)";
    containerRef.current.style.transform = "translate(0px, 0px)";
    setIsHovered(false);
  };

  return (
    <div
      ref={containerRef}
      className="relative transition-transform duration-500 ease-out"
    >
      <motion.a
        ref={ref}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        {...(isDownload && { download: true })}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        className="flex items-center justify-center transition-transform duration-500 ease-out"
      >
        <svg
          viewBox="0 0 24 24"
          className={`h-5 w-5 transition-colors duration-300 ${isHovered ? "fill-primary" : "fill-accent"}`}
        >
          {icon}
        </svg>
      </motion.a>
      <Tooltip text={name} isVisible={isHovered} />
    </div>
  );
};

const Socials = () => {
  const bounds = useContainerBounds();
  return (
    <div className="fixed top-1/2 z-50 hidden -translate-y-1/2 lg:flex flex-col gap-9" data-allow-blend style={{
      left: Math.max(bounds.left + 40) + 'px'
    }}>
      {socials.map((social) => (
        <MagneticIcon
          key={social.name}
          link={social.link}
          icon={social.icon}
          name={social.name}
        />
      ))}
    </div>
  );
};

export default Socials;
