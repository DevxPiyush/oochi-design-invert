import React from "react";
import { RiArrowRightUpLine } from "@remixicon/react";

const Landing = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 text-white">
      {/* HERO TEXT */}
      <div className="textstructure pt-28 px-16">
        {["we create", "eye-opening", "presentations"].map((item, index) => {
          return (
            <div
              key={index}
              className="masker flex items-center uppercase font-['Grotesk'] 
              text-[9vw] leading-[0.85] tracking-tight"
            >
              {/* Rectangle */}
              {index === 1 && (
                <div className="w-[9vw] h-[5.6vw] mt-[1%] mr-5 rounded-lg overflow-hidden">
                  <img
                    src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <h1>{item}</h1>
            </div>
          );
        })}
      </div>

      {/* BOTTOM SECTION */}
      <div className="border-t-1 border-zinc-600 mt-[8%] flex justify-between py-5 px-18 items-center">
        {[
          "Presentation and storytelling agency",
          "For innovation teams and global brands",
        ].map((item, index) => {
          <h3>{item}</h3>;
          return (
            <div className="flex">
              {" "}
              <h1 className="text-xl font-light font-['Neue'] tracking-tight leading-none ">
                {" "}
                {item}{" "}
              </h1>{" "}
            </div>
          );
        })}
        <div className="start flex gap-2">
          <button className="uppercase py-2 px-6 font-['Neue'] border-1 border-white rounded-full">
            Start The Project
          </button>
          <button className="uppercase p-2 font-['Neue'] border-1 border-white rounded-full">
            <RiArrowRightUpLine />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
