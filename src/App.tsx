import React from "react";
import "./App.css";

import Header from "./shared/components/header/header.component";
import Home from "./shared/components/home/home.component";
import { Projects } from "./shared/components/projects/projects.components";
import { Skills } from "./shared/components/skills/skills.component";
import { Contact } from "./shared/components/contact/contact.component";
import ScrollProgressBar from "./shared/components/scrollProgressBar.component";

import AOS from "aos";
import "aos/dist/aos.css";
import "boxicons";

AOS.init();

function App() {
  const [isStarted, setIsStarted] = React.useState(false);
  const [startTransition, setStartTransition] = React.useState(false);

  const handleStartTransition = () => {
    console.log("start transition");
    setStartTransition(true);

    setTimeout(() => {
      setIsStarted(true);
    }, 950);
  };

  if (!isStarted) {
    return (
      <div className="App absolute h-full w-full flex flex-col items-center justify-center [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        <h1 className="title_holder" data-aos="fade-down" data-os-delay="1000">
          Vanderson
        </h1>
        <h4
          className="text-xl text-center text-slate-400"
          data-aos="zoom-in"
          data-os-delay="1300"
        >
          Web Developer
        </h4>
        <div data-aos="zoom-in" data-aos-delay="1700">
          <button
            className="border-2 border-purple-500 hover:border-transparent hover:bg-indigo-700 text-purple-500 hover:text-white rounded-full shadow p-2 flex items-center justify-evenly mt-5 transition-all duration-500 w-32 hover:w-44"
            onClick={handleStartTransition}
          >
            <span className="text-sm">Get started</span>
            <span className="text-2xl">🚀</span>
          </button>
        </div>
        <div
          className={`transitioner bg-indigo-700 ${
            startTransition ? "open" : ""
          }`}
        ></div>
      </div>
    );
  }
  return (
    <div className="App absolute h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      <ScrollProgressBar />
      <Header />
      <Home />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
