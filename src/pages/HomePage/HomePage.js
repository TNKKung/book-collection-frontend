import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import DisplayCollection from "../../components/DisplayCollection1/DisplayCollection1.js";
import DisplayCollection2 from "../../components/DisplayCollection2/DisplayCollection2.js";
import DisplayCollection3 from "../../components/DisplayCollection3/DisplayCollection3";
import Data from "../../components/Data.json";
import TopBarMenu from "../../components/TopBarMenu/TopBarMenu";

export default function Index() {
  const [state, setState] = useState(1);

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
    <div className="">
      <div className="fixed object-left top-0 z-10">
        <Navbar />
      </div>
      <TopBarMenu CallBackToggleState={callBackToggleState} />
      {state === 1 && (
        <div className="object-center ml-60 space-y-4 mt-20 ">
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
      :
      {state === 2 && (
        <div className="object-center ml-60 space-y-4 mt-16 ">
          {Data.map((item) => {
            return (
              <DisplayCollection2
                Picture={item.picture}
                BookTitle={item.bookTitle}
                User={item.userName}
                MobileNumber={item.MobileNumber}
                Email={item.Email}
              />
            );
          })}
        </div>
      )}{" "}
      :{" "}
      {state === 3 && (
        <div className="ml-60 w-3/6 space-y-4 mt-10">
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
  );
}
