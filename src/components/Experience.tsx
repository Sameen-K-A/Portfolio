import { TextReveal } from "./ui/text-reveal";

const Experience = () => {
  return (
    <div className="flex items-center">
      <div className="bg-linear-to-b from-accent-foreground/30 to-background w-full h-full py-20 lg:py-25 rounded-4xl">
        <div className="w-full max-w-5xl mx-auto px-4 md:px-12 lg:px-20 xl:px-0">

          <h1 className="text-sm mb-6 text-accent tracking-widest">
            EXPERIENCE
          </h1>

          <TextReveal
            highlightWords={["leadership"]}
            textStyle={{
              fontSize: "clamp(1.7rem, 4.8vw, 5.2rem)"
            }}
          >
            Proven leadership experience in guiding cross-functional teams to engineer scalable full-stack products.
          </TextReveal>

        </div>
      </div>
    </div >
  );
};

export default Experience;
