import React from "react";
import { reactLogo } from "../../assets";
import { Link } from "react-router-dom";

const menu = [
  {
    page: "Home",
    slug: "/",
  },
  {
    page: "About Us",
    slug: "",
  },
  {
    page: "Services",
    slug: "",
  },
  {
    page: "Work",
    slug: "",
  },
  {
    page: "Careers",
    slug: "",
  },
];

export default function Navbar() {
  return (
    <nav className="py-10 px-20 bg-[#1f1f1f] absolute left-0 top-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/">
          <img
            src={reactLogo}
            alt=""
            className="w-16 cursor-pointer animate-wave"
          />
        </a>

        <div className="flex justify-between items-center">
          <ul className="uppercase  flex mr-14 space-x-24">
            {menu.map((value, i) => {
              return (
                <li
                  key={i}
                  className="text-white group text-[11px] font-bold tracking-wider cursor-pointer"
                >
                  <Link to={value.slug}>{value.page}</Link>
                  <span className="h-[1.8px] w-0 transition-all duration-500 group-hover:w-full bg-white block mt-1"></span>
                </li>
              );
            })}
          </ul>

          <button className="contact-btn flex text-white uppercase border-2 border-white py-5 pl-10 pr-12 text-[11px] font-bold bg-transparent relative transition-all overflow-hidden z-10 tracking-wider group hover:text-black">
            <span className="mr-6">Contact Us</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              className="fill-white group-hover:fill-black text-lg transition-all"
              viewBox="0 0 512 512"
            >
              <path d="M334.5 414c8.8 3.8 19 2 26-4.6l144-136c4.8-4.5 7.5-10.8 7.5-17.4s-2.7-12.9-7.5-17.4l-144-136c-7-6.6-17.2-8.4-26-4.6s-14.5 12.5-14.5 22l0 72L32 192c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l288 0 0 72c0 9.6 5.7 18.2 14.5 22z" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
