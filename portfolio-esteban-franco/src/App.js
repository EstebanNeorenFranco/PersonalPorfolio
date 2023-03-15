import React from "react";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero";
import Bio from "./components/Bio";

function App() {
  return (
    <div className=" scr h-screen w-screen bg-white text-black dark:bg-[#03001C] dark:text-white">
      <Navbar/>
      <Hero/>
      <Bio/>
    </div>
  );
}

export default App;

