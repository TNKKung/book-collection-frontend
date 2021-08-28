import React from "react";
import TopBarMenu from "../TopBarMenu/TopBarMenu";
import LeftBarMenu from "../LeftBarMenu/LeftBarMenu";
import WeeklyRankingBar from "../WeeklyRankingBar/WeeklyRankingBar";


export default function PageLayout({children}) {

  return (
    <div className="flex flex-col">
      <div className="w-full h-16"></div>
      <TopBarMenu/>
      <div className="flex flex-row">
        <LeftBarMenu/>
        <div className="">{children}</div>
      </div>
      <div className="hidden 2xl:block">
        <WeeklyRankingBar />
      </div>
    </div>
  );
}
