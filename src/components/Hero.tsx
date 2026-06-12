import { BgReveal } from "./ui/bg-reveal";

const whoMe = [
  "LEAD",
  "FULL-STACK",
  "ENGINEER"
];

const Hero = () => {
  return (
    <div className="w-full min-h-dvh lg:min-h-96 aspect-video max-h-dvh flex flex-col items-center justify-center overflow-hidden gap-6">
      <p className="text-primary text-sm md:text-base font-medium tracking-[0.3em]">
        SAMEEN K A
      </p>

      <div data-cursor-hide className="w-full">
        {whoMe.map((skill, index) => (
          <BgReveal key={index} className="border-t last:border-b border-accent-foreground w-full">
            <div className="w-full px-4 md:px-12 lg:px-20 xl:px-0">
              <h1
                className="tracking-tight leading-[0.95] text-accent"
                style={{
                  fontSize: "clamp(3.4rem, 7vw, 7rem)",
                  fontWeight: 700,
                  textAlign: "center"
                }}
              >
                {skill}
              </h1>
            </div>
          </BgReveal>
        ))}
      </div>

      <p className="text-base md:text-xl text-accent/60 max-w-2xl mx-auto mt-4 leading-relaxed text-center px-4 md:px-12 lg:px-20 xl:px-0">
        Architecting real-time systems and scalable digital products with a relentless focus on high-performance architecture.
      </p>

    </div>
  );
};

export default Hero;