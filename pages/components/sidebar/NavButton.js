import React from "react";
import Image from "next/image";
const NavButton = ({ name, img, isActive }) => {
  return (
    <div className="mb-16">
      <button
        className={
          isActive
            ? `text-[#4DA7B0] bg-#E5F9F5 rounded-full text-2xl font-medium w-full flex items-center`
            : `text-white text-2xl font-medium w-full flex items-center`
        }>
              <span><Image src={`/nav-img/${img}`} width="44" height="44" alt="" className={isActive?`mr-4`:`mr-4 brightness-[1000]`}></Image></span>
        <span>{name}</span>
      </button>
    </div>
  );
};

export default NavButton;
