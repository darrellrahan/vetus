import Meteor from "@/app/components/Meteor";
import { games } from "@/app/data";
import React from "react";

function page({ params: { game } }: { params: { game: string } }) {
  const details = games.find((data) => data.id === game);

  if (!details) return;

  return (
    <main className="bg-black py-12 px-20 relative overflow-hidden h-screen">
      <Meteor />
      <div className="z-10 relative flex flex-col justify-between h-full">
        <p
          className="text-center text-6xl uppercase"
          style={{
            WebkitTextStroke: `3px ${details.color}`,
            WebkitTextFillColor: "transparent",
          }}
        >
          {details.name}
        </p>
        <div className="grid grid-cols-2 gap-16">
          <div
            className={`${details.gameplay} bg-no-repeat bg-cover h-full`}
          ></div>
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className={`${details.textColor} text-2xl`}>
                About The Game
              </h3>
              <p className="text-white text-sm">{details.desc}</p>
            </div>
            <div className="space-y-4">
              <h3 className={`${details.textColor} text-2xl`}>Release Year</h3>
              <p className="text-white text-sm">{details.year}</p>
            </div>
            <div className="space-y-4">
              <h3 className={`${details.textColor} text-2xl`}>Genre</h3>
              <p className="text-white text-sm">{details.genre.join(", ")}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <a
            href={`/games/${details.category}`}
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
