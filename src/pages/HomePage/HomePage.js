import React from "react";
import DisplayCollection2 from "../../components/DisplayCollection2/DisplayCollection2.js";
import DisplayCollection3 from "../../components/DisplayCollection3/DisplayCollection3";
import Data from "../../components/Data.json";
import PageLayout from "../../components/PageLayout/PageLayout";
import { useSelector } from "react-redux";

export default function HomePage() {
  const { stateLayout, stateLeftBar } = useSelector(
    (state) => state.storeState
  );
  return (
    <PageLayout>
      {stateLayout === 0 && (
        <div
          className={`${
            stateLeftBar
              ? "ml-80 mr-56 space-y-2 mt-2"
              : "ml-60 mr-56 space-x-2 space-y-2 mt-2"
          } transition-all duration-500`}
        >
          {Data.map((item) => {
            return <DisplayCollection2 data={item} key={item.Id} />;
          })}
        </div>
      )}{" "}
      {stateLayout === 1 && (
        <div
          className={`${stateLeftBar ? "ml-72 mr-56" : "xl:ml-28 xl:mr-56"} transition-all duration-500`}
        >
          <div className="space-y-4 mt-2">
            {Data.map((item) => {
              return (
                <div className="inline-flex flex-col ml-2" key={item.Id}>
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
