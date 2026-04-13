import React from "react";
import { motion } from "motion/react";

const Marquee = () => {
  const text = "we are ochi";

  return (
    <div className="w-full py-10 bg-[#004d43] overflow-hidden rounded-t-[3vh]">
      <div className="border-t border-b border-zinc-300 overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: "-50%" }}
          transition={{
            ease: "linear",
            duration: 5,
            repeat: Infinity,
          }}
        >
          {/* EXACT SAME CONTENT DUPLICATED */}
          <div className="flex shrink-0">
            {[...Array(6)].map((_, i) => (
              <h1
                key={i}
                className="text-[22vw] font-['Grotesk'] uppercase px-6 leading-none"
              >
                {text}
              </h1>
            ))}
          </div>

          <div className="flex shrink-0">
            {[...Array(6)].map((_, i) => (
              <h1
                key={i}
                className="text-[22vw] font-['Grotesk'] uppercase px-6 leading-none"
              >
                {text}
              </h1>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;
