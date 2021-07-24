import React from "react";
import { Link } from "react-router-dom";
import homeIcon from "../../Images/home.png";
import userIcon from "../../Images/user.png";
import collectionIcon from "../../Images/collection.png";
import storeIcon from "../../Images/store.png";
import exitIcon from "../../Images/exit.png";
import AllMenu from "./component/AllMenu";
import "../../css/animation.css";
export default function LeftBarMenu(prop) {
  return (
    <div className="">
      {prop.state ? (
        <div>
        </div>
      ) : (
        <div className="fixed top-16 z-30">
          <div className="flex flex-col items-center bg-gradient-to-b from-yellow-500 to-yellow-300 w-10 h-screen tex-gray-900 ">
            <Link className="mt-36">
              <button className="focus:outline-none hover:bg-gray-300 rounded-sm mt-2">
                <img
                  src={homeIcon}
                  className="w-6 focus:outline-none"
                  alt="IMG"
                />
              </button>
            </Link>
            <Link className="mt-6">
              <button className="focus:outline-none hover:bg-gray-300 rounded-sm mt-2">
                <img
                  src={userIcon}
                  className="w-6 focus:outline-none"
                  alt="IMG"
                />
              </button>
            </Link>
            <Link className="mt-6">
              <button className="focus:outline-none hover:bg-gray-300 rounded-sm mt-2">
                <img
                  src={collectionIcon}
                  className="w-6 focus:outline-none"
                  alt="IMG"
                />
              </button>
            </Link>
            <Link className="mt-6">
              <button className="focus:outline-none hover:bg-gray-300 rounded-sm mt-2">
                <img
                  src={storeIcon}
                  className="w-6 focus:outline-none"
                  alt="IMG"
                />
              </button>
            </Link>
            <Link className="mt-24">
              <button className="focus:outline-none hover:bg-gray-300 rounded-sm mt-2">
                <img
                  src={exitIcon}
                  className="w-6 focus:outline-none"
                  alt="IMG"
                />
              </button>
            </Link>
          </div>
        </div>
      )}
      <div className="fixed top-16 z-20">
        {prop.state ? (
          <div className="animation1">
            <div className="text-black">
              <div className="flex flex-col bg-gradient-to-b from-yellow-500 to-yellow-300 w-60 h-screen px-5 tex-gray-900 border-r border-yellow-200">
                <AllMenu />
              </div>
            </div>
          </div>
        ) : (
          <div className="animation2">
            <div className="text-black">
              <div className="flex flex-col bg-gradient-to-b from-yellow-500 to-yellow-300 w-60 h-screen px-5 tex-gray-900 border-r border-yellow-200">
                <AllMenu />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
