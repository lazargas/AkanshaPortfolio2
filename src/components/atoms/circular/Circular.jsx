import React from "react";
import "./Circular.module.css";

const CircularText = ({ text, radius, speed }) => {
  const characters = text.split("");
  console.log(characters);
  const angle = 360 / characters.length;

  return (
    <div className="circular-text-container">
      {characters.map((character, index) => (
        <span
          key={index}
          className="circular-text-character"
          style={{
            transform: `rotate(${angle * index}deg) translate(${radius}px) rotate(${-angle * index}deg)`,
            transition: `transform ${speed}s linear infinite`,
          }}
        >
          {character}
        </span>
      ))}
    </div>
  );
};

export default CircularText;
