import React, { useState } from "react";

const Navbar = ({ planets, onSelectPlanet }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const switchTabs = (buttonIndex) => {
    setSelectedTab(buttonIndex);
  };

  return (
    <div className="w-full">
      {/* Mobile Navigation */}
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
      </div>
      <div className="text-[#393955] px-4">
        <div className="flex items-center justify-between border-[#383852] border-b-2 tab-section">
          {["OVERVIEW", "STRUCTURE", "SURFACE"].map((tab, index) => (
            <button
              key={index}
              onClick={() => switchTabs(index)}
              className={`px-4 py-4 border-b-2 ${
                selectedTab === index
                  ? "border-[#6f2ed4] text-white font-bold"
                  : "border-transparent text-gray-500 font-bold"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <div className={`sidebar ${isOpen ? "show" : ""} text-black`}>
        {planets.map((planet) => (
          <p
            key={planet.name}
            onClick={() => {
              onSelectPlanet(planet);
              setIsOpen(false); // Close sidebar after selection
            }}
            className="cursor-pointer hover:opacity-90"
          >
            {planet.name.toUpperCase()}
          </p>
        ))}
      </div>

      {/* Tablet Navigation */}
      <div className="tablet-nav text-white flex flex-col gap-5 py-4 px-8 justify-center border-b-2 pb-8 border-[#383852]">
        <h3 className="text-4xl text-center font-semibold">THE PLANETS</h3>
        <div className="flex justify-between text-xl font-medium text-[#b0b1c6]">
          {planets.map((planet) => (
            <a
              key={planet.name}
              onClick={() => onSelectPlanet(planet)}
              className="hover:opacity-90 cursor-pointer"
            >
              {planet.name.toUpperCase()}
            </a>
          ))}
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="desktop-nav text-white flex py-4 px-8 items-center border-b-2 border-[#383852] justify-between">
        <h3 className="text-4xl text-center font-semibold">THE PLANETS</h3>
        <div className="flex items-center text-xl font-medium gap-8 text-[#b0b1c6]">
          {planets.map((planet) => (
            <a
              key={planet.name}
              onClick={() => onSelectPlanet(planet)}
              className="hover:opacity-90 cursor-pointer"
            >
              {planet.name.toUpperCase()}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
