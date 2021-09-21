import React, { useState } from "react";
import { useSelector } from "react-redux";
import PictureProfile from "../../Images/profile.jpg";
import FaceIcon from "../../Images/facebook_icon.png";
import LineIcon from "../../Images/line_icon.png";
import IgIcon from "../../Images/instagram_icon.png";
import PageLayout from "../../components/PageLayout/PageLayout";
import Profile from "./component/Profile";
import ChangePassword from "./component/ChangePassword";

export default function ProfilePage() {
  const Data = {
    pictureProfile: PictureProfile,
    firstName: "Nattawut",
    lastName: "Krongareetham",
    birthDay: "06/12/2000",
    email: "tomkabtokom@gmail.com",
    tell: "0640630406",
    address: "28/22 หมู่ 4 ต.บางล่าง อ.บางบน จ.บางซ้าย",
    AllBook: "14",
    facebook: "nattawut krongareetham",
    instagram: "tomn_k3319",
    line: "0640630406",
  };
  const stateLeftBar = useSelector((state) => state.storeState.stateLeftBar);
  const [stateEditProfile, setStateEditProfile] = useState(true);
  const [stateChangePassword, setStateChangePassword] = useState(true);

  function toggleStateEditProfile() {
    if (stateEditProfile === true) {
      setStateEditProfile(false);
    } else {
      setStateEditProfile(true);
    }
  }

  function toggleStateChangePassword() {
    if (stateChangePassword === true) {
      setStateChangePassword(false);
    } else {
      setStateChangePassword(true);
    }
  }

  return (
    <PageLayout>
      <div
        className={`flex w-screen ${
          stateLeftBar ? "ml-80" : "ml-60"
        } transition-all duration-500 mt-16`}
      >
        <div className="flex bg-white max-w-7xl w-full rounded-lg ">
          <div className="flex flex-row text-black">
            <div className="flex w-screen max-w-2xl items-center justify-center">
              <div className="border-4 border-yellow-400 rounded-lg mt-10 mb-10 ">
                <img
                  src={Data.pictureProfile}
                  className="max-w-lg w-full"
                  alt="IMG"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-screen max-w-2xl text-black items-center mt-4">
            <Profile stateEditProfile={stateEditProfile} />
            <div className="flex flex-row items-center w-full max-w-lg text-xl mb-3 mr-8">
              <div className="flex flex-col justify-center w-44">
                <div className="h-14 flex items-center">All My Books :</div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="h-14 flex items-center w-72">
                  <div className="">{Data.AllBook}</div>
                </div>
              </div>
            </div>
            {stateEditProfile ? (
              <div className="mr-20">
                <div className="flex flex-row items-center w-full max-w-lg text-xl mb-3 ml-2">
                  <div className="flex flex-col justify-center w-44">
                    <img src={FaceIcon} className="w-12" alt="IMG" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="h-14 flex items-center w-72">
                      <div className="">{Data.facebook}</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center w-full max-w-lg text-xl mb-3 ml-2">
                  <div className="flex flex-col justify-center w-44">
                    <img src={LineIcon} className="w-12" alt="IMG" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="h-14 flex items-center w-72">
                      <div className="">{Data.line}</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center w-full max-w-lg text-xl mb-3 ml-2">
                  <div className="flex flex-col justify-center w-44">
                    <img src={IgIcon} className="w-12" alt="IMG" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="h-14 flex items-center w-72">
                      <div className="">{Data.instagram}</div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <ChangePassword />
            )}
            <div className="flex flex-row mb-5 ">
              {stateEditProfile ? (
                <button
                  className="bg-green-500 h-14 w-36 rounded-lg focus:outline-none"
                  onClick={() => toggleStateEditProfile()}
                >
                  Edit
                </button>
              ) : (
                <button
                  className="bg-green-500 h-14 w-36 rounded-lg focus:outline-none"
                  onClick={() => toggleStateEditProfile()}
                >
                  Save
                </button>
              )}
              {stateChangePassword ? (
                <button
                  className="bg-red-500 h-14 w-36 rounded-lg ml-5 focus:outline-none"
                  onClick={() => toggleStateChangePassword()}
                >
                  Change Password
                </button>
              ) : (
                <button
                  className="bg-red-500 h-14 w-36 rounded-lg ml-5 focus:outline-none"
                  onClick={() => toggleStateChangePassword()}
                >
                  Save
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
