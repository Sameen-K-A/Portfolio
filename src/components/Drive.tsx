import { TextReveal } from "./ui/text-reveal";

const Drive = () => {
  return (
    <div className="py-20 lg:py-25 flex items-center">
      <div className="w-full max-w-5xl mx-auto px-4 md:px-12 lg:px-20 xl:px-0">

        <h1 className="text-sm mb-6 text-accent tracking-widest">
          THE DRIVE
        </h1>

        <TextReveal
          highlightWords={["complex", "challenges"]}
          textStyle={{
            fontSize: "clamp(1.7rem, 4.8vw, 5.2rem)"
          }}
        >
          Thriving on complex challenges, continuously refining engineering standards to build high-performance systems that leave a lasting impact.
        </TextReveal>

      </div>
    </div >
  );
};

export default Drive;