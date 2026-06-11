import { BgReveal } from "./ui/bg-reveal";

const socialLinks = [
  { label: "Dribbble", href: "#" },
  { label: "Youtube", href: "#" },
  { label: "Linkedin", href: "#" },
];

const moreLinks = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "Behance", href: "#" },
];

function TriangleArrow() {
  return (
    <span
      className="inline-block w-0 h-0 mt-1 shrink-0"
      style={{
        borderTop: "7px solid transparent",
        borderBottom: "7px solid transparent",
        borderLeft: "10px solid var(--color-primary)",
      }}
    />
  );
}

function SocialLink({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      className="flex items-center w-full"
      style={{ textDecoration: "none" }}
    >
      <TriangleArrow />
      <BgReveal>
        <span
          data-cursor-hide
          className="text-2xl lg:text-4xl font-bold tracking-tight w-full px-2"
        >
          {label}
        </span>
      </BgReveal>
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="flex items-center xl:px-4 text-accent">
      <div className="bg-linear-to-b from-accent-foreground/30 to-background w-full h-full py-20 lg:py-25 rounded-4xl px-4 xl:px-0">
        <div className="w-full max-w-5xl mx-auto">

          <h1 className="text-sm mb-6 text-accent tracking-widest">
            CONNECT
          </h1>

          <div className="flex flex-col md:flex-row md:justify-between gap-4">

            <div className="flex flex-col w-full">
              {socialLinks.map((link) => (
                <SocialLink key={link.label} {...link} />
              ))}
            </div>

            <div className="flex flex-col w-full">
              {moreLinks.map((link) => (
                <SocialLink key={link.label} {...link} />
              ))}
            </div>

            <div className="flex flex-col gap-4 w-full" data-cursor-hide>
              <BgReveal>
                <div className="px-2">
                  <p className="text-sm font-bold mb-0.5">
                    Email
                  </p>
                  <a
                    href="mailto:sameensameen60@gmail.com"
                    className="text-sm"
                  >
                    sameensameen60@gmail.com
                  </a>
                </div>
              </BgReveal>
              <BgReveal>
                <div className="px-2">
                  <p className="text-sm font-bold mb-0.5">
                    Phone
                  </p>
                  <a
                    href="tel:+919562718577"
                    className="text-sm"
                  >
                    +91 95627 18577
                  </a>
                </div>
              </BgReveal>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}