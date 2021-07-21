import React from "react";
import { Link } from "react-router-dom";

export default function WeeklyRankingBar(){
    return(
        <div className="bg-gray-300 fixed right-0 top-14 mt-2 z-0 w-1/6 h-full">
        <div className="bg-gray-800 flex items-center justify-center h-16">
          <div className="font-bold text-sm text-yellow-300">
            WEEKLY CARTOON RANKINGS
          </div>
        </div>
        <div className="flex justify-center mt-3 mb-4">
          <div className=" text-base">
            <Link className="hover:underline">
              <div>1.Demon Slayer</div>
            </Link>
            <Link className="hover:underline">
              <div>2.One Piece</div>
            </Link>
            <Link className="hover:underline">
              <div>3.Black Clover</div>
            </Link>
          </div>
        </div>
        <div className="bg-gray-800 flex items-center justify-center h-16 mt-3">
          <div className="font-bold text-sm text-yellow-300">
            WEEKLY BOOK CATEGORY RANKINGS
          </div>
        </div>
        <div className="flex justify-center mt-3 mb-4">
          <div className="space-y-3 text-base">
            <Link className="hover:underline">
              <div>1.Comic</div>
            </Link>
            <Link className="hover:underline">
              <div>2.Course</div>
            </Link>
            <Link className="hover:underline">
              <div>3.Fiction</div>
            </Link>
          </div>
        </div>
        <div className="bg-gray-800 flex items-center justify-center h-16 mt-3">
          <div className="font-bold text-sm text-yellow-300">
            All Categories
          </div>
        </div>
        <div className="flex justify-center mt-3 mb-4">
          <div className="space-y-3 text-base">
            <Link className="hover:underline">
              <div>Philosophy & psychology</div>
            </Link>
            <Link className="hover:underline">
              <div>Religion</div>
            </Link>
            <Link className="hover:underline">
              <div>Social sciences</div>
            </Link>
            <Link className="hover:underline">
              <div>Language</div>
            </Link>
            <Link className="hover:underline">
              <div>Natural science & mathematic</div>
            </Link>
            <Link className="hover:underline">
              <div>Technology (Applied Sciences</div>
            </Link>
            <Link className="hover:underline">
              <div>Literature & rhetoric</div>
            </Link>
            <Link className="hover:underline">
              <div>Literature</div>
            </Link>
            <Link className="hover:underline">
              <div>History and geography</div>
            </Link>
            <Link className="hover:underline">
              <div>Comic</div>
            </Link>
          </div>
        </div>
      </div>
    );
}