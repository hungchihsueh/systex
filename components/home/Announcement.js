import React from "react";
import CarbInfoCard from "./CarbInfoCard";
const Announcement = () => {
  return (
    <div className=" h-full w-full overflow-y-scroll">
      <div className="mb-8 flex justify-start items-start w-full min-h-[470px] h-1/2  gap-6">
        <div className="w-2/3 h-full bg-white rounded-3xl">123444453</div>
        <div className="w-1/3 h-full bg-white rounded-3xl">456</div>
      </div>
      <div className="flex justify-start items-start gap-3 w-full h-1/2 ">
        <div className="w-1/2 h-full">
          <div className="text-[#467980] text-2xl font-medium mb-4">
            國外碳資訊
          </div>
          <div className="w-full h-fit">
            <CarbInfoCard />
            <CarbInfoCard />
            <CarbInfoCard />
          </div>
        </div>
        <div className="w-1/2 h-full">
          <div className="text-[#467980] text-2xl font-medium mb-4">
            國內碳資訊
          </div>
          <div className="w-full h-fit">
            <CarbInfoCard />
            <CarbInfoCard />
            <CarbInfoCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
