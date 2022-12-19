import React, { useState } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import AddGroup from "./manage/AddGroup";
const columns = [
  {
    field: "name",
    headerName: "集團名稱",
    headerClassName: "dataGrid-header-odd",
    headerAlign: "center",
    flex: 1,
    // wid1000th: 300,
  },
  {
    field: "GUINumber",
    headerName: "統一編號",
    headerClassName: "dataGrid-header-even",
    headerAlign: "center",
    flex: 1,
    // width: 300,
  },
  {
    field: "category",
    headerName: "產業別",
    headerClassName: "dataGrid-header-odd",
    headerAlign: "center",
    flex: 1,
    // width: 300,
  },
  {
    field: "manInCharge",
    headerName: "集團負責人",
    headerClassName: "dataGrid-header-even",
    headerAlign: "center",
    flex: 1,
    // width: 300,
  },
  {
    field: "phone",
    headerName: "集團登記電話",
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
        <div className="w-full flex justify-center items-center gap-1">
          <button className="bg-[#0075AC] rounded-lg p-1"
           onClick={()=>{console.log(val)}}>
            <Image width={24} height={24} alt="" src={"/icon/edit.svg"} />
          </button>
          <button className="bg-[#EB5757] rounded-lg p-1">
            <Image width={24} height={24} alt="" src={"/icon/delete.svg"} />
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
    name: "精誠資訊股份有限公司",
    GUINumber: "97311466",
    category: "資訊整合",
    manInCharge: "林隆奮",
    phone: "(02)77201888",
setting:1
  },
  {
    id: 2,
    name: "精誠資訊股份有限公司",
    GUINumber: "97311466",
    category: "資訊整合",
    manInCharge: "林隆奮",
    phone: "(02)77201888",
setting:1
  },
];
const Manage = () => {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <div className="">
      <div className="flex justify-between items-center mb-6">
        <div className=" w-full text-2xl font-black text-[#467980]">
          集團管理設計
        </div>
      </div>
      <div className={isEditing ? "" : "hidden"}>
        <AddGroup isEditing={isEditing} setIsEditing={setIsEditing} />
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
              <button
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
              </button>
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
                "& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-cell": {
                  minHeight:"100px",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                  whiteSpace: "normal",
                },
              }}>
              <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                // getRowHeight={() => "auto"}
                // getEstimatedRowHeight={() => 150}
                // checkboxSelection
              />
            </Box>
          </div>
        </div>

        {/* <table className="w-full">
        <thead>
          <tr>
            <th className="p-2 text-white font-bold bg-[#23AFA4]">集團名稱</th>
            <th className="p-2 text-white font-bold bg-[#289D9B]">統一編號</th>
            <th className="p-2 text-white font-bold bg-[#23AFA4]">產業別</th>
            <th className="p-2 text-white font-bold bg-[#289D9B]">
              集團負責人
            </th>
            <th className="p-2 text-white font-bold bg-[#23AFA4]">
              集團登記電話
            </th>
            <th className="p-2 text-white font-bold bg-[#289D9B]">設定</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>a</td>
            <td>b</td>
            <td>c</td>
            <td>d</td>
          </tr>
        </tbody>
      </table> */}
        {/* table */}
      </div>
    </div>
  );
};

export default Manage;
