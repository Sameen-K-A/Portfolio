import { useState } from "react";

import Hero from "./components/Hero";
import AboutMe from "./components/About-me";
import Experience from "./components/Experience";
import WhatIDo from "./components/What-i-do";
import History from "./components/History";
import Projects from "./components/Projects";
import Drive from "./components/Drive";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

import CustomCursor from "./components/ui/custom-cursor";
import Socials from "./components/ui/socials";
import Scrollbar from "./components/ui/custom-scrollbar";
import LoadingScreen from "./components/Loading-screen";
import { ContentProtection } from "./components/ui/content-protection";

function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="cursor-default max-w-500 mx-auto border-x border-accent-foreground">
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}
      <CustomCursor />
      <Socials />
      <Scrollbar />
      <ContentProtection />

      <Hero />
      <AboutMe />
      <WhatIDo />
      <Experience />
      <History />
      <Projects />
      <Drive />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;