import React from "react";
import NavButton from "./sidebar/NavButton";
import Image from "next/image";
const SideBar = () => {
  return (
    <div className="bg-gradient-to-b from-[#63C2CF] to-[#199694] w-1/5 min-w-[276px] h-full px-6 py-9 rounded-3xl">
      <div className="text-white text-center font-bold mb-20">LOGO</div>
      <div className="flex flex-col justify-start items-start">
        <NavButton name="首頁" img="首頁.svg" />
        <NavButton name="基本設定" img="基本設定.svg" />
        <NavButton name="填報設定" img="填報手冊.svg" />
        <NavButton name="程序清冊" img="程序清冊.svg" />
        <NavButton name="權限管理" img="權限管理.svg" />
          </div>
          <Image src="" alt="" ></Image>
    </div>
  );
};

export default SideBar;
