import React from "react";
import AllMenu from "./component/AllMenu";
import IconBar from "./component/IconBar";
import "../../css/animation.css";
export default function LeftBarMenu(prop) {
  return (
    <div className="">
      {prop.state ? (
        <div>
        </div>
      ) : (
        <div>
          <IconBar />
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
