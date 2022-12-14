import React, { useContext } from "react";
import { DashboardContext } from "../pages";
import Announcement from "../components/home/Announcement";
import Analysis from "../components/home/Analysis"
import Manage from "../components/basic-setting/Manage";
import Inventory from "../components/basic-setting/Inventory";
import Coefficent from "../components/basic-setting/Coefficient"
import IdentificationOfEmissionSources from "../components/fill-setting/IdentificationOfEmissionSources"
import MaterialityIdentification from "../components/fill-setting/MaterialityIdentification";
const MainComponent = () => {
  const { activeTab, activeItem } = useContext(DashboardContext);
  return (
    <div className="w-full h-full overflow-y-scroll rounded-xl bg-white/90 p-4">
      {activeTab == "首頁" && activeItem == 0 && <Announcement />}
      {activeTab == "首頁" && activeItem == 1 && <Analysis />}
      {activeTab == "基本設定" && activeItem == 0 && <Manage />}
      {activeTab == "基本設定" && activeItem == 1 && <Inventory />}
      {activeTab == "基本設定" && activeItem == 2 && <Coefficent />}
      {activeTab == "填報設定" && activeItem == 0 && (
        <IdentificationOfEmissionSources />
      )}
      {activeTab == "填報設定" && activeItem == 1&& (
        <MaterialityIdentification />
      )}
      {activeTab == "填報設定" && activeItem == 2&& (
        <MaterialityIdentification />
      )}
      {activeTab == "填報設定" && activeItem == 3&& (
        <MaterialityIdentification />
      )}
      {activeTab == "填報設定" && activeItem == 4&& (
        <MaterialityIdentification />
      )}
      {activeTab == "填報設定" && activeItem == 5&& (
        <MaterialityIdentification />
      )}
      {activeTab == "填報設定" && activeItem == 6&& (
        <MaterialityIdentification />
      )}
      {activeTab == "填報設定" && activeItem == 7&& (
        <MaterialityIdentification />
      )}
    </div>
  );
};

export default MainComponent;
