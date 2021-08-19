import React, { useState } from "react";
import DisplayCollection from "../../components/DisplayCollection1/DisplayCollection1.js";
import DisplayCollection2 from "../../components/DisplayCollection2/DisplayCollection2.js";
import DisplayCollection3 from "../../components/DisplayCollection3/DisplayCollection3";
import Data from "../../components/Data.json";
import PageLayout from "../../components/PageLayout/PageLayout";

export default function HomePage(props) {
  const [state, setState] = useState(3);
  const [stateLeftBar, setStateLeftBar] = useState(true);
  const callBackToggleMenu = () => {
    if (stateLeftBar === false) {
      setStateLeftBar(true);
    } else {
      setStateLeftBar(false);
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
    <PageLayout>
      {state === 1 && (
        <div className={`${stateLeftBar ? "ml-72 mr-56" : "ml-28 mr-56"}`}>
          <div className="object-center ml-72 space-y-2 mt-20">
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
        </div>
      )}
      {state === 2 && (
        <div className={`${stateLeftBar ? "ml-80 mr-56" : "ml-40 mr-56"}`}>
          <div className="space-x-1 space-y-2 mt-2">
            {Data.map((item) => {
              return <DisplayCollection2 data={item} />;
            })}
          </div>
        </div>
      )}{" "}
      {state === 3 && (
        <div
          className={`${stateLeftBar ? "ml-72 mr-56" : "xl:ml-28 xl:mr-56"}`}
        >
          <div className="space-y-4 mt-2">
            {Data.map((item) => {
              return (
                <div className="inline-flex flex-col ml-2">
                  <DisplayCollection3 data={item} />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </PageLayout>
  );
}
