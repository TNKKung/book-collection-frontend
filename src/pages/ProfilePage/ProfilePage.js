import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import PictureProfile from "../../Images/profile.jpg";

export default function ProfilePage() {
  return (
    <div className="">
      <div className="fixed object-left top-0 z-10">
        <Navbar />
      </div>
      <div className="flex flex-row w-full h-screen justify-center ml-32">
        <div className="bg-black  mt-3 w-1/3 h-4/4 rounded-lg">
          <div className="flex flex-row justify-center mt-5">
            <img
              className="w-80 border-4 border-yellow-500 rounded-md"
              src={PictureProfile}
              alt="IMG"
            />
          </div>
          <div className="flex flex-row w-full h-96 justify-center items-center">
            <div className="bg-white mt-6 w-10/12 h-11/12 rounded-lg border-yellow-500 border-4">
              <div className="flex flex-row text-base font-bold ml-5 mt-5 font-mono">
                <div> Frist-Name: </div>
              </div>
              <div className="flex flex-row text-base font-bold ml-5 mt-5 font-mono">
                <div> Last-Name: </div>
              </div>
              <div className="flex flex-row text-base font-bold ml-5 mt-5 font-mono">
                <div> Nickname: </div>
              </div>
              <div className="flex flex-row text-base font-bold ml-5 mt-5 font-mono">
                <div> Birth-Day: </div>
              </div>
              <div className="flex flex-row text-base font-bold ml-5 mt-5 font-mono">
                <div> E-mail: </div>
              </div>
              <div className="flex flex-row text-base font-bold ml-5 mt-5 mb-5 font-mono">
                <div> Tell: </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black  mt-3 ml-5 w-1/3 h-4/4 rounded-lg">
          <div className="flex flex-row w-full h-96 justify-center items-center">
            <div className="bg-white mt-6 w-10/12 h-full rounded-lg border-yellow-500 border-4">
              <div className="flex flex-row text-base font-bold ml-5 mt-5 font-mono">
                <div> Frist-Name: </div>
              </div>
              <div className="flex flex-row text-base font-bold ml-5 mt-5 font-mono">
                <div> Last-Name: </div>
              </div>
              <div className="flex flex-row text-base font-bold ml-5 mt-5 font-mono">
                <div> Nickname: </div>
              </div>
              <div className="flex flex-row text-base font-bold ml-5 mt-5 font-mono">
                <div> Birth-Day: </div>
              </div>
              <div className="flex flex-row text-base font-bold ml-5 mt-5 font-mono">
                <div> E-mail: </div>
              </div>
              <div className="flex flex-row text-base font-bold ml-5 mt-5 mb-5 font-mono">
                <div> Tell: </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
