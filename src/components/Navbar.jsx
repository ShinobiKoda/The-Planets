import React from "react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full">
      <div className="mobile-nav w-full text-white px-4 py-4 flex flex-col gap-6">
        <div className="flex justify-between items-center w-full border-b-2 pb-4 border-[#383852]">
          <h3 className="text-2xl font-semibold">THE PLANETS</h3>
          <div
            className={`hamburger ${isOpen ? "open" : ""}`}
            onClick={toggleSidebar}
          >
            <div className="line line1"></div>
            <div className="line line2"></div>
            <div className="line line3"></div>
          </div>
        </div>
        <div className="flex justify-between text-white font-semibold section-tabs">
          <ul className="flex justify-between border-b-2 border-[#383852] w-full">
            <li className="pb-4 border-[#6d2ed5] border-b-4 cursor-pointer hover:opacity-90">
              OVERVIEW
            </li>
            <li className="pb-4 cursor-pointer hover:opacity-90">STRUCTURE</li>
            <li className="pb-4 cursor-pointer hover:opacity-90">SURFACE</li>
          </ul>
        </div>
      </div>
      <div className={`sidebar ${isOpen ? "show" : ""} text-black`}>
        <p>MECURY</p>
        <p>VENUS</p>
        <p>EARTH</p>
        <p>MARS</p>
        <p>JUPITER</p>
        <p>SATURN</p>
        <p>URANUS</p>
        <p>NEPTUNE</p>
      </div>
      <div className="tablet-nav text-white flex flex-col gap-5 py-4 px-8 justify-center border-b-2 pb-8 border-[#383852]">
        <h3 className="text-4xl text-center font-semibold">THE PLANETS</h3>
        <div className="flex justify-between text-xl font-medium text-[#b0b1c6]">
          <a href="#" className="hover:opacity-90 cursor-pointer">
            MECURY
          </a>
          <a href="#" className="hover:opacity-90 cursor-pointer">
            VENUS
          </a>
          <a href="#" className="hover:opacity-90 cursor-pointer">
            EARTH
          </a>
          <a href="#" className="hover:opacity-90 cursor-pointer">
            MARS
          </a>
          <a href="#" className="hover:opacity-90 cursor-pointer">
            JUPITER
          </a>
          <a href="#" className="hover:opacity-90 cursor-pointer">
            SATURN
          </a>
          <a href="#" className="hover:opacity-90 cursor-pointer">
            URANUS
          </a>
          <a href="#" className="hover:opacity-90 cursor-pointer">
            NEPTUNE
          </a>
        </div>
      </div>
      <div className="desktop-nav text-white flex py-4 px-8 items-center border-b-2 border-[#383852] justify-between">
        <h3 className="text-4xl text-center font-semibold">THE PLANETS</h3>
        <div className="flex items-center text-xl font-medium gap-8 text-[#b0b1c6]">
          <a href="#" className="hover:opacity-90 cursor-pointer">
            MECURY
          </a>
          <a href="#" className="hover:opacity-90 cursor-pointer">
            VENUS
          </a>
          <a href="#" className="hover:opacity-90 cursor-pointer">
            EARTH
          </a>
          <a href="#" className="hover:opacity-90 cursor-pointer">
            MARS
          </a>
          <a href="#" className="hover:opacity-90 cursor-pointer">
            JUPITER
          </a>
          <a href="#" className="hover:opacity-90 cursor-pointer">
            SATURN
          </a>
          <a href="#" className="hover:opacity-90 cursor-pointer">
            URANUS
          </a>
          <a href="#" className="hover:opacity-90 cursor-pointer">
            NEPTUNE
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
