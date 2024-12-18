import React from "react";
import "./index.css";
import Background from "./components/Background";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="app-container">
      <Background>
        <Navbar />
      </Background>
    </div>
  );
};

export default App;
