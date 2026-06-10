import { useState } from "react";

import AboutMe from "./components/About-me";
import Experience from "./components/Experience";
import WhatIDo from "./components/What-i-do";
import History from "./components/History";
import Footer from "./components/Footer";

import CustomCursor from "./components/ui/custom-cursor";
import Scrollbar from "./components/ui/custom-scrollbar";
import LoadingScreen from "./components/Loading-screen";
import { ContentProtection } from "./components/ui/content-protection";

function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="cursor-default">
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}
      <CustomCursor />
      <Scrollbar />
      <ContentProtection />

      <AboutMe />
      <WhatIDo />
      <Experience />
      <History />
      <Footer />
    </div>
  );
}

export default App;