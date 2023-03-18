import React from "react";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero";
import Bio from "./components/Bio";
import Skills from "./components/Skills";

function App() {
  return (
    <div className=" bg-white text-black dark:bg-[#03001C] dark:text-white">
      <Navbar/>
      <Hero/>
      <Skills/>
      <Bio/>
      
    </div>
  );
}

export default App;

