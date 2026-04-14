import React from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Eyes from "./components/Eyes";
import Feature from "./components/Feature";
import Review from "./components/Review";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full min-h-screen bg-zinc-900 text-white">
      <Navbar />
      <Landing />
      <Marquee />
      <About />
      <Eyes />
      <Feature />
      <Review />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
