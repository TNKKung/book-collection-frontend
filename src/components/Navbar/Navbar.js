import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Images/logo.png";
import Menu from "./component/Menu";
export default function Navbar() {
  const data = {
    name: "nattawut",
  };
  let MyStatus = null;
  if (data.name === "") {
    MyStatus = (
      <div className="px-4 py-4 bg-blue-500 text-white hover:bg-blue-700   hover:font-bold rounded-lg">
        <span className="ml-2">Login</span>
      </div>
    );
  } else {
    MyStatus = (
      <div className="px-4 py-4 bg-red-500 text-white hover:bg-red-700   hover:font-bold rounded-lg">
        <span className="ml-2">Logout</span>
      </div>
    );
  }
  return (
    <div className="text-black">
      <div className="flex flex-col bg-gradient-to-b from-yellow-500 to-yellow-300 w-60 h-screen px-5 tex-gray-900 border-r border-yellow-200">
        <div className="flex flex-wrap mt-8"></div>
        <div className="mb-6">
          <img src={Logo} className="mx-auto w-20 h-20" alt="IMG" />
        </div>
        <div className="ml-4 ">
          <Menu Path="/" Name="Home" />
          <Menu Path="/profile" Name="Profile" />
          <Menu Path="/mycollection" Name="My Collection" />
          <Menu Path="/" Name="My Store" />
          <Link to="/login">
            <div className="mt-20">{MyStatus}</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
