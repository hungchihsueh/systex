import React from "react";
import NavButton from "./sidebar/NavButton";
import Image from "next/image";
const SideBar = () => {
    return (
    <div className="bg-[#4DA7B0] w-1/5 min-w-[276px] h-full pl-6 py-9 rounded-3xl">
      <div className="text-white text-center font-bold mb-20">LOGO</div>
      <div className="grid grid-cols-1 grid-rows-5 h-4/5">
        <NavButton name="首頁" img="首頁.svg" isActive={true} />
        <NavButton name="基本設定" img="基本設定.svg" />
        <NavButton name="填報設定" img="填報手冊.svg" />
        <NavButton name="程序清冊" img="程序清冊.svg" />
        <NavButton name="權限管理" img="權限管理.svg" />
      </div>
      <button>
        <Image src="/nav-img/logout.svg" alt="" height="24" width="24"></Image>
      </button>
    </div>
  );
};

export default SideBar;
