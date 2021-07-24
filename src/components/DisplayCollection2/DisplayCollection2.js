import React from "react";
import { Link } from "react-router-dom";

export default function DisplayCollection2(prop) {
  return (
    <Link to={{ pathname: "/displaypage", state: { data: prop.data } }}>
      <div className="inline-flex flex-col ml-4 mb-3">
        <div className="mx-auto bg-white rounded-md shadow-lg overflow-hidden md:max-w-xl">
          <div className="md:flex ">
            <div className="w-32 h-40">
              <img
                className="h-full w-full"
                src={prop.data.picture}
                alt="IMG"
              />
            </div>
            <div className="p-3">
              <div className="uppercase tracking-wide text-lg text-indigo-500 font-mono">
                {prop.data.bookTitle}
              </div>
              <div className="flex flex-row">
                <div className=" text-blue-500 font-mono">Owner : </div>
                <div className="font-mono lowercase">{prop.data.userName}</div>
              </div>
              <div className="mt-2">
                <div className="text-blue-500 font-mono">Contact</div>
                <div className="flex flex-row">
                  <div className=" text-blue-500 font-mono">Phone : </div>
                  <div className="font-mobo">{prop.data.MobileNumber}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
