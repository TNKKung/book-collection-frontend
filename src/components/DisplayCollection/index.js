import React from "react";

export default function index(prop) {
  return (
    <div>
      <div class="mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-2">
        <div class="md:flex ">
          <div class="md:flex-shrink-0hidden 2xl:block">
            <img
              class="h-48 w-ful md:w-52"
              src={prop.Picture}
              width="1"
              alt="IMG"
            />
          </div>
          <div class="p-8">
            <div class="uppercase tracking-wide text-lg text-indigo-500 font-semibold">
              {prop.BookTitle}
            </div>
            <div className="flex flex-row">
              <div className=" text-blue-500 font-bold">Owner : </div>
              <div className="font-bold lowercase">{prop.User}</div>
            </div>
            <div className="mt-2">
              <div className="text-blue-500 font-bold">Contract</div>
              <div className="flex flex-row">
                <div className=" text-blue-500 font-bold">Phone : </div>
                <div className="font-bold">{prop.MobileNumber}</div>
              </div>
            </div>
            <button className="bg-red-500 rounded-lg hover:bg-red-700 text-white w-1/2 mt-2">
              Detail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
