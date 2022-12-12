import React, { useState } from 'react'
import Image from "next/image";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Edit from "/components/basic-setting/inventory/Edit"


const Inventory = () => {
  const [isEditing, setIsEditing] = useState(false);
  const columns = [
    {
      field: "name",
      headerName: "公司據點名稱",
      headerClassName: "dataGrid-header-odd",
      headerAlign: "center",
      flex: 1.5,
      // wid1000th: 300,
    },
    {
      field: "year",
      headerName: "盤查年度",
      headerClassName: "dataGrid-header-even",
      headerAlign: "center",
      flex: 1,
      // width: 300,
    },
    {
      field: "GUINumber",
      headerName: "公司據點統編",
      headerClassName: "dataGrid-header-odd",
      headerAlign: "center",
      flex: 1,
      // width: 300,
    },
    {
      field: "EMS",
      headerName: "EMS管制編號",
      headerClassName: "dataGrid-header-even",
      headerAlign: "center",
      flex: 1,
      // width: 300,
    },
    {
      field: "window",
      headerName: "承辦窗口人員",
      headerClassName: "dataGrid-header-odd",
      headerAlign: "center",
      flex: 1,
      // width: 300,
    },
    {
      field: "area",
      headerName: "樓地板面積",
      headerClassName: "dataGrid-header-odd",
      headerAlign: "center",
      flex: 1,
      // width: 300,
    },
    {
      field: "gwp",
      headerName: "GWP係數版本",
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
          </div>
        );
      },
      // width: 300
    },
  ];
  const rows = [
    {
      id: 1,
      name: "精誠資訊有限公司台北總公司",
      year: "2021",
      GUINumber: "97311466",
      EMS: "T1234567",
      window: "Mora",
      area: "999.9",
      gwp: "AR6 (2021)",
      setting: 1,
    },
  ];
  return (
    <div className="">
      <div className="flex justify-between items-center mb-6">
        <div className=" w-full text-2xl font-black text-[#467980]">
          {!isEditing ? "集團管理設計" : "   盤查據點管理-編輯據點填報資料"}
        </div>
      </div>
      <div className={isEditing ? "" : "hidden"}>
        <Edit isEditing={isEditing} setIsEditing={setIsEditing} />
      </div>
      <div className={isEditing ? "hidden" : ""}>
        <div className="mb-8 w-full flex justify-between items-center flex-wrap">
          <div className="w-full flex flex-wrap justify-start items-center gap-1 lg:gap-3">
            <div className=" ">
              <label
                htmlFor="year"
                className="text-md text-[#467980] font-medium whitespace-nowrap">
                盤查年度:
              </label>
              <input
                type="text"
                name="year"
                id="year"
                placeholder="請輸入公司名稱"
                className=" h-9 px-3 py-2  border border-[#4DA7B0] rounded-lg"
              />
            </div>
            <div className="">
              <label
                htmlFor="taxID"
                className="text-md text-[#467980] font-medium whitespace-nowrap">
                公司統編:
              </label>
              <input
                type="text"
                name="taxID"
                id="taxID"
                placeholder="請輸入統一編號"
                className=" h-9 px-3 py-2 border border-[#4DA7B0] rounded-lg"
              />
            </div>
            <div className="">
              <label
                htmlFor="industry"
                className="text-md text-[#467980] font-medium whitespace-nowrap">
                產業別:
              </label>
              <input
                type="text"
                name="industry"
                id="industry"
                placeholder="請輸入產業關鍵字"
                className=" h-9 px-3 py-2  border border-[#4DA7B0] rounded-lg"
              />
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
              {/* <button
                className="flex justify-center items-center rounded-xl bg-[#0075AC] text-white text-md font-medium py-2 px-5 whitespace-nowrap"
                onClick={() => {
                  setIsEditing(true);
                }}>
                <Image
                  width={20}
                  height={20}
                  alt=""
                  src="/icon/add.svg"
                  className="mr-2"
                />
                新增
              </button> */}
            </div>
          </div>
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
                "& .MuiDataGrid-cell": {
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                },
              }}>
              <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                // checkboxSelection
              />
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inventory