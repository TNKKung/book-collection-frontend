import React from "react";
import { Link } from "react-router-dom";

export default function Menu(prop) {
  return (
    <div>
      <Link to={prop.Path}>
        <div class="mb-2 px-4 py-4  border-gray-300 hover:text-black   hover:bg-white   hover:font-bold rounded-lg">
          <span class="ml-2">{prop.Name}</span>
        </div>
      </Link>
    </div>
  );
}
