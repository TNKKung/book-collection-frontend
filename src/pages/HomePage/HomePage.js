import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import DisplayCollection from "../../components/DisplayCollection1/DisplayCollection1.js";
import DisplayCollection2 from "../../components/DisplayCollection2/DisplayCollection2.js";
import DisplayCollection3 from "../../components/DisplayCollection3/DisplayCollection3";
import Data from "../../components/Data.json";
import TopBarMenu from "../../components/TopBarMenu/TopBarMenu";
import { Link } from "react-router-dom";

export default function Index() {
  const [state, setState] = useState(1);

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
    <div className="">
      <div className="fixed object-left top-0 z-20">
        <Navbar />
      </div>
      <TopBarMenu CallBackToggleState={callBackToggleState} />
      {state === 1 && (
        <div className="object-center ml-60 space-y-4 mt-20 ">
          {Data.map((item) => {
            return (
              <DisplayCollection
                Picture={item.picture}
                BookTitle={item.bookTitle}
                User={item.userName}
                MobileNumber={item.MobileNumber}
                Email={item.Email}
              />
            );
          })}
        </div>
      )}
      :
      {state === 2 && (
        <div className="object-center ml-72 space-y-4 mt-10">
          {Data.map((item) => {
            return (
              <DisplayCollection2
                Picture={item.picture}
                BookTitle={item.bookTitle}
                User={item.userName}
                MobileNumber={item.MobileNumber}
                Email={item.Email}
              />
            );
          })}
        </div>
      )}{" "}
      :{" "}
      {state === 3 && (
        <div className="ml-72 w-8/12 space-y-4 mt-10">
          {Data.map((item) => {
            return (
              <div className="inline-flex flex-col ml-2">
                <DisplayCollection3 data={item} />
              </div>
            );
          })}
        </div>
      )}
      <div className="bg-gray-300 fixed right-0 top-14 mt-2 z-0 w-1/6 h-full">
        <div className="bg-gray-800 flex items-center justify-center h-16">
          <div className="font-bold text-sm text-yellow-300">
            WEEKLY CARTOON RANKINGS
          </div>
        </div>
        <div className="flex justify-center mt-3 mb-4">
          <div className=" text-base">
            <Link className="hover:underline">
              <div>1.Demon Slayer</div>
            </Link>
            <Link className="hover:underline">
              <div>2.One Piece</div>
            </Link>
            <Link className="hover:underline">
              <div>3.Black Clover</div>
            </Link>
          </div>
        </div>
        <div className="bg-gray-800 flex items-center justify-center h-16 mt-3">
          <div className="font-bold text-sm text-yellow-300">
            WEEKLY BOOK CATEGORY RANKINGS
          </div>
        </div>
        <div className="flex justify-center mt-3 mb-4">
          <div className="space-y-3 text-base">
            <Link className="hover:underline">
              <div>1.Comic Book</div>
            </Link>
            <Link className="hover:underline">
              <div>2.Course Book</div>
            </Link>
            <Link className="hover:underline">
              <div>3.Fiction Book</div>
            </Link>
          </div>
        </div>
        <div className="bg-gray-800 flex items-center justify-center h-16 mt-3">
          <div className="font-bold text-sm text-yellow-300">
            All Categories
          </div>
        </div>
        <div className="flex justify-center mt-3 mb-4">
          <div className="space-y-3 text-base">
            <Link className="hover:underline">
              <div>1.Comic Book</div>
            </Link>
            <Link className="hover:underline">
              <div>2.Course Book</div>
            </Link>
            <Link className="hover:underline">
              <div>3.Fiction Book</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
