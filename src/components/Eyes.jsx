import React, { useEffect } from "react";
import { useState } from "react";

const Eyes = () => {
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    const handlemousemove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;
      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;
      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    };
    window.addEventListener("mousemove", handlemousemove);
    return () => {
      window.removeEventListener("mousemove", handlemousemove);
    };
  }, []);
  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div className="relative w-full h-full bg-cover bg-center b bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-10">
          <div className=" flex items-center justify-center w-[15vw] h-[15vw] bg-zinc-50 rounded-full">
            <div className="px-8 py-4 fixed z-[99] font-black font-[Neue] tracking-widest uppercase text-4xl">
              Play
            </div>
            <div className="relative w-[10vw] h-[10vw] bg-zinc-800 rounded-full">
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
          <div className=" flex justify-center items-center w-[15vw] h-[15vw] bg-zinc-50 rounded-full">
            <div className="px-8 py-4 fixed z-[99] font-black font-[Neue] tracking-widest uppercase text-4xl">
              Play
            </div>
            <div className="relative items-center flex justify-center w-[10vw] h-[10vw] bg-zinc-800 rounded-full">
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
      </div>
    </div>
  );
};

export default Eyes;
