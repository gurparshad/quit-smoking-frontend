import React from "react";
import tips from "./tips.json";
import "./Tips.css";

const Tips = () => {
  return (
    <div className="tips">
      {tips.map((item) => (
        <div className="tips__tip">
          <h3>{item.title}</h3>
          <p>{item.data}</p>
        </div>
      ))}
    </div>
  );
};

export default Tips;
