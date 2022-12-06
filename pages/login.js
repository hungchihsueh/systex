import React from 'react'
import Image from 'next/image'
import logoColor from "../public/login/logo-color.webp"
import mainPic from "../public/login/main-pic.webp"
import green from "../public/login/智慧綠能.webp"
const login = () => {
  return (
    <div className=" px-[6%] pt-[30px] bg-[#F3FFFD] h-screen w-screen overflow-hidden relative">
      {/* bottom gradient */}
      <div className="absolute -left-10 -bottom-10 w-96 h-48 rounded-full blur-[150px] bg-[#6ECECA]"></div>
      {/* top gradient */}
      <div className="absolute right-24 -top-10 w-96 h-48 rounded-full blur-[150px] bg-[#6ECECA]"></div>
      <Image
        src={mainPic}
        alt=""
        className="w-11/12 min-w-[1000px] max-w-[1350px] fixed bottom-0 right-0 z-10"
      />
      <div className="flex justify-between items-start w-full">
        <Image src={logoColor} alt="" className="w-32 z-10" />
        <Image src={green} alt="" className=" w-24 z-10" />
      </div>
      {/* login form */}
      <div className=" px-14 py-12 bg-white/70 backdrop-blur-md w-1/3 min-w-[400px] max-w-[500px]  rounded-lg absolute top-32 left-[6%] z-20 flex flex-col justify-start items-start">
        <div className="text-3xl font-bold text-[#467980] mb-12">
          Welcom Back!
        </div>
        <label
          className="mb-3 font-bold text-[#467980] text-2xl"
          htmlFor="account">
          帳號
        </label>
        <input
          placeholder="請輸入使用者帳號"
          type="text"
          name="account"
          id="account"
          className="w-full py-4 px-3 mb-9 rounded-md border border-[#ACC2C1] placeholder:text-[#ACC2C1]"
        />
        <label
          className="mb-3 font-bold text-[#467980] text-2xl"
          htmlFor="password">
          密碼
        </label>
        <input
          placeholder="請輸入您的密碼"
          type="password"
          name="password"
          id="password"
          className="w-full py-4 px-3 mb-9 rounded-md border border-[#ACC2C1] placeholder:text-[#ACC2C1]"
        />
        <button className="w-full p-4 bg-gradient-to-b from-[#63C2CF] to-[#199694] font-bold text-white text-2xl rounded-md">
          登入
        </button>
      </div>
    </div>
  );
}

export default login