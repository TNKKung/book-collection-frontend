import React from "react";
import Navbar from "../../components/Navbar/index";
import SearchBar from "../../components/SearchBar/SearchBar";
import DisplayCollection from "../../components/DisplayCollection/index";
import PictureBook1 from "./component/images.jpg";
import PictureBook2 from "./component/images2.jpg";
import PictureBook3 from "./component/images3.jpg";
import PictureBook4 from "./component/images4.jpg";
import PictureBook5 from "./component/images5.jpg";
import PictureBook6 from "./component/images6.jpg";
import PictureBook7 from "./component/images7.jpg";
import PictureBook8 from "./component/images8.jpg";
import { Link } from "react-router-dom";
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
      name: "KIMETSU NO YAIBA VOLUME 4",
      picture: PictureBook4,
    },
    {
      name: "KIMETSU NO YAIBA VOLUME 5",
      picture: PictureBook5,
    },
    {
      name: "KIMETSU NO YAIBA VOLUME 6",
      picture: PictureBook6,
    },
    {
      name: "KIMETSU NO YAIBA VOLUME 7",
      picture: PictureBook7,
    },
    {
      name: "KIMETSU NO YAIBA VOLUME 8",
      picture: PictureBook8,
    },
  ];

  return (
    <div>
      <div className="float-left fixed">
        <div className="float-left">
          <Navbar />
        </div>
      </div>
      <div className="">
        <div className="fixed right-8">
          <SearchBar />
          <div className="mt-96">
            <Link className="justify-center flex ">
              <button className="bg-green-500 w-full h-14 mt-40 rounded-lg hover:bg-green-700">
                Add To The Collection
              </button>
            </Link>
            <Link className="justify-center flex ">
              <button className="bg-green-500 w-full h-14 mt-5 rounded-lg hover:bg-green-700">
                Add To The Store
              </button>
            </Link>
          </div>
        </div>
        <div className="mr-20">
          {Data.map((item) => {
            return (
              <DisplayCollection Picture={item.picture} Name={item.name} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
