import React from "react";
import iconSearch from "./component/search.png";
export default function SearchBar() {
  return (
    <div className="flex justify-center items-center">
      <div className="relative mt-5">
        <div className="absolute mt-5 ml-3">
          <img src={iconSearch} width="20" alt="IMG"></img>
        </div>
        <input
          type="text"
          className="h-14 w-96 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none"
          placeholder="Search anything..."
        />
        <div className="absolute top-2 right-2">
          <button className="h-10 w-20 text-white rounded-lg bg-blue-500 hover:bg-blue-700">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
