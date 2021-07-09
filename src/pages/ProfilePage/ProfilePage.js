import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import PictureProfile from "../../Images/profile.jpg";

export default function ProfilePage() {
  return (
    <div className="">
      <div className="fixed object-left top-0 z-10">
        <Navbar />
      </div>
      <div className="ml-60">
        <div className="w-full h-48"></div>
        <div className="bg-gray-300 flex flex-col w-full h-screen">
          <div className="z-10 ml-20">
            <img
              src={PictureProfile}
              className="w-32 rounded-full border-4 border-yellow-300"
              alt="IMG"
            />
          </div>
          <div className="bg-white z-0 ml-36 w-1/2 h-1/2 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}
