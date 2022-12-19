import React, { useState } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
const Coefficient = () => {
  // state
  const [version, setVersion] = useState("");
  const [category, setCategory] = useState("");
  const [activeTab, setActiveTab] = useState(0); //tab index
  const tabs = [
    { img: "/icon/gwp-co2.svg", text: "GWP" },
    { img: "/icon/car-exaust.svg", text: "固定與移動放源" },
    { img: "/icon/leaf.svg", text: "逸散排放源" },
    { img: "/icon/factory.svg", text: "製程排放源" },
    { img: "/icon/co2-foot.svg", text: "其他" },
  ];
  // data grid
  const tables = [
    {
      columns: [
        {
          field: "versionName",
          headerName: "版本名稱",
          headerClassName: "dataGrid-header-odd",
          headerAlign: "center",
          flex: 1.5,
          // wid1000th: 300,
        },
        {
          field: "date",
          headerName: "生效日期",
          headerClassName: "dataGrid-header-even",
          headerAlign: "center",
          flex: 1,
          // width: 300,
        },
        {
          field: "versionNo",
          headerName: "版本號",
          headerClassName: "dataGrid-header-odd",
          headerAlign: "center",
          flex: 1,
          // width: 300,
        },
        {
          field: "versionStatus",
          headerName: "版本狀態",
          headerClassName: "dataGrid-header-even",
          headerAlign: "center",
          flex: 1,
          // width: 300,
        },
        {
          field: "publishStatus",
          headerName: "發行狀態",
          headerClassName: "dataGrid-header-odd",
          headerAlign: "center",
          flex: 1,
          // width: 300,
        },
        {
          field: "setting",
          headerName: "設定",
          headerClassName: "dataGrid-header-even",
          headerAlign: "center",
          flex: 1,
          renderCell: (val) => {
            return (
              <div className="w-full h-full overflow-y-scroll flex justify-center items-center ">
                <button className="bg-[#828282] rounded-lg p-1">
                  <Image
                    width={24}
                    height={24}
                    alt=""
                    src={"/icon/white-eyes.svg"}
                  />
                </button>
              </div>
            );
          },
          // width: 300
        },
      ],
      rows: [
        {
          id: 1,
          versionName: "AR6 (2021)",
          date: "2021/01/01",
          versionNo: "1",
          versionStatus: "啟用",
          publishStatus: "已發行",
          setting: 1,
        },
      ],
    },
    {
      columns: [
        {
          field: "name",
          headerName: "原燃物料名稱",
          headerClassName: "dataGrid-header-odd",
          headerAlign: "center",
          flex: 1.5,
          // wid1000th: 300,
        },
        {
          field: "form",
          headerName: "排放原型式",
          headerClassName: "dataGrid-header-even",
          headerAlign: "center",
          flex: 1,
          // width: 300,
        },
        {
          field: "source",
          headerName: "係數來源",
          headerClassName: "dataGrid-header-odd",
          headerAlign: "center",
          flex: 1,
          // width: 300,
        },
        {
          field: "area",
          headerName: "區域",
          headerClassName: "dataGrid-header-even",
          headerAlign: "center",
          flex: 1,
          // width: 300,
        },
        {
          field: "startDate",
          headerName: "適用起始日",
          headerClassName: "dataGrid-header-odd",
          headerAlign: "center",
          flex: 1,
          // width: 300,
        },
        {
          field: "versionNo",
          headerName: "版本號",
          headerClassName: "dataGrid-header-even",
          headerAlign: "center",
          flex: 1,
          // width: 300,
        },
        {
          field: "status",
          headerName: "發行狀態",
          headerClassName: "dataGrid-header-odd",
          headerAlign: "center",
          flex: 1,
          // width: 300,
        },
        {
          field: "category",
          headerName: "類別",
          headerClassName: "dataGrid-header-even",
          headerAlign: "center",
          flex: 1,
          // width: 300,
        },
        {
          field: "isStop",
          headerName: "停用",
          headerClassName: "dataGrid-header-odd",
          headerAlign: "center",
          flex: 1,
          // width: 300,
        },
        {
          field: "isBio",
          headerName: "生物燃料",
          headerClassName: "dataGrid-header-even",
          headerAlign: "center",
          flex: 1,
          // width: 300,
        },
        {
          field: "setting",
          headerName: "設定",
          headerClassName: "dataGrid-header-even",
          headerAlign: "center",
          flex: 1,
          renderCell: (val) => {
            return (
              <div className="w-full h-full overflow-y-scroll flex justify-center items-center gap-1">
                <button
                  className="bg-[#0075AC] rounded-lg p-1"
                  onClick={() => {
                    setIsEditing(true);
                    console.log(val);
                  }}>
                  <Image width={24} height={24} alt="" src={"/icon/edit.svg"} />
                </button>
                <button className="bg-[#828282] rounded-lg p-1">
                  <Image
                    width={24}
                    height={24}
                    alt=""
                    src={"/icon/white-eyes.svg"}
                  />
                </button>
                <button className="bg-[#EB5757] rounded-lg p-1">
                  <Image
                    width={24}
                    height={24}
                    alt=""
                    src={"/icon/delete.svg"}
                  />
                </button>
              </div>
            );
          },
          // width: 300
        },
      ],
      rows: [
        {
          id: 1,
          name: "石油焦",
          form: "固定燃燒源",
          source: "環保署國家溫室氣體登錄平台",
          area: "台灣",
          startDate: "2019/01/01",
          versionNo: "1",
          status: "已發行",
          category: "系統",
          isStop: "否",
          isBio: "否",
          setting: 1,
        },
      ],
    },
    {
      columns: [
        {
          field: "versionName",
          headerName: "版本名稱",
          headerClassName: "dataGrid-header-odd",
          headerAlign: "center",
          flex: 1.5,
          // wid1000th: 300,
        },
        {
          field: "date",
          headerName: "生效日期",
          headerClassName: "dataGrid-header-even",
          headerAlign: "center",
          flex: 1,
          // width: 300,
        },
        {
          field: "versionNo",
          headerName: "版本號",
          headerClassName: "dataGrid-header-odd",
          headerAlign: "center",
          flex: 1,
          // width: 300,
        },
        {
          field: "versionStatus",
          headerName: "版本狀態",
          headerClassName: "dataGrid-header-even",
          headerAlign: "center",
          flex: 1,
          // width: 300,
        },
        {
          field: "publishStatus",
          headerName: "發行狀態",
          headerClassName: "dataGrid-header-odd",
          headerAlign: "center",
          flex: 1,
          // width: 300,
        },
        {
          field: "setting",
          headerName: "設定",
          headerClassName: "dataGrid-header-even",
          headerAlign: "center",
          flex: 1,
          renderCell: (val) => {
            return (
              <div className="w-full h-full overflow-y-scroll flex justify-center items-center ">
                <button className="bg-[#828282] rounded-lg p-1">
                  <Image
                    width={24}
                    height={24}
                    alt=""
                    src={"/icon/white-eyes.svg"}
                  />
                </button>
              </div>
            );
          },
          // width: 300
        },
      ],
      rows: [
        {
          id: 1,
          versionName: "AR6 (2021)",
          date: "2021/01/01",
          versionNo: "1",
          versionStatus: "啟用",
          publishStatus: "已發行",
          setting: 1,
        },
      ],
    },
    {
      columns: [
        {
          field: "versionName",
          headerName: "版本名稱",
          headerClassName: "dataGrid-header-odd",
          headerAlign: "center",
          flex: 1.5,
          // wid1000th: 300,
        },
        {
          field: "date",
          headerName: "生效日期",
          headerClassName: "dataGrid-header-even",
          headerAlign: "center",
          flex: 1,
          // width: 300,
        },
        {
          field: "versionNo",
          headerName: "版本號",
          headerClassName: "dataGrid-header-odd",
          headerAlign: "center",
          flex: 1,
          // width: 300,
        },
        {
          field: "versionStatus",
          headerName: "版本狀態",
          headerClassName: "dataGrid-header-even",
          headerAlign: "center",
          flex: 1,
          // width: 300,
        },
        {
          field: "publishStatus",
          headerName: "發行狀態",
          headerClassName: "dataGrid-header-odd",
          headerAlign: "center",
          flex: 1,
          // width: 300,
        },
        {
          field: "setting",
          headerName: "設定",
          headerClassName: "dataGrid-header-even",
          headerAlign: "center",
          flex: 1,
          renderCell: (val) => {
            return (
              <div className="w-full h-full overflow-y-scroll flex justify-center items-center ">
                <button className="bg-[#828282] rounded-lg p-1">
                  <Image
                    width={24}
                    height={24}
                    alt=""
                    src={"/icon/white-eyes.svg"}
                  />
                </button>
              </div>
            );
          },
          // width: 300
        },
      ],
      rows: [
        {
          id: 1,
          versionName: "AR6 (2021)",
          date: "2021/01/01",
          versionNo: "1",
          versionStatus: "啟用",
          publishStatus: "已發行",
          setting: 1,
        },
      ],
    },
    {
      columns: [
        {
          field: "versionName",
          headerName: "版本名稱",
          headerClassName: "dataGrid-header-odd",
          headerAlign: "center",
          flex: 1.5,
          // wid1000th: 300,
        },
        {
          field: "date",
          headerName: "生效日期",
          headerClassName: "dataGrid-header-even",
          headerAlign: "center",
          flex: 1,
          // width: 300,
        },
        {
          field: "versionNo",
          headerName: "版本號",
          headerClassName: "dataGrid-header-odd",
          headerAlign: "center",
          flex: 1,
          // width: 300,
        },
        {
          field: "versionStatus",
          headerName: "版本狀態",
          headerClassName: "dataGrid-header-even",
          headerAlign: "center",
          flex: 1,
          // width: 300,
        },
        {
          field: "publishStatus",
          headerName: "發行狀態",
          headerClassName: "dataGrid-header-odd",
          headerAlign: "center",
          flex: 1,
          // width: 300,
        },
        {
          field: "setting",
          headerName: "設定",
          headerClassName: "dataGrid-header-even",
          headerAlign: "center",
          flex: 1,
          renderCell: (val) => {
            return (
              <div className="w-full h-full overflow-y-scroll flex justify-center items-center ">
                <button className="bg-[#828282] rounded-lg p-1">
                  <Image
                    width={24}
                    height={24}
                    alt=""
                    src={"/icon/white-eyes.svg"}
                  />
                </button>
              </div>
            );
          },
          // width: 300
        },
      ],
      rows: [
        {
          id: 1,
          versionName: "AR6 (2021)",
          date: "2021/01/01",
          versionNo: "1",
          versionStatus: "啟用",
          publishStatus: "已發行",
          setting: 1,
        },
      ],
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div className=" w-full text-2xl font-black text-[#467980]">
          係數管理設定
        </div>
      </div>
      <div className="mb-8 w-full flex justify-between items-center flex-wrap">
        <div className="w-full flex flex-wrap justify-start items-center gap-1 lg:gap-3">
          <div className=" flex items-center justify-center gap-1">
            <label
              htmlFor="year"
              className="text-md text-[#467980] font-medium whitespace-nowrap">
              係數名稱:
            </label>
            <input
              type="text"
              name="year"
              id="year"
              placeholder="請輸入係數代碼 "
              className=" h-9 px-3 py-2  border border-[#4DA7B0] rounded-lg"
            />
          </div>
          <div className=" flex items-center justify-center gap-1">
            <label
              htmlFor="version"
              className="text-md text-[#467980] font-medium whitespace-nowrap">
              係數版本:
            </label>
            <select
              onChange={(e) => {
                setVersion(e.target.value);
              }}
              name="version"
              id="version"
              className={`h-9 p-2 border border-[#4DA7B0] rounded-lg ${
                version === "" && "text-[#BDBDBD]"
              }`}>
              <option value="">請選擇係數版本</option>
              <option value="AR4">AR4</option>
              <option value="AR5">AR5</option>
            </select>
          </div>
          <div className=" flex items-center justify-center gap-1">
            <label
              htmlFor="industry"
              className="text-md text-[#467980] font-medium whitespace-nowrap">
              係數類別:
            </label>
            <select
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              name="version"
              id="version"
              className={`h-9 p-2 border border-[#4DA7B0] rounded-lg ${
                category === "" && "text-[#BDBDBD]"
              }`}>
              <option value="">請選擇係數類別</option>
              <option value="GWP">GWP</option>
              <option value="固定與移動放源">固定與移動放源</option>
              <option value="逸散排放源">逸散排放源</option>
              <option value="其他 ">其他 </option>
            </select>
          </div>
          <div className="flex justify-start items-center gap-1">
            <button className="flex justify-center items-center rounded-xl bg-[#FFC700] text-white text-md font-medium py-2 px-5 whitespace-nowrap">
              <Image
                width={20}
                height={20}
                alt=""
                src="/icon/search.svg"
                className="mr-2"
              />
              查詢
            </button>
          </div>
        </div>
      </div>
      <div className="mb-4 flex justify-start items-center">
        {tabs.map((tab, i) => {
          return (
            <>
              <button
                onClick={() => {
                  setActiveTab(i);
                }}
                className={`py-2 px-8 flex justify-center items-center gap-1 border-b-2 transition-all duration-300  ${
                  activeTab === i
                    ? "bg-[#EBFFFD] border-[#23AFA4]"
                    : "bg-transparent border-transparent"
                }`}>
                <Image
                  width={24}
                  height={24}
                  alt=""
                  src={tab.img}
                  className={`transition-all duration-300 ${
                    activeTab === i
                      ? "brightness-100 saturate-100 opacity-100"
                      : "brightness-50 saturate-0 opacity-40"
                  }`}
                />
                <div
                  className={`text-lg transition-all duration-300 ${
                    activeTab === i
                      ? "font-bold text-[#23AFA4]"
                      : "text-[#ACC2C1]"
                  }`}>
                  {tab.text}
                </div>
              </button>
            </>
          );
        })}
      </div>
      {/* table */}
      <div className="flex h-full">
        <div className="flex-grow">
          <Box
            sx={{
              height: 300,
              width: "100%",
              "& .dataGrid-header-odd": {
                backgroundColor: "#23AFA4",
                color: "white",
              },
              "& .dataGrid-header-even": {
                backgroundColor: "#289D9B",
                color: "white",
              },
              "& .MuiDataGrid-columnSeparator": {
                display: "none",
              },
              "& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-cell": {
                minHeight: "100px",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
                whiteSpace: "normal",
              },
            }}>
            <DataGrid
              rows={tables[activeTab].rows}
              columns={tables[activeTab].columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              // getRowHeight={() => "auto"}
              // getEstimatedRowHeight={() => 150}
            />
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Coefficient;
