import React from "react";
import { BsCircleFill } from "react-icons/bs";

const Feature = () => {
  return (
    <div className="w-full py-10 bg-black text-white">
      {/* Heading */}
      <div className="w-full border-b-2 border-zinc-700">
        <h1 className="font-[Neue] text-7xl mt-[5vw] ml-[3vw] mb-[3vw] font-medium">
          Featured Projects
        </h1>
      </div>

      <div className="uppercase">
        {/* Titles */}
        <div className="flex headingz">
          <h1 className="flex gap-3 items-center py-[2vw] font-['Neue'] text-2xl ml-[3vw]">
            <BsCircleFill className="w-3" />
            Salience Labs
          </h1>

          <h1 className="flex gap-3 items-center py-[2vw] font-['Neue'] text-2xl ml-[39.3%]">
            <BsCircleFill className="w-3" />
            Medallia Experience
          </h1>
        </div>

        {/* Cards */}
        <div className="cards relative w-full flex gap-[4%] items-center justify-center px-[3vw]">
          {/* CENTER TEXTS (BOTH HERE) */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[50]">
            <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[7vw] font-['Grotesk'] tracking-wide text-[#CDEA68] whitespace-nowrap">
              {"Salience Labs".split("").map((item) => (
                <span>{item}</span>
              ))}
            </h1>

            <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[7vw] font-['Grotesk'] tracking-wide text-[#CDEA68] whitespace-nowrap">
              {"Medallia Experience".split("").map((item) => (
                <span>{item}</span>
              ))}
            </h1>
          </div>

          {/* Left Card */}
          <div className="cardcontainer relative w-[50%] h-[80vh] rounded-2xl overflow-hidden">
            <div className="card w-full h-full rounded-2xl overflow-hidden">
              <img
                src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-663x551.png"
                alt="Salience Labs"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Card */}
          <div className="cardcontainer relative w-[50%] h-[80vh] rounded-2xl overflow-hidden">
            <div className="card w-full h-full rounded-2xl overflow-hidden">
              <img
                src="https://ochi.design/wp-content/uploads/2025/08/Med_Website_0.png"
                alt="Medallia Experience"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
