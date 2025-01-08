import React from "react";

const PlanetCard = ({ planet, selectedTab }) => {
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

  return (
    <div id="planet-info" className="w-full text-white mt-[6rem]">
      <div className="flex flex-col items-center justify-center gap-6 w-full mb-12">
        <div className="w-[20rem] mx-auto flex items-center justify-center">
          <img src={tabContent.image} alt="" />
        </div>
        <div className="text-center w-full flex flex-col items-center justify-center gap-5 max-w-[600px] px-4">
          <h4 className="font-semibold text-3xl">
            {planet.name.toUpperCase()}
          </h4>
          <p className="leading-8">{tabContent.description}</p>
          <p className=" flex items-center gap-1 text-xl font-normal">
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
      </div>
      <div className="w-full flex flex-col gap-3 px-4">
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
