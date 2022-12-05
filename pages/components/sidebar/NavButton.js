import React from "react";
import Image from "next/image";
const NavButton = ({ name, img, isActive }) => {
  return (
    <div className="relative w-full h-fit">
      {/*  active外部圓角  */}
    <div className={isActive?"rounded-full w-5 h-5 bg-[#4DA7B0] absolute right-0 bottom-full z-10":"hidden"}></div>
      <div className={isActive?"h-3 w-3 bg-[#E5F9F5] absolute right-0 bottom-full":"hidden"}></div>
      {/*  active外部圓角  */}
      <button
        className={
          isActive
            ? `text-[#4DA7B0] bg-[#E5F9F5] rounded-l-full text-2xl font-medium w-full py-3 px-2 flex items-center before:contents:[] before:w`
            : `text-white text-2xl font-medium w-full flex items-center`
        }>
        <span>
          <Image
            src={`/nav-img/${img}`}
            width="44"
            height="44"
            alt=""
            className={isActive ? `mr-4` : `mr-4 brightness-[1000]`}></Image>
        </span>
        <span className="whitespace-nowrap">{name}</span>
      </button>
      {/*  active外部圓角  */}
      <div className={isActive?"rounded-full w-5 h-5 bg-[#4DA7B0] absolute right-0 top-full z-10":"hidden"}></div>
      <div className={isActive?"h-3 w-3 bg-[#E5F9F5] absolute right-0 top-full":"hidden"}></div>
      {/*  active外部圓角  */}
    </div>
  );
};

export default NavButton;
