import React from "react";
import pictureLayout from "../../Images/layout.png";
import SearchBar from "../SearchBar/SearchBar";
import sunIcon from "../../Images/sun.png";
import moonIcon from "../../Images/moon.png";

export default function TopBarMenu(prop) {
  return (
    <div className="z-10">
      <div className="fixed flex flex-row justify-center bg-yellow-400 w-full top-0 h-16 focus:outline-white ml-56">
        <div className="mt-1 mr-4 w-1/4">
          <SearchBar />
        </div>
        <div className="hover:bg-gray-500 items-center justify-center flex mt-2 h-12 w-12 rounded-lg">
          <button onClick={() => prop.CallBackToggleState()}>
            <img
              src={pictureLayout}
              className="w-8 focus:outline-none"
              alt="IMG"
            />
          </button>
        </div>
        <div className="flex items-center font-bold ml-44">
          Nattawut Krongareetham
          <div className="flex flex-row ml-10">
            <img src={sunIcon} className="w-6 mr-2" alt="IMG" />
            <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
              <input
                type="checkbox"
                name="toggle"
                id="toggle"
                class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-gray-300 border-4 appearance-none cursor-pointer"
                onClick={() =>
                  document.documentElement.classList.toggle("dark")
                }
              />
              <label
                for="toggle"
                className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
              ></label>
            </div>
            <img src={moonIcon} className="w-6 mr-2" alt="IMG" />
          </div>
        </div>
      </div>
    </div>
  );
}
