import React from "react";
import { useSelector } from "react-redux";
import PictureProfile from "../../Images/profile.jpg";
import FaceIcon from "../../Images/facebook_icon.png";
import LineIcon from "../../Images/line_icon.png";
import IgIcon from "../../Images/instagram_icon.png";
import PageLayout from "../../components/PageLayout/PageLayout";

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
  const stateLeftBar = useSelector((state) => state.storeState.stateLeftBar);

  return (
    <PageLayout>
      <div
        className={`flex w-screen ${
          stateLeftBar ? "ml-80" : "ml-60"
        } transition-all duration-500 mt-10`}
      >
        <div className="flex bg-yellow-200 max-w-7xl w-full rounded-lg">
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
            <div className="flex flex-row items-center w-full max-w-lg text-xl mb-3 ml-2">
              <div className="flex flex-col justify-center w-36">
                <div className="h-14 flex items-center">First-Name :</div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="h-14 flex items-center w-72">
                  <div className="">{Data.firstName}</div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center w-full max-w-lg text-xl mb-3 ml-2">
              <div className="flex flex-col justify-center w-36">
                <div className="h-14 flex items-center">Last-Name :</div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="h-14 flex items-center w-72">
                  <div className="">{Data.lastName}</div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center w-full max-w-lg text-xl mb-3 ml-2">
              <div className="flex flex-col justify-center w-36">
                <div className="h-14 flex items-center">E-mail :</div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="h-14 flex items-center w-72">
                  <div className="">{Data.email}</div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center w-full max-w-lg text-xl mb-3 ml-2">
              <div className="flex flex-col justify-center w-36">
                <div className="h-14 flex items-center">Tell :</div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="h-14 flex items-center w-72">
                  <div className="">{Data.tell}</div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center w-full max-w-lg text-xl mb-3 ml-2">
              <div className="flex flex-col justify-center w-36">
                <div className="h-14 flex items-center">Address :</div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="h-14 flex items-center w-72">
                  <div className="">{Data.address}</div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center w-full max-w-lg text-xl mb-3 ml-2">
              <div className="flex flex-col justify-center w-36">
                <div className="h-14 flex items-center">Birth-Day :</div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="h-14 flex items-center w-72">
                  <div className="">{Data.birthDay}</div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center w-full max-w-lg text-xl mb-3 ml-2">
              <div className="flex flex-col justify-center w-36">
                <img src={FaceIcon} className="w-12" alt="IMG" />
              </div>
              <div className="flex flex-col justify-center">
                <div className="h-14 flex items-center w-72">
                  <div className="">{Data.facebook}</div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center w-full max-w-lg text-xl mb-3 ml-2">
              <div className="flex flex-col justify-center w-36">
                <img src={LineIcon} className="w-12" alt="IMG" />
              </div>
              <div className="flex flex-col justify-center">
                <div className="h-14 flex items-center w-72">
                  <div className="">{Data.line}</div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center w-full max-w-lg text-xl mb-3 ml-2">
              <div className="flex flex-col justify-center w-36">
                <img src={IgIcon} className="w-12" alt="IMG" />
              </div>
              <div className="flex flex-col justify-center">
                <div className="h-14 flex items-center w-72">
                  <div className="">{Data.instagram}</div>
                </div>
              </div>
            </div>
            <div className="flex flex-row mb-5">
              <button className="bg-green-500 h-14 w-36 rounded-lg">
                Edit Profile
              </button>
              <button className="bg-red-500 h-14 w-36 rounded-lg ml-5">
                Change Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
