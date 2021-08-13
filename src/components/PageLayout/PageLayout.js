import React from "react";
import TopBarMenu from "../TopBarMenu/TopBarMenu";
import LeftBarMenu from "../LeftBarMenu/LeftBarMenu";
import WeeklyRank from "../WeeklyRankingBar/WeeklyRankingBar";

export default function PageLayout() {
  return (
    <div className="flex flex-col">
      <div className="bg-red-500 w-full h-20">
        <TopBarMenu />
      </div>
      <div className="flex flex-row">
        <div className="bg-green-500 w-60 h-screen">
          <LeftBarMenu state={true} />
        </div>
        <div className="flex-auto bg-yellow-500 h-screen">content</div>
        <div className="bg-blue-500 h-screen w-60 ">
          <WeeklyRank />
        </div>
      </div>
    </div>
  );
}
