import React, { useState } from "react";
import Data from "../../Data.json";

export default function SearchBar() {
  const [searchText, setSearchText] = useState("");

  return (
    <div
      className={`bg-white flex items-center h-14 w-96 ${
        searchText.length > 2 ? "rounded-t-3xl" : "rounded-3xl"
      } border-yellow-100 border-2 shadow-2xl`}
    >
      <div className="relative">
        <input
          className="rounded-l-full w-80 py-4 px-6 text-gray-700 leading-tight focus:outline-none"
          id="search"
          type="text"
          autoComplete="off"
          value={searchText}
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
          placeholder="Search"
        />
        <div
          className={
            searchText.length > 2 &&
            "absolute bg-white w-96 text-base text-black rounded-b-lg border-r-2 border-l-2 border-b-2 border-yellow-100 mr-10"
          }
        >
          {Data.map((item) => {
            return (
              <div className="ml-5">{searchText.length > 2 && <div>{item.bookTitle}</div>}</div>
            );
          })}
        </div>
      </div>
      <div className="ml-2">
        <button className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
