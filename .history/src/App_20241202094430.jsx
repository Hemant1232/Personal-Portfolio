import React from "react";
import Sidebar from "./components/Sidebar/SideBar";
import Home from "./components/Introduction/Home";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Recent Works/Projects";

const App = () => {
  return (
    <>
    <div></div>
      <Sidebar />

      <main className="l-52 border-">
      <Home />
      <About />
      <Experience />
      <Projects />
      </main>
    </>
  );
};

export default App;
