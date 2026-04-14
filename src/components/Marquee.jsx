import React from "react";
import { motion } from "framer-motion";

const Marquee = () => {
  const text = "we are ochi";

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.2"
      className="w-full relative py-10 mt-20 bg-[#004d43] overflow-hidden rounded-t-[3vh]"
    >
      <div className="border-t border-b border-zinc-300 overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: "-50%" }}
          transition={{
            ease: "linear",
            duration: 8, // smoother than 5
            repeat: Infinity,
          }}
        >
          {/* FIRST SET */}
          <div className="flex shrink-0">
            {[...Array(6)].map((_, i) => (
              <h1
                key={`first-${i}`}
                className="text-[22vw] font-['Grotesk'] uppercase px-6 leading-none"
              >
                {text}
              </h1>
            ))}
          </div>

          {/* DUPLICATE SET (for seamless loop) */}
          <div className="flex shrink-0">
            {[...Array(6)].map((_, i) => (
              <h1
                key={`second-${i}`}
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
