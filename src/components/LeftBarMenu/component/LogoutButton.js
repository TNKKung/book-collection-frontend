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
      <div className="flex flex-row px-4 py-4 bg-blue-500 text-white hover:bg-blue-700 hover:font-bold rounded-lg">
        <img src={prop.icon} className="w-6" alt="IMG" />
        <div className="ml-2">Login</div>
      </div>
    );
  } else {
    MyStatus = (
      <div>
        <div className={`flex flex-row ${prop.stateButton ? "w-48" : "w-14"} px-4 py-4 ml-1 bg-red-500 text-white hover:bg-red-700 hover:font-bold rounded-lg transition-all duration-500`}>
          <img src={prop.icon} className="w-6" alt="IMG" />
          {prop.stateButton && <div className="ml-2">Logout</div>}
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
