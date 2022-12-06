import React, { useContext } from "react";
import { DashboardContext } from "../pages";
import Announcement from "../components/home/Announcement";
import Analysis from "../components/home/Analysis"
import Coefficent from "../components/basic-setting/Coefficient"
import Inventory from "../components/basic-setting/Inventory";
import Manage from "../components/basic-setting/Manage";
const MainComponent = () => {
  const { activeTab, activeItem } = useContext(DashboardContext);
  return (
    <>
      {activeTab == "首頁" && activeItem == 0 && <Announcement />}
      {activeTab == "首頁" && activeItem == 1 && <Analysis />}
      {activeTab == "基本設定" && activeItem == 0 && <Manage />}
      {activeTab == "基本設定" && activeItem == 1 && <Inventory />}
      {activeTab == "基本設定" && activeItem == 2 && <Coefficent />}
    </>
  );
};

export default MainComponent;
