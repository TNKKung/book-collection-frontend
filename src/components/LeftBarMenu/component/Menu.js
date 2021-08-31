import React from "react";
import { NavLink } from "react-router-dom";

export default function Menu(props) {
  return (
    <NavLink className={`flex flex-row items-center ${props.state ? "w-48" : "w-14"} px-4 py-4 border-gray-300 hover:text-black hover:bg-yellow-100 hover:font-bold rounded-lg `} to={props.path}>
          {props.children} 
          {props.state && <div className="ml-6">{props.name}</div>}
    </NavLink>
  );
}
