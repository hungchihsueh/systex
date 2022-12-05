import React, { useState } from "react";
import NavButton from "./sidebar/NavButton";
import NavLists from "./sidebar/NavLists";
import Image from "next/image";
const SideBar = () => {
    const [activeTab, setActiveTab] = useState("首頁");
    const [homeList, setHomeList] = useState([
      { name: "媒體公告", img: "媒體公告.svg", isActive: true },
      { name: "數據分析", img: "數據分析.svg", isActive: false },
    ]);
     const [basicList, setBasicList] = useState([
       {
         name: "集團管理設定",
         img: "集團管理設定.svg",
         isActive: true,
       },
       {
         name: "盤查據點管理",
         img: "盤查據點管理.svg",
         isActive: false,
       },
       {
         name: "係數管理設定",
         img: "係數管理設定.svg",
         isActive: false,
       },
     ]);
     const [fillList, setFillList] = useState([
       {
         name: "排放源鑑別",
         img: "排放源鑑別.svg",
         isActive: true,
       },
       {
         name: "重大性鑑別",
         img: "重大性鑑別.svg",
         isActive: false,
       },
       {
         name: "類別一",
         img: "類別一.svg",
         isActive: false,
       },
       {
         name: "類別二",
         img: "類別二.svg",
         isActive: false,
       },
       {
         name: "類別三",
         img: "類別三.svg",
         isActive: false,
       },
       {
         name: "類別四",
         img: "類別四.svg",
         isActive: false,
       },
       {
         name: "類別五",
         img: "類別五.svg",
         isActive: false,
       },
       {
         name: "類別六",
         img: "類別六.svg",
         isActive: false,
       },
     ]);
  const handleNavButtonClick = (e) => {
    console.log(e);
    setActiveTab(e);
  };
  return (
    <div className="bg-[#4DA7B0] w-1/5 min-w-[276px] h-full pl-6 py-9 rounded-3xl overflow-y-scroll">
      <div className="text-white text-center font-bold mb-10">LOGO</div>
      <div className="grid grid-cols-1 h-4/5">
        <NavButton
          name="首頁"
          img="首頁.svg"
          isActive={activeTab == "首頁"}
          handleNavButtonClick={handleNavButtonClick}
        />
        <NavLists list={homeList} isActive={activeTab == "首頁"} />
        <NavButton
          name="基本設定"
          img="基本設定.svg"
          isActive={activeTab == "基本設定"}
          handleNavButtonClick={handleNavButtonClick}
        />
        <NavLists list={basicList} isActive={activeTab == "基本設定"} />
        <NavButton
          name="填報設定"
          img="填報手冊.svg"
          isActive={activeTab == "填報設定"}
          handleNavButtonClick={handleNavButtonClick}
        />
        <NavLists list={fillList} isActive={activeTab == "填報設定"} />
        <NavButton
          name="程序清冊"
          img="程序清冊.svg"
          isActive={activeTab == "程序清冊"}
          handleNavButtonClick={handleNavButtonClick}
        />
        <NavButton
          name="權限管理"
          img="權限管理.svg"
          isActive={activeTab == "權限管理"}
          handleNavButtonClick={handleNavButtonClick}
        />
      <button className="py-10">
        <Image src="/nav-img/logout.svg" alt="" height="24" width="24"></Image>
      </button>
      </div>
    </div>
  );
};

export default SideBar;
