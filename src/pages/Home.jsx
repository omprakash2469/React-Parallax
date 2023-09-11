import React from "react";
import { homeRevolveBg, reactLogo, wave } from "../assets";
import Navbar from "../components/Layout/Navbar";

export default function Home() {
  return (
    <>
      {/* Preloader */}
      <div className="fixed animate-fade h-full z-20 inset-0 w-full grid place-items-center bg-gradient-to-br from-indigo-900 to-indigo-950">
        <img src={reactLogo} alt="" />
      </div>

      {/* Navigation */}
      <Navbar />

      <header className="bg-[#1f1f1f] py-8 relative">
        <div className="relative">
          <div className="container mx-auto">
            <h1 className="text-4xl text-white font-medium relative z-10 font-poppins p-14 w-[620px]">
              <p>West Coast Brandmakers</p>
              <p> with a global edge.</p>
            </h1>
          </div>
          <img src={wave} alt="" className="w-full absolute -bottom-14 z-[1]" />
        </div>
        <div className="relative h-[420px] ">
          <img src={homeRevolveBg} alt="" className="-z-20" />
          <h1 className="text-7xl absolute container mx-auto top-10 left-0 text-white font-semibold  p-14">
            Meet <i>Revolve</i>
          </h1>
        </div>
      </header>
    </>
  );
}
