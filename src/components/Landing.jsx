import React from "react";
import { RiArrowRightUpLine } from "@remixicon/react";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

const Landing = () => {
  // ENTRY ANIMATION
  useGSAP(() => {
    gsap.from(".masker h1, .bottomsec, .gsap-btn", {
      y: "100%",
      opacity: 0,
      duration: 0.8,
      delay: 0.3,
      stagger: 0.15,
      ease: "power3.out",
    });
  });

  // HOVER IN (CENTER FILL)
  const hoveranime = (e) => {
    const btn = e.currentTarget;
    const fill = btn.querySelector(".fill");

    gsap.to(fill, {
      scaleX: 1,
      duration: 0.4,
      ease: "power1.inOut",
    });

    gsap.to(btn, {
      color: "#000000",
      duration: 0.2,
    });
  };

  // HOVER OUT
  const leaveanime = (e) => {
    const btn = e.currentTarget;
    const fill = btn.querySelector(".fill");

    gsap.to(fill, {
      scaleX: 0,
      duration: 0.4,
      ease: "power1.inOut",
    });

    gsap.to(btn, {
      color: "#ffffff",
      duration: 0.2,
    });
  };

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-1"
      className="w-full min-h-screen bg-zinc-900 text-white mb-[10vw]"
    >
      {/* HERO TEXT */}
      <div className="textstructure pt-28 px-16">
        {["we create", "eye-opening", "presentations"].map((item, index) => {
          return (
            <div
              key={index}
              className="masker overflow-hidden flex items-center uppercase font-['Grotesk'] 
              text-[9vw] leading-[0.85] tracking-tight"
            >
              {index === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "10%" }}
                  transition={{
                    duration: 0.6,
                    delay: 1.2,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  className="w-[9vw] h-[5.6vw] mt-[1%] rounded-lg overflow-hidden"
                >
                  <img
                    src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </motion.div>
              )}
              <h1>{item}</h1>
            </div>
          );
        })}
      </div>

      {/* BOTTOM SECTION */}
      <div className="border-t border-zinc-600 mt-[8%] flex justify-between py-5 px-16 items-center">
        {[
          "Presentation and storytelling agency",
          "For innovation teams and global brands",
        ].map((item, index) => {
          return (
            <div key={index} className="flex overflow-hidden">
              <h1 className="bottomsec text-xl font-light font-['Neue'] tracking-tight leading-none">
                {item}
              </h1>
            </div>
          );
        })}

        {/* BUTTONS */}
        <div className="flex gap-3">
          {/* BUTTON 1 */}
          <button
            onMouseEnter={hoveranime}
            onMouseLeave={leaveanime}
            className="gsap-btn relative overflow-hidden uppercase py-2 px-6 font-['Neue'] border border-white rounded-full text-white"
          >
            {/* FILL LAYER */}
            <span className="fill absolute inset-0 bg-white scale-x-0 origin-center"></span>

            {/* TEXT */}
            <span className="relative z-10">Start The Project</span>
          </button>

          {/* BUTTON 2 */}
          <button
            onMouseEnter={hoveranime}
            onMouseLeave={leaveanime}
            className="gsap-btn relative overflow-hidden uppercase p-2 font-['Neue'] border border-white rounded-full text-white"
          >
            {/* FILL LAYER */}
            <span className="fill absolute inset-0 bg-white scale-x-0 origin-center"></span>

            {/* ICON */}
            <span className="relative z-10 flex items-center justify-center">
              <RiArrowRightUpLine />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
