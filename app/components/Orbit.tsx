import React from "react";

function Orbit() {
  return (
    <section id="games">
      <div className="h-screen bg-[url('/images/orbit/bg.png')] bg-cover bg-no-repeat relative overflow-hidden">
        <div className="absolute top-[37.5%] left-[43.5%] w-[220px] h-[220px] border border-white animate-orbit1 rounded-full z-50">
          <a
            href="/games/80s"
            className="absolute -top-8 w-[120px] h-[120px] bg-[url('/images/orbit/80.svg')] bg-cover bg-no-repeat flex items-center justify-center text-center text-[#55854D]"
          >
            80's
            <br />
            Games
          </a>
        </div>
        <div className="absolute top-[28.5%] left-[39%] w-[350px] h-[350px] border border-white animate-orbit2 rounded-full z-40">
          <a
            href="/games/90s"
            className="absolute w-[120px] h-[120px] bg-[url('/images/orbit/90.svg')] bg-cover bg-no-repeat flex items-center justify-center text-center text-[#6C4926]"
          >
            90's
            <br />
            Games
          </a>
        </div>
        <div className="absolute top-[18%] left-[34.5%] w-[495px] h-[495px] border border-white animate-orbit3 rounded-full z-30">
          <a
            href="/games/00-09"
            className="absolute top-8 w-[120px] h-[120px] bg-[url('/images/orbit/00.svg')] bg-cover bg-no-repeat flex items-center justify-center text-center text-[#15558C]"
          >
            00-09
            <br />
            Games
          </a>
        </div>
        <div className="absolute top-[9%] left-[30%] w-[625px] h-[625px] border border-white animate-orbit4 rounded-full z-20">
          <a
            href="/games/10-16"
            className="absolute top-14 w-[120px] h-[120px] bg-[url('/images/orbit/10.svg')] bg-cover bg-no-repeat flex items-center justify-center text-cente text-black"
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
