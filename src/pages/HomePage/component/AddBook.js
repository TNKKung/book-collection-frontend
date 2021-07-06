import React from "react";
import { Link } from "react-router-dom";

export default function AddBook(prop) {
  return (
    <div className="lg:w-full w-1/2 float-right mt-96">
      <Link className="justify-center flex" to={prop.link}>
        <button className="bg-green-500 w-full h-14 mt-40 rounded-lg hover:bg-green-700 px-full">
          {prop.Name}
        </button>
      </Link>
    </div>
  );
}
