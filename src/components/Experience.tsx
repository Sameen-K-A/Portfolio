import { TextReveal } from "./ui/text-reveal";

const Experience = () => {
  return (
    <div className="flex items-center xl:px-4">
      <div className="bg-linear-to-b from-accent-foreground/30 to-background w-full h-full pt-14 lg:pt-22 rounded-4xl px-4 xl:px-0">
        <div className="w-full max-w-5xl mx-auto">

          <h1 className="text-sm mb-6 text-accent tracking-widest">
            EXPERIENCE
          </h1>

          <TextReveal
            highlightWords={["a", "decade"]}
            textStyle={{
              fontSize: "clamp(1.7rem, 4.8vw, 5.2rem)"
            }}
          >
            Over a decade of experience in interactive design and working with some of the most people in the business.
          </TextReveal>

        </div>
      </div>
    </div >
  );
};

export default Experience;
