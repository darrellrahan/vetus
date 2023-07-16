import React from "react";

function Orbit() {
  return (
    <section id="games">
      <div className="h-screen bg-[url('/images/orbit/bg.png')] bg-cover bg-no-repeat relative overflow-hidden">
        <h1 className="text-white text-center my-12 lg:hidden">
          Click the planet!
        </h1>
        <div className="absolute top-[38%] left-[41%] lg:top-[37.5%] lg:left-[43.5%] w-[70px] h-[70px] lg:w-[220px] lg:h-[220px] border border-white animate-orbit1 rounded-full z-50">
          <a
            href="/games/80s"
            className="absolute -top-8 w-[70px] h-[70px] lg:w-[120px] lg:h-[120px] bg-[url('/images/orbit/80.svg')] bg-cover bg-no-repeat flex items-center justify-center text-center text-[#55854D] text-[0.6rem] lg:text-base"
          >
            80's
            <br />
            Games
          </a>
        </div>
        <div className="absolute top-[31%] left-[26%] lg:top-[28.5%] lg:left-[39%] w-[180px] h-[180px] lg:w-[350px] lg:h-[350px] border border-white animate-orbit2 rounded-full z-40">
          <a
            href="/games/90s"
            className="absolute -top-4 w-[70px] h-[70px] lg:w-[120px] lg:h-[120px] bg-[url('/images/orbit/90.svg')] bg-cover bg-no-repeat flex items-center justify-center text-center text-[#6C4926] text-[0.6rem] lg:text-base"
          >
            90's
            <br />
            Games
          </a>
        </div>
        <div className="absolute top-[25%] left-[3.25rem] lg:top-[18%] lg:left-[34.5%] w-[275px] h-[275px] lg:w-[495px] lg:h-[495px] border border-white animate-orbit3 rounded-full z-30">
          <a
            href="/games/00-09"
            className="absolute top-2 lg:top-8 w-[70px] h-[70px] lg:w-[120px] lg:h-[120px] bg-[url('/images/orbit/00.svg')] bg-cover bg-no-repeat flex items-center justify-center text-center text-[#15558C] text-[0.6rem] lg:text-base"
          >
            00-09
            <br />
            Games
          </a>
        </div>
        <div className="absolute top-[18%] left-0 lg:top-[9%] lg:left-[30%] w-[380px] h-[380px] lg:w-[625px] lg:h-[625px] border border-white animate-orbit4 rounded-full z-20">
          <a
            href="/games/10-16"
            className="absolute top-10 lg:top-14 w-[70px] h-[70px] lg:w-[120px] lg:h-[120px] bg-[url('/images/orbit/10.svg')] bg-cover bg-no-repeat flex items-center justify-center text-center text-black text-[0.6rem] lg:text-base"
          >
            10-16
            <br />
            Games
          </a>
        </div>
      </div>
    </section>
  );
}

export default Orbit;
