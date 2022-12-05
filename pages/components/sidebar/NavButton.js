import React from "react";
import Image from "next/image";
const NavButton = ({
  name,
  img,
  isActive,
  handleNavButtonClick
}) => {
  return (
    <div className="relative w-full h-fit transition-all duration-300">
      {/*  active外部圓角  */}
      <div
        className={
          isActive
            ? "rounded-full w-5 h-5 bg-[#4DA7B0] absolute right-0 bottom-full z-10 "
            : "hidden"
        }></div>
      <div
        className={
          isActive
            ? "h-3 w-3 bg-[#E5F9F5] absolute right-0 bottom-full "
            : "hidden"
        }></div>
      {/*  active外部圓角  */}
      <button
        type="button"
        onClick={() => handleNavButtonClick(`${name}`)}
        className={
          isActive
            ? `text-[#4DA7B0] bg-[#E5F9F5] rounded-l-full text-2xl font-medium w-full py-3 px-2 flex items-center`
            : `text-white text-2xl font-medium w-full py-3 px-2  flex items-center transition-all duration-200`
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
      <div
        className={
          isActive
            ? "rounded-full w-5 h-5 bg-[#4DA7B0] absolute right-0 top-full z-10"
            : "hideen"
        }></div>
      <div
        className={
          isActive
            ? "h-3 w-3 bg-[#E5F9F5] absolute right-0 top-full  opacity-100"
            : "hidden"
        }></div>
      {/*  active外部圓角  */}
    </div>
  );
};

export default NavButton;
