import Meteor from "@/app/components/Meteor";
import React from "react";

function page({ params: { game } }: { params: { game: string } }) {
  return (
    <main className="bg-black py-12 px-20 relative overflow-hidden h-screen">
      <Meteor />
      <div className="z-10 relative flex flex-col justify-between h-full">
        <p
          className="text-center text-6xl"
          style={{
            WebkitTextStroke: "3px #D04146",
            WebkitTextFillColor: "transparent",
          }}
        >
          DONKEY KONG
        </p>
        <div className="grid grid-cols-2 gap-16">
          <div className="bg-[url('/images/game-page/donkeykong-gameplay.gif')] bg-no-repeat bg-cover h-full"></div>
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-[#D04146] text-2xl">About The Game</h3>
              <p className="text-white text-sm">
                Donkey Kong adalah franchise video game yang dibuat oleh Shigeru
                Miyamoto dan dimiliki oleh Nintendo. Ini mengikuti petualangan
                seekor gorila bernama Donkey Kong dan klan kera dan monyet
                lainnya.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-[#D04146] text-2xl">Release Year</h3>
              <p className="text-white text-sm">1981</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-[#D04146] text-2xl">Genre</h3>
              <p className="text-white text-sm">
                Platform, Action-adventure, Puzzle, Racing, Rhythm
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <a
            href="/#games"
            className="rounded-full py-2 px-4 bg-[#ED1C24] text-lg font-medium hover:scale-[0.9] duration-300 ease-linear"
          >
            BACK
          </a>
        </div>
      </div>
    </main>
  );
}

export default page;
