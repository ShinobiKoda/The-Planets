import React from "react";
import { FaArrowPointer } from "react-icons/fa6";

const PlanetCard = ({ planet }) => {
  return (
    <div className="w-full text-white mt-[6rem]">
      <div className="flex flex-col items-center justify-center gap-6 w-full">
        <div className="w-[20rem] mx-auto flex items-center justify-center">
          <img src={planet.overview.image} alt="" />
        </div>
        <div className="text-center w-full flex flex-col items-center justify-center gap-5 max-w-[600px] px-4">
          <h4>{planet.name.toUpperCase()}</h4>
          <p>{planet.overview.description}</p>
          <p>
            Source:
            <a
              href={`https://en.wikipedia.org/wiki/${planet.name}`}
              target="_blank"
            >
              Wikipedia
            </a>
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col gap-3">
        <div className="flex justify-between items-center w-full  border-2 border-[#383852] p-4">
          <span>ROTATION TIME</span>
          <span>{planet.rotationTime}</span>
        </div>
        <div className="flex justify-between items-center w-full  border-2 border-[#383852] p-4">
          <span>REVOLUTION TIME</span>
          <span>{planet.revolutionTime}</span>
        </div>
        <div className="flex justify-between items-center w-full  border-2 border-[#383852] p-4">
          <span>RADIUS</span>
          <span>{planet.radius}</span>
        </div>
        <div className="flex justify-between items-center w-full  border-2 border-[#383852] p-4">
          <span>AVERAGE TEMP.</span>
          <span>{planet.averageTemp}</span>
        </div>
      </div>
      {/* https://en.wikipedia.org/wiki/Earth */}
    </div>
  );
};

export default PlanetCard;
