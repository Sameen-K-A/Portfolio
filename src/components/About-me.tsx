import { TextReveal } from "./ui/text-reveal";

const AboutMe = () => {
  return (
    <div className="py-20 lg:py-25 flex items-center">
      <div className="w-full max-w-5xl mx-auto px-4 md:px-12 lg:px-20 xl:px-0">

        <h1 className="text-sm mb-6 text-accent tracking-widest">
          ABOUT ME
        </h1>

        <TextReveal
          highlightWords={["scalable", "products"]}
          textStyle={{
            fontSize: "clamp(1.7rem, 4.8vw, 5.2rem)"
          }}
        >
          Engineering scalable products through full-stack development, with a relentless focus on code quality and system architecture.
        </TextReveal>

      </div>
    </div >
  );
};

export default AboutMe;