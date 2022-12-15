import React from 'react'
import Image from 'next/image';
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
const columns = [
  {
    field: "name",
    headerName: "排放源名稱",
    flex: 1,
    headerAlign: "center",
    headerClassName: "table-header",
  },
  {
    field: "month",
    headerName: "排放月份",
    flex: 1,
    headerAlign: "center",
    headerClassName: "table-header",
  },
  {
    field: "category",
    headerName: "燃料別",
    flex: 1,
    headerAlign: "center",
    headerClassName: "table-header",
  },
  {
    field: "usage",
    headerName: "使用量",
    flex: 1,
    headerAlign: "center",
    headerClassName: "table-header",
  },
  {
    field: "unit",
    headerName: "使用量單位",
    flex: 1,
    headerAlign: "center",
    headerClassName: "table-header",
  },
  {
    field: "totalCarbon",
    headerName: "碳排當量總計",
    flex: 1,
    headerAlign: "center",
    headerClassName: "table-header",
  },
  {
    field: "setting",
    headerName: "操作",
    flex: 1,
    headerAlign: "center",
    headerClassName: "table-header",
    renderCell: (val) => {
      return (
        <div className="w-full h-full overflow-y-scroll flex justify-center items-center gap-1">
          <button className="bg-[#FFC700] rounded-lg p-1">
            <Image width={24} height={24} alt="" src={"/icon/search.svg"} />
          </button>
          <button className="bg-[#0075AC] rounded-lg p-1">
            <Image width={24} height={24} alt="" src={"/icon/edit.svg"} />
          </button>
        </div>
      );
    },
  },
];

const rows = [
  {
    id: 1,
    name: "1號鍋爐",
    month: "1月",
    category: "自產煤",
    usage: 35,
    unit: "公斤",
    totalCarbon: "0.233285984 KgCO2e",
    setting:1
  },
];

const CatOne = () => {
  return (
    <div className="h-full">
      <div className="flex justify-between items-start mb-6">
        <div className=" w-full text-2xl font-black text-[#467980]">
          排類別一:直接溫室氣體排放與移除-計量資料新增
        </div>
      </div>
      {/* accordion */}
      <div className="w-full mb-1 p-3 bg-[#4DA7B0] text-white text-base flex justify-start items-center gap-2">
        <span>1.1 固定式燃料源</span>
        <Image width={20} height={20} alt="" src={"/icon/dropdown-arrow.svg"} />
      </div>
      <div className="m-[10px] border border-[#4DA7B0] rounded-lg overflow-hidden">
        <div className="w-full py-4 px-8 border-b border-[#4DA7B0]">
          <Image />煤
        </div>
        <div className="h-full p-7">
          <div className="mb-5 flex justify-between items-center">
            <div>
              <span className="text-red-500 mr-1">*</span>當年度使用項目
            </div>
            <div className="flex justify-center items-center gap-4 mb-5">
              <button className="py-2 px-5 rounded-lg text-white bg-[#EB5757] flex justify-center items-center gap-1 font-semibold">
                <Image width={24} height={24} alt="" src={"/icon/delete.svg"} />
                批量刪除
              </button>
              <button className="py-2 px-5 rounded-lg text-white bg-[#0075AC] flex justify-center items-center gap-1 font-semibold">
                <Image width={24} height={24} alt="" src={"/icon/add.svg"} />
                新增項目
              </button>
            </div>
          </div>
          <div className="h-full">
            <Box
              sx={{
                height: 500,
                width: "100%",
                "& .MuiDataGrid-columnSeparator": {
                  display: "none",
                },
                "& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-row:not(.MuiDataGrid-row--dynamicHeight)>.MuiDataGrid-cell":
                  {
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                  },
                "& .table-header": {
                  bgcolor: "#ACC2C180",
                },
                "& .MuiDataGrid-columnHeaderTitleContainer:has(.css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root)":
                  {
                    bgcolor: "#ACC2C180",
                  },
              }}>
              <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
              />
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CatOne