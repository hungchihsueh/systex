import React from "react";

const Announcement = () => {
  return (
    <div className="bg-white h-full w-full overflow-y-scroll">
      <div className="flex justify-start items-start w-full h-1/2 border border-black">
        <div className="w-2/3 h-full bg-pink-200">123</div>
        <div className="w-1/3 h-full bg-blue-300">456</div>
      </div>
      <div className="flex justify-start items-start w-full h-1/2 border border-black">
        <div className="w-2/3 h-full">15323</div>
        <div className="w-1/3 h-full">45345346</div>
      </div>
    </div>
  );
};

export default Announcement;
