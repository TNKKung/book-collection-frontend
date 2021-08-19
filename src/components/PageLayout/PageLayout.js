import React,{useState} from "react";
import TopBarMenu from "../TopBarMenu/TopBarMenu";
import LeftBarMenu from "../LeftBarMenu/LeftBarMenu";
import WeeklyRankingBar from "../WeeklyRankingBar/WeeklyRankingBar";


export default function PageLayout(props) {
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
    <div className="flex flex-col">
      <div className="w-full h-16"></div>
        <TopBarMenu
          CallBackToggleState={callBackToggleState}
          CallBackToggleMenu={callBackToggleMenu}
        />
      <div className="flex flex-row">
        <LeftBarMenu state={stateLeftBar} />
        <div className="">
          {props.children}
        </div>
      </div>
      <div className="hidden 2xl:block">
        <WeeklyRankingBar />
      </div>
    </div>
  );
}
