import React from 'react'
import Image from 'next/image';
const Role = () => {
  return (
    <div>
      <div className="flex justify-between items-start mb-6">
        <div className=" w-full text-2xl font-black text-[#467980]">
          清冊(ISO 14064-1 2006)
        </div>
      </div>
      <div className="w-full flex justify-between items-center mb-10">
        <div className="flex justify-start items-center">
          <label htmlFor="account" className="text-base text-[#467980] mr-1">
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
          <button className="bg-[#828282] rounded-md p-2">
            <Image width={20} height={20} src={"/icon/white-eyes.svg"} alt="" />
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
          <button className="bg-[#828282] rounded-md p-2">
            <Image width={20} height={20} src={"/icon/white-eyes.svg"} alt="" />
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
          <button className="text-[#333333] bg-[#828282] rounded-md p-2">
            <Image width={20} height={20} src={"/icon/white-eyes.svg"} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Role