import React from "react";
import { useSelector } from "react-redux";
import DisplayCollection from "../../components/DisplayCollection1/DisplayCollection1";
import DisplayCollection2 from "../../components/DisplayCollection2/DisplayCollection2";
import DisplayCollection3 from "../../components/DisplayCollection3/DisplayCollection3";
import Data from "../../components/Data.json";
import PageLayout from "../../components/PageLayout/PageLayout";

export default function MyCollectionPage() {
  const {stateLayout,stateLeftBar } = useSelector((state) => state.storeState);

  return (
    <PageLayout>
      {stateLayout === 0 && (
        <div className={`${stateLeftBar ? "ml-72 mr-56" : "ml-28 mr-56"}`}>
          <div className="object-center ml-72 space-y-2 mt-20">
            {Data.map((item) => {
              return (
                <DisplayCollection
                  key={item.Id}
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
      {stateLayout === 1 && (
        <div className={`${stateLeftBar ? "ml-80 mr-56" : "ml-40 mr-56"}`}>
          <div className="space-x-1 space-y-2 mt-2">
            {Data.map((item) => {
              return <DisplayCollection2 data={item} key={item.Id} />;
            })}
          </div>
        </div>
      )}{" "}
      {stateLayout === 2 && (
        <div
          className={`${stateLeftBar ? "ml-72 mr-56" : "xl:ml-28 xl:mr-56"}`}
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
