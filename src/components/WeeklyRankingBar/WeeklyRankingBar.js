import React from "react";

export default function WeeklyRankingBar() {
  return (
    <div className="hidden xl:block bg-white fixed right-0 top-14 mt-2 z-0 w-64 h-full border-l-2 border-yellow-200">
      <div className="bg-yellow-100 flex items-center justify-center h-16">
        <div className="font-bold text-lg text-black">
          WEEKLY MANGA RANKINGS
        </div>
      </div>
      <div className="flex justify-center text-black mt-3 mb-4">
        <div className=" text-base">
          <div className="hover:underline">
            <div>1.Demon Slayer</div>
          </div>
          <div className="hover:underline">
            <div>2.One Piece</div>
          </div>
          <div className="hover:underline">
            <div>3.Black Clover</div>
          </div>
        </div>
      </div>
      <div className="bg-yellow-100 flex items-center justify-center h-16 mt-3">
        <div className="font-bold text-lg text-center text-black">
          WEEKLY CATEGORY RANKINGS
        </div>
      </div>
      <div className="flex justify-center text-black mt-3 mb-4">
        <div className="space-y-3 text-base">
          <div className="hover:underline">
            <div>1.manga</div>
          </div>
          <div className="hover:underline">
            <div>2.Course</div>
          </div>
          <div className="hover:underline">
            <div>3.Fiction</div>
          </div>
        </div>
      </div>
      <div className="bg-yellow-100 flex items-center justify-center h-16 mt-3">
        <div className="font-bold text-lg text-black">All Categories</div>
      </div>
      <div className="flex justify-center text-black mt-3 mb-4">
        <div className="space-y-3 text-base">
          <div className="hover:underline">
            <div>Philosophy & psychology</div>
          </div>
          <div className="hover:underline">
            <div>Religion</div>
          </div>
          <div className="hover:underline">
            <div>Social sciences</div>
          </div>
          <div className="hover:underline">
            <div>Language</div>
          </div>
          <div className="hover:underline">
            <div>Natural science & mathematic</div>
          </div>
          <div className="hover:underline">
            <div>Technology (Applied Sciences</div>
          </div>
          <div className="hover:underline">
            <div>Literature & rhetoric</div>
          </div>
          <div className="hover:underline">
            <div>Literature</div>
          </div>
          <div className="hover:underline">
            <div>History and geography</div>
          </div>
          <div className="hover:underline">
            <div>Manga</div>
          </div>
        </div>
      </div>
    </div>
  );
}
