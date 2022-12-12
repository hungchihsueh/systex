import React, { useState } from "react";

const AddGroup = () => {
    const [step,setStep]=useState(1)
  return (
    <div>
      {/* step */}
      <div className="flex justify-center items-center gap-5">
        <div className="flex flex-col justify-start items-start">
          <div
            className={`mb-3 text-xl font-bold ${
              step == 1 ? "text-[#0075AC]" : "text-[#4F4F4F]/50"
            }`}>
            1.新增集團資料
            <span className="ml-2 font-thin text-sm">建立集團(總部)資料</span>
          </div>
          <div
            className={`w-full h-[3px] rounded-full ${
              step == 1 ? " bg-[#2291C5] " : " bg-[#4F4F4F]/50 "
            }}`}></div>
        </div>
        <div className="flex flex-col justify-start items-start">
          <div
            className={`mb-3 text-xl font-bold ${
              step == 2 ? " text-[#2291C5] " : "text-[#4F4F4F]/50"
            }`}>
            2.新增據點資料
            <span className="ml-2 font-thin text-sm">建立集團旗下據點資料</span>
          </div>
          <div
            className={`w-full h-[3px] rounded-full ${
              step == 2 ? " bg-[#2291C5] " : " bg-[#4F4F4F]/50 "
            }}`}></div>
        </div>
        <div className="flex flex-col justify-start items-start">
          <div
            className={`mb-3 text-xl font-bold ${
              step == 3 ? " text-[#2291C5] " : "text-[#4F4F4F]/50"
            }`}>
            3.新增成功
            <span className="ml-2 font-thin text-sm">建立完成</span>
          </div>
          <div
            className={`w-full h-[3px] rounded-full ${
              step == 3 ? " bg-[#2291C5] " : " bg-[#4F4F4F]/50 "
            }}`}></div>
        </div>
      </div>
      {/* form */}
      <div className="grid grid-col-3 gap-5 w-full">
        <div>
          <label htmlFor="companyName">
            <span className="text-red-500">*</span>公司名稱：
          </label>
          <input type="text" placeholder="請輸入集團公司名稱" />
        </div>
      </div>
    </div>
  );
};

export default AddGroup;
