import React, { useState } from "react";
import Image from "next/image";
const Account = () => {
  const [isAdding, setIsAdding] = useState(false);
  return (
    <>
      <div className={isAdding && "hidden"}>
        <div className="flex justify-between items-start mb-6">
          <div className=" w-full text-2xl font-black text-[#467980]">
            角色管理
          </div>
        </div>
        <div className="w-full flex justify-between items-center mb-10">
          <div className="flex justify-start items-center">
            <label
              htmlFor="account"
              className="text-base text-[#467980] mr-1 font-bold">
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
          <button
            className="flex justify-center items-center rounded-lg text-white font-bold py-2 px-5 bg-[#0075AC]"
            onClick={() => {
              setIsAdding(true);
            }}>
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
        <div className="w-full grid grid-cols-[repeat(3,1fr)_1.5fr_1fr]">
          <div className="p-3 text-white text-xl font-bold bg-[#23AFA4] border border-white text-center">
            系統帳號
          </div>
          <div className="p-3 text-white text-xl font-bold bg-[#289D9B] border border-white text-center">
            帳號名稱
          </div>
          <div className="p-3 text-white text-xl font-bold bg-[#23AFA4] border border-white text-center">
            角色名稱
          </div>
          <div className="p-3 text-white text-xl font-bold bg-[#289D9B] border border-white text-center">
            公司信箱
          </div>
          <div className="p-3 text-white text-xl font-bold bg-[#23AFA4] border border-white text-center">
            設定
          </div>
          <div className="p-3 bg-[#A3A5BF1A] border border-white">Mora</div>
          <div className="p-3 bg-[#A3A5BF1A] border border-white">檢視人員</div>
          <div className="p-3 bg-[#A3A5BF1A] border border-white">檢視人員</div>
          <div className="p-3 bg-[#A3A5BF1A] border border-white">
            morachou@systex.com
          </div>
          <div className="p-3 bg-[#A3A5BF1A] border border-white flex justify-center items-center gap-2">
            <button className="p-2 bg-[#0075AC] rounded-md">
              <Image width={20} height={20} alt="" src="/icon/edit.svg" />
            </button>
            <button className="p-2 bg-[#828282] rounded-md">
              <Image width={20} height={20} alt="" src="/icon/white-eyes.svg" />
            </button>
            <button className="p-2 bg-[#EB5757] rounded-md">
              <Image width={20} height={20} alt="" src="/icon/delete.svg" />
            </button>
          </div>
        </div>
      </div>
      {/* edit */}
      <div className={!isAdding && "hidden"}>
        <div className="flex justify-between items-start mb-6">
          <div className="w-full text-2xl font-black text-[#467980]">
            帳號管理-使用者帳號新增
          </div>
        </div>
        <div className="w-3/4  flex flex-col justify-center items-center my-14 mx-auto">
          <div className="font-bold text-[#0075AC] text-xl text-center mb-7">
            系統使用者帳號
          </div>
          <div className="w-full grid grid-cols-3 gap-6">
            <div className="flex flex-col justify-start items-start">
              <label htmlFor="name" className="mb-2 font-bold">
                <span className="text-[#EB5757]">*</span>使用者姓名:
              </label>
              <input
                placeholder="請輸入使用者姓名"
                type="text"
                id="name"
                name="name"
                className="w-full rounded-md border border-[#A9D6EB]"
              />
            </div>
            <div className="flex flex-col justify-start items-start">
              <label htmlFor="account" className="mb-2 font-bold">
                <span className="text-[#EB5757]">*</span>使用者帳號:
              </label>
              <input
                placeholder="請輸入使用者帳號"
                type="text"
                id="account"
                name="account"
                className="w-full rounded-md border border-[#A9D6EB]"
              />
            </div>
            <div className="flex flex-col justify-start items-start">
              <label htmlFor="password" className="mb-2 font-bold">
                <span className="text-[#EB5757]">*</span>使用者密碼:
              </label>
              <input
                placeholder="請輸入使用者密碼"
                type={"password"}
                id="password"
                name="password"
                className="w-full rounded-md border border-[#A9D6EB]"
              />
            </div>
            <div className="flex flex-col justify-start items-start">
              <label htmlFor="re-password" className="mb-2 font-bold">
                <span className="text-[#EB5757]">*</span>使用者密碼確認:
              </label>
              <input
                placeholder="請再次輸入密碼"
                type={"password"}
                id="re-password"
                name="re-password"
                className="w-full rounded-md border border-[#A9D6EB]"
              />
            </div>
            <div className="flex flex-col justify-start items-start">
              <label htmlFor="re-password" className="mb-2 font-bold">
                {/* <span className="text-[#EB5757]">*</span> */}
                使用者電子信箱:
              </label>
              <input
                placeholder="請輸入電子信箱"
                type="email"
                id="re-password"
                name="re-password"
                className="w-full rounded-md border border-[#A9D6EB]"
              />
            </div>
            <div className="flex flex-col justify-start items-start">
              <label htmlFor="manage" className="mb-2 font-bold">
                <span className="text-[#EB5757]">*</span>
                角色管理:
              </label>
              <select
                name="manage"
                id="manage"
                className="w-full rounded-md border border-[#A9D6EB]">
                <option value="">請選擇角色</option>
                <option value="檢視人員">檢視人員</option>
                <option value="填報人員">填報人員</option>
                <option value="系統管理者">系統管理者</option>
              </select>
            </div>
            <div className="flex flex-col justify-start items-start">
              <label htmlFor="ccompany" className="mb-2 font-bold">
                <span className="text-[#EB5757]">*</span>
                公司管理:
              </label>
              <select
                name="ccompany"
                id="ccompany"
                className="w-full rounded-md border border-[#A9D6EB]">
                <option value="">請選擇集團公司</option>
                <option value="精誠資訊股份有限公司">
                  精誠資訊股份有限公司
                </option>
              </select>
            </div>
            <div className="flex flex-col gap-2 justify-start items-start">
              <div htmlFor="data" className="mb-2 font-bold">
                <span className="text-[#EB5757]">*</span>
                開放據點資料:
              </div>
              <div className="flex justify-start items-start gap-2">
                <input
                  type="checkbox"
                  name="companies"
                  id="c1"
                  className="h-5 w-5 rounded-sm border border-[#ACC2C1]  checked:bg-[#23AFA4]"
                />
                <label htmlFor="c1">精誠資訊股份有限公司_內湖精誠</label>
              </div>
              <div className="flex justify-start items-start gap-2">
                <input
                  type="checkbox"
                  name="companies"
                  id="c2"
                  className="h-5 w-5 rounded-sm border border-[#ACC2C1]  checked:bg-[#23AFA4]"
                />
                <label htmlFor="c2">精誠資訊股份有限公司_台中精誠</label>
              </div>
              <div className="flex justify-start items-start gap-2">
                <input
                  type="checkbox"
                  name="companies"
                  id="c3"
                  className="h-5 w-5 rounded-sm border border-[#ACC2C1]  checked:bg-[#23AFA4]"
                />
                <label htmlFor="c3">精誠資訊股份有限公司_高雄精誠</label>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center gap-2">
          <button className="py-3 px-20 text-2xl font-bold text-[#289D9B] border-2 border-[#289D9B] rounded-lg">
            取消
          </button>
          <button className="py-3 px-20 text-2xl font-bold text-white border-2 border-transparet rounded-lg bg-gradient-to-b from-[#63C2CF] to-[#199694]">
            儲存
          </button>
        </div>
      </div>
    </>
  );
};

export default Account;
