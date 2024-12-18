import React from "react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full">
      <div className="mobile-nav w-full text-white px-4 py-4 flex justify-between items-center">
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
      </div>
      <div className="tablet-nav"></div>
      <div className="desktop-nav"></div>
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
      <div className="flex justify-between px-4 text-white font-semibold section-tabs">
        <ul className="flex justify-between border-b-2 border-[#383852] w-full">
          <li className="pb-4 border-[#6d2ed5] border-b-4 cursor-pointer hover:opacity-90">
            OVERVIEW
          </li>
          <li className="pb-4 cursor-pointer hover:opacity-90">STRUCTURE</li>
          <li className="pb-4 cursor-pointer hover:opacity-90">SURFACE</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
