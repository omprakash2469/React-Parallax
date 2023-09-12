import React from "react";
import { homeRevolveBg, reactLogo, video, wave } from "../assets";
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

      <header className="bg-[#1f1f1f] relative">
        <div className="absolute bottom-1/2 translate-y-1/2 left-0 w-full">
          <div className="container mx-auto px-20 flex flex-col justify-between">
            <h1 className="text-4xl text-white font-medium relative z-10 mt-20 mb-40 font-poppins w-[620px]">
              <p>West Coast Brandmakers</p>
              <p> with a global edge.</p>
            </h1>

            <h1 className="text-7xl text-white font-semibold">
              Meet <i>Revolve</i>
            </h1>
          </div>
        </div>
        <video src={video} autoPlay={true} loop={true}></video>
      </header>
    </>
  );
}
