import React from "react";

const Review = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.2"
      className="h-screen w-full bg-zinc-900"
    >
      <h1 className="text-zinc-100 ml-[3vw] font-['Neue'] text-7xl pt-[3vw]">
        Clients’ reviews
      </h1>
      <div className="flex">
        <div className="cardcontainer w-1/2 mt-[5vw] ml-[3vw] h-[55vh]">
          <div className="card w-full h-full bg-[#004D43] rounded-3xl">
            <div className="w-full h-full flex items-center justify-center">
              <img
                src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
                alt=""
                className="object-center scale-150 pointer-events-none"
              />
            </div>
            <div className="textss border-1 border-[#CDEA68] rounded-full -mt-[8vh] w-[7vw] text-center ml-8 font-['Neue'] py-3">
              <h1 className="text-[#CDEA68] text-xl">&copy; 2025-2026</h1>
            </div>
          </div>
        </div>
        <div className="cardcontainer flex w-1/2 mt-[5vw] px-[1vw] gap-[1vw] h-[55vh]">
          <div className="card w-[50%] h-full bg-[#212121] rounded-3xl">
            <div className="w-full h-full flex items-center justify-center">
              <img
                src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
                alt=""
                className="object-center scale-150 pointer-events-none"
              />
            </div>
            <div className="textss border-1 border-zinc-200 rounded-full -mt-[8vh] w-[12vw] text-center ml-8 font-['Neue'] py-3">
              <h1 className="text-zinc-200 text-xl uppercase">
                Rating 5.0 on clutch
              </h1>
            </div>
          </div>
          <div className="card w-[50%] h-full bg-[#212121] rounded-3xl">
            <div className="w-full h-full flex items-center justify-center">
              <img
                src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
                alt=""
                className="object-center scale-75"
              />
            </div>
            <div className="textss border-1 border-zinc-100 rounded-full -mt-[8vh] w-[15vw] text-center ml-8 font-['Neue'] py-3">
              <h1 className="text-zinc-100 uppercase text-xl">
                business bootcamp alumni
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
