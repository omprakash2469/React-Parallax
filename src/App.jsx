import React from "react";
import { homeRevolveBg, reactLogo } from "./assets";

export default function App() {
  return (
    <>
      <nav className="py-10 px-14 flex justify-between container mx-auto bg-[#1f1f1f] items-center">
        <div>
          <img src={reactLogo} alt="" className="w-16" />
        </div>

        <div className="flex justify-between items-center">
          <ul className="uppercase  flex mr-6 space-x-12">
            <li className="text-white text-[11px] font-bold tracking-wider">
              Home
            </li>
            <li className="text-white text-[11px] font-bold tracking-wider">
              About
            </li>
            <li className="text-white text-[11px] font-bold tracking-wider">
              Reviews
            </li>
            <li className="text-white text-xs font-bold tracking-wider">
              Contact
            </li>
          </ul>

          <button className="border-2 px-12 py-3 text-white text-[11px] font-bold tracking-wider uppercase flex">
            <span className="mr-3">Contact</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              className="fill-white text-lg"
              viewBox="0 0 512 512"
            >
              <path d="M334.5 414c8.8 3.8 19 2 26-4.6l144-136c4.8-4.5 7.5-10.8 7.5-17.4s-2.7-12.9-7.5-17.4l-144-136c-7-6.6-17.2-8.4-26-4.6s-14.5 12.5-14.5 22l0 72L32 192c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l288 0 0 72c0 9.6 5.7 18.2 14.5 22z" />
            </svg>
          </button>
        </div>
      </nav>

      <header className="bg-[#1f1f1f] py-20  container mx-auto">
        <h1 className="text-4xl text-white font-semibold  p-14 w-[520px]">
          West Coast Brandmakers with a global edge.
        </h1>
        <div className="relative">
          <img src={homeRevolveBg} alt="" />
          <h1 className="text-6xl absolute top-10 left-0 text-white font-semibold  p-14 w-[520px]">
            Meet Revolve
          </h1>
        </div>
      </header>
    </>
  );
}
