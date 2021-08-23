import React from "react";
import Menu from "./component/Menu";
import LogoBook from "../../Images/logoBook.png";
import exitIcon from "../../Images/exit.png";
import LogoutButton from "./component/LogoutButton";
import { useDispatch } from "react-redux";
import { stateBar } from "../../Reducer/actionSlice";

export default function LeftBarMenu(prop) {
  const dispatch = useDispatch();
  dispatch(stateBar(prop.state));
  return (
    <div
      className={`fixed flex flex-col items-center ${
        prop.state ? "w-60" : "w-20"
      } bg-white h-screen p-2 text-gray-900 border-r border-yellow-200 transition-all duration-500 overflow-x-hidden`}
    >
      <div className="flex flex-wrap mt-8"></div>
      <div className="flex flex-col justify-center h-24 mb-4">
        <img
          src={LogoBook}
          className={prop.state ? "w-20 h-auto" : "w-12"}
          alt="IMG"
        />
      </div>
      <Menu path="/" name="Home" state={prop.state}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      </Menu>
      <Menu path="/profile" name="Profile" state={prop.state}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </Menu>
      <Menu path="/mycollection" name="My Collection" state={prop.state}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      </Menu>
      <Menu path="/" name="My Store" state={prop.state}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
      </Menu>
      <LogoutButton stateButton={prop.state} icon={exitIcon} />
    </div>
  );
}
