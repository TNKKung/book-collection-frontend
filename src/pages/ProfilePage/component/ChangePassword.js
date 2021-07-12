import React from "react";

export default function ChangePassword() {
  return (
    <div className="flex flex-row w-full h-72 justify-center items-center">
      <div className="bg-white mt-6 w-10/12 h-full rounded-lg border-yellow-300 border-2 text-base font-bold">
        <div className="flex flex-col items-center ml-5 mt-4">
          <div className="flex flex-col justify-center">Old Password:</div>
          <input
            className="w-3/4 h-10 p-2 pl-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
            id="input-oldPassword"
            type="password"
            placeholder="**********"
          />
        </div>
        <div className="flex flex-col items-center ml-5 mt-5">
          <div className="flex flex-col justify-center">New Password:</div>
          <input
            className="w-3/4 h-10 p-2 pl-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
            id="input-newPassword"
            type="password"
            placeholder="**********"
          />
        </div>
        <div className="flex flex-col items-center ml-5 mt-5">
          <div className="flex flex-col justify-center">
            Confirm New Password:
          </div>
          <input
            className="w-3/4 h-10 p-2 pl-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
            id="input-confirmPassword"
            type="password"
            placeholder="**********"
          />
        </div>
      </div>
    </div>
  );
}
