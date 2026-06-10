import { useState } from "react";

import AboutMe from "./components/About-me";
import Experience from "./components/Experience";
import WhatIDo from "./components/What-i-do";
import History from "./components/History";

import CustomCursor from "./components/ui/custom-cursor";
import LoadingScreen from "./components/Loading-screen";

function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="cursor-default">
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}
      <CustomCursor />

      <AboutMe />
      <WhatIDo />
      <Experience />
      <History />
    </div>
  );
}

export default App;