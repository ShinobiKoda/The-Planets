import React from "react";

const PlanetCard = ({ planet, selectedTab, switchTabs }) => {
  const getTabContent = () => {
    switch (selectedTab) {
      case 0:
        return planet.overview;
      case 1:
        return planet.internalStructure;
      case 2:
        return planet.surfaceGeology;
      default:
        return planet.overview;
    }
  };

  const tabContent = getTabContent();

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

  const planetColor = planetColors[planet.name];

  return (
    <div id="planet-info" className="w-full text-white mt-[6rem]">
      <div className="flex flex-col items-center justify-center gap-6 w-full mb-[2rem]planet-info">
        <div className="w-[20rem] mx-auto flex items-center justify-center">
          <img src={tabContent.image} alt="" />
        </div>
        <div className="planet-tabs w-full my-12 justify-between max-w-[1000px] px-4">
          <div className="text-center w-full flex flex-col gap-4 max-w-[600px] mobile-description">
            <h4 className="font-semibold text-[3rem] text-left">
              {planet.name.toUpperCase()}
            </h4>
            <p className="leading-8 max-w-[500px] h-[150px] overflow-hidden">
              {tabContent.description}
            </p>
            <p className="flex items-center gap-1 text-xl font-normal">
              Source:
              <a
                href={`https://en.wikipedia.org/wiki/${planet.name}`}
                target="_blank"
                className="text-[#606175]"
              >
                Wikipedia
              </a>
            </p>
          </div>
          <div className="flex flex-col max-w-[350px] planet-tabs-nav font-bold justify-between gap-12">
            <div
              className={`flex justify-between items-center px-3 cursor-pointer hover:opacity-90 h-[.5rem] ${
                selectedTab === 0 ? "" : "bg-transparent border border-white"
              }`}
              style={selectedTab === 0 ? { backgroundColor: planetColor } : {}}
              onClick={() => switchTabs(0)}
            >
              <span>01</span>
              <span>OVERVIEW</span>
            </div>
            <div
              className={`flex justify-between items-center px-3 cursor-pointer hover:opacity-90 h-[2.5rem] ${
                selectedTab === 1 ? "" : "bg-transparent border border-white"
              }`}
              style={selectedTab === 1 ? { backgroundColor: planetColor } : {}}
              onClick={() => switchTabs(1)}
            >
              <span>02</span>
              <span>INTERNAL STRUCTURE</span>
            </div>
            <div
              className={`flex justify-between items-center px-3 cursor-pointer hover:opacity-90 h-[2.5rem] ${
                selectedTab === 2 ? "" : "bg-transparent border border-white"
              }`}
              style={selectedTab === 2 ? { backgroundColor: planetColor } : {}}
              onClick={() => switchTabs(2)}
            >
              <span>03</span>
              <span>SURFACE GEOLOGY</span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col gap-3 px-4 max-w-[1000px] mx-auto">
        <div className="flex justify-between items-center w-full border-2 border-[#383852] p-4">
          <span className="text-[#606175] text-xl font-semibold">
            ROTATION TIME
          </span>
          <span className="text-xl font-semibold">{planet.rotationTime}</span>
        </div>
        <div className="flex justify-between items-center w-full  border-2 border-[#383852] p-4">
          <span className="text-[#606175] text-xl font-semibold">
            REVOLUTION TIME
          </span>
          <span className="text-xl font-semibold">{planet.revolutionTime}</span>
        </div>
        <div className="flex justify-between items-center w-full  border-2 border-[#383852] p-4">
          <span className="text-[#606175] text-xl font-semibold">RADIUS</span>
          <span className="text-xl font-semibold">{planet.radius}</span>
        </div>
        <div className="flex justify-between items-center w-full  border-2 border-[#383852] p-4">
          <span className="text-[#606175] text-xl font-semibold">
            AVERAGE TEMP.
          </span>
          <span className="text-xl font-semibold">{planet.averageTemp}</span>
        </div>
      </div>
    </div>
  );
};

export default PlanetCard;
