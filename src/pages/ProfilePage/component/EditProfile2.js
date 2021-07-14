import React from "react";
import FaceIcon from "../../../Images/facebook_icon.png";
import IgIcon from "../../../Images/instagram_icon.png";
import LineIcon from "../../../Images/line_icon.png";

export default function EditProfile2(prop) {
  return (
    <div className="flex flex-row w-full h-96 justify-center items-center">
      <div className="bg-white mt-6 w-10/12 h-full rounded-lg border-yellow-300 border-2 text-base font-bold">
        <div className="flex flex-row justify-between ml-5 mt-5">
          <img src={FaceIcon} className="w-10" alt="IMG" />
          <div className="flex flex-row items-center"> : </div>
          <input
            className="w-3/4 h-10 p-2 pl-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
            id="input-facebook"
            type="text"
            placeholder={prop.facebook}
          />
        </div>
        <div className="flex flex-row justify-between ml-5 mt-5">
          <img src={IgIcon} className="w-10" alt="IMG" />
          <div className="flex flex-row items-center"> : </div>
          <input
            className="w-3/4 h-10 p-2 pl-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
            id="input-instagram"
            type="text"
            placeholder={prop.instagram}
          />
        </div>
        <div className="flex flex-row justify-between ml-5 mt-5">
          <img src={LineIcon} className="w-10" alt="IMG" />
          <div className="flex flex-row items-center"> : </div>
          <input
            className="w-3/4 h-10 p-2 pl-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
            id="input-line"
            type="text"
            placeholder={prop.line}
          />
        </div>
        <div className="flex flex-row ml-5 mt-5 mb-5">
          <div> Favorite Book Genre: </div>
        </div>
        <div className="flex flex-row ml-5 mt-5 mb-5">
          <div> Total Number Of Stories: </div>
        </div>
        <div className="flex flex-row ml-5 mt-5">
          <div> Total Number Of Book: </div>
        </div>
        <div className="flex flex-row ml-5 mt-5">
          <div> Other: </div>
        </div>
      </div>
    </div>
  );
}
