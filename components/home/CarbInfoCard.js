import React from 'react'
import Image from 'next/image'
const CarbInfoCard = () => {
  return (
    <div className="w-full bg-white p-[15px] rounded-3xl flex justify-start items-start gap-5 mb-3">
      <Image width={80} height={80} className="rounded-lg object-cover" src="/demo/card-pic.png" alt="" />
      <div>
        <div className="text-[#467980] text-md font-bold mb-2">
          Africa Climate Week 2022 Builds Important Regional Momentum for
          Climate Action ahead of COP27
        </div>
        <div className="flex justify-start items-center">
          <Image height={20} width={20} src="/icon/Label.svg" alt="" />
          <span
            className="text-[#464C80]/50">
            111-11-1發布
          </span>
        </div>
      </div>
    </div>
  );
}

export default CarbInfoCard