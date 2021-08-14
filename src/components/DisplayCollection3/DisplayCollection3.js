import React from "react";
import { Link } from "react-router-dom";

export default function DisplayCollection3(prop) {
  return (
    <Link to={{pathname:"/displaypage",state:{ data : prop.data}}}>
      <div className="flex flex-col items-center bg-white w-44 h-72 rounded-lg mx-1">
        <img
          src={prop.data.picture}
          className="w-full h-52 rounded-t-lg"
          alt="IMG"
        />
        <div className="mt-2 text-center">{prop.data.bookTitle}</div>
      </div>
    </Link>
  );
}
