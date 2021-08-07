import React from "react";
import pictureLayout from "../../Images/layout.png";
import slashIcon from "../../Images/Slash.png";
import sunIcon from "../../Images/sun.png";
import moonIcon from "../../Images/moon.png";
import listIcon from "../../Images/list.png";

export default function TopBarMenu(prop) {
  return (
    <div className="z-10">
      <div className="fixed flex flex-row justify-between bg-yellow-400 w-full top-0 h-16 focus:outline-white">
        <div className="hover:bg-white flex items-center justify-center mt-2 h-12 w-12 rounded-lg ml-2">
          <button
            onClick={() => prop.CallBackToggleMenu()}
            className="focus:outline-none"
          >
            <img src={listIcon} className="w-6 focus:outline-none" alt="IMG" />
          </button>
        </div>
        <div className="flex items-center font-bold">
          <div className="hover:bg-white flex items-center justify-center h-12 w-12 rounded-lg mr-2">
            <button
              onClick={() => prop.CallBackToggleState()}
              className="focus:outline-none"
            >
              <img
                src={pictureLayout}
                className="w-8 focus:outline-none "
                alt="IMG"
              />
            </button>
          </div>
          <div className="flex flex-row mt-1 ml-20">
            <div className="flex items-center justify-center h-6 w-6 rounded-lg">
              <button
                onClick={() =>
                  document.documentElement.classList.toggle("dark")
                }
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
                onClick={() =>
                  document.documentElement.classList.toggle("dark")
                }
                className="focus:outline-none"
              >
                <img src={moonIcon} className="w-6" alt="IMG" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
