import React from "react";

function Hero() {
  return (
    <section id="hero">
      <div className="h-screen bg-[url('/images/hero/bg.png')] bg-no-repeat bg-cover relative flex items-center px-24">
        <img
          src="/images/hero/telescope.png"
          alt="telescope"
          width={1000}
          height={1000}
          className="absolute bottom-0 right-0"
        />
        <div className="z-10">
          <h1 className="text-[#FFD369] text-5xl mb-12 leading-relaxed">
            Ready To Go
            <br />
            Back To Chilhood?
          </h1>
          <button className="bg-[#FFC90E] border-[4px] border-black rounded-md px-8 py-2 text-2xl relative animate-scale">
            PLAY
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
