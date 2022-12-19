import React, { useState } from "react";
import Image from "next/image";
const Ad = () => {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div>
      <div className="flex justify-between items-start mb-8">
        <div className=" w-full text-2xl font-black text-[#467980]">
          消息管理設定
        </div>
      </div>
      <div className="flex justify-start items-center mb-12">
        <label htmlFor="adCount" className="mr-2">
          首頁最多顯示廣告:
        </label>
        <input
          placeholder="請輸入個數"
          type="number"
          min="0"
          id="adCount"
          name="adCount"
          className="border border-[#4DA7B0] rounded-lg py-2 px-3 mr-5"
        />
        <label htmlFor="second" className="mr-2">
          更換秒數:
        </label>
        <input
          placeholder="請輸入秒數"
          type="number"
          min="0"
          id="second"
          name="second"
          className="border border-[#4DA7B0] rounded-lg py-2 px-3 mr-5"
        />
        <button className="flex justify-center items-center rounded-lg py-2 px-5 gap-1 bg-[#333333] font-semibold text-white">
          <Image alt="" width={20} height={20} src={"/icon/tool.svg"} />
          輪播設定
        </button>
      </div>
      <div className="flex justify-between items-center mb-4">
        <div className="font-semibold">
          <span className="text-[#EB5757]">*</span>首頁Banner
        </div>
        <div className="flex justify-center items-center gap-1">
          <button className="flex justify-center items-center text-white font-semibold py-2 px-5 rounded-lg bg-[#F58500]">
            <Image width={20} height={20} alt="" src={"/icon/sort.svg"} />
            排序設定
          </button>
          <button className="flex justify-center items-center text-white font-semibold py-2 px-5 rounded-lg bg-[#EB5757]">
            <Image width={20} height={20} alt="" src={"/icon/delete.svg"} />
            批量刪除
          </button>
          <button className="flex justify-center items-center text-white font-semibold py-2 px-5 rounded-lg bg-[#0075AC]">
            <Image width={20} height={20} alt="" src={"/icon/add.svg"} />
            新增項目
          </button>
        </div>
      </div>
      <div className="w-full grid grid-cols-[repeat(2,1fr)_2fr_repeat(3,1fr)]">
        <div className="bg-[#23AFA4] p-3 text-white font-bold border border-white text-center">
          輪播排序
        </div>
        <div className="bg-[#289D9B] p-3 text-white font-bold border border-white text-center">
          名稱檔名
        </div>
        <div className="bg-[#23AFA4] p-3 text-white font-bold border border-white text-center">
          預覽圖
        </div>
        <div className="bg-[#289D9B] p-3 text-white font-bold border border-white text-center">
          超連結
        </div>
        <div className="bg-[#23AFA4] p-3 text-white font-bold border border-white text-center">
          使用狀態
        </div>
        <div className="bg-[#289D9B] p-3 text-white font-bold border border-white text-center">
          操作
        </div>
        <div className="flex justify-center items-center p-3 border border-white bg-[#A3A5BF1A]">
          <input
            type="number"
            value={1}
            className="w-1/2 aspect-square rounded-md"
            style={{ apperance: "textfield" }}
          />
        </div>
        <div className="flex justify-center items-center p-3 border border-white bg-[#A3A5BF1A]">
          檔案名稱 1
        </div>
        <div className="flex justify-center items-center p-3 border border-white bg-[#A3A5BF1A]">
          <div className="w-full aspect-video bg-gray-600"></div>
        </div>
        <div className="flex justify-center items-center p-3 border border-white bg-[#A3A5BF1A]">
          https://modao.cc/app/Hj2u6hCYrkck93hvclgZj#screen=sl9p8yjp5muno3t
        </div>
        <div className="flex justify-center items-center p-3 border border-white bg-[#A3A5BF1A]">
          上架
        </div>
        <div className="flex justify-center items-center p-3 border border-white bg-[#A3A5BF1A]">
          <button
            className="bg-[#0075AC] p-1 rounded-md"
            onClick={() => {
              setIsEdit(true);
            }}>
            <Image width={20} height={20} src={"/icon/edit.svg"} alt="" />
          </button>
        </div>
      </div>

      {/* popup */}
      <div className="w-screen h-screen bg-black/50 fixed top-0 left-0 grid place-content-center">
        <div className="w-[50vw] h-[50vh] bg-white rounded-lg">
          <div className="py-4 px-6 text-[#333] text-xl font-bold border-b border-[#E0E0E0]">
            新增消息
          </div>
          <div className="py-5 px-6 w-full grid grid-cols-2 gap-6">
            <div>
              <label htmlFor="" className="block font-bold text-[#333] mb-2">
                <span className="text-[#EB5757]">*</span>名稱檔名：
              </label>
              <input
                type="text"
                name=""
                id=""
                className="block p-2 border border-[#4DA7B0] rounded-lg w-full"
              />
            </div>
            <div>
              <label htmlFor="" className="block font-bold text-[#333] mb-2">
                <span className="text-[#EB5757]">*</span>使用狀態：
              </label>
              <input
                type="text"
                name=""
                id=""
                className="block p-2 border border-[#4DA7B0] rounded-lg w-full"
              />
            </div>
            <div>
              <label htmlFor="" className="block font-bold text-[#333] mb-2">
                跳轉連結：
              </label>
              <input
                type="text"
                name=""
                id=""
                className="block p-2 border border-[#4DA7B0] rounded-lg w-full"
              />
            </div>
            <div>
              <label htmlFor="" className="block font-bold text-[#333] mb-2">
                連結開啟：
              </label>
              <input
                type="text"
                name=""
                id=""
                className="block p-2 border border-[#4DA7B0] rounded-lg w-full"
              />
            </div>
            <div>
              <label htmlFor="" className="block font-bold text-[#333] mb-2">
                <span className="text-[#EB5757]">*</span>圖片上傳：
              </label>
              <input
                type="file"
                name=""
                id=""
                className="block p-2 border border-[#4DA7B0] rounded-lg w-full"
              />
            </div>
            <button className="self-end w-fit h-fit flex justify-center items-center rounded-lg text-white font-semibold py-2 px-5 bg-[#575979]">
              <Image
                alt=""
                width={20}
                height={20}
                src={"/icon/doc-upload.svg"}
                className="brightness-200 mr-2"
              />
              點擊上傳
            </button>
          </div>
          <div className="w-full flex justify-center items-center gap-6">
            <button className="border border-[#23AFA4] text-[#23AFA4] font-semibold rounded-lg px-8 py-2">
              取消
            </button>
            <button className="border border-transparent bg-[#23AFA4] text-white font-semibold rounded-lg px-8 py-2">
              確認
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ad;
