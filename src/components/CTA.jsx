import React, { useEffect, useState } from "react";
import { BsCircleFill } from "react-icons/bs";

const CTA = () => {
  const [rotate, setrotate] = useState(0);
  useEffect(() => {
    const mouseEventhandler = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;
      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;
      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setrotate(angle - 180);
    };
    window.addEventListener("mousemove", mouseEventhandler);
    return () => {
      window.removeEventListener("mousemove", mouseEventhandler);
    };
  });

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.08"
      className="w-full min-h-screen bg-[#CDEA68] flex items-center justify-center rounded-t-3xl flex-col py-[10vw] mb-[5vw]"
    >
      <div className="heading font-[Grotesk] text-zinc-900 text-center text-[16vw] ">
        <h1 className="uppercase leading-none">Ready</h1>
        <h1 className="uppercase leading-[7vw]">to start</h1>
        <h1 className="uppercase leading-none">The Project</h1>
      </div>
      <div
        data-scroll
        data-scroll-speed="-.1"
        className="eyes w-1/4 h-1/4 z-[150] absolute flex items-center justify-between"
      >
        <div className="flex justify-center items-center w-[12vw] h-[12vw] bg-zinc-50 rounded-full relative z-[200]">
          <div className="relative items-center flex justify-center w-[8vw] h-[8vw] bg-zinc-800 rounded-full">
            <div
              style={{
                transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
              }}
              className="line absolute top-1/2 left-1/2 -translate-x-[1/2] -translate-y-[1/2] w-full h-[2vw]"
            >
              <div className="w-[1.5vw] h-[1.5vw] bg-zinc-50 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-[12vw] h-[12vw] bg-zinc-50 rounded-full relative z-[200]">
          <div className="relative items-center flex justify-center w-[8vw] h-[8vw] bg-zinc-800 rounded-full">
            <div
              style={{
                transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
              }}
              className="line absolute top-1/2 left-1/2 -translate-x-[1/2] -translate-y-[1/2] w-full h-[2vw]"
            >
              <div className="w-[2vw] h-[2vw] bg-zinc-50 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-4">
        <button className="bg-zinc-900 font-['Neue'] px-8 py-5 text-2xl rounded-full uppercase flex text-center gap-6 items-center">
          Start the Project
          <BsCircleFill className="w-3" />
        </button>
        <h1 className="font-[Neue] text-zinc-900 text-xl uppercase py-[1vw]">
          or
        </h1>
        <button className="border-zinc-900 border-1 font-['Neue'] px-8 py-5 text-2xl rounded-full uppercase flex text-center gap-6 items-center text-zinc-900">
          <h1>hello@oochi.design</h1>
          <BsCircleFill className="w-3" />
        </button>
      </div>
    </div>
  );
};

export default CTA;
