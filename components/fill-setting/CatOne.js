import React from 'react'
import Image from 'next/image';
const CatOne = () => {
  return (
    <div>
      <div className="flex justify-between items-start mb-6">
        <div className=" w-full text-2xl font-black text-[#467980]">
          排類別一:直接溫室氣體排放與移除-計量資料新增
        </div>
      </div>
      {/* accordion */}
      <div className="w-full mb-1 p-3 bg-[#4DA7B0] text-white text-base flex justify-start items-center gap-2">
        <span>1.1 固定式燃料源</span>
        <Image width={20} height={20} alt="" src={"/icon/dropdown-arrow.svg"} />
      </div>
      <div className="m-[10px] border border-[#4DA7B0] rounded-lg overflow-hidden">
        <div className="w-full py-4 px-8 border-b border-[#4DA7B0]">
          <Image />煤
        </div>
        <div className="p-7">
          <div className="mb-5 flex justify-between items-center">
            <div>
              <span className="text-red-500 mr-1">*</span>當年度使用項目
            </div>
            <div className="flex justify-center items-center gap-4 mb-5">
              <button className="py-2 px-5 rounded-lg text-white bg-[#EB5757] flex justify-center items-center gap-1 font-semibold">
                <Image width={24} height={24} alt="" src={"/icon/delete.svg"} />
                批量刪除
              </button>
              <button className="py-2 px-5 rounded-lg text-white bg-[#0075AC] flex justify-center items-center gap-1 font-semibold">
                <Image width={24} height={24} alt="" src={"/icon/add.svg"} />
                新增項目
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CatOne