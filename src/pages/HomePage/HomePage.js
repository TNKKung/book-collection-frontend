import React, { useState } from "react";
import LeftBarMenu from "../../components/LeftBarMenu/LeftBarMenu";
import DisplayCollection from "../../components/DisplayCollection1/DisplayCollection1.js";
import DisplayCollection2 from "../../components/DisplayCollection2/DisplayCollection2.js";
import DisplayCollection3 from "../../components/DisplayCollection3/DisplayCollection3";
import Data from "../../components/Data.json";
import TopBarMenu from "../../components/TopBarMenu/TopBarMenu";
import WeeklyRankingBar from "../../components/WeeklyRankingBar/WeeklyRankingBar";

export default function Index() {
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
    <div className="flex flex-col">
      <div className="bg-red-500 w-full h-20">
        <TopBarMenu
          CallBackToggleState={callBackToggleState}
          CallBackToggleMenu={callBackToggleMenu}
        />
      </div>
      <div className="flex flex-row">
        <div className="bg-green-500 w-64 h-screen">
          <LeftBarMenu state={stateNavbar} />
        </div>
        <div className="max-w-7xl w-full h-screen">
          {state === 1 && (
            <div className="object-center ml-72 space-y-2 mt-20 ">
              {Data.map((item) => {
                return (
                  <DisplayCollection
                    Picture={item.picture}
                    BookTitle={item.bookTitle}
                    User={item.userName}
                    MobileNumber={item.MobileNumber}
                    Email={item.Email}
                  />
                );
              })}
            </div>
          )}
          {state === 2 && (
            <div className="ml-80 w-7/12 space-y-2 mt-12">
              {Data.map((item) => {
                return <DisplayCollection2 data={item} />;
              })}
            </div>
          )}{" "}
          {state === 3 && (
            <div className="ml-12 space-x-2 space-y-4 mt-2">
              {Data.map((item) => {
                return (
                  <div className="inline-flex flex-col ml-2">
                    <DisplayCollection3 data={item} />
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className="bg-blue-500 h-screen w-60 ">
          <WeeklyRankingBar />
        </div>
      </div>
    </div>
  );
}
