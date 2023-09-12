import React from "react";
import { homeRevolveBg, reactLogo } from "../assets";
import Navbar from "../components/Layout/Navbar";

export default function Home() {
  return (
    <>
      {/* Preloader */}
      <div className="fixed grid animate-toInvisible h-full z-20 inset-0 w-full place-items-center bg-gradient-to-br from-indigo-900 to-indigo-950">
        {/* <div className="fixed  hidden h-full z-20 inset-0 w-full place-items-center bg-gradient-to-br from-indigo-900 to-indigo-950"> */}
        <div className="relative w-32 h-32">
          <div className="relative w-32 h-32 animate-rotateFull">
            <span className="spin-letter">v</span>
            <span className="spin-letter">i</span>
            <span className="spin-letter">s</span>
            <span className="spin-letter">t</span>
            <span className="spin-letter">a</span>
            <span className="spin-letter"></span>
            <span className="spin-letter">c</span>
            <span className="spin-letter">o</span>
            <span className="spin-letter">m</span>
            <span className="spin-letter">m</span>
            <span className="spin-letter">u</span>
            <span className="spin-letter">n</span>
            <span className="spin-letter">i</span>
            <span className="spin-letter">t</span>
            <span className="spin-letter">y</span>
          </div>

          <img
            src={reactLogo}
            alt=""
            className="block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </div>

      {/* Navigation */}
      <Navbar />

      <header className="bg-[#1f1f1f] relative animate-slideDown2 invisible z-40 animation-delay-5000">
        <div className="absolute bottom-1/2 translate-y-1/2 left-0 w-full">
          <div className="container mx-auto px-20 flex flex-col justify-between">
            <h1 className="text-4xl text-white font-medium relative z-10 mt-20 mb-40 font-poppins w-[480px] main-heading">
              <p className="h-12 overflow-hidden flex gap-3">
                <span className="main-heading-word word-1">West </span>
                <span className="main-heading-word word-2">Coast</span>
                <span className="main-heading-word word-3">Brandmakers</span>
              </p>

              <p className="h-12 overflow-hidden flex gap-3">
                <span className="main-heading-word word-4">With a</span>
                <span className="main-heading-word word-5">global</span>
                <span className="main-heading-word word-6">edge.</span>
              </p>
            </h1>

            <h1 className="text-7xl text-white font-semibold  h-20 overflow-hidden">
              <span className="block animate-textUp animation-delay-7000  translate-y-20 transition-all">
                Meet <i>Revolve</i>
              </span>
            </h1>
          </div>
        </div>

        <video autoPlay loop>
          <source src="/wave.mp4" type="video/mp4" />
        </video>
      </header>

      <div className="theme-background animate-slideDown absolute -top-[120vh] z-30 animation-delay-4000 w-full h-[100svh]"></div>
    </>
  );
}
