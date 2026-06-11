import { TextReveal } from "./ui/text-reveal";
import { BgReveal } from "./ui/bg-reveal";

const myHistory = [
  { date: "NOW", Role: "Team Lead", company: "Veevity Technologies" },
  { date: "2025", Role: "Frontend developer", company: "Growhut Technologies" },
  { date: "2024", Role: "Self learing", company: "Mastering MERN stack with real world projects" },
  { date: "2023", Role: "BSc Computer science", company: "MG University, Kottayam" },
];

const History = () => {
  return (
    <div className="py-20 lg:py-25 flex items-center">
      <div className="w-full">
        <h1 className="text-sm mb-6 text-accent tracking-widest max-w-5xl mx-auto px-4 xl:px-0">
          HISTORY
        </h1>

        <div data-cursor-hide>
          {myHistory.map((history, index) => (
            <BgReveal
              key={index}
              className="border-t last:border-b border-accent-foreground md:px-4"
            >
              <div className="w-full max-w-5xl mx-auto px-4 md:px-0 py-6 flex flex-row items-center gap-4 md:gap-10">

                <div className="w-16 sm:w-32 md:w-48 shrink-0">
                  <TextReveal
                    textStyle={{
                      fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
                      fontWeight: 500,
                    }}
                  >
                    {history.date}
                  </TextReveal>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <TextReveal
                    textStyle={{
                      fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
                      fontWeight: 500,
                    }}
                  >
                    {history.Role}
                  </TextReveal>

                  <TextReveal
                    textStyle={{
                      fontSize: "clamp(1rem, 2vw, 1.4rem)",
                      fontWeight: 100,
                    }}
                  >
                    {history.company}
                  </TextReveal>
                </div>
              </div>
            </BgReveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default History;