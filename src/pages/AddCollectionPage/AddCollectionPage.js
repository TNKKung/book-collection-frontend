import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Select from "react-select";
import PageLayout from "../../components/PageLayout/PageLayout";
import "../../css/upload.css";

export default function AddCollectionPage() {
  const stateLeftBar = useSelector((state) => state.storeState.stateLeftBar);
  const options = [
    { value: "Manga", label: "Manga" },
    { value: "Course", label: "Course" },
    { value: "Fiction", label: "Fiction" },
    { value: "Religion", label: "Religion" },
    { value: "Language", label: "Language" },
    { value: "Social sciences", label: "Social sciences" },
    { value: "Literature", label: "Literature" },
    {
      value: "Natural science & mathematic",
      label: "Natural science & mathematic",
    },
    { value: "History and geography", label: "History and geography" },
  ];
  return (
    <PageLayout>
      <div
        className={`flex w-screen ${
          stateLeftBar ? "ml-96" : "ml-80"
        }  transition-all duration-500 mt-44`}
      >
        <div className="flex bg-white max-w-6xl w-full rounded-lg">
          <div className="flex flex-row text-black">
            <div className="flex flex-col w-screen max-w-lg items-center justify-center text-black text-xl">
              <div className="mb-5">
                upload images
              </div>
              <div className="border-4 border-yellow-400 rounded-full">
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
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-screen max-w-lg text-black justify-center items-center mt-7 mb-5">
            <div className="flex flex-row items-center w-full max-w-lg text-xl mb-3">
              <div className="flex flex-col justify-center w-44">
                <div className="h-14 flex items-center">Name Of Book :</div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="h-14 flex items-center w-72">
                  <input
                    className="w-72 h-11 p-2 rounded-md border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                    id="input-instagram"
                    type="text"
                    placeholder={"name"}
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
                  <Select
                    className="basic-single w-72 border-2 border-gray-300 rounded-md"
                    isLoading={true}
                    isClearable={true}
                    isSearchable={true}
                    defaultValue={options[0]}
                    options={options}
                    name="color"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center w-full max-w-lg text-xl mb-3">
              <div className="flex flex-col justify-center w-44">
                <div className="h-14 flex items-center">Owner :</div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="h-14 flex items-center w-72">
                  <input
                    className="w-72 h-11 p-2 rounded-md border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                    id="input-instagram"
                    type="text"
                    placeholder={"Owner"}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center w-full max-w-lg text-xl mb-3">
              <div className="flex flex-col justify-center w-44">
                <div className="h-14 flex items-center">email :</div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="h-14 flex items-center w-72">
                  <input
                    className="w-72 h-11 p-2 rounded-md border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                    id="input-instagram"
                    type="text"
                    placeholder={"email"}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center w-full max-w-lg text-xl mb-3">
              <div className="flex flex-col justify-center w-44">
                <div className="h-14 flex items-center">Tell :</div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="h-14 flex items-center w-72">
                  <input
                    className="w-72 h-11 p-2 rounded-md border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                    id="input-instagram"
                    type="text"
                    placeholder={"Tell"}
                  />
                </div>
              </div>
            </div>
            <Link>
              <div className="flex items-center justify-center bg-green-500 hover:bg-green-600 w-44 h-14 rounded-xl text-xl text-black mt-2 ml-4">
                add collection
              </div>
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
