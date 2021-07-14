import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import SearchBar from "../../components/SearchBar/SearchBar";
import DisplayCollection from "../../components/DisplayCollection1/DisplayCollection1.js";
import DisplayCollection2 from "../../components/DisplayCollection2/DisplayCollection2.js";
import pictureLayout from "./component/layout.png";
import Data from "../../components/Data.json";

export default function Index() {
  const [state, setState] = useState(false);

  const toggleState = () => {
    if (state === false) {
      setState(true);
    } else {
      setState(false);
    }
  };

  return (
    <div className="">
      <div className="fixed object-left top-0 z-10">
        <Navbar />
      </div>
      <div className="fixed flex flex-row justify-center bg-yellow-400 w-full top-0 h-16 focus:outline-white ml-52">
        <div className="mt-1 mr-80 w-1/4">
          <SearchBar />
        </div>
        <div className="hover:bg-gray-500 items-center justify-center flex mt-2 h-12 w-12 rounded-lg ml-10 ">
          <button onClick={() => toggleState()}>
            <img
              src={pictureLayout}
              className="w-8 focus:outline-none"
              alt="IMG"
            />
          </button>
        </div>
      </div>
      {state ? (
        <div className="object-center ml-60 space-y-4 mt-20 ">
          {Data.map((item) => {
            return (
              <DisplayCollection
                Picture={item.picture}
                BookTitle={item.bookTitle}
                User={item.userName}
                MobileNumber={item.MobileNumber}
                Email={item.Email}
              />
            );
          })}
        </div>
      ) : (
        <div className="object-center ml-60 space-y-4 mt-16 ">
          {Data.map((item) => {
            return (
              <DisplayCollection2
                Picture={item.picture}
                BookTitle={item.bookTitle}
                User={item.userName}
                MobileNumber={item.MobileNumber}
                Email={item.Email}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
