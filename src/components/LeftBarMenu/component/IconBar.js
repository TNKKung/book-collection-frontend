import React from "react";
import { Link } from "react-router-dom";
import homeIcon from "../../../Images/home.png";
import userIcon from "../../../Images/user.png";
import collectionIcon from "../../../Images/collection.png";
import storeIcon from "../../../Images/store.png";
import exitIcon from "../../../Images/exit.png";

export default function IconBar() {
  
  return (
    <div className="fixed top-16 z-30">
      <div className="flex flex-col items-center bg-gradient-to-b from-yellow-400 to-yellow-300 w-12 h-screen tex-gray-900 ">
        <Link className="mt-32 focus:outline-none hover:bg-white rounded-sm p-1" to="/">
          <button className="focus:outline-none">
            <img src={homeIcon} className="w-6" alt="IMG" />
          </button>
        </Link>
        <Link className="mt-6 focus:outline-none hover:bg-white rounded-sm p-1" to="/profile">
          <button className="focus:outline-none mt-2">
            <img src={userIcon} className="w-6" alt="IMG" />
          </button>
        </Link>
        <Link className="mt-6 focus:outline-none hover:bg-white rounded-sm p-1 " to="/collection">
          <button className="focus:outline-none mt-2">
            <img
              src={collectionIcon}
              className="w-6"
              alt="IMG"
            />
          </button>
        </Link>
        <Link className="mt-6 focus:outline-none hover:bg-white rounded-sm p-1" to="/">
          <button className="focus:outline-none mt-2">
            <img src={storeIcon} className="w-6 focus:outline-none" alt="IMG" />
          </button>
        </Link>
        <Link className="mt-24 focus:outline-none hover:bg-white rounded-sm p-1" to="/login">
          <button className="focus:outline-none mt-2">
            <img src={exitIcon} className="w-6 focus:outline-none" alt="IMG" />
          </button>
        </Link>
      </div>
    </div>
  );
}
