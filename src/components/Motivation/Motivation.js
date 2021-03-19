import React from "react";
import motivation from "./motivation.json";
import "./Motivation.css";

const Motivation = () => {
  return (
    <div className="motivations">
      {motivation.map((item) => (
        <div className="motivations__motivation">
          <h4>{item.quote}</h4>
          <p className="motivations__writer">-{item.writer}</p>
        </div>
      ))}
    </div>
  );
};

export default Motivation;
