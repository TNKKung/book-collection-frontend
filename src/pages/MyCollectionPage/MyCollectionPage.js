import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import DisplayCollection3 from "../../components/DisplayCollection3/DisplayCollection3";
import Data from "../../components/Data.json";
import TopBarMenu from "../../components/TopBarMenu/TopBarMenu";

export default function MyCollectionPage() {
  return (
    <div className="h-screen dark:bg-black">
      <div className="fixed object-left top-0 z-10">
        <Navbar />
      </div>
      <TopBarMenu />
      <div className="ml-60 w-4/6 space-y-4 mt-14">
        {Data.map((item) => {
          return (
            <div className="inline-flex flex-col ml-2">
              <DisplayCollection3 data={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
