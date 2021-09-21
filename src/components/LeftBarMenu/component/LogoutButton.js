import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useUser } from "../../../state/userAction/hooks";
export default function LogoutButton(prop) {
  const user = useSelector((state) => state.userApi.user);
  const { handleLogout } = useUser();
  let MyStatus = null;

  if (!user) {
    MyStatus = (
      <div>
        <div
          className={`flex flex-row items-center ${
            prop.stateButton ? "w-48" : "w-14"
          } px-4 py-4 ml-1 bg-blue-500 text-black hover:bg-blue-700 hover:font-bold rounded-lg transition-all duration-500`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
            />
          </svg>
          {prop.stateButton && <div className="ml-5 truncate">Login</div>}
        </div>
      </div>
    );
  } else {
    MyStatus = (
      <div>
        <div
          onClick={() => handleLogout()}
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
          {prop.stateButton && <div className="ml-5 truncate">Logout</div>}
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
