import React from "react";
import { NavLink } from "react-router-dom";
export default function LogoutButton(prop) {
  console.log(prop.state);
  const data = {
    name: "nattawut",
  };
  let MyStatus = null;
  if (data.name === "") {
    MyStatus = (
      <div>
        <div
          className={`flex flex-row items-center ${
            prop.stateButton ? "w-48" : "w-14"
          } px-4 py-4 ml-1 bg-blue-500 text-black hover:bg-red-700 hover:font-bold rounded-lg transition-all duration-500`}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
          {prop.stateButton && <div className="ml-5">Login</div>}
        </div>
      </div>
    );
  } else {
    MyStatus = (
      <div>
        <div
          className={`flex flex-row items-center ${
            prop.stateButton ? "w-48" : "w-14"
          } px-4 py-4 ml-1 bg-red-500 text-black hover:bg-red-700 hover:font-bold rounded-lg transition-all duration-500`}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
          {prop.stateButton && <div className="ml-5">Logout</div>}
        </div>
      </div>
    );
  }
  return (
    <NavLink to="/login" className="bottom-0">
      <div className="mt-20">{MyStatus}</div>
    </NavLink>
  );
}
