import { TextReveal } from "./ui/text-reveal";

const Inspiration = () => {
  return (
    <div className="py-20 lg:py-25 flex items-center px-4 xl:px-0">
      <div className="w-full max-w-5xl mx-auto">

        <h1 className="text-sm mb-6 text-accent tracking-widest">
          INSPIRATION
        </h1>

        <TextReveal
          highlightWords={["selectively", "skilled"]}
          textStyle={{
            fontSize: "clamp(1.7rem, 4.8vw, 5.2rem)"
          }}
        >
          I'm a selectively skilled product designer with strong focus on producing high quality & impactful digital experience.
        </TextReveal>

      </div>
    </div >
  );
};

export default Inspiration;