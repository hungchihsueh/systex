import React from "react";
import Image from "next/image";
const CatTitle = ({ text }) => {
  return (
    <div className=" col-span-8 text-white bg-[#2291C5] border border-white p-2 text-center flex justify-center items-center font-bold">
      {text}
    </div>
  );
};
const ItemTitle = ({ text, spanCount, isOdd }) => {
  return (
    <div
      className={`col-span-${spanCount} text-[#005E8A] ${
        isOdd ? "bg-[#A9D6EB]" : "bg-[#86C1DD]"
      } border border-white p-2 flex justify-center items-center font-bold`}>
      {text}
    </div>
  );
};
const ItemTitles = [
  {
    name: "範疇別",
    span: 1,
  },
  {
    name: "排放源類別",
    span: 1,
  },
  {
    name: "設備名稱",
    span: 1,
  },
  {
    name: "原物料名稱",
    span: 1,
  },
  {
    name: "數量",
    span: 1,
  },
  {
    name: "單位",
    span: 1,
  },
  {
    name: "溫室氣體排放量(公噸CO2e)",
    span: 2,
  },
];
const Cell = ({ data, spanCount }) => {
  return (
    <div className={` col-span-${spanCount} bg-[#A3A5BF1A] border border-white p-2  flex justify-center items-center`}>
     {data}
    </div>
  );
};
const cells = [
  {
    data: "範疇一",
    span: 1,
  },
  {
    data: "逸散源",
    span: 1,
  },
  {
    data: "空調設備",
    span: 1,
  },
  {
    data: "R32",
    span: 1,
  },
  {
    data: "2610",
    span: 1,
  },
  {
    data: "2610",
    span: 1,
  },
  {
    data: "2.438",
    span: 2,
  },
];
const InventoryList = () => {
  return (
    <div>
      <div className="flex justify-between items-start mb-6">
        <div className=" w-full text-2xl font-black text-[#467980]">
          清冊(ISO 14064-1 2006)
        </div>
      </div>
      <div className="w-full mb-3 flex justify-between items-start">
        <div>
          <div className="text-base font-bold text-[#467980] mb-3">
            排放程序單
          </div>
          <div className="text-base text-[#467980]">
            公司據點名稱 : 精誠資訊股份有限公司台中分公司
          </div>
        </div>
        <div>
          <div className="mb-2 flex justify-between items-center gap-5">
            <div className="flex justify-start items-center gap-2">
              <label
                htmlFor="export"
                className="bg-[#BDBDBD] rounded-xl py-1 px-2 text-sm text-white">
                匯出方式
              </label>
              <select name="export" id="export" className="text-[#828282]">
                <option value="">請選擇方式</option>
              </select>
            </div>
            <button className="text-sm rounded-xl py-2 px-5 bg-[#0075AC] text-white flex gap-1">
              <Image width={20} height={20} alt="" src={"/icon/export.svg"} />{" "}
              匯出
            </button>
          </div>
          <div className="text-[#828282] text-base">
            盤查起訖時間:2021-01-01~2021-12-31
          </div>
        </div>
      </div>
      <div className="grid grid-cols-[repeat(8,_1fr)]">
        <CatTitle text="排放清冊" />
        {ItemTitles.map((item, i) => {
          return (
            <ItemTitle
              key={item.name}
              text={item.name}
              spanCount={item.span}
              isOdd={i % 2 != 0}
            />
          );
        })}
        {cells.map((cell, i) => {
          return (
            <Cell
              key={`${cell.name}_${i}`}
              data={cell.data}
              spanCount={cell.span}
            />
          );
        })}
      </div>
    </div>
  );
};

export default InventoryList;
