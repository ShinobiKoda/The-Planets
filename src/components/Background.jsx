import React from "react";
import "../styles/Background.css";
import "../index.css";

const Background = ({ children }) => {
  return (
    <div className="background">
      {/* Dots Layer */}
      <div className="dots">
        {Array.from({ length: 50 }).map((_, index) => (
          <div
            key={index}
            className="dot"
            style={{
              top: `${Math.random() * 100}vh`,
              left: `${Math.random() * 100}vw`,
              animationDelay: `${Math.random() * 5}s`,
              "--random-y": Math.random(),
            }}
          />
        ))}
      </div>
      {/* Content Layer */}
      <div className="content">{children}</div>
    </div>
  );
};

export default Background;
