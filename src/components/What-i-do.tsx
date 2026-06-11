import { TextReveal } from "./ui/text-reveal";
import { BgReveal } from "./ui/bg-reveal";

const mySkills = [
  "3D",
  "VISUAL",
  "MOTION",
  "PRODUCT",
  "TUTORIAL"
];

const WhatIDo = () => {
  return (
    <div className="py-20 lg:py-25 flex items-center">
      <div className="w-full">

        <h1 className="text-sm mb-6 text-accent tracking-widest max-w-5xl mx-auto px-4 xl:px-0">
          WHAT I DO
        </h1>

        <div data-cursor-hide>
          {mySkills.map((skill, index) => (
            <BgReveal key={index} className="border-t last:border-b border-accent-foreground">
              <div className="w-full max-w-5xl mx-auto px-4 xl:px-0 -mb-2 lg:-mb-3 xl:-mb-4">
                <TextReveal
                  textStyle={{
                    fontSize: "clamp(4rem, 7vw, 7rem)",
                    fontWeight: 700
                  }}
                >
                  {skill}
                </TextReveal>
              </div>
            </BgReveal>
          ))}
        </div>

      </div>
    </div >
  );
};

export default WhatIDo;