import React from "react";
import Image from "next/image";
const manage = () => {
  return (
    <div className="w-full h-full rounded-xl bg-white/90 p-7">
      <div className="mb-6 w-full text-2xl font-black text-[#467980]">
        集團管理設計
      </div>
      <div className="mb-8 w-full flex justify-between items-center flex-wrap">
        <div className="w-full flex flex-wrap justify-start items-center gap-1 lg:gap-3">
          <div className=" ">
            <label
              htmlFor="year"
              className="text-md text-[#467980] font-medium whitespace-nowrap">
              盤查年度：
            </label>
            <input
              type="text"
              name="year"
              id="year"
              placeholder="請輸入公司名稱"
              className=" px-3 py-2  border border-[#4DA7B0] rounded-lg"
            />
          </div>
          <div className="">
            <label
              htmlFor="taxID"
              className="text-md text-[#467980] font-medium whitespace-nowrap">
              公司統編：
            </label>
            <input
              type="text"
              name="taxID"
              id="taxID"
              placeholder="請輸入統一編號"
              className=" px-3 py-2 border border-[#4DA7B0] rounded-lg"
            />
          </div>
          <div className="">
            <label
              htmlFor="industry"
              className="text-md text-[#467980] font-medium whitespace-nowrap">
              產業別：
            </label>
            <input
              type="text"
              name="industry"
              id="industry"
              placeholder="請輸入產業關鍵字"
              className=" px-3 py-2  border border-[#4DA7B0] rounded-lg"
            />
          </div>
          <div className="flex justify-start items-center gap-1">
            <button className="flex justify-center items-center rounded-xl bg-[#FFC700] text-white text-md font-medium py-2 px-5 whitespace-nowrap">
              <Image
                width={20}
                height={20}
                alt=""
                src="/icon/search.svg"
                className="mr-2"
              />
              查詢
            </button>
            <button className="flex justify-center items-center rounded-xl bg-[#0075AC] text-white text-md font-medium py-2 px-5">
              <Image
                width={20}
                height={20}
                alt=""
                src="/icon/add.svg"
                className="mr-2"
              />
              新增
            </button>
          </div>
        </div>
      </div>
      {/* table */}
      
      {/* table */}
    </div>
  );
};

export default manage;
