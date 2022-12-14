import React, { useState } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
const Coefficient = () => {
  // state
  const [version, setVersion] = useState("");
  const [category, setCategory] = useState("");
  const [activeTab, setActiveTab] = useState(0); //tab index
  // data grid
  const [cols, setCols] = useState([]);
  const [rows, setRows] = useState([]);
  const tabs = [
    { img: "/icon/gwp-co2.svg", text: "GWP" },
    { img: "/icon/car-exaust.svg", text: "固定與移動放源" },
    { img: "/icon/leaf.svg", text: "逸散排放源" },
    { img: "/icon/factory.svg", text: "製程排放源" },
    { img: "/icon/co2-foot.svg", text: "其他" },
  ];
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div className=" w-full text-2xl font-black text-[#467980]">
          係數管理設定
        </div>
      </div>
      <div className="mb-8 w-full flex justify-between items-center flex-wrap">
        <div className="w-full flex flex-wrap justify-start items-center gap-1 lg:gap-3">
          <div className=" flex items-center justify-center gap-1">
            <label
              htmlFor="year"
              className="text-md text-[#467980] font-medium whitespace-nowrap">
              係數名稱:
            </label>
            <input
              type="text"
              name="year"
              id="year"
              placeholder="請輸入係數代碼 "
              className=" h-9 px-3 py-2  border border-[#4DA7B0] rounded-lg"
            />
          </div>
          <div className=" flex items-center justify-center gap-1">
            <label
              htmlFor="version"
              className="text-md text-[#467980] font-medium whitespace-nowrap">
              係數版本:
            </label>
            <select
              onChange={(e) => {
                setVersion(e.target.value);
              }}
              name="version"
              id="version"
              className={`h-9 p-2 border border-[#4DA7B0] rounded-lg ${
                version === "" && "text-[#BDBDBD]"
              }`}>
              <option value="">請選擇係數版本</option>
              <option value="AR4">AR4</option>
              <option value="AR5">AR5</option>
            </select>
          </div>
          <div className=" flex items-center justify-center gap-1">
            <label
              htmlFor="industry"
              className="text-md text-[#467980] font-medium whitespace-nowrap">
              係數類別:
            </label>
            <select
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              name="version"
              id="version"
              className={`h-9 p-2 border border-[#4DA7B0] rounded-lg ${
                category === "" && "text-[#BDBDBD]"
              }`}>
              <option value="">請選擇係數類別</option>
              <option value="GWP">GWP</option>
              <option value="固定與移動放源">固定與移動放源</option>
              <option value="逸散排放源">逸散排放源</option>
              <option value="其他 ">其他 </option>
            </select>
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
          </div>
        </div>
      </div>
      <div className="flex justify-start items-center">
        {tabs.map((tab, i) => {
          return (
            <>
              <button
                onClick={() => {
                  setActiveTab(i);
                }}
                className={`py-2 px-8 flex justify-center items-center gap-1 border-b-2 transition-all duration-300  ${
                  activeTab === i
                    ? "bg-[#EBFFFD] border-[#23AFA4]"
                    : "bg-transparent border-transparent"
                }`}>
                <Image
                  width={24}
                  height={24}
                  alt=""
                  src={tab.img}
                  className={"transition-all duration-300"}
                />
                <div
                  className={`text-lg transition-all duration-300 ${
                    activeTab === i
                      ? "font-bold text-[#23AFA4]"
                      : "text-[#ACC2C1]"
                  }`}>
                  {tab.text}
                </div>
              </button>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Coefficient;
