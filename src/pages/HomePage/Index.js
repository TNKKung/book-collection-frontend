import React from "react";
import Navbar from "../../components/Navbar/index";
import SearchBar from "../../components/SearchBar/SearchBar";
import DisplayCollection from "../../components/DisplayCollection/Index";
import PictureBook1 from "./component/images.jpg";
import PictureBook2 from "./component/images2.jpg";
import PictureBook3 from "./component/images3.jpg";
import PictureBook4 from "./component/images4.jpg";
import PictureBook5 from "./component/images5.jpg";
import PictureBook6 from "./component/images6.jpg";
import PictureBook7 from "./component/images7.jpg";
import PictureBook8 from "./component/images8.jpg";
import pictureLayout from "./component/layout.png";

export default function Index() {
  const Data = [
    {
      bookTitle: "KIMETSU NO YAIBA VOLUME 1",
      picture: PictureBook1,
      userName: "Nattawut Krongareetham",
      MobileNumber: "0640630406",
      Email: "tomkabtokom@gmail.com",
    },
    {
      bookTitle: "KIMETSU NO YAIBA VOLUME 2",
      picture: PictureBook2,
      userName: "Nattawut Krongareetham",
      MobileNumber: "0640630406",
      Email: "tomkabtokom@gmail.com",
    },
    {
      bookTitle: "KIMETSU NO YAIBA VOLUME 3",
      picture: PictureBook3,
      userName: "Nattawut Krongareetham",
      MobileNumber: "0640630406",
      Email: "tomkabtokom@gmail.com",
    },
    {
      bookTitle: "KIMETSU NO YAIBA VOLUME 4",
      picture: PictureBook4,
      userName: "Nattawut Krongareetham",
      MobileNumber: "0640630406",
      Email: "tomkabtokom@gmail.com",
    },
    {
      bookTitle: "KIMETSU NO YAIBA VOLUME 5",
      picture: PictureBook5,
      userName: "Nattawut Krongareetham",
      MobileNumber: "0640630406",
      Email: "tomkabtokom@gmail.com",
    },
    {
      bookTitle: "KIMETSU NO YAIBA VOLUME 6",
      picture: PictureBook6,
      userName: "Nattawut Krongareetham",
      MobileNumber: "0640630406",
      Email: "tomkabtokom@gmail.com",
    },
    {
      bookTitle: "KIMETSU NO YAIBA VOLUME 7",
      picture: PictureBook7,
      userName: "Nattawut Krongareetham",
      MobileNumber: "0640630406",
      Email: "tomkabtokom@gmail.com",
    },
    {
      bookTitle: "KIMETSU NO YAIBA VOLUME 8",
      picture: PictureBook8,
      userName: "Nattawut Krongareetham",
      MobileNumber: "0640630406",
      Email: "tomkabtokom@gmail.com",
    },
  ];

  return (
    <div className="">
      <div className="fixed object-left top-0 z-10">
        <div className="">
          <Navbar />
        </div>
      </div>
      <div className="fixed flex flex-row bg-gray-300 w-full top-0 h-16">
        <div className="ml-20 mt-1">
          <SearchBar />
        </div>
        <div className="ml-96">
          <div className="hover:bg-gray-500 items-center justify-center flex mt-2 h-12 w-12 rounded-lg ml-10">
            <img src={pictureLayout} width="36" alt="IMG" />
          </div>
        </div>
      </div>
      <div className="object-center mr-40 space-y-4 mt-20">
        {Data.map((item) => {
          return (
            <div className="ml-64 grid grid-cols-3 gap-4 bg-gray-600 w-10">
              tell
            </div>
          );
        })}
      </div>
    </div>
  );
}
