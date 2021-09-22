import React from "react";
import { useSelector } from "react-redux";

export default function Profile(props) {
  const { user } = useSelector((state) => state.userApi);
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
                <div className="">{user.first_name}</div>
              ) : (
                <input
                  className="w-3/4 h-10 p-2 pl-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                  id="input-instagram"
                  type="text"
                  placeholder={user.first_name}
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
                <div className="">{user.last_name}</div>
              ) : (
                <input
                  className="w-3/4 h-10 p-2 pl-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:out"
                  id="input-instagram"
                  type="text"
                  placeholder={user.last_name}
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
                <div className="">{user.email}</div>
              ) : (
                <input
                  className="w-3/4 h-10 p-2 pl-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                  id="input-instagram"
                  type="text"
                  value={user.email}
                  disabled
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
                <div className="">{user.tell}</div>
              ) : (
                <input
                  className="w-3/4 h-10 p-2 pl-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                  id="input-instagram"
                  type="text"
                  placeholder={user.tell}
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
                <div className="">{user.address}</div>
              ) : (
                <input
                  className="w-3/4 h-10 p-2 pl-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                  id="input-instagram"
                  type="text"
                  placeholder={user.address}
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
                <div className="">{user.birth_date}</div>
              ) : (
                <input
                  className="w-3/4 h-10 p-2 pl-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                  id="input-instagram"
                  type="date"
                  placeholder={user.birth_date}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
