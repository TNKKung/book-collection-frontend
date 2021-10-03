import React, { useState } from "react";
import { useSelector } from "react-redux";
import PictureProfile from "../../Images/profile.jpg";
import PageLayout from "../../components/PageLayout/PageLayout";
import Profile from "./component/Profile";

export default function ProfilePage() {

  const Data = {
    pictureProfile: PictureProfile,
    AllBook: "14",
    facebook: "nattawut krongareetham",
    instagram: "tomn_k3319",
    line: "0640630406",
  };
  const stateLeftBar = useSelector((state) => state.storeState.stateLeftBar);
  const [stateEditProfile, setStateEditProfile] = useState(true);

  function toggleStateEditProfile() {
    if (stateEditProfile === true) {
      setStateEditProfile(false);
    } else {
      setStateEditProfile(true);
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
            {stateEditProfile ? (
              <div className="flex flex-row mb-5 ">
                <button
                  className="bg-green-500 h-14 w-36 rounded-lg focus:outline-none"
                  onClick={() => toggleStateEditProfile()}
                >
                  Edit
                </button>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
