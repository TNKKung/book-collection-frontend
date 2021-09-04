import React from "react";
import { NavLink } from "react-router-dom";

export default function DisplayCollection3(prop) {
  return (
    <NavLink to={{ pathname: "/pagebookdetail", state: { data: prop.data } }} className="mb-2">
      <div className="flex-col items-center bg-white w-44 h-72 rounded-lg mx-1">
        <img
          src={prop.data.picture}
          className="w-full h-52 rounded-t-lg"
          alt="IMG"
        />
        <div className="mt-2 text-black text-center">{prop.data.bookTitle}</div>
      </div>
    </NavLink>
  );
}
