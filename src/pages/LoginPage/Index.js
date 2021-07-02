import React from "react";
import Logo from "../../Images/logo.jpg";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="flex flex-row justify-center items-center w-9/12 h-5/6 shadow-2xl">
        <div className="hidden 2xl:block w-full h-full bg-gray-500 rounded-l-lg shadow-md"></div>
        <div className="w-96 h-96 sm:w-full sm:h-full p-8 sm:p-0 bg-white rounded-lg shadow-md 2xl:rounded-l-none ">
          <div className="items-center flex flex-col mt-1">
            <img src={Logo} width="400" alt="IMG" />
            <form className="w-80 mt-11" autoComplete="off">
              <input
                className="w-full p-2 pl-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                id="input-email"
                type="email"
                placeholder="Username"
              />
              <input
                className="w-full mt-4 p-2 pl-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                id="input-password"
                type="password"
                placeholder="Password"
              />
              <Link to="/">
                <button className="w-full p-2 mt-8 bg-blue-500 text-white rounded-lg focus:outline-none hover:bg-blue-600">
                  Login
                </button>
              </Link>
              <Link to="/" className="flex flex-col items-center mt-1">
                <button className="bg-green-500 p-2 mt-2 w-full text-white rounded-lg focus:outline-none hover:bg-green-600">
                  Register
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
