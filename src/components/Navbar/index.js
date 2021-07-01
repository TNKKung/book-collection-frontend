import React from "react";
import { Link } from "react-router-dom";
import IMGProfile from "../../Images/profile.jpg";
import Menu from "./component/Menu";
export default function Index() {
  return (
    <div className="text-black">
      <div class="flex flex-col bg-gray-300 w-64 h-screen px-4 tex-gray-900 border border-gray-900">
        <div class="flex flex-wrap mt-8">
          <div class="w-1/2">
            <img
              src={IMGProfile}
              class="mx-auto w-20 h-20 rounded-full"
              alt="IMG"
            />
          </div>
          <div class="w-1/2">
            <span class="font-semibold text-black">TNKung</span>
            <button class="bg-green-500 text-white px-4 py-2 rounded-md border border-blue-500 hover:bg-white hover:text-green-500">
              Premium
            </button>
          </div>
        </div>
        <div class="mt-10 mb-4">
          <div class="ml-4">
            <Menu Path="/login" Name="My Store" />
            <Menu Path="/login" Name="Settings" />
            <div class="mt-10 px-4 py-4 flex flex-row  border-gray-300 hover:text-black   hover:bg-red-500   hover:font-bold rounded-lg">
              <Link to="">
                <span class="ml-2">Logout</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
