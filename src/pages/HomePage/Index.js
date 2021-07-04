import React from "react";
import Navbar from "../../components/Navbar/index";
import SearchBar from "../../components/SearchBar/SearchBar";
import PictureBook1 from "./component/images.jpg";
import PictureBook2 from "./component/images2.jpg";
import PictureBook3 from "./component/images3.jpg";
export default function Index() {
  const Data = [
    {
      name: "KIMETSU NO YAIBA VOLUME 1",
      picture: PictureBook1,
    },
    {
      name: "KIMETSU NO YAIBA VOLUME 2",
      picture: PictureBook2,
    },
    {
      name: "KIMETSU NO YAIBA VOLUME 3",
      picture: PictureBook3,
    },
    {
      name: "KIMETSU NO YAIBA VOLUME 3",
      picture: PictureBook3,
    },
    {
      name: "KIMETSU NO YAIBA VOLUME 3",
      picture: PictureBook3,
    },
    {
      name: "KIMETSU NO YAIBA VOLUME 3",
      picture: PictureBook3,
    },
    {
      name: "KIMETSU NO YAIBA VOLUME 3",
      picture: PictureBook3,
    },
    {
      name: "KIMETSU NO YAIBA VOLUME 3",
      picture: PictureBook3,
    },
    {
      name: "KIMETSU NO YAIBA VOLUME 3",
      picture: PictureBook3,
    },
  ];

  return (
    <div>
      <div className="float-left fixed">
        <Navbar />
      </div>
      <div className="ml-60">
        <SearchBar></SearchBar>
        {Data.map((item) => {
          return (
            <div class="mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-5">
              <div class="md:flex">
                <div class="md:flex-shrink-0">
                  <img
                    class="h-48 w-ful md:w-52"
                    src={item.picture}
                    width="1"
                    alt="IMG"
                  />
                </div>
                <div class="p-8">
                  <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    {item.name}
                  </div>
                  <div
                    href="#"
                    class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                  ></div>
                  <div class="mt-2 text-gray-500"></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
