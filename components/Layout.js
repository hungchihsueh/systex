import React from "react";
import SideBar from "./SideBar";
import HeadBar from "./HeadBar";

const Layout = ({ children }) => {
  return (
    <div className="w-full h-screen p-5 flex justify-center items-start gap-3 bg-[#E5F9F5]">
      <SideBar />
      <div className="w-4/5 max-w-[1500px] h-full flex flex-col justify-start items-start gap-8 relative">
        <HeadBar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
