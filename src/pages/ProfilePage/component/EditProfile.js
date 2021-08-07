import React from "react";

export default function EditProfile1(prop) {
  return (
    <div>
      <div className="flex flex-row justify-center mt-5">
        <img
          className="w-80 border-8 border-yellow-300 rounded-xl"
          src={prop.pictureProfile}
          alt="IMG"
        />
      </div>
      <div className="flex flex-row w-full h-96 justify-center items-center">
        <div className="bg-white  mt-16 w-10/12 h-full rounded-lg border-yellow-300 border-2  text-base font-bold">
          <div className="flex flex-row justify-between ml-5 mt-5">
            <div className="flex flex-col justify-center">Frist-Name:</div>
            <input
              className="w-3/4 h-10 p-2 pl-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
              id="input-firstname"
              type="text"
              placeholder={prop.firstName}
            />
          </div>
          <div className="flex flex-row justify-between ml-5 mt-5">
            <div className="flex flex-col justify-center"> Last-Name:</div>
            <input
              className="w-3/4 h-10 p-2 pl-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
              id="input-lastname"
              type="text"
              placeholder={prop.lastName}
            />
          </div>
          <div className="flex flex-row justify-between ml-5 mt-5">
            <div className="flex flex-col justify-center"> E-mail:</div>
            <input
              className="w-3/4 h-10 p-2 pl-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
              id="input-email"
              type="email"
              placeholder={prop.email}
            />
          </div>
          <div className="flex flex-row justify-between ml-5 mt-5">
            <div className="flex flex-col justify-center"> Birth-Day:</div>
            <input
              className="w-3/4 h-10 p-2 pl-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
              id="input-birth-day"
              type="date"
              placeholder={prop.birthDay}
            />
          </div>
          <div className="flex flex-row justify-between ml-5 mt-5">
            <div className="flex flex-col justify-center"> Tell:</div>
            <input
              className="w-3/4 h-10 p-2 pl-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
              id="input-mobile"
              type="text"
              placeholder={prop.tell}
            />
          </div>
          <div className="flex flex-row justify-between ml-5 mt-5">
            <div className="flex flex-col justify-center"> Address:</div>
            <input
              className="w-3/4 h-10 p-2 pl-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
              id="input-Address"
              type="text"
              placeholder={prop.address}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
