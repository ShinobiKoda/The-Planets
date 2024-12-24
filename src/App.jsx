import React, { useState } from "react";
import "./index.css";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import PlanetCard from "./components/PlanetCard";
import { planets } from "./data/Planets";

const App = () => {
  // State to track the selected planet
  const [selectedPlanet, setSelectedPlanet] = useState(planets[0]); // Default to the first planet

  return (
    <div className="app-container">
      <Background>
        {/* Pass planets and selection handler to Navbar */}
        <Navbar planets={planets} onSelectPlanet={setSelectedPlanet} />

        {/* Display the selected planet */}
        <PlanetCard planet={selectedPlanet} />
      </Background>
    </div>
  );
};

export default App;
