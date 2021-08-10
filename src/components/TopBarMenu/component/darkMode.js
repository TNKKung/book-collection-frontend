import React from "react";
import slashIcon from "../../../Images/Slash.png";
import sunIcon from "../../../Images/sun.png";
import moonIcon from "../../../Images/moon.png";

export default function darkMode() {
  return (
    <div className="flex flex-row mt-1 ml-20">
      <div className="flex items-center justify-center h-6 w-6 rounded-lg">
        <button
          onClick={() => document.documentElement.classList.toggle("dark")}
          className="focus:outline-none"
        >
          <img src={sunIcon} className="w-6" alt="IMG" />
        </button>
      </div>
      <div className="flex items-center justify-center">
        <img src={slashIcon} className="w-6" alt="IMG" />
      </div>
      <div className="flex items-center justify-center h-6 w-6 rounded-lg mr-20">
        <button
          onClick={() => document.documentElement.classList.toggle("dark")}
          className="focus:outline-none"
        >
          <img src={moonIcon} className="w-6" alt="IMG" />
        </button>
      </div>
    </div>
  );
}
