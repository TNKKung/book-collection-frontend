import React from "react";
import { Link } from "react-router-dom";

export default function Menu(prop) {
  return (
    <div class="mb-2 px-4 py-4 flex flex-row  border-gray-300 hover:text-black   hover:bg-white   hover:font-bold rounded-lg">
      <Link to={prop.Path}>
        <span class="ml-2" >{prop.Name}</span>
      </Link>
    </div>
  );
}
