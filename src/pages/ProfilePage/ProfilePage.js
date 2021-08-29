import React, { useState } from "react";
import { useSelector } from "react-redux";
import PictureProfile from "../../Images/profile.jpg";
import EditProfile from "./component/EditProfile";
import EditProfile2 from "./component/EditProfile2";
import ChangePassword from "./component/ChangePassword";
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
  const [stateData, setStateData] = useState(true);
  const [stateChangePassword, setStateChangePassword] = useState(false);
  const stateLeftBar = useSelector((state) => state.storeState.stateLeftBar);

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
    <PageLayout>
      <div
        className={`flex w-screen ${
          stateLeftBar ? "ml-72" : "ml-52"
        } transition-all duration-500 mt-10`}
      >
        <div className="flex bg-yellow-200 max-w-7xl w-full rounded-lg">
          <div className="flex flex-row text-black">
            <div className="flex flex-col bg-red-500 w-screen max-w-2xl items-center">
              <div className="border-2 border-black mt-10 mb-10 ">
                <img src={Data.pictureProfile} className="w-72" />
              </div>
              <div className="">
                <div className="flex flex-row items-center w-full max-w-lg text-xl mb-3 ml-2">
                  <div className="flex flex-col justify-center w-44">
                    <div className="ml-10 h-14 flex items-center">
                      First-Name :
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="h-14 flex items-center w-72">
                      <div className="ml-4">{Data.firstName}</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center w-full max-w-lg text-xl mb-3 ml-2">
                  <div className="flex flex-col justify-center w-44">
                    <div className="ml-10 h-14 flex items-center">
                      Last-Name :
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="h-14 flex items-center w-72">
                      <div className="ml-4">{Data.lastName}</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center w-full max-w-lg text-xl mb-3 ml-2">
                  <div className="flex flex-col justify-center w-44">
                    <div className="ml-10 h-14 flex items-center">E-mail :</div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="h-14 flex items-center w-72">
                      <div className="ml-4">{Data.email}</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center w-full max-w-lg text-xl mb-3 ml-2">
                  <div className="flex flex-col justify-center w-44">
                    <div className="ml-10 h-14 flex items-center">Tell :</div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="h-14 flex items-center w-72">
                      <div className="ml-4">{Data.tell}</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center w-full max-w-lg text-xl mb-3 ml-2">
                  <div className="flex flex-col justify-center w-44">
                    <div className="ml-10 h-14 flex items-center">
                      Address :
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="h-14 flex items-center w-72">
                      <div className="ml-4">{Data.address}</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center w-full max-w-lg text-xl mb-3 ml-2">
                  <div className="flex flex-col justify-center w-44">
                    <div className="ml-10 h-14 flex items-center">
                      Birth-Day :
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="h-14 flex items-center w-72">
                      <div className="ml-4">{Data.birthDay}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col bg-red-200 w-screen max-w-2xl items-center">
              <div className="flex flex-row items-center w-full max-w-lg text-xl mb-3 ml-2">
                <div className="flex flex-col justify-center w-36">
                  <img src={FaceIcon} className="w-12"/>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="h-14 flex items-center w-72">
                    <div className="ml-4">{Data.facebook}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
