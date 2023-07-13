"use client";

import React, { useEffect } from "react";

function page({ params: { year } }: { params: { year: string } }) {
  useEffect(() => {
    document.body.style.overflowY = "auto";
  }, []);

  return (
    <main className="bg-black p-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 rotate-45">
        <div className="meteor meteor-1"></div>
        <div className="meteor meteor-1"></div>
        <div className="meteor meteor-1"></div>
        <div className="meteor meteor-1"></div>
        <div className="meteor meteor-1"></div>
        <div className="meteor meteor-1"></div>
        <div className="meteor meteor-1"></div>
        <div className="meteor meteor-1"></div>
        <div className="meteor meteor-1"></div>
        <div className="meteor meteor-1"></div>
        <div className="meteor meteor-1"></div>
        <div className="meteor meteor-1"></div>
        <div className="meteor meteor-1"></div>
        <div className="meteor meteor-1"></div>
        <div className="meteor meteor-1"></div>
        <div className="meteor meteor-1"></div>
        <div className="meteor meteor-1"></div>
        <div className="meteor meteor-1"></div>
        <div className="meteor meteor-1"></div>
        <div className="meteor meteor-1"></div>
      </div>
      <div className="absolute inset-0 rotate-45">
        <div className="meteor meteor-2"></div>
        <div className="meteor meteor-2"></div>
        <div className="meteor meteor-2"></div>
        <div className="meteor meteor-2"></div>
        <div className="meteor meteor-2"></div>
        <div className="meteor meteor-2"></div>
        <div className="meteor meteor-2"></div>
        <div className="meteor meteor-2"></div>
        <div className="meteor meteor-2"></div>
        <div className="meteor meteor-2"></div>
        <div className="meteor meteor-2"></div>
        <div className="meteor meteor-2"></div>
        <div className="meteor meteor-2"></div>
        <div className="meteor meteor-2"></div>
        <div className="meteor meteor-2"></div>
        <div className="meteor meteor-2"></div>
        <div className="meteor meteor-2"></div>
        <div className="meteor meteor-2"></div>
        <div className="meteor meteor-2"></div>
        <div className="meteor meteor-2"></div>
        <div className="meteor meteor-2"></div>
        <div className="meteor meteor-2"></div>
        <div className="meteor meteor-2"></div>
      </div>
      <div className="absolute bottom-0 right-0 rotate-45">
        <div className="meteor meteor-3"></div>
        <div className="meteor meteor-3"></div>
        <div className="meteor meteor-3"></div>
        <div className="meteor meteor-3"></div>
        <div className="meteor meteor-3"></div>
        <div className="meteor meteor-3"></div>
        <div className="meteor meteor-3"></div>
        <div className="meteor meteor-3"></div>
        <div className="meteor meteor-3"></div>
        <div className="meteor meteor-3"></div>
        <div className="meteor meteor-3"></div>
        <div className="meteor meteor-3"></div>
        <div className="meteor meteor-3"></div>
        <div className="meteor meteor-3"></div>
        <div className="meteor meteor-3"></div>
        <div className="meteor meteor-3"></div>
        <div className="meteor meteor-3"></div>
        <div className="meteor meteor-3"></div>
        <div className="meteor meteor-3"></div>
        <div className="meteor meteor-3"></div>
        <div className="meteor meteor-3"></div>
        <div className="meteor meteor-3"></div>
      </div>
      <div className="z-10 relative">
        <h1 className="text-center text-9xl text-[#512023] mb-8">{year}</h1>
        <div className="w-[28rem] bg-[url('/images/game-page/donkeykong/bg.png')] bg-no-repeat bg-cover p-6 rounded-[3.125rem]">
          <p className="text-[#FFF500B8] text-center text-sm">GAME CARD</p>
          <div className="h-[350px] bg-[url('/images/game-page/donkeykong/poster.png')] bg-no-repeat bg-cover relative my-4">
            <div className="absolute bottom-28 right-0 p-1 text-xl font-semibold bg-[#DFA421] rounded-[0.3125rem] border-[4px] border-black shadow-[0px_4px_4px_0px_#000]">
              1981
            </div>
            <div className="absolute bottom-16 right-0 p-2 font-medium text-white bg-[#C8462F] text-xs rounded-[0.3125rem] border-[4px] border-black shadow-[0px_4px_4px_0px_#000]">
              NINTENDO
            </div>
            <div className="absolute bottom-0 left-0 py-2 px-4 text-yellow-400 text-2xl font-medium bg-[url('/images/game-page/donkeykong/title-bg.svg')] bg-no-repeat bg-cover">
              Donkey Kong
            </div>
          </div>
          <div className="p-2 bg-orange-950 rounded shadow-[0px_4px_4px_0px_rgba(255,255,255,0.32)_inset,_0px_4px_4px_0px_rgba(255,255,255,0.33)]">
            <div className="bg-stone-500 rounded-2xl px-2 py-4 text-white text-xs">
              Gerakkan Mario ke kiri dan ke kanan pada balok penopang, naik
              turun tangga dan hindari rintangan apa pun di jalan (baik dengan
              melompati, menghancurkannya dengan palu, atau mengitarinya).
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default page;
