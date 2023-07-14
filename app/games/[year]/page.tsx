import Meteor from "@/app/components/Meteor";
import { games } from "@/app/data";
import React from "react";

function page({ params: { year } }: { params: { year: string } }) {
  const filteredGames = games.filter((data) => data.category === year);

  return (
    <main className="bg-black p-8 relative overflow-hidden">
      <Meteor />
      <div className="z-10 relative">
        <h1 className="text-center text-9xl text-[#512023] mb-8">{year}</h1>
        <div className="grid grid-cols-3 gap-12 mb-24">
          {filteredGames.map((data) => (
            <div key={data.id}>
              <div
                className={`w-full h-[700px] overflow-hidden ${data.bg} bg-no-repeat bg-cover p-6 rounded-[2.125rem]`}
              >
                <p className={`${data.gameCardTextColor} text-center text-sm`}>
                  GAME CARD
                </p>
                <div
                  className={`h-[350px] ${data.poster} bg-no-repeat bg-cover relative my-4`}
                >
                  <div className="absolute bottom-28 right-0 p-1 text-xl font-semibold bg-[#DFA421] rounded-[0.3125rem] border-[4px] border-black shadow-[0px_4px_4px_0px_#000]">
                    {data.year}
                  </div>
                  <div className="absolute bottom-16 right-0 p-2 font-medium text-white bg-[#C8462F] text-xs rounded-[0.3125rem] border-[4px] border-black shadow-[0px_4px_4px_0px_#000]">
                    {data.owner}
                  </div>
                  <div
                    className={`absolute bottom-0 left-0 py-2 px-4 ${
                      data.titleBg.includes("red")
                        ? "text-yellow-400"
                        : "text-white"
                    } text-2xl font-medium ${
                      data.titleBg
                    } bg-no-repeat bg-cover`}
                  >
                    {data.name}
                  </div>
                </div>
                <div
                  className={`p-2 ${data.descBg} rounded shadow-[0px_4px_4px_0px_rgba(255,255,255,0.32)_inset,_0px_4px_4px_0px_rgba(255,255,255,0.33)] h-[15.5rem]`}
                >
                  <div className="bg-stone-500 h-full flex items-center rounded-2xl px-2 py-4 text-white text-xs">
                    {data.desc}
                  </div>
                </div>
              </div>
              <p className="text-xl font-semibold mt-5 mb-6 text-white">
                {data.name}
              </p>
              <a
                href={`/games/${year}/${data.id}`}
                className="border-[4px] border-[#4A289C] rounded-full py-3 px-4 text-white text-sm hover:scale-[0.9] block w-fit duration-200 ease-linear"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
        <a
          href="/#games"
          className="border-[4px] border-black rounded-full py-2 px-4 bg-[#ED1C24] text-lg font-medium hover:scale-[0.9] duration-300 ease-linear block w-fit"
        >
          BACK
        </a>
      </div>
    </main>
  );
}

export default page;
