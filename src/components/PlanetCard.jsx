import React from "react";

const PlanetCard = ({ planet }) => {
  return (
    <div className="w-full text-white mt-[6rem]">
      <div className="flex flex-col items-center justify-center gap-6 w-full mb-12">
        <div className="w-[20rem] mx-auto flex items-center justify-center">
          <img src={planet.overview.image} alt="" />
        </div>
        <div className="text-center w-full flex flex-col items-center justify-center gap-5 max-w-[600px] px-4">
          <h4 className="font-semibold text-3xl">
            {planet.name.toUpperCase()}
          </h4>
          <p className="leading-8">{planet.overview.description}</p>
          <p className=" flex items-center gap-1">
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
        <div className="flex justify-between items-center w-full  border-2 border-[#383852] p-4">
          <span className="text-[#606175]">ROTATION TIME</span>
          <span>{planet.rotationTime}</span>
        </div>
        <div className="flex justify-between items-center w-full  border-2 border-[#383852] p-4">
          <span className="text-[#606175]">REVOLUTION TIME</span>
          <span>{planet.revolutionTime}</span>
        </div>
        <div className="flex justify-between items-center w-full  border-2 border-[#383852] p-4">
          <span className="text-[#606175]">RADIUS</span>
          <span>{planet.radius}</span>
        </div>
        <div className="flex justify-between items-center w-full  border-2 border-[#383852] p-4">
          <span className="text-[#606175]">AVERAGE TEMP.</span>
          <span>{planet.averageTemp}</span>
        </div>
      </div>
      {/* https://en.wikipedia.org/wiki/Earth */}
    </div>
  );
};

export default PlanetCard;
