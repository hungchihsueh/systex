import React from 'react'
import Image from 'next/image'
const NavLists = ({ list,isActive }) => {
     
  return (
      <div className={isActive?'my-5 pl-5 flex flex-col items-start':"hidden"}>
          {
              list.map(item => {
                  return (
                    <button
                      className={
                        item.isActive
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
  )
}

export default NavLists