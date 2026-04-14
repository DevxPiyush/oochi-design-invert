import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { easeInOut, motion } from "motion/react";
import React, { useState } from "react";
import { BsCircleFill } from "react-icons/bs";

gsap.registerPlugin(useGSAP);

const Feature = () => {
  const [ishovering, sethovering] = useState(false);
  const [ishovering2, sethovering2] = useState(false);
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.1"
      className="w-full py-10 bg-zinc-900 text-white mb-[10vw]"
    >
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
            <h1 className="absolute left-1/2 overflow-hidden top-1/2 -translate-x-1/2 -translate-y-1/2 text-[7vw] font-['Grotesk'] tracking-wide text-[#CDEA68] whitespace-nowrap">
              {"Salience Labs".split("").map((item, index) => (
                <motion.span
                  key={index}
                  className="inline-block"
                  animate={
                    ishovering
                      ? { y: "0%", opacity: 1 }
                      : { y: "100%", opacity: 0 }
                  }
                  transition={{
                    ease: easeInOut,
                    delay: index * 0.03,
                    duration: 0.4,
                  }}
                  initial={{ y: "100%", opacity: 0 }}
                >
                  {item}
                </motion.span>
              ))}
            </h1>

            <h1 className="absolute left-1/2 overflow-hidden top-1/2 -translate-x-1/2 -translate-y-1/2 text-[7vw] font-['Grotesk'] tracking-wide text-[#CDEA68] whitespace-nowrap">
              {"Medallia Experience".split("").map((item, index) => (
                <motion.span
                  key={index}
                  className="inline-block"
                  animate={
                    ishovering2
                      ? { y: "0%", opacity: 1 }
                      : { y: "100%", opacity: 0 }
                  }
                  transition={{
                    ease: easeInOut,
                    delay: index * 0.03,
                    duration: 0.4,
                  }}
                  initial={{ y: "100%", opacity: 0 }}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
          </div>

          {/* Left Card */}
          <div
            className="cardcontainer relative w-[50%] h-[80vh] rounded-2xl overflow-hidden"
            onMouseEnter={(e) => {
              sethovering(true);
              gsap.to(e.currentTarget, {
                scale: 0.98,
                duration: 0.3,
                ease: "power3.out",
              });
            }}
            onMouseLeave={(e) => {
              sethovering(false);
              gsap.to(e.currentTarget, {
                scale: 1,
                duration: 0.3,
                ease: "power3.out",
              });
            }}
          >
            <div className="card w-full h-full rounded-2xl overflow-hidden">
              <img
                src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-663x551.png"
                alt="Salience Labs"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Card */}
          <div
            className="cardcontainer relative w-[50%] h-[80vh] rounded-2xl overflow-hidden"
            onMouseEnter={(e) => {
              sethovering2(true);
              gsap.to(e.currentTarget, {
                scale: 0.98,
                duration: 0.3,
                ease: "power3.out",
              });
            }}
            onMouseLeave={(e) => {
              sethovering2(false);
              gsap.to(e.currentTarget, {
                scale: 1,
                duration: 0.3,
                ease: "power3.out",
              });
            }}
          >
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
