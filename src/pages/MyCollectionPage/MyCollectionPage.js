import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import SearchBar from "../../components/SearchBar/SearchBar";
import DisplayCollection3 from "../../components/DisplayCollection3/DisplayCollection3";
import Data from "../../components/Data.json";
import sunIcon from "../../Images/sun.png";
import moonIcon from "../../Images/moon.png";
import pictureLayout from "../../Images/layout.png"

export default function MyCollectionPage() {
  return (
    <div className="h-screen dark:bg-black">
      <div className="fixed object-left top-0 z-10">
        <Navbar />
      </div>
      <div className="fixed flex flex-row justify-center bg-yellow-400 w-full top-0 h-16 focus:outline-white ml-56">
        <div className="mt-1 mr-4 w-1/4">
          <SearchBar />
        </div>
        <div className="hover:bg-gray-500 items-center justify-center flex mt-2 h-12 w-12 rounded-lg">
          <button onClick={() => console.log("1")}>
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
      <div className="ml-60 w-4/6 space-y-4 mt-14">
        {Data.map((item) => {
          return (
            <div className="inline-flex flex-col ml-2">
              <DisplayCollection3 data={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
