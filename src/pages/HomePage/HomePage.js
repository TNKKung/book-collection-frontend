import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import SearchBar from "../../components/SearchBar/SearchBar";
import DisplayCollection from "../../components/DisplayCollection1/DisplayCollection1.js";
import DisplayCollection2 from "../../components/DisplayCollection2/DisplayCollection2.js";
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
  const [state, setState] = useState(false);

  const toggleState = () => {
    if (state === false) {
      setState(true);
    } else {
      setState(false);
    }
  };

  return (
    <div className="">
      <div className="fixed object-left top-0 z-10">
        <Navbar />
      </div>
      <div className="fixed flex flex-row justify-center bg-yellow-400 w-full top-0 h-16 focus:outline-white ml-52">
        <div className="mt-1 mr-80 w-1/4">
          <SearchBar />
        </div>
        <div className="hover:bg-gray-500 items-center justify-center flex mt-2 h-12 w-12 rounded-lg ml-10 ">
          <button>
            <img
              src={pictureLayout}
              className="w-8 focus:outline-none"
              alt="IMG"
            />
          </button>
        </div>
      </div>
      {state ? (
        <div className="object-center ml-60 space-y-4 mt-20 ">
          {Data.map((item) => {
            return (
              <DisplayCollection
                Picture={item.picture}
                BookTitle={item.bookTitle}
                User={item.userName}
                MobileNumber={item.MobileNumber}
                Email={item.Email}
              />
            );
          })}
        </div>
      ) : (
        <div className="object-center ml-60 space-y-4 mt-16 ">
          {Data.map((item) => {
            return (
              <DisplayCollection2
                Picture={item.picture}
                BookTitle={item.bookTitle}
                User={item.userName}
                MobileNumber={item.MobileNumber}
                Email={item.Email}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
