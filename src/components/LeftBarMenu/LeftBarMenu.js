import React from "react";
import Logo from "../../Images/logo.png";
import Menu from "./component/Menu";
import homeIcon from "../../Images/home.png";
import userIcon from "../../Images/user.png";
import collectionIcon from "../../Images/collection.png";
import storeIcon from "../../Images/store.png";
import exitIcon from "../../Images/exit.png";
import LogoutButton from "./component/LogoutButton";

export default function LeftBarMenu(prop) {
  return (
    <div
      className={`fixed flex flex-col items-center ${
        prop.state ? "w-60" : "w-20"
      } bg-white h-screen p-2 text-gray-900 border-r border-yellow-200 transition-all duration-500 overflow-x-hidden`}
    >
      <div className="flex flex-wrap mt-8"></div>
      <div className="flex flex-col justify-center h-24">
        <img src={Logo} className={prop.state ? "w-20" : "w-12 h-auto"} alt="IMG" />
      </div>
      <Menu path="/" name="Home" state={prop.state} icon={homeIcon} />
      <Menu path="/profile" name="Profile" state={prop.state} icon={userIcon} />
      <Menu
        path="/mycollection"
        name="My Collection"
        state={prop.state}
        icon={collectionIcon}
      />
      <Menu path="/" name="My Store" state={prop.state} icon={storeIcon} />
      <LogoutButton stateButton={prop.state} icon={exitIcon} />
    </div>
  );
}
