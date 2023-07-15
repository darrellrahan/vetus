"use client";

import React, { useState } from "react";

function Card({
  bg,
  gameCardTextColor,
  poster,
  year,
  owner,
  titleBg,
  name,
  descBg,
  desc,
}: {
  bg: string;
  gameCardTextColor: string;
  poster: string;
  year: string;
  owner: string;
  titleBg: string;
  name: string;
  descBg: string;
  desc: string;
}) {
  const [isFlipping, setIsFlipping] = useState(false);

  return (
    <div
      onClick={() => setIsFlipping(!isFlipping)}
      className={`w-full h-[700px] overflow-hidden ${bg} bg-no-repeat bg-cover p-6 rounded-[2.125rem] duration-[0.5s] ease-linear cursor-pointer`}
      style={{ transform: `rotateY(${isFlipping ? "180" : "0"}deg)` }}
    >
      <p className={`${gameCardTextColor} text-center text-sm`}>GAME CARD</p>
      <div
        className={`h-[350px] ${poster} bg-no-repeat bg-cover relative my-4`}
      >
        <div className="absolute bottom-28 right-0 p-1 text-xl font-semibold bg-[#DFA421] rounded-[0.3125rem] border-[4px] border-black shadow-[0px_4px_4px_0px_#000]">
          {year}
        </div>
        <div className="absolute bottom-16 right-0 p-2 font-medium text-white bg-[#C8462F] text-xs rounded-[0.3125rem] border-[4px] border-black shadow-[0px_4px_4px_0px_#000]">
          {owner}
        </div>
        <div
          className={`absolute bottom-0 left-0 py-2 px-4 ${
            titleBg.includes("red") ? "text-yellow-400" : "text-white"
          } text-xl font-medium ${titleBg} bg-no-repeat bg-cover`}
        >
          {name}
        </div>
      </div>
      <div
        className={`p-2 ${descBg} rounded shadow-[0px_4px_4px_0px_rgba(255,255,255,0.32)_inset,_0px_4px_4px_0px_rgba(255,255,255,0.33)] h-[15.5rem]`}
      >
        <div className="bg-stone-500 h-full flex items-center rounded-2xl px-2 py-4 text-white text-xs">
          {desc}
        </div>
      </div>
    </div>
  );
}

export default Card;
