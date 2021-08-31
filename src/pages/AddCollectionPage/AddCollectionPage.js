import React from "react";
import { useSelector } from "react-redux";
import PageLayout from "../../components/PageLayout/PageLayout";
import "../../css/upload.css";

export default function AddCollectionPage() {
  const stateLeftBar = useSelector((state) => state.storeState.stateLeftBar);
  return (
    <PageLayout>
      <div
        className={`flex w-screen ${
          stateLeftBar ? "ml-96" : "ml-80"
        }  transition-all duration-500 mt-44`}
      >
        <div className="flex bg-yellow-200 max-w-6xl w-full rounded-lg">
          <div className="flex flex-row text-black">
            <div className="flex w-screen max-w-lg items-center justify-center">
              <div className="border-4 border-yellow-400 rounded-full mt-10 mb-10 ">
                <div class="wrapper">
                  <div class="file-upload">
                    <input type="file" />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-24 w-24 text-black"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-screen max-w-lg text-black justify-center items-center mt-4">
            <div className="flex flex-row items-center w-full max-w-lg text-xl mb-3">
              <div className="flex flex-col justify-center w-44">
                <div className="h-14 flex items-center">Name Of Book :</div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="h-14 flex items-center w-72">
                  <input
                    className="w-72 h-14 p-2 pl-10 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                    id="input-instagram"
                    type="text"
                    placeholder={"demon slayer"}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center w-full max-w-lg text-xl mb-3">
              <div className="flex flex-col justify-center w-44">
                <div className="h-14 flex items-center">Name Of Book :</div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="h-14 flex items-center w-72">
                  <input
                    className="w-72 h-14 p-2 pl-10 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                    id="input-instagram"
                    type="text"
                    placeholder={"demon slayer"}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center w-full max-w-lg text-xl mb-3">
              <div className="flex flex-col justify-center w-44">
                <div className="h-14 flex items-center">Name Of Book :</div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="h-14 flex items-center w-72">
                  <input
                    className="w-72 h-14 p-2 pl-10 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                    id="input-instagram"
                    type="text"
                    placeholder={"demon slayer"}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center w-full max-w-lg text-xl mb-3">
              <div className="flex flex-col justify-center w-44">
                <div className="h-14 flex items-center">Name Of Book :</div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="h-14 flex items-center w-72">
                  <input
                    className="w-72 h-14 p-2 pl-10 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                    id="input-instagram"
                    type="text"
                    placeholder={"demon slayer"}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center w-full max-w-lg text-xl mb-3">
              <div className="flex flex-col justify-center w-44">
                <div className="h-14 flex items-center">Name Of Book :</div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="h-14 flex items-center w-72">
                  <input
                    className="w-72 h-14 p-2 pl-10 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                    id="input-instagram"
                    type="text"
                    placeholder={"demon slayer"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
