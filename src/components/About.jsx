import React from "react";

const About = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.1"
      className="bg-[#CDEA68] text-black rounded-t-3xl overflow-hidden"
    >
      {/* TOP TEXT */}
      <h1 className="w-[85%] font-['Neue'] text-[3.4vw] p-[5vw] leading-[4.2vw] font-medium">
        We craft category-defining presentations, brand identities, and digital
        experiences that drive funding, sales, and market leadership.
      </h1>

      {/* MIDDLE SECTION */}
      <div className="border-t border-zinc-600">
        <h1 className="px-[5vw] py-[2vw] text-2xl font-['Neue']">
          What you can expect:
        </h1>

        <p className="font-['Neue'] ml-[50%] w-[20%] text-[1.2vw] leading-[1.8vw] -mt-[3.2vw]">
          We don't just make slides. We shape strategy, storytelling, design
          scalable brand systems, and build presentations that make people say:
          "I want in!".
        </p>

        <p className="font-['Neue'] ml-[50%] w-[20%] text-[1.2vw] mt-[2vw] leading-[1.8vw]">
          Our clients make the world go round – from deep tech, aerospace and
          robotics to music festivals and Michelin-starred restaurants.
        </p>

        <p className="font-['Neue'] ml-[50%] w-[20%] text-[1.2vw] mt-[2vw] leading-[1.8vw]">
          Since 2019, we've been the go-to partner for Yahoo, Medallia, Uber,
          Lexus, Salience Labs, Trawa and AllThingsGo.
        </p>

        {/* SOCIAL */}
        <div className="flex flex-col font-['Neue'] ml-[80%] w-[12%] -mt-[10%] text-[1.2vw] leading-[1.8vw] capitalize">
          <p className="mb-7">S.</p>
          <p>Instagram</p>
          <p>Facebook</p>
          <p>Behance</p>
          <p>Linkedin</p>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="mt-[6%] border-t border-zinc-600 px-[5vw] py-[2vw]">
        <h1 className="text-6xl font-['Neue']">How we can help:</h1>

        <button className="bg-black mt-[3%] text-white px-10 py-5 rounded-full font-['Neue'] text-[1.1vw] uppercase">
          Read More
        </button>

        <div
          data-scroll
          data-scroll-speed="-0.1"
          className="ml-[50%] w-[50%] -mt-[10%]"
        >
          <img
            src="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg"
            alt=""
            className="rounded-xl w-full h-[35vw] object-cover will-change-transform"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
