import React from "react";

export default function Index(prop) {
  return (
    <div className="inline-flex flex-col ml-2">
      <div className="mx-auto bg-white rounded-md shadow-xl overflow-hidden md:max-w-xl">
        <div className="md:flex ">
          <div className="md:flex-shrink-0hidden 2xl:block ">
            <img
              className="h-40 w-10/12 md:w-40"
              src={prop.Picture}
              width="1"
              alt="IMG"
            />
          </div>
          <div className="p-3">
            <div className="uppercase tracking-wide text-lg text-indigo-500 font-mono">
              {prop.BookTitle}
            </div>
            <div className="flex flex-row">
              <div className=" text-blue-500 font-mono">Owner : </div>
              <div className="font-mono lowercase">{prop.User}</div>
            </div>
            <div className="mt-2">
              <div className="text-blue-500 font-mono">Contract</div>
              <div className="flex flex-row">
                <div className=" text-blue-500 font-mono">Phone : </div>
                <div className="font-mobo">{prop.MobileNumber}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
