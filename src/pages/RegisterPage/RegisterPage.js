import React from "react";
import { Link } from "react-router-dom";
import PictureStore from "../LoginPage/component/bookStore.jpg";
import Logo from "../../Images/logoBook.png";

export default function RegisterPage() {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="flex flex-row justify-center items-center w-9/12 h-5/6 shadow-2xl">
        <img
          src={PictureStore}
          className="hidden 2xl:block w-full h-full bg-gray-500 rounded-l-lg shadow-md"
          alt="IMG"
        />
        <div className="w-96 h-96 sm:w-full sm:h-full p-8 sm:p-0 rounded-lg shadow-md 2xl:rounded-l-none bg-gradient-to-b from-yellow-500 to-yellow-300">
          <div className="items-center flex flex-col mt-1">
            <img src={Logo} className="w-24" alt="IMG" />
            <form className="w-80 mt-2" autoComplete="off">
              <div className="flex flex-col items-center text-base">
                {" "}
                E-mail
              </div>
              <input
                className="w-full p-2 pl-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none mt-2"
                id="input-email"
                type="email"
                placeholder="tttt@tttt.com"
              />
              <div className="flex flex-col items-center text-base mt-2">
                {" "}
                Password
              </div>
              <input
                className="w-full mt-2 p-2 pl-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none "
                id="input-password"
                type="password"
                placeholder="Password"
              />
              <input
                className="w-full mt-4 p-2 pl-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                id="input-password"
                type="password"
                placeholder="Confirm Password"
              />
              <div className="flex flex-col items-center text-base mt-2">
                Fisrt-Name
              </div>
              <input
                className="w-full mt-2 p-2 pl-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none "
                id="input-number"
                type="text"
                placeholder="somechai"
              />
              <div className="flex flex-col items-center text-base mt-2">
                Last-Name
              </div>
              <input
                className="w-full mt-2 p-2 pl-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none "
                id="input-number"
                type="text"
                placeholder="Nadee"
              />
              <div className="flex flex-col items-center text-base mt-2">
                Birth-Day
              </div>
              <input
                className="w-full mt-2 p-2 pl-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none "
                id="input-date"
                type="date"
                placeholder="01/01/1999"
              />
              <div className="flex flex-col items-center text-base mt-2">
                Tell
              </div>
              <input
                className="w-full mt-2 p-2 pl-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none "
                id="input-number"
                type="text"
                placeholder="088888888"
              />
              <Link to="/login" className="flex flex-col items-center mt-1">
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
