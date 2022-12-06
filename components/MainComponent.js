import React, { useContext } from "react";
import { DashboardContext } from "../pages";
import Announcement from "../components/home/Announcement";
import Analysis from "../components/home/Analysis"
const MainComponent = () => {
  const { activeTab, activeItem } = useContext(DashboardContext);
  return (
    <>
      {activeTab == "首頁" && activeItem == 0 && <Announcement />}
      {activeTab == "首頁" && activeItem == 1 && <Analysis />}
    </>
  );
};

export default MainComponent;
