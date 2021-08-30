import React from "react";

export default function Profile(props) {
  return (
    <form>
      <div className="mr-20">
        <div className="flex flex-row items-center w-full max-w-lg text-xl mb-3 ml-2">
          <div className="flex flex-col justify-center w-44">
            <div className="h-14 flex items-center">First-Name :</div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="h-14 flex items-center w-72">
              {props.stateEditProfile ? (
                <div className="">{props.Data.firstName}</div>
              ) : (
                <input
                  className="w-3/4 h-10 p-2 pl-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                  id="input-instagram"
                  type="text"
                  placeholder={props.Data.firstName}
                />
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center w-full max-w-lg text-xl mb-3 ml-2">
          <div className="flex flex-col justify-center w-44">
            <div className="h-14 flex items-center">Last-Name :</div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="h-14 flex items-center w-72">
              {props.stateEditProfile ? (
                <div className="">{props.Data.lastName}</div>
              ) : (
                <input
                  className="w-3/4 h-10 p-2 pl-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                  id="input-instagram"
                  type="text"
                  placeholder={props.Data.lastName}
                />
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center w-full max-w-lg text-xl mb-3 ml-2">
          <div className="flex flex-col justify-center w-44">
            <div className="h-14 flex items-center">E-mail :</div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="h-14 flex items-center w-72">
              {props.stateEditProfile ? (
                <div className="">{props.Data.email}</div>
              ) : (
                <input
                  className="w-3/4 h-10 p-2 pl-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                  id="input-instagram"
                  type="text"
                  placeholder={props.Data.email}
                />
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center w-full max-w-lg text-xl mb-3 ml-2">
          <div className="flex flex-col justify-center w-44">
            <div className="h-14 flex items-center">Tell :</div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="h-14 flex items-center w-72">
              {props.stateEditProfile ? (
                <div className="">{props.Data.tell}</div>
              ) : (
                <input
                  className="w-3/4 h-10 p-2 pl-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                  id="input-instagram"
                  type="text"
                  placeholder={props.Data.tell}
                />
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center w-full max-w-lg text-xl mb-3 ml-2">
          <div className="flex flex-col justify-center w-44">
            <div className="h-14 flex items-center">Address :</div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="h-14 flex items-center w-72">
              {props.stateEditProfile ? (
                <div className="">{props.Data.address}</div>
              ) : (
                <input
                  className="w-3/4 h-10 p-2 pl-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                  id="input-instagram"
                  type="text"
                  placeholder={props.Data.address}
                />
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center w-full max-w-lg text-xl mb-3 ml-2">
          <div className="flex flex-col justify-center w-44">
            <div className="h-14 flex items-center">Birth-Day :</div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="h-14 flex items-center w-72">
              {props.stateEditProfile ? (
                <div className="">{props.Data.birthDay}</div>
              ) : (
                <input
                  className="w-3/4 h-10 p-2 pl-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                  id="input-instagram"
                  type="date"
                  placeholder={props.Data.birthDay}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}