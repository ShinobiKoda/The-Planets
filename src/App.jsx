import React, { useState, useEffect } from "react";
import "./index.css";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import PlanetCard from "./components/PlanetCard";
import { planets } from "./data/Planets";

const App = () => {
  const [selectedPlanet, setSelectedPlanet] = useState(planets[2]); // Earth is the third planet in the array
  const [selectedTab, setSelectedTab] = useState(0);
  const [isBlurred, setIsBlurred] = useState(false);

  const handleSelectPlanet = (planet) => {
    setSelectedPlanet(planet);
    setSelectedTab(0); // Reset to overview tab when a new planet is selected
  };

  const handleSwitchTabs = (tabIndex) => {
    setSelectedTab(tabIndex);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsBlurred(true);
    } else {
      setIsBlurred(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="app-container">
      <Background>
        <div className={`navbar ${isBlurred ? "content-blur" : ""}`}>
          <Navbar
            planets={planets}
            onSelectPlanet={handleSelectPlanet}
            selectedTab={selectedTab}
            switchTabs={handleSwitchTabs}
            selectedPlanet={selectedPlanet}
          />
        </div>
        
          <PlanetCard
            planet={selectedPlanet}
            selectedTab={selectedTab}
            switchTabs={handleSwitchTabs}
          />

      </Background>
    </div>
  );
};

export default App;
