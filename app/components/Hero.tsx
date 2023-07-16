"use client";

import React, { useEffect, useState } from "react";

function Hero() {
  const [overflow, setOverflow] = useState("hidden");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.body.style.overflowY = overflow;
  }, [overflow]);

  return (
    <section id="hero">
      <div className="h-screen bg-[url('/images/hero/bg.png')] bg-no-repeat bg-cover relative flex items-center justify-center lg:justify-normal px-8 lg:px-24">
        <img
          src="/images/hero/telescope.png"
          alt="telescope"
          width={1000}
          height={1000}
          className="absolute bottom-0 right-0"
        />
        <div className="z-10">
          <h1
            className={`text-[#FFD369] text-2xl lg:text-5xl mb-12 leading-relaxed ${
              overflow === "hidden" ? "text-left" : "text-center"
            }`}
          >
            {overflow === "hidden" ? (
              <>
                Ready To Go
                <br />
                Back To Chilhood?
              </>
            ) : (
              <>
                WELCOME TO
                <br />
                VETUS!
              </>
            )}
          </h1>
          {overflow === "hidden" ? (
            <a
              href="#games"
              onClick={() => {
                setOverflow("auto");
              }}
              className="bg-[#FFC90E] border-[4px] border-black rounded-md px-6 lg:px-8 py-2 text-lg lg:text-2xl relative animate-scale hover:pause-animation duration-300 ease-linear"
              style={{
                appearance: "button",
                WebkitAppearance: "button",
                MozAppearance: "button",
              }}
            >
              PLAY
            </a>
          ) : (
            <p className="font-sans text-white text-xl lg:text-3xl text-center font-semibold">
              Let's explore your
              <br />
              childhood games with us!
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Hero;
