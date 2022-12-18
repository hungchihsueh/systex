import React, { useState } from "react";
import Image from "next/image";
const Role = () => {
  const [isViewing, setIsViewing] = useState(false);
  const roles = [
    {
      name: "檢視人員",
      info: "系統默認角色,可操作選單列表(除權限管理),僅供檢視查看,不可新增、修改、刪除",
    },
    {
      name: "填報人員",
      info: "系統默認角色,可操作選單列表(除權限管理),可查看、新增、修改、刪除",
    },
    {
      name: "系統管理者",
      info: "系統默認角色,可操作所有選單列表,可查看、新增、修改、刪除",
    },
  ];
  const [role, setRole] = useState(0);
  return (
    <div>
      {isViewing ? (
        <div className="w-full">
          <div className="flex justify-between items-start mb-8">
            <div className=" w-full text-2xl font-black text-[#467980]">
              角色管理-{roles[role].name}
            </div>
          </div>
          <div className="mb-3 text-xl text-[#467980] font-bold">角色資料</div>
          <div className="grid grid-cols-[1fr_3fr] mb-7">
            <div className="py-2 px-8 font-bold text-white text-xl bg-[#23AFA4] border border-white">
              角色名稱
            </div>
            <div className="py-2 px-8 font-bold text-white text-xl bg-[#289D9B] border border-white">
              角色說明
            </div>
            <div className="py-2 px-8  text-base bg-[#A3A5BF1A] border border-white">
              {roles[role].name}
            </div>
            <div className="py-2 px-8  text-base bg-[#A3A5BF1A] border border-white">
              {roles[role].info}
            </div>
          </div>
          <div className="w-full h-px bg-[#ACC2C1] my-7"></div>
          <div className="mb-3 text-xl text-[#467980] font-bold">權限列表</div>
          <div className="py-2 px-8 text-white text-xl font-bold bg-[#23AFA4] border border-white">
            功能操作
          </div>
          <div className="py-2 px-8 bg-[#A3A5BF1A] flex justify-start items-center gap-5">
            <div className="flex justify-center items-center gap-2">
              <input
                type="checkbox"
                name="view"
                id="view"
                className="h-4 w-4 rounded-sm border border-[#ACC2C1]  checked:bg-[#23AFA4]"
              />
              <label htmlFor="add">檢視列表</label>
            </div>
            <div className="flex justify-center items-center gap-2">
              <input
                type="checkbox"
                name="visearchew"
                id="search"
                className="h-4 w-4 rounded-sm border border-[#ACC2C1]  checked:bg-[#23AFA4]"
              />
              <label htmlFor="view">搜尋</label>
            </div>
            <div className="flex justify-center items-center gap-2">
              <input
                type="checkbox"
                name="add"
                id="add"
                className="h-4 w-4 rounded-sm border border-[#ACC2C1]  checked:bg-[#23AFA4]"
              />
              <label htmlFor="view">新增</label>
            </div>
            <div className="flex justify-center items-center gap-2">
              <div className="flex justify-center items-center gap-2">
                <input
                  type="checkbox"
                  name="edit"
                  id="edit"
                  className="h-4 w-4 rounded-sm border border-[#ACC2C1]  checked:bg-[#23AFA4]"
                />
                <label htmlFor="edit">編輯</label>
              </div>
            </div>
            <div className="flex justify-center items-center gap-2">
              <div className="flex justify-center items-center gap-2">
                <input
                  type="checkbox"
                  name="delete"
                  id="delete"
                  className="h-4 w-4 rounded-sm border border-[#ACC2C1]  checked:bg-[#23AFA4]"
                />
                <label htmlFor="delete">刪除</label>
              </div>
            </div>
          </div>
          <div className="w-full h-px bg-[#ACC2C1] my-7"></div>
          <div className="mb-3 text-xl text-[#467980] font-bold">選單列表</div>
          <div className="grid gird-cols-[1fr_2.5fr]">
            <div className="py-2 px-8 col-span-2 text-white text-xl font-bold bg-[#23AFA4] border border-white">
              權限可檢視操作列表:
            </div>
            <div className="py-2 px-8 text-[#4F4F4F] bg-[#A3A5BF1A] font-bold border border-white">
              主選單
            </div>
            <div className="py-2 px-8 text-[#4F4F4F] bg-[#A3A5BF1A] font-bold border border-white">
              次選單
            </div>
            <div className="py-2 px-8 text-[#4F4F4F] bg-[#A3A5BF1A]  border border-white">
              功能選單
            </div>
            <div className="py-2 px-8 text-[#4F4F4F] bg-[#A3A5BF1A]  border border-white">
              首頁
            </div>
            <div className="py-2 px-8 text-[#4F4F4F] bg-[#A3A5BF1A]  border border-white">
              基本設定
            </div>
            <div className="py-2 px-8 text-[#4F4F4F] bg-[#A3A5BF1A]  border border-white">
              盤查據點管理
            </div>
            <div className="py-2 px-8 text-[#4F4F4F] bg-[#A3A5BF1A]  border border-white">
              填報設定
            </div>
            <div className="py-2 px-8 text-[#4F4F4F] bg-[#A3A5BF1A]  border border-white">
              填報基準 排放源鑑別 重大性艦別 類別一 類別二 類別三 類別四 類別五
              類別六
            </div>
            <div className="py-2 px-8 text-[#4F4F4F] bg-[#A3A5BF1A]  border border-white">
              權限管理
            </div>
            <div className="py-2 px-8 text-[#4F4F4F] bg-[#A3A5BF1A]  border border-white">
              角色管理
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <button className=" mt-10 border border-[#23AFA4] py-2 px-8 rounded-lg text-[#23AFA4] font-semibold" onClick={()=>{setIsViewing(false)}}>
              取消
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex justify-between items-start mb-6">
            <div className=" w-full text-2xl font-black text-[#467980]">
              角色管理
            </div>
          </div>
          <div className="w-full flex justify-between items-center mb-10">
            <div className="flex justify-start items-center">
              <label
                htmlFor="account"
                className="text-base text-[#467980] mr-1">
                系統帳號：
              </label>
              <input
                type="text"
                placeholder="請輸入帳號"
                id="account"
                name="account"
                className="p-2 border border-[#4DA7B0] rounded-lg mr-5"
              />
              <button className="flex justify-center items-center rounded-lg text-white font-bold py-2 px-5 bg-[#FFC700]">
                <Image
                  width={20}
                  height={20}
                  alt=""
                  src={"/icon/search.svg"}
                  className="mr-1"
                />
                查詢
              </button>
            </div>
            <button className="flex justify-center items-center rounded-lg text-white font-bold py-2 px-5 bg-[#0075AC]">
              <Image
                width={20}
                height={20}
                alt=""
                src={"/icon/add.svg"}
                className="mr-1"
              />
              新增
            </button>
          </div>
          <div className="grid grid-cols-[1fr_2.5fr_1fr]">
            <div className="p-3 text-xl font-bold text-center text-white bg-[#23AFA4] border border-white">
              角色名稱
            </div>
            <div className="p-3 text-xl font-bold text-center text-white bg-[#289D9B] border border-white">
              角色說明
            </div>
            <div className="p-3 text-xl font-bold text-center text-white bg-[#23AFA4] border border-white">
              設定
            </div>
            {/* 檢視人員 */}
            <div className="text-center p-7 bg-[#A3A5BF1A] border border-white">
              檢視人員
            </div>
            <div className=" p-7 bg-[#A3A5BF1A] border border-white">
              系統默認角色,可操作選單列表(除權限管理),僅供檢視查看,不可新增、修改、刪除
            </div>
            <div className="text-center p-6 bg-[#A3A5BF1A] border border-white ">
              <button
                className="bg-[#828282] rounded-md p-2"
                onClick={() => {
                  setIsViewing(true);
                  setRole(0);
                }}>
                <Image
                  width={20}
                  height={20}
                  src={"/icon/white-eyes.svg"}
                  alt=""
                />
              </button>
            </div>
            {/* 填報人員 */}
            <div className="text-[#333333] text-center p-7 bg-[#A3A5BF1A] border border-white">
              填報人員
            </div>
            <div className="text-[#333333]  p-7 bg-[#A3A5BF1A] border border-white">
              系統默認角色,可操作選單列表(除權限管理),可查看、新增、修改、刪除{" "}
            </div>
            <div className="text-[#333333] text-center p-6 bg-[#A3A5BF1A] border border-white ">
              <button
                className="bg-[#828282] rounded-md p-2"
                onClick={() => {
                  setIsViewing(true);
                  setRole(1);
                }}>
                <Image
                  width={20}
                  height={20}
                  src={"/icon/white-eyes.svg"}
                  alt=""
                />
              </button>
            </div>
            {/* 系統管理者 */}
            <div className="text-center p-7 bg-[#A3A5BF1A] border border-white">
              系統管理者
            </div>
            <div className="text-[#333333]  p-7 bg-[#A3A5BF1A] border border-white">
              系統默認角色,可操作所有選單列表,可查看、新增、修改、刪除{" "}
            </div>
            <div className="text-[#333333] text-center p-6 bg-[#A3A5BF1A] border border-white ">
              <button
                className="text-[#333333] bg-[#828282] rounded-md p-2"
                onClick={() => {
                  setIsViewing(true);
                  setRole(2);
                }}>
                <Image
                  width={20}
                  height={20}
                  src={"/icon/white-eyes.svg"}
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* sda */}
    </div>
  );
};

export default Role;
