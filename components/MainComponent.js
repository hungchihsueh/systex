import React, { useContext } from "react";
import { DashboardContext } from "../pages";
import Announcement from "../components/home/Announcement";
import Analysis from "../components/home/Analysis";
import Manage from "../components/basic-setting/Manage";
import Inventory from "../components/basic-setting/Inventory";
import Coefficent from "../components/basic-setting/Coefficient";
import IdentificationOfEmissionSources from "../components/fill-setting/IdentificationOfEmissionSources";
import MaterialityIdentification from "../components/fill-setting/MaterialityIdentification";
import CatOne from "../components/fill-setting/CatOne";
import CatTwo from "../components/fill-setting/CatTwo";
import CatThree from "../components/fill-setting/CatThree";
import CatFour from "../components/fill-setting/CatFour";
import CatFive from "../components/fill-setting/CatFive";
import CatSix from "../components/fill-setting/CatSix";
import InventoryList from "./inventory/InventoryList";
import EpaList from "./inventory/EpaList";
import Role from "./auth-setting/Role";
import Account from "./auth-setting/Account";
import Ad from "./message/Ad";
import News from "./message/News";
const MainComponent = () => {
  const { activeTab, activeItem } = useContext(DashboardContext);
  return (
    <div className="w-full h-full overflow-y-scroll rounded-xl bg-white/90 p-4 relative">
      {activeTab == "首頁" && activeItem == 0 && <Announcement />}
      {activeTab == "首頁" && activeItem == 1 && <Analysis />}
      {activeTab == "基本設定" && activeItem == 0 && <Manage />}
      {activeTab == "基本設定" && activeItem == 1 && <Inventory />}
      {activeTab == "基本設定" && activeItem == 2 && <Coefficent />}
      {activeTab == "填報設定" && activeItem == 0 && (
        <IdentificationOfEmissionSources />
      )}
      {activeTab == "填報設定" && activeItem == 1 && (
        <MaterialityIdentification />
      )}
      {activeTab == "填報設定" && activeItem === 2 && <CatOne />}
      {activeTab == "填報設定" && activeItem === 3 && <CatTwo />}
      {activeTab == "填報設定" && activeItem === 4 && <CatThree />}
      {activeTab == "填報設定" && activeItem === 5 && <CatFour />}
      {activeTab == "填報設定" && activeItem === 6 && <CatFive />}
      {activeTab == "填報設定" && activeItem === 7 && <CatSix />}
      {activeTab == "程序清冊" && activeItem !== 2 && <InventoryList />}
      {activeTab == "程序清冊" && activeItem !== 3 && <EpaList />}
      {activeTab == "權限管理" && activeItem === 0 && <Role />}
      {activeTab == "權限管理" && activeItem === 1 && <Account />}
      {activeTab == "消息管理" && activeItem === 0 && <Ad />}
      {activeTab == "消息管理" && activeItem === 1 && <News />}
    </div>
  );
};

export default MainComponent;
