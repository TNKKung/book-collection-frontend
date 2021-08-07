import React, { useState } from "react";
import LeftBarMenu from "../../components/LeftBarMenu/LeftBarMenu";
import PictureProfile from "../../Images/profile.jpg";
import EditProfile from "./component/EditProfile";
import EditProfile2 from "./component/EditProfile2";
import ChangePassword from "./component/ChangePassword";
import FaceIcon from "../../Images/facebook_icon.png";
import LineIcon from "../../Images/line_icon.png";
import IgIcon from "../../Images/instagram_icon.png";
import TopBarMenu from "../../components/TopBarMenu/TopBarMenu";
import WeeklyRankingBar from "../../components/WeeklyRankingBar/WeeklyRankingBar";

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
  const [state, setState] = useState(3);
  const [stateNavbar, setStateNavbar] = useState(true);

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
  const callBackToggleMenu = () => {
    if (stateNavbar === false) {
      setStateNavbar(true);
    } else {
      setStateNavbar(false);
    }
  };
  const callBackToggleState = () => {
    if (state === 1) {
      setState(2);
    } else if (state === 2) {
      setState(3);
    } else {
      setState(1);
    }
  };
  return (
    <div className="dark:bg-black h-screen">
      <LeftBarMenu state={stateNavbar} />
      <TopBarMenu
        CallBackToggleState={callBackToggleState}
        CallBackToggleMenu={callBackToggleMenu}
      />
      <div className="flex flex-row h-screen w-11/12 justify-center ml-4 mt-16">
        <div className="bg-gradient-to-b from-yellow-500 to-yellow-300 w-1/3 rounded-xl ml-20">
          {stateData ? (
            <div>
              <div className="flex flex-row justify-center mt-5">
                <img
                  className="w-80 border-8 border-yellow-300 rounded-xl"
                  src={Data.pictureProfile}
                  alt="IMG"
                />
              </div>
              <div className="flex flex-row w-full h-96 justify-center items-center">
                <div className="bg-white  mt-16 w-10/12 h-full rounded-lg border-yellow-300 border-2  text-base font-bold">
                  <div className="flex flex-row justify-between ml-5 mt-5">
                    <div className="flex flex-col justify-center">
                      Frist-Name:
                    </div>
                    <input
                      className="w-3/4 h-10 p-2 pl-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                      id="input-firstname"
                      type="text"
                      placeholder={Data.firstName}
                      disabled
                    />
                  </div>
                  <div className="flex flex-row justify-between ml-5 mt-5">
                    <div className="flex flex-col justify-center">
                      {" "}
                      Last-Name:
                    </div>
                    <input
                      className="w-3/4 h-10 p-2 pl-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                      id="input-lastname"
                      type="text"
                      placeholder={Data.lastName}
                      disabled
                    />
                  </div>
                  <div className="flex flex-row justify-between ml-5 mt-5">
                    <div className="flex flex-col justify-center"> E-mail:</div>
                    <input
                      className="w-3/4 h-10 p-2 pl-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                      id="input-email"
                      type="email"
                      placeholder={Data.email}
                      disabled
                    />
                  </div>
                  <div className="flex flex-row justify-between ml-5 mt-5">
                    <div className="flex flex-col justify-center">
                      {" "}
                      Birth-Day:
                    </div>
                    <input
                      className="w-3/4 h-10 p-2 pl-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                      id="input-birth-day"
                      type="text"
                      placeholder={Data.birthDay}
                      disabled
                    />
                  </div>
                  <div className="flex flex-row justify-between ml-5 mt-5">
                    <div className="flex flex-col justify-center"> Tell:</div>
                    <input
                      className="w-3/4 h-10 p-2 pl-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                      id="input-mobile"
                      type="text"
                      placeholder={Data.tell}
                      disabled
                    />
                  </div>
                  <div className="flex flex-row justify-between ml-5 mt-5">
                    <div className="flex flex-col justify-center">
                      {" "}
                      Address:
                    </div>
                    <input
                      className="w-3/4 h-10 p-2 pl-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                      id="input-Address"
                      type="text"
                      placeholder={Data.address}
                      disabled
                    />
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
                <div className="flex flex-row justify-between ml-5 mt-5">
                  <img src={FaceIcon} className="w-10" alt="IMG" />
                  <div className="flex flex-row items-center"> : </div>
                  <input
                    className="w-3/4 h-10 p-2 pl-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                    id="input-facebook"
                    type="text"
                    placeholder={Data.facebook}
                    disabled 
                  />
                </div>
                <div className="flex flex-row justify-between ml-5 mt-5">
                  <img src={IgIcon} className="w-10" alt="IMG" />
                  <div className="flex flex-row items-center"> : </div>
                  <input
                    className="w-3/4 h-10 p-2 pl-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                    id="input-instagram"
                    type="text"
                    placeholder={Data.instagram}
                    disabled 
                  />
                </div>
                <div className="flex flex-row justify-between ml-5 mt-5">
                  <img src={LineIcon} className="w-10" alt="IMG" />
                  <div className="flex flex-row items-center"> : </div>
                  <input
                    className="w-3/4 h-10 p-2 pl-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                    id="input-line"
                    type="text"
                    placeholder={Data.line}
                    disabled
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
        <WeeklyRankingBar />
      </div>
    </div>
  );
}
