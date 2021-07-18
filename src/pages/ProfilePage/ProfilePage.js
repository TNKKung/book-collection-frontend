import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import PictureProfile from "../../Images/profile.jpg";
import EditProfile from "./component/EditProfile";
import EditProfile2 from "./component/EditProfile2";
import ChangePassword from "./component/ChangePassword";
import FaceIcon from "../../Images/facebook_icon.png";
import LineIcon from "../../Images/line_icon.png";
import IgIcon from "../../Images/instagram_icon.png";
import SearchBar from "../../components/SearchBar/SearchBar";
import sunIcon from "../../Images/sun.png";
import moonIcon from "../../Images/moon.png";
import pictureLayout from "../../Images/layout.png";

export default function ProfilePage() {
  const Data = {
    pictureProfile: PictureProfile,
    firstName: "Nattawut",
    lastName: "Krongareetham",
    birthDay: "06/12/2000",
    email: "tomkabtokom@gmail.com",
    tell: "0640630406",
    address: "28/22 หมู่ 4 ต.บางล่าง อ.บางบน จ.บางซ้าย",
    facebook: "nattawut krongareetham",
    instagram: "tomn_k3319",
    line: "0640630406",
  };
  const [stateData, setStateData] = useState(true);
  const [stateChangePassword, setStateChangePassword] = useState(false);

  const toggleStateData = () => {
    if (stateData === false) {
      setStateData(true);
    } else {
      setStateData(false);
    }
  };
  const toggleStateChangePassword = () => {
    if (stateChangePassword === false) {
      setStateChangePassword(true);
    } else {
      setStateChangePassword(false);
    }
  };
  return (
    <div className="dark:bg-black h-screen">
      <div className="fixed object-left top-0 z-10">
        <Navbar />
      </div>
      <div className="fixed flex flex-row justify-center bg-yellow-400 w-full top-0 h-16 focus:outline-white ml-56">
        <div className="mt-1 mr-4 w-1/4">
          <SearchBar />
        </div>
        <div className="hover:bg-gray-500 items-center justify-center flex mt-2 h-12 w-12 rounded-lg">
          <button onClick={() => console.log("tomtam")}>
            <img
              src={pictureLayout}
              className="w-8 focus:outline-none"
              alt="IMG"
            />
          </button>
        </div>
        <div className="flex items-center font-bold ml-44">
          Nattawut Krongareetham
          <div className="flex flex-row ml-10">
            <img src={sunIcon} className="w-6 mr-2" alt="IMG" />
            <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
              <input
                type="checkbox"
                name="toggle"
                id="toggle"
                class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-gray-300 border-4 appearance-none cursor-pointer"
                onClick={() =>
                  document.documentElement.classList.toggle("dark")
                }
              />
              <label
                for="toggle"
                className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
              ></label>
            </div>
            <img src={moonIcon} className="w-6 mr-2" alt="IMG" />
          </div>
        </div>
      </div>
      <div className="flex flex-row h-screen justify-center ml-36 mt-16">
        <div className="bg-gradient-to-b from-yellow-500 to-yellow-300 w-1/3 rounded-xl ml-20">
          {stateData ? (
            <div>
              <div className="flex flex-row justify-center mt-5">
                <img
                  className="w-80 border-4 border-yellow-300 rounded-2xl"
                  src={Data.pictureProfile}
                  alt="IMG"
                />
              </div>
              <div className="flex flex-row w-full h-96 justify-center items-center">
                <div className="bg-white p-5 mt-16 w-10/12 h-full rounded-lg border-yellow-300 border-2 font-bold text-base">
                  <div className="flex flex-row ml-5 mt-5">
                    <div> Frist-Name: {Data.firstName}</div>
                  </div>
                  <div className="flex flex-row ml-5 mt-5">
                    <div> Last-Name: {Data.lastName}</div>
                  </div>
                  <div className="flex flex-row ml-5 mt-5">
                    <div> Birth-Day: {Data.birthDay}</div>
                  </div>
                  <div className="flex flex-row ml-5 mt-5">
                    <div> E-mail: {Data.email}</div>
                  </div>
                  <div className="flex flex-row ml-5 mt-5 ">
                    <div> Tell: {Data.tell}</div>
                  </div>
                  <div className="flex flex-row ml-5 mt-5">
                    <div> Address: {Data.address}</div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <EditProfile
              pictureProfile={Data.pictureProfile}
              firstName={Data.firstName}
              lastName={Data.lastName}
              email={Data.email}
              birthDay={Data.birthDay}
              tell={Data.tell}
              address={Data.address}
            />
          )}
        </div>
        <div className="bg-gradient-to-b from-yellow-500 to-yellow-300  ml-5 w-1/3 h-4/4 rounded-xl">
          {stateData ? (
            <div className="flex flex-row w-full h-96 justify-center items-center">
              <div className="bg-white mt-6 w-10/12 h-full rounded-lg border-yellow-300 border-2 text-base font-bold">
                <div className="flex flex-row ml-5 mt-5">
                  <div className="flex flex-row items-center">
                    <img src={FaceIcon} className="w-10" alt="IMG" />
                    <div className="ml-2 mt">: {Data.facebook}</div>
                  </div>
                </div>
                <div className="flex flex-row ml-5 mt-5">
                  <div className="flex flex-row items-center">
                    <img src={IgIcon} className="w-10" alt="IMG" />
                    <div className="ml-2">: {Data.instagram}</div>
                  </div>
                </div>
                <div className="flex flex-row ml-5 mt-5">
                  <div className="flex flex-row items-center">
                    <img src={LineIcon} className="w-10" alt="IMG" />
                    <div className="ml-2">: {Data.line}</div>
                  </div>
                </div>
                <div className="flex flex-row ml-5 mt-5">
                  <div> Favorite Book Genre: </div>
                </div>
                <div className="flex flex-row ml-5 mt-5">
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
          ) : (
            <EditProfile2
              facebook={Data.facebook}
              instagram={Data.instagram}
              line={Data.line}
            />
          )}
          <div className="flex mt-5 justify-center">
            <button
              className="bg-green-500 h-10 w-36 rounded-lg hover:bg-green-700 focus:outline-none"
              onClick={() => toggleStateData()}
            >
              Edit Profile
            </button>
            <button
              className="bg-red-500 ml-5 h-10 w-36 rounded-lg hover:bg-red-700 focus:outline-none"
              onClick={() => toggleStateChangePassword()}
            >
              Change Password
            </button>
          </div>
          {stateChangePassword ? <ChangePassword /> : null}
        </div>
      </div>
    </div>
  );
}
