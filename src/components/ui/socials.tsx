import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

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
    name: "Instagram",
    link: "https://instagram.com",
    icon: (
      <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm11 3a1 1 0 110 2 1 1 0 010-2zm-6 1c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6 2.7-6 6-6zm0 2.2A3.8 3.8 0 008.2 12 3.8 3.8 0 0012 15.8 3.8 3.8 0 0015.8 12 3.8 3.8 0 0012 8.2z" />
    ),
  },

  {
    name: "Facebook",
    link: "https://facebook.com",
    icon: (
      <path d="M13 22v-9h3l1-4h-4V7c0-1.2.3-2 2-2h2V1.5C16.6 1.2 15.3 1 14 1c-3.3 0-5 2-5 5.5V9H6v4h3v9h4z" />
    ),
  },

  {
    name: "Github",
    link: "https://github.com",
    icon: (
      <path d="M12 .5C5.6.5.5 5.7.5 12.3c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2.2c-3.3.8-4-1.4-4-1.4-.5-1.5-1.3-1.9-1.3-1.9-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.3 1.8 1.3 1 .1 2.1.8 2.7 1.4.1-.8.4-1.4.7-1.7-2.7-.3-5.5-1.4-5.5-6.2 0-1.4.5-2.5 1.3-3.4-.1-.3-.6-1.6.1-3.3 0 0 1.1-.4 3.5 1.3 1-.3 2.1-.4 3.2-.4s2.2.1 3.2.4c2.4-1.7 3.5-1.3 3.5-1.3.7 1.7.2 3 .1 3.3.8.9 1.3 2 1.3 3.4 0 4.8-2.8 5.9-5.5 6.2.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.8-1.6 8.2-6.1 8.2-11.4C23.5 5.7 18.4.5 12 .5z" />
    ),
  },

  {
    name: "Email",
    link: "mailto:hello@example.com",
    icon: (
      <path d="M2 5l10 7L22 5v14H2V5zm2 2.2V17h16V7.2l-8 5.6-8-5.6z" />
    ),
  },
];

const MagneticIcon = ({ icon, link }: { icon: React.ReactNode; link: string }) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    // Stronger magnetic pull
    ref.current.style.transform = `translate(${distanceX * 2.2}px, ${distanceY * 2.2}px)`;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;

    ref.current.style.transform = "translate(0px, 0px)";
    setIsHovered(false);
  };

  return (
    <motion.a
      ref={ref}
      href={link}
      target="_blank"
      rel="noreferrer"
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
        />
      ))}
    </div>
  );
};

export default Socials;