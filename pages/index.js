import { createContext, useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import HeadBar from "../components/HeadBar";
import Announcement from "../components/home/announcement";

export const DashboardContext = createContext(null);

export default function Home() {
  const [activeTab, setActiveTab] = useState("首頁");
  const [activeItem, setActiveItem] = useState(0);
  useEffect(() => {
  setActiveItem(0);
}, [activeTab]);
  useEffect(() => {
  }, [activeItem]);
  return (
    <DashboardContext.Provider
      value={{
        activeTab,
        setActiveTab,
        activeItem,
        setActiveItem,
      }}>
      <div className="mx-auto w-full max-w-[1900px] h-screen bg-[#E5F9F5] p-5 flex justify-start items-start gap-5">
        <SideBar />
        <div className="w-full h-full flex flex-col justify-start items-start gap-8">
          <HeadBar />
        </div>
      </div>
    </DashboardContext.Provider>
  );
}
