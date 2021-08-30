import React from "react";

export default function ChangePassword() {
  return (
    <form>
      <div className="mr-20">
        <div className="flex flex-row items-center w-full max-w-lg text-xl mb-3 ml-2">
          <div className="flex flex-col justify-center w-44">
            <div className="h-14 flex items-center">Old Password :</div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="h-14 flex items-center w-72">
              <input
                className="w-3/4 h-10 p-2 pl-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                id="input-instagram"
                type="text"
                placeholder={"**********"}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center w-full max-w-lg text-xl mb-3 ml-2">
          <div className="flex flex-col justify-center w-44">
            <div className="h-14 flex items-center">New Password :</div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="h-14 flex items-center w-72">
              <input
                className="w-3/4 h-10 p-2 pl-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                id="input-instagram"
                type="text"
                placeholder={"**********"}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center w-full max-w-lg text-xl mb-3 ml-2">
          <div className="flex flex-col justify-center w-44">
            <div className="h-14 flex items-center">Confirm Password :</div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="h-14 flex items-center w-72">
              <input
                className="w-3/4 h-10 p-2 pl-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                id="input-instagram"
                type="text"
                placeholder={"**********"}
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
