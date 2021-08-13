import React, { useState } from "react";
import "../../../css/toggle.css";
import LeftBarMenu from "../../../components/LeftBarMenu/LeftBarMenu";
import FaceIcon from "../../../Images/facebook_icon.png";
import IgIcon from "../../../Images/instagram_icon.png";
import LineIcon from "../../../Images/line_icon.png";
import TopBarMenu from "../../../components/TopBarMenu/TopBarMenu";
import WeeklyRankingBar from "../../../components/WeeklyRankingBar/WeeklyRankingBar";
import Data from "../../../components/Data.json";

export default function DisplayPage(prop) {
  const [state, setState] = useState(3);
  const [stateNavbar, setStateNavbar] = useState(true);
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
    <div className="flex flex-row dark:bg-black h-screen">
      <LeftBarMenu state={stateNavbar} />
      <TopBarMenu
        CallBackToggleState={callBackToggleState}
        CallBackToggleMenu={callBackToggleMenu}
      />
      <div className="flex flex-col justify-center items-center w-full mt-8">
        <div className="flex flex-col bg-white max-w-5xl w-full rounded-lg shadow-xl">
          <div className="flex flex-row justify-center ml-8 mt-8">
            <div className="w-2/6 mr-12 bg-yellow-300 border-4 border-yellow-300 rounded-xl">
              <img
                src={prop.location.state.data.picture}
                className="w-full h-80 rounded-xl object-cover"
                alt="IMG"
              />
            </div>
            <div className="flex flex-col ml-16 mt-4">
              <div className="text-xl font-bold">
                {prop.location.state.data.bookTitle}
              </div>
              <div className="text-base font-bold text-gray-400 mt-5">
                book owner : {prop.location.state.data.userName}
              </div>
              <div className="text-xl font-bold mt-5">CONTACT</div>
              <div className="flex flex-row text-base font-bold text-gray-400 mt-5">
                <img src={FaceIcon} className="w-10 rounded-lg" alt="IMG" />
                <div className="flex flex-row items-center">
                  <div className="ml-3">:</div>
                  <div className="ml-3 mt">
                    {prop.location.state.data.userName}
                  </div>
                </div>
              </div>
              <div className="flex flex-row text-base font-bold text-gray-400 mt-5">
                <img src={IgIcon} className="w-10" alt="IMG" />
                <div className="flex flex-row items-center">
                  <div className="ml-3">:</div>
                  <div className="ml-3 mt">
                    {prop.location.state.data.userName}
                  </div>
                </div>
              </div>
              <div className="flex flex-row text-base font-bold text-gray-400 mt-5">
                <img src={LineIcon} className="w-10 rounded-lg" alt="IMG" />
                <div className="flex flex-row items-center">
                  <div className="ml-3">:</div>
                  <div className="ml-3 mt">
                    {prop.location.state.data.userName}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex overflow-y-hidden mt-4 ml-4 mr-4">
            <div className="flex flex-row space-x-2 w-4/4">
              {Data.map((item) => {
                return (
                  <div className="flex flex-col w-32 h-48 rounded-xl">
                    <div className="flex justify-center mt-2">
                      <img
                        src={item.picture}
                        className="w-28 h-32 object-cover rounded-md"
                        alt="IMG"
                      />
                    </div>
                    <div className="text-xs text-center">{item.bookTitle}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <WeeklyRankingBar />
      </div>
    </div>
  );
}