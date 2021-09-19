import React from "react";
import Logo from "../../Images/logoBook.png";
import PictureStore from "./component/bookStore.jpg";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="flex flex-row justify-center items-center w-9/12 h-5/6 shadow-2xl">
        <img
          src={PictureStore}
          className="hidden 2xl:block w-full h-full bg-gray-500 rounded-l-lg shadow-md"
          alt="IMG"
        />
        <div className="w-96 h-96 sm:w-full sm:h-full p-8 sm:p-0 rounded-lg shadow-md 2xl:rounded-l-none bg-gradient-to-b from-yellow-500 to-yellow-300">
          <div className="flex flex-col items-center mt-20">
            <img src={Logo} className="w-40 mt-14 mb-5" alt="IMG" />
            <form className="w-80 mt-11" autoComplete="off">
              <input
                className="w-full p-2 pl-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                id="input-email"
                type="email"
                placeholder="Email"
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
              <Link to="/register" className="flex flex-col items-center mt-1">
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
