import React from "react";
import { useSelector } from "react-redux";
import DisplayCollection2 from "../../components/DisplayCollection2/DisplayCollection2";
import DisplayCollection3 from "../../components/DisplayCollection3/DisplayCollection3";
import Data from "../../components/Data.json";
import PageLayout from "../../components/PageLayout/PageLayout";

export default function MyCollectionPage() {
  const { stateLayout, stateLeftBar } = useSelector(
    (state) => state.storeState
  );

  return (
    <PageLayout>
      <button className="fixed right-80 bottom-12 bg-green-500 rounded-full w-16 h-16 flex justify-center items-center focus:outline-none hover:bg-green-700 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m8-8H4"
          />
        </svg>
      </button>
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
          className={`${
            stateLeftBar ? "ml-72 mr-56" : "xl:ml-28 xl:mr-56"
          } transition-all duration-500`}
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
