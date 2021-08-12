import React from "react";
import TopBarMenu from "../TopBarMenu/TopBarMenu";
import LeftBarMenu from "../LeftBarMenu/LeftBarMenu";

export default function PageLayout(){
    return(
        <div className="flex flex-col">
            <div className="bg-black w-full h-18">
                <TopBarMenu />
            </div>
            <div className="flex flex-row">
                <div className="bg-black w-60 h-screen">
                    <LeftBarMenu state={false} />
                </div>
                <div className="bg-gray-800 max-w-2xl w-max h-screen">
                    tom
                </div>
            </div>
        </div>
    );
}