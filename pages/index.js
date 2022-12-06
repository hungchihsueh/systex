import { createContext, useEffect, useState } from "react";
import Layout from "../components/Layout";
import SideBar from "../components/SideBar";
import HeadBar from "../components/HeadBar";
import MainComponent from "../components/MainComponent"

export const DashboardContext = createContext(null);

export default function Home() {
  const [activeTab, setActiveTab] = useState("首頁");
  const [activeItem, setActiveItem] = useState(0);
  useEffect(() => {
  setActiveItem(0);
}, [activeTab]);
  return (
    <DashboardContext.Provider
      value={{
        activeTab,
        setActiveTab,
        activeItem,
        setActiveItem,
      }}>
      <Layout>   
            <MainComponent />  
      </Layout>
    </DashboardContext.Provider>
  );
}
