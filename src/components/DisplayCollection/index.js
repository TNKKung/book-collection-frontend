import React, { useState } from "react";

export default function Index(prop) {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <div class="mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-2">
        <div class="md:flex ">
          <div class="md:flex-shrink-0hidden 2xl:block ">
            <img
              class="h-52 w-full md:w-52"
              src={prop.Picture}
              width="1"
              alt="IMG"
            />
          </div>
          <div class="p-8">
            <div class="uppercase tracking-wide text-lg text-indigo-500 font-mono">
              {prop.BookTitle}
            </div>
            <div className="flex flex-row">
              <div className=" text-blue-500 font-mono">Owner : </div>
              <div className="font-mono lowercase">{prop.User}</div>
            </div>
            <div className="mt-2">
              <div className="text-blue-500 font-mono">Contract</div>
              <div className="flex flex-row">
                <div className=" text-blue-500 font-mono">Phone : </div>
                <div className="font-mobo">{prop.MobileNumber}</div>
              </div>
              <button
                className="bg-red-500 text-white hover:bg-red-700 font-bold text-sm px-6 py-1 rounded shadow-lg"
                onClick={() => setShowModal(true)}
              >
                detail
              </button>
              {showModal ? (
                <div>
                  <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                          <div class="md:flex ">
                            <div class="md:flex-shrink-0hidden 2xl:block ">
                              <img
                                class="h-full w-full md:w-52"
                                src={prop.Picture}
                                width="1"
                                alt="IMG"
                              />
                            </div>
                            <div class="p-8">
                              <div class="uppercase tracking-wide text-lg text-indigo-500 font-mono">
                                {prop.BookTitle}
                              </div>
                              <div className="flex flex-row">
                                <div className=" text-blue-500 font-mono">
                                  Owner :{" "}
                                </div>
                                <div className="font-mono lowercase">
                                  {prop.User}
                                </div>
                              </div>
                              <div className="mt-2">
                                <div className="text-blue-500 font-mono">
                                  Contract
                                </div>
                                <div className="flex flex-row">
                                  <div className=" text-blue-500 font-mono">
                                    Phone :{" "}
                                  </div>
                                  <div className="font-mobo">
                                    {prop.MobileNumber}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                          <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal(false)}
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
