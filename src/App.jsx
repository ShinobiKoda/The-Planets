import React from "react";
import "./index.css";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import PlanetCard from "./components/PlanetCard";
import { planets } from "./data/Planets";

const App = () => {
  return (
    <div className="app-container">
      <Background>
        <Navbar />
        {planets.map((planet) => (
          <PlanetCard key={planet.name} planet={planet} />
        ))}
      </Background>
    </div>
  );
};

export default App;
