import Card from "@/app/components/Card";
import Meteor from "@/app/components/Meteor";
import { games } from "@/app/data";
import React from "react";

function page({ params: { year } }: { params: { year: string } }) {
  const filteredGames = games.filter((data) => data.category === year);

  return (
    <main className="bg-black p-8 relative overflow-hidden">
      <Meteor />
      <div className="z-10 relative">
        <h1 className="text-center text-9xl text-[#512023]">{year}</h1>
        <p className="text-center text-white text-[0.75rem] my-12">
          You can flip the card by clicking on it!
        </p>
        <div className="grid grid-cols-3 gap-12 mb-24">
          {filteredGames.map((data) => (
            <div key={data.id}>
              <Card
                bg={data.bg}
                desc={data.desc}
                descBg={data.descBg}
                gameCardTextColor={data.gameCardTextColor}
                name={data.name}
                owner={data.owner}
                poster={data.poster}
                titleBg={data.titleBg}
                year={data.year}
              />
              <p className="text-xl font-semibold my-5 text-white">
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
          className="rounded-full py-2 px-4 bg-[#ED1C24] text-lg font-medium hover:scale-[0.9] duration-300 ease-linear block w-fit"
        >
          BACK
        </a>
      </div>
    </main>
  );
}

export default page;
