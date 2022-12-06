import React, { useContext, useState } from "react";
import { DashboardContext } from "../pages";
import NavButton from "./sidebar/NavButton";
import NavLists from "./sidebar/NavLists";
import Image from "next/image";
const SideBar = () => {
  const { activeTab } = useContext(DashboardContext);
  const [homeList, setHomeList] = useState([
    { name: "媒體公告", img: "媒體公告.svg"},
    { name: "數據分析", img: "數據分析.svg"},
  ]);
  const [basicList, setBasicList] = useState([
    {
      name: "集團管理設定",
      img: "集團管理設定.svg",

    },
    {
      name: "盤查據點管理",
      img: "盤查據點管理.svg",
 
    },
    {
      name: "係數管理設定",
      img: "係數管理設定.svg",
  
    },
  ]);
  const [fillList, setFillList] = useState([
    {
      name: "排放源鑑別",
      img: "排放源鑑別.svg",
    },
    {
      name: "重大性鑑別",
      img: "重大性鑑別.svg",
     
    },
    {
      name: "類別一",
      img: "類別一.svg",
    
    },
    {
      name: "類別二",
      img: "類別二.svg",
     
    },
    {
      name: "類別三",
      img: "類別三.svg",
 
    },
    {
      name: "類別四",
      img: "類別四.svg",

    },
    {
      name: "類別五",
      img: "類別五.svg",
     
    },
    {
      name: "類別六",
      img: "類別六.svg",

    },
  ]);
  const [programList, setProgramList] = useState([
    {
      name: "14064-1 2006",
      img: "doc.svg",
    
    },
    {
      name: "14064-1 2018",
      img: "doc.svg",

    },
    {
      name: "環保署清冊",
      img: "calendar.svg",
 
    },
  ]);
  const [authList, setAuthList] = useState([
    { name: "角色管理", img: "角色管理.svg",},
    { name: "帳號管理", img: "帳號管理.svg",  },
  ]);
  const [messageList, setMessageList] = useState([
    { name: "廣告管理設定", img: "廣告管理設定.svg", },
    { name: "最新消息設定", img: "最新消息設定.svg",},
  ]);
  return (
    <div className="sidebar bg-[#4DA7B0] w-1/5 max-w-[300px] min-w-[276px] h-[calc(100vh-40px)] pl-6 py-9 rounded-3xl overflow-y-scroll sticky top-5">
      <div className="text-white text-center font-bold mb-10">LOGO</div>
      <div className="grid grid-cols-1 h-4/5">
        <NavButton
          name="首頁"
          img="首頁.svg"
          isActive={activeTab == "首頁"}
        />
        <NavLists list={homeList} isActive={activeTab == "首頁"} />
        <NavButton
          name="基本設定"
          img="基本設定.svg"
          isActive={activeTab == "基本設定"}
        />
        <NavLists list={basicList} isActive={activeTab == "基本設定"} />
        <NavButton
          name="填報設定"
          img="填報手冊.svg"
          isActive={activeTab == "填報設定"}

        />
        <NavLists list={fillList} isActive={activeTab == "填報設定"} />
        <NavButton
          name="程序清冊"
          img="程序清冊.svg"
          isActive={activeTab == "程序清冊"}

        />
        <NavLists list={programList} isActive={activeTab == "程序清冊"} />
        <NavButton
          name="權限管理"
          img="權限管理.svg"
          isActive={activeTab == "權限管理"}

        />
        <NavLists list={authList} isActive={activeTab == "權限管理"} />
        <NavButton
          name="消息管理"
          img="消息管理.svg"
          isActive={activeTab == "消息管理"}

        />
        <NavLists list={messageList} isActive={activeTab == "消息管理"} />
        <button className=" pt-5 pb-10">
          <Image
            src="/nav-img/logout.svg"
            alt=""
            height="24"
            width="24"></Image>
        </button>
      </div>
    </div>
  );
};

export default SideBar;
