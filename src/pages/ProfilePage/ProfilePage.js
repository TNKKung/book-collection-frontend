import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import PictureProfile from "../../Images/profile.jpg";

export default function ProfilePage() {
  const Data = {
    firstName: "Nattawut",
    lastName: "Krongareetham",
    birthDay: "06/12/2000",
    email: "tomkabtokom@gmail.com",
    tell: "0640630406",
    address: "28/22 หมู่ 4 ต.บางล่าง อ.บางบน จ.บางซ้าย",
    facebook: "nattawut krongareetham",
    instagram: "tomn_k3319",
    line: "0640630406",
  };
  const [stateData, setStateData] = useState(true);
  const [stateChangePassword, setStateChangePassword] = useState(false);

  const toggleStateData = () => {
    if (stateData === false) {
      setStateData(true);
    } else {
      setStateData(false);
    }
  };
  const toggleStateChangePassword = () => {
    if (stateChangePassword === false) {
      setStateChangePassword(true);
    } else {
      setStateChangePassword(false);
    }
  };
  return (
    <div className="">
      <div className="fixed object-left top-0">
        <Navbar />
      </div>
      <div className="flex flex-row h-screen justify-center ml-36">
        <div className="bg-gradient-to-b from-yellow-500 to-yellow-300 w-1/3 rounded-xl ml-20">
          <div className="flex flex-row justify-center mt-5">
            <img
              className="w-80 border-4 border-yellow-300 rounded-2xl"
              src={PictureProfile}
              alt="IMG"
            />
          </div>
          {stateData ? (
            <div className="flex flex-row w-full h-96 justify-center items-center">
              <div className="bg-white p-5 mt-16 w-10/12 h-full rounded-lg border-yellow-300 border-2 font-bold text-base">
                <div className="flex flex-row ml-5 mt-5">
                  <div> Frist-Name: {Data.firstName}</div>
                </div>
                <div className="flex flex-row ml-5 mt-5">
                  <div> Last-Name: {Data.lastName}</div>
                </div>
                <div className="flex flex-row ml-5 mt-5">
                  <div> Birth-Day: {Data.birthDay}</div>
                </div>
                <div className="flex flex-row ml-5 mt-5">
                  <div> E-mail: {Data.email}</div>
                </div>
                <div className="flex flex-row ml-5 mt-5 mb-5 ">
                  <div> Tell: {Data.tell}</div>
                </div>
                <div className="flex flex-row ml-5 mt-5 mb-5 ">
                  <div> Address: {Data.address}</div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-row w-full h-96 justify-center items-center">
              <div className="bg-white  mt-16 w-10/12 h-full rounded-lg border-yellow-300 border-2  text-base font-bold">
                <div className="flex flex-row justify-between ml-5 mt-5">
                  <div className="flex flex-col justify-center">
                    Frist-Name:
                  </div>
                  <input
                    className="w-3/4 h-10 p-2 pl-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                    id="input-firstname"
                    type="text"
                    placeholder={Data.firstName}
                  />
                </div>
                <div className="flex flex-row justify-between ml-5 mt-5">
                  <div className="flex flex-col justify-center">
                    {" "}
                    Last-Name:
                  </div>
                  <input
                    className="w-3/4 h-10 p-2 pl-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                    id="input-lastname"
                    type="text"
                    placeholder={Data.lastName}
                  />
                </div>
                <div className="flex flex-row justify-between ml-5 mt-5">
                  <div className="flex flex-col justify-center"> E-mail:</div>
                  <input
                    className="w-3/4 h-10 p-2 pl-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                    id="input-email"
                    type="email"
                    placeholder={Data.email}
                  />
                </div>
                <div className="flex flex-row justify-between ml-5 mt-5">
                  <div className="flex flex-col justify-center">
                    {" "}
                    Birth-Day:
                  </div>
                  <input
                    className="w-3/4 h-10 p-2 pl-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                    id="input-birth-day"
                    type="date"
                    placeholder={Data.birthDay}
                  />
                </div>
                <div className="flex flex-row justify-between ml-5 mt-5">
                  <div className="flex flex-col justify-center">
                    {" "}
                    Birth-Day:
                  </div>
                  <input
                    className="w-3/4 h-10 p-2 pl-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                    id="input-mobile"
                    type="text"
                    placeholder={Data.tell}
                  />
                </div>
                <div className="flex flex-row justify-between ml-5 mt-5">
                  <div className="flex flex-col justify-center"> Address:</div>
                  <input
                    className="w-3/4 h-10 p-2 pl-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                    id="input-Address"
                    type="text"
                    placeholder={Data.address}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="bg-gradient-to-b from-yellow-500 to-yellow-300  ml-5 w-1/3 h-4/4 rounded-xl">
          {stateData ? (
            <div className="flex flex-row w-full h-96 justify-center items-center">
              <div className="bg-white mt-6 w-10/12 h-full rounded-lg border-yellow-300 border-2 text-base font-bold">
                <div className="flex flex-row ml-5 mt-5">
                  <div> Facebook: {Data.facebook}</div>
                </div>
                <div className="flex flex-row ml-5 mt-5">
                  <div> Instagram: {Data.instagram}</div>
                </div>
                <div className="flex flex-row ml-5 mt-5">
                  <div> Line: {Data.line}</div>
                </div>
                <div className="flex flex-row ml-5 mt-5">
                  <div> Favorite Book Genre: </div>
                </div>
                <div className="flex flex-row ml-5 mt-5">
                  <div> Total Number Of Stories: </div>
                </div>
                <div className="flex flex-row ml-5 mt-5">
                  <div> Total Number Of Book: </div>
                </div>
                <div className="flex flex-row ml-5 mt-5">
                  <div> Other: </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-row w-full h-96 justify-center items-center">
              <div className="bg-white mt-6 w-10/12 h-full rounded-lg border-yellow-300 border-2 text-base font-bold">
                <div className="flex flex-row justify-between ml-5 mt-5">
                  <div className="flex flex-col justify-center">Facebook:</div>
                  <input
                    className="w-3/4 h-10 p-2 pl-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                    id="input-facebook"
                    type="text"
                    placeholder={Data.facebook}
                  />
                </div>
                <div className="flex flex-row justify-between ml-5 mt-5">
                  <div className="flex flex-col justify-center">Instagram:</div>
                  <input
                    className="w-3/4 h-10 p-2 pl-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                    id="input-instagram"
                    type="text"
                    placeholder={Data.instagram}
                  />
                </div>
                <div className="flex flex-row justify-between ml-5 mt-5">
                  <div className="flex flex-col justify-center">Line:</div>
                  <input
                    className="w-3/4 h-10 p-2 pl-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                    id="input-line"
                    type="text"
                    placeholder={Data.line}
                  />
                </div>
                <div className="flex flex-row ml-5 mt-5 mb-5">
                  <div> Favorite Book Genre: </div>
                </div>
                <div className="flex flex-row ml-5 mt-5 mb-5">
                  <div> Total Number Of Stories: </div>
                </div>
                <div className="flex flex-row ml-5 mt-5">
                  <div> Total Number Of Book: </div>
                </div>
                <div className="flex flex-row ml-5 mt-5">
                  <div> Other: </div>
                </div>
              </div>
            </div>
          )}
          <div className="flex mt-5 justify-center">
            <button
              className="bg-green-500 h-10 w-36 rounded-lg hover:bg-green-700 focus:outline-none"
              onClick={() => toggleStateData()}
            >
              Edit Profile
            </button>
            <button
              className="bg-red-500 ml-5 h-10 w-36 rounded-lg hover:bg-red-700 focus:outline-none"
              onClick={() => toggleStateChangePassword()}
            >
              Change Password
            </button>
          </div>
          {stateChangePassword ? (
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
                  <div className="flex flex-col justify-center">Confirm New Password:</div>
                  <input
                    className="w-3/4 h-10 p-2 pl-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                    id="input-confirmPassword"
                    type="password"
                    placeholder="**********"
                  />
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
