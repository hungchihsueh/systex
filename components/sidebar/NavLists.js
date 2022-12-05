import React, { useContext } from 'react'
import { DashboardContext } from '../../pages';
import Image from 'next/image'
const NavLists = ({ list,isActive }) => {
     const { activeItem, setActiveItem } = useContext(DashboardContext);
  return (
    <div
      className={
        isActive
          ? "my-5 pl-5 flex flex-col items-start h-[147px] max-h-[fit-content]  overflow-y-scroll"
          : "hidden"
      }>
      {list.map((item,i) => {
        return (
          <button
            onClick={() => setActiveItem(i)}
            className={
              activeItem==i
                ? "flex justify-start items-center text-white mb-4 py-1 border-b border-white"
                : "flex justify-start items-center text-white mb-4 py-1 border-b border-transparent hover:border-white"
            }
            key={item.name}>
            <Image
              className="mr-4"
              width={24}
              height={24}
              src={`/nav-img/${item.img}`}
              alt=""
            />
            {item.name}
          </button>
        );
      })}
    </div>
  );
}

export default NavLists