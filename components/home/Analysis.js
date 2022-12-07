import React from 'react'

const Analysis = () => {
  return (
    <div className="h-full w-full overflow-y-scroll">
      <div className="mb-24 flex justify-start items-start w-full min-h-[470px] h-1/2  gap-6">
        <div className="w-3/5 h-full">
          <div className="mb-4 text-[#467980] text-2xl font-black">
            年度趨勢
          </div>
          <div className="h-full bg-white rounded-3xl">123444453</div>
        </div>
        <div className="w-2/5 h-full">
          <div className="mb-4 text-[#467980] text-2xl font-black">
            年度差異
          </div>
          <div className="h-full bg-white rounded-3xl">123444453</div>
        </div>
      </div>
      <div className="flex justify-start items-start w-full min-h-[470px] h-1/2  gap-6">
        <div className="w-3/5 h-full">
          <div className="mb-4 text-[#467980] text-2xl font-black">
            當年度月份量比
          </div>
          <div className="h-full bg-white rounded-3xl">123444453</div>
        </div>
        <div className="w-2/5 h-full">
          <div className="mb-4 text-[#467980] text-2xl font-black">
            年度總排量比例
          </div>
          <div className="h-full bg-white rounded-3xl">123444453</div>
        </div>
      </div>
    </div>
  );
}

export default Analysis