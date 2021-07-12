import React from "react";
import {Link} from "react-router-dom";

export default function DisplayCollection3(prop) {
  return (
    <Link >
      <div class="flex flex-col items-center bg-yellow-500 h-72 w-56 mt-5 ml-3 rounded-lg">
        <div className="h-2/3 mt-5">
          <img src={prop.picture} className="w-40 h-52 rounded-lg" alt="IMG" />
        </div>
        <div className="mt-5 font-black text-sm">{prop.bookTitle}</div>
      </div>
    </Link>
  );
}
