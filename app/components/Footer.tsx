import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

function Footer() {
  return (
    <section id="footer">
      <footer className="px-8 py-12 lg:px-16 lg:py-16 bg-gradient-to-b from-indigo-900 to-violet-950 flex flex-col gap-12 lg:gap-16 items-center text-center text-white">
        <h1 className="text-[0.75rem] lg:text-lg">
          Join newsletter for the latest news on our games!
        </h1>
        <div className={`${poppins.className} w-full lg:w-80 relative`}>
          <input
            type="email"
            placeholder="Your email"
            className="placeholder:text-white py-1 text-lg border-b-2 border-white bg-transparent outline-none w-full pr-[5.25rem]"
          />
          <button className="border-2 border-white rounded-full py-1 px-3 bg-transparent text-white absolute right-0 text-[0.75rem] z-10 hover:scale-90 duration-300 ease-linear">
            Sign Up
          </button>
        </div>
        <p className={`${poppins.className} text-sm`}>
          Designed by{" "}
          <a
            href="https://www.instagram.com/pamella446"
            className="relative after:absolute after:bottom-0 after:inset-x-0 after:w-full after:h-[1.5px] after:bg-white hover:after:w-0 after:duration-300 after:ease-linear"
          >
            Pamella
          </a>
          <span className="mx-2">|</span>Developed by{" "}
          <a
            href="https://github.com/darrellrahan"
            className="relative after:absolute after:bottom-0 after:inset-x-0 after:w-full after:h-[1.5px] after:bg-white hover:after:w-0 after:duration-300 after:ease-linear"
          >
            Darrell
          </a>
        </p>
        <div className="w-full">
          <hr className="w-full border border-[#7C7C7C80] mb-6" />
          <p
            className={`${poppins.className} text-[#7C7C7C] lg:text-lg font-semibold`}
          >
            © 2023 Vetus. All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
