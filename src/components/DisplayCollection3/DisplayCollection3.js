import React from "react";
import { Link } from "react-router-dom";

export default function DisplayCollection3(prop) {
  return (
    <Link to={{pathname:"/displaypage",state:{ data : prop.data}}}>
      <div className="flex flex-col items-center bg-yellow-500 w-56 h-72 rounded-lg">
        <img
          src={prop.data.picture}
          className="w-40 h-52 mt-5 rounded-lg"
          alt="IMG"
        />
        <div>{prop.data.bookTitle}</div>
      </div>
    </Link>
  );
}
