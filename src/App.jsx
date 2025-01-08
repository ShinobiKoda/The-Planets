import React, { useState } from "react";
import "./index.css";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import PlanetCard from "./components/PlanetCard";
import { planets } from "./data/Planets";

const App = () => {
  const [selectedPlanet, setSelectedPlanet] = useState(planets[2]); // Earth is the third planet in the array
  const [selectedTab, setSelectedTab] = useState(0);

  const handleSelectPlanet = (planet) => {
    setSelectedPlanet(planet);
    setSelectedTab(0); // Reset to overview tab when a new planet is selected
  };

  const handleSwitchTabs = (tabIndex) => {
    setSelectedTab(tabIndex);
  };

  return (
    <div className="app-container">
      <Background>
        <Navbar
          planets={planets}
          onSelectPlanet={handleSelectPlanet}
          selectedTab={selectedTab}
          switchTabs={handleSwitchTabs}
        />
        <PlanetCard planet={selectedPlanet} selectedTab={selectedTab} />
      </Background>
    </div>
  );
};

export default App;
