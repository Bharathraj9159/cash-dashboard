// src/components/Loader.jsx
import React from "react";
import "./Loader.css";


const Loader = () => {
  return (
    <div className="loader-overlay">
      <div className="three-body">
        <div className="three-body__dot"></div>
        <div className="three-body__dot"></div>
        <div className="three-body__dot"></div>
      </div>
    </div>
  );
};

export default Loader;
