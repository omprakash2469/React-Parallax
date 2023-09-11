import React from "react";
import { homeRevolveBg, reactLogo, wave } from "./assets";

export default function App() {
  return (
    <>
      {/* Preloader */}
      <div className="fixed animate-fade z-20 inset-0 w-full grid place-items-center bg-gradient-to-br from-indigo-900 to-indigo-950">
        <div>
          <img src={reactLogo} alt="" />
        </div>
      </div>

      {/* Navigation */}
      <nav className="py-10 px-14 bg-[#1f1f1f]">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <img
              src={reactLogo}
              alt=""
              className="w-16 cursor-pointer animate-wave"
            />
          </div>

          <div className="flex justify-between items-center">
            <ul className="uppercase  flex mr-14 space-x-12">
              <li className="text-white text-[11px] font-bold tracking-wider cursor-pointer">
                Home
              </li>
              <li className="text-white text-[11px] font-bold tracking-wider cursor-pointer">
                About Us
              </li>
              <li className="text-white text-[11px] font-bold tracking-wider cursor-pointer">
                Services
              </li>
              <li className="text-white text-xs font-bold tracking-wider cursor-pointer">
                Work
              </li>
              <li className="text-white text-xs font-bold tracking-wider cursor-pointer">
                Careers
              </li>
            </ul>

            <button className="border-2 hover:bg-white cursor-pointer transition-all px-12 py-4 text-white text-[11px] font-bold tracking-wider uppercase flex hover:text-black">
              <span className="mr-3">Contact Us</span>
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
        </div>
      </nav>

      <header className="bg-[#1f1f1f] py-20 relative">
        <div className="relative">
          <div className="container mx-auto">
            <h1 className="text-4xl text-white font-medium font-poppins relative z-20 p-14 w-[620px]">
              <p>West Coast Brandmakers</p>
              <p> with a global edge.</p>
            </h1>
          </div>
          <img src={wave} alt="" className="w-full absolute -bottom-14 z-10" />
        </div>
        <div className="relative h-[420px] ">
          <img src={homeRevolveBg} alt="" />
          <h1 className="text-7xl absolute container mx-auto top-10 left-0 text-white font-semibold  p-14">
            Meet <i>Revolve</i>
          </h1>
        </div>
      </header>
    </>
  );
}
