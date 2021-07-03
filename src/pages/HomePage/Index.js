import React from "react";
import Navbar from "../../components/Navbar/index";
import SearchBar from "../../components/SearchBar/SearchBar";
export default function Index() {
  return (
    <div className="">
      <div className="float-left">
        <Navbar></Navbar>
      </div>
      <div className="">
        <SearchBar></SearchBar>
      </div>
    </div>
  );
}
