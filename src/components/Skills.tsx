import { TextReveal } from "./ui/text-reveal";
import { BgReveal } from "./ui/bg-reveal";

const myHistory = [
  { title: "Backend Systems", subtitle: "Node.js, Express.js, TypeScript, Clean Architecture" },
  { title: "Frontend & Mobile", subtitle: "React.js, Next.js, React Native, Tailwind CSS" },
  { title: "Real-Time Tech", subtitle: "WebRTC, Socket.io, LiveKit, WebSocket" },
  { title: "Database & Caching", subtitle: "MongoDB, PostgreSQL, Redis Caching" },
  { title: "Cloud & DevOps", subtitle: "AWS (EC2, S3), NGINX, PM2, CI/CD Pipelines" },
  { title: "AI & Integrations", subtitle: "Gemini API, Razorpay, AI-driven automation" },
];

const Skills = () => {
  return (
    <div className="py-20 lg:py-25 flex items-center">
      <div className="w-full">
        <h1 className="text-sm mb-6 text-accent tracking-widest max-w-5xl mx-auto px-4 md:px-12 lg:px-20 xl:px-0">
          CORE EXPERTISE
        </h1>

        <div data-cursor-hide>
          {myHistory.map((history, index) => (
            <BgReveal
              key={index}
              className="border-t last:border-b border-accent-foreground"
            >
              <div className="w-full max-w-5xl mx-auto py-6 flex flex-row items-center gap-4 md:gap-10 px-4 md:px-12 lg:px-20 xl:px-0">

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <TextReveal
                    textStyle={{
                      fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
                      fontWeight: 500,
                    }}
                  >
                    {history.title}
                  </TextReveal>

                  <TextReveal
                    textStyle={{
                      fontSize: "clamp(1rem, 2vw, 1.4rem)",
                      fontWeight: 100,
                    }}
                  >
                    {history.subtitle}
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

export default Skills;