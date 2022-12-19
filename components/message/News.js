import React from 'react'
import Image from 'next/image';
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

    
     let columns=[
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
      ]
let rows = [
  {
    id: 1,
    versionName: "AR6 (2021)",
    date: "2021/01/01",
    versionNo: "1",
    versionStatus: "啟用",
    publishStatus: "已發行",
    setting: 1,
  },
];
    
const News = () => {
  return (
    <div>
      <div className="flex justify-between items-start mb-8">
        <div className=" w-full text-2xl font-black text-[#467980]">
          消息管理設定
        </div>
      </div>
      <div className="w-full flex flex-col justify-start items-end">
        <div className="flex items-center text-[#467980] mb-2">
          首頁最多顯示
          <input
            type="number"
            name=""
            id=""
            placeholder="輸入個數"
            className="w-24 h-10 border border-[#4DA7B0] rounded-lg  ml-1"
          />
          ，每
          <input
            type="number"
            name=""
            id=""
            placeholder="輸入秒數"
            className="w-24 h-10 border border-[#4DA7B0] rounded-lg  mx-1 "
          />
          秒更換一次
          <button className="flex justify-center items-center rounded-lg ml-4 py-2 px-5 gap-2 bg-[#86C1DD] font-semibold text-white">
            <Image alt="" width={20} height={20} src={"/icon/tool.svg"} />
            輪播設定
          </button>
        </div>
        <div className="flex justify-start items-center">
          <button className="flex justify-center items-center rounded-lg ml-4 py-2 px-5 gap-2 bg-[#F58500] font-semibold text-white">
            <Image alt="" width={20} height={20} src={"/icon/sort.svg"} />
            排序設定
          </button>
          <button className="flex justify-center items-center rounded-lg ml-4 py-2 px-5 gap-2 bg-[#EB5757] font-semibold text-white">
            <Image alt="" width={20} height={20} src={"/icon/delete.svg"} />
            批量刪除
          </button>
          <button className="flex justify-center items-center rounded-lg ml-4 py-2 px-5 gap-2 bg-[#0075AC] font-semibold text-white">
            <Image alt="" width={20} height={20} src={"/icon/add.svg"} />
            新增項目
          </button>
        </div>
      </div>
    </div>
  );
}

export default News