import React from "react";
import SearchBar from "./component/SearchBar";
import nightwind from "nightwind/helper";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleStateLayout,
  toggleStateBar,
  toggleStateIconDark,
} from "../../Reducer/actionSlice";

export default function TopBarMenu() {
  const dispatch = useDispatch();
  const stateIconDark = useSelector((state) => state.storeState.stateIconDark);
  return (
    <div className="z-10">
      <div className="fixed flex flex-row justify-between bg-white w-full top-0 h-16 focus:outline-white border-yellow-200 border-b dark:border-yellow-100">
        <div className="hover:bg-yellow-100 flex items-center justify-center mt-2 h-12 w-12 rounded-lg ml-2">
          <button
            onClick={() => dispatch(toggleStateBar())}
            className="focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div className="mt-1">
          <SearchBar />
        </div>
        <div className="flex items-center mr-4">
          <div className="hover:bg-yellow-100 flex items-center justify-center h-12 w-12 rounded-lg mr-32">
            <button
              onClick={() => dispatch(toggleStateLayout())}
              className="focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
            </button>
          </div>

          <button
            onClick={() => {
              nightwind.toggle();
              dispatch(toggleStateIconDark());
            }}
            className="focus:outline-none flex flex-row items-center"
          >
            {stateIconDark ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
