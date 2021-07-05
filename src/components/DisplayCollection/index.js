import React from "react";

export default function index(prop) {
  return (
    <div>
      <div class="mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-1">
        <div class="md:flex">
          <div class="md:flex-shrink-0">
            <img
              class="h-48 w-ful md:w-52"
              src={prop.Picture}
              width="1"
              alt="IMG"
            />
          </div>
          <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {prop.Name}
            </div>
            <button className="bg-red-500 rounded-lg hover:bg-red-700 text-white w-1/2 mt-2">Detail</button>
          </div>
        </div>
      </div>
    </div>
  );
}
