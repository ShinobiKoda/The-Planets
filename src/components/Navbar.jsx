import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

// Reusable component for planet list items
const PlanetListItem = ({ planet, onSelectPlanet, color }) => (
  <div
    className="text-white border-b-[1px] pb-4 flex justify-between items-center cursor-pointer"
    onClick={() => onSelectPlanet(planet)}
  >
    <p className="flex gap-4">
      <span
        className="w-4 h-4 rounded-full"
        style={{ backgroundColor: color }}
      ></span>
      <span>{planet.name}</span>
    </p>
    <FaArrowRight />
  </div>
);

const Navbar = ({ planets, onSelectPlanet, selectedTab, switchTabs, selectedPlanet }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const planetColors = {
    Mercury: "#419ebb",
    Venus: "#eda249",
    Earth: "#6d2ed5",
    Mars: "#d14c32",
    Jupiter: "#d83a34",
    Saturn: "#cd5120",
    Uranus: "#1ec1a2",
    Neptune: "#2d68f0",
  };

  const handlePlanetClick = (planet) => {
    onSelectPlanet(planet);
    setIsOpen(false); // Close the sidebar
    setTimeout(() => {
      document.getElementById("planet-info");
    }, 0);
  };

  return (
    <div className="w-full">
      {/* Mobile Navigation */}
      <div className="mobile-nav w-full text-white px-4 py-4 flex flex-col gap-6">
        <div className="flex justify-between items-center w-full border-b-[1px] pb-4 border-[#383852]">
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
        <div className="flex items-center justify-between border-[#383852] border-b-[1px] tab-section">
          {["OVERVIEW", "STRUCTURE", "SURFACE"].map((tab, index) => (
            <button
              key={index}
              onClick={() => switchTabs(index)}
              className={`px-4 py-4 border-b-[2px] ${
                selectedTab === index
                  ? `border-[${planetColors[selectedPlanet.name]}] text-white font-bold`
                  : "border-transparent text-gray-500 font-bold"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <div
        className={`sidebar ${
          isOpen ? "show" : ""
        } text-black flex flex-col px-6 gap-4 py-12 w-full h-full`}
      >
        {planets.map((planet) => (
          <PlanetListItem
            key={planet.name}
            planet={planet}
            onSelectPlanet={handlePlanetClick}
            color={planetColors[planet.name]}
          />
        ))}
      </div>

      {/* Tablet Navigation */}
      <div className="tablet-nav text-white flex flex-col gap-5 py-4 px-8 justify-center border-b-[1px] pb-8 border-[#383852]">
        <h3 className="text-4xl text-center font-semibold">THE PLANETS</h3>
        <div className="flex justify-between text-xl font-medium text-[#b0b1c6]">
          {planets.map((planet) => (
            <a
              key={planet.name}
              onClick={() => handlePlanetClick(planet)}
              className="hover:opacity-90 cursor-pointer"
            >
              {planet.name.toUpperCase()}
            </a>
          ))}
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="desktop-nav text-white flex py-4 px-8 items-center border-b-[1px] border-[#383852] justify-between">
        <h3 className="text-4xl text-center font-semibold">THE PLANETS</h3>
        <div className="flex items-center text-xl font-medium gap-8 text-[#b0b1c6]">
          {planets.map((planet) => (
            <a
              key={planet.name}
              onClick={() => handlePlanetClick(planet)}
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
