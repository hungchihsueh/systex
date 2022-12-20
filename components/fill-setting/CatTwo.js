import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
const columns = [
  {
    field: "area",
    headerName: "用電區域",
    flex: 1,
    headerAlign: "center",
    headerClassName: "table-header",
  },
  {
    field: "eNumber",
    headerName: "電號號碼",
    flex: 1,
    headerAlign: "center",
    headerClassName: "table-header",
  },
  {
    field: "eName",
    headerName: "電號戶名",
    flex: 1,
    headerAlign: "center",
    headerClassName: "table-header",
  },
  {
    field: "timeStart",
    headerName: "計費期間(起)",
    flex: 1,
    headerAlign: "center",
    headerClassName: "table-header",
  },
  {
    field: "timeEnd",
    headerName: "計費期間(訖)",
    flex: 1,
    headerAlign: "center",
    headerClassName: "table-header",
  },
  {
    field: "amount",
    headerName: "使用值",
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
    area: "顯示項目名稱",
    eNumber: "顯示號碼",
    eName: "顯示戶名",
    timeStart: "顯示計費起算時間",
    timeEnd: "顯示計費結算時間",
    amount: "顯示使用總值",
    unit: "顯示使用計算的單位 ",
    totalCarbon: "0.233285984 KgCO2e",
    setting: 1,
  },
  {
    id: 2,
    area: "顯示項目名稱",
    eNumber: "顯示號碼",
    eName: "顯示戶名",
    timeStart: "顯示計費起算時間",
    timeEnd: "顯示計費結算時間",
    amount: "顯示使用總值",
    unit: "顯示使用計算的單位 ",
    totalCarbon: "0.233285984 KgCO2e",
    setting: 1,
  },
];
const columns3 = [
  {
    field: "yearTotal",
    headerName: "年發電度數",
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

const rows3 = [
  {
    id: 1,
    yearTotal: "顯示項目名稱",
    month: "顯示月份",
    totalCarbon: "0.233285984 KgCO2e",
    setting: 1,
  },
  {
    id: 2,
    yearTotal: "顯示項目名稱",
    month: "顯示月份",
    totalCarbon: "0.233285984 KgCO2e",
    setting: 1,
  },
];
const columns4 = [
  {
    field: "yearTotal",
    headerName: "年發電度數",
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
    field: "amount",
    headerName: "排放係數值",
    flex: 1,
    headerAlign: "center",
    headerClassName: "table-header",
  },
  {
    field: "unit",
    headerName: "排放係數單位",
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

const rows4 = [
  {
    id: 1,
    yearTotal: "顯示項目名稱",
    month: "顯示月份",
    totalCarbon: "0.233285984 KgCO2e",
    setting: 1,
  },
  {
    id: 2,
    yearTotal: "顯示項目名稱",
    month: "顯示月份",
    totalCarbon: "0.233285984 KgCO2e",
    setting: 1,
  },
];
const columns5 = [
  {
    field: "source",
    headerName: "憑證來源",
    flex: 1,
    headerAlign: "center",
    headerClassName: "table-header",
  },
  {
    field: "name",
    headerName: "憑證名稱或單位",
    flex: 1,
    headerAlign: "center",
    headerClassName: "table-header",
  },
  {
    field: "amount",
    headerName: "憑證發電度數",
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
    field: "unit",
    headerName: "排放係數單位",
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

const rows5 = [
  {
    id: 1,
    source: "顯示憑證來源",
    amount: "顯示該憑證發電總度數",
    unit: "顯示使用計算的單位 ",
    name: "顯示憑證名稱",
    month: "顯示月份",
    totalCarbon: "0.233285984 KgCO2e",
    setting: 1,
  },
  {
    id: 2,
    source: "顯示憑證來源",
    amount: "顯示該憑證發電總度數",
    unit: "顯示使用計算的單位 ",
    name: "顯示憑證名稱",
    month: "顯示月份",
    totalCarbon: "0.233285984 KgCO2e",
    setting: 1,
  },
];
const CatTwo = () => {
  return (
    <div className="h-full">
      <div className="flex justify-between items-start mb-6">
        <div className=" w-full text-2xl font-black text-[#467980]">
          類別二:由輸入能源產生之間接溫室氣體排放-計量資料新增
        </div>
      </div>
      {/* accordion */}
      <div className="w-full mb-1 p-3 bg-[#4DA7B0] text-white text-base flex justify-start items-center gap-2">
        <span>2.1 外購電力</span>
        <Image width={20} height={20} alt="" src={"/icon/dropdown-arrow.svg"} />
      </div>
      {/* content */}
      <div>
        <div className="m-[10px] border border-[#4DA7B0] rounded-lg overflow-hidden">
          <div className="flex justify-start items-center w-full py-4 px-8 border-b text-[#4DA7B0] font-semibold border-[#4DA7B0]">
            <Image
              alt=""
              width={24}
              height={24}
              src={"/icon/電力.svg"}
              className="mr-2"
            />
            電力
          </div>
          <div className="h-full p-7">
            <div className="mb-5 flex justify-between items-center">
              <div>
                <span className="text-red-500 mr-1">*</span>當年度使用項目
              </div>
              <div className="flex justify-center items-center gap-4 mb-5">
                <button className="py-2 px-5 rounded-lg text-white bg-[#EB5757] flex justify-center items-center gap-1 font-semibold">
                  <Image
                    width={24}
                    height={24}
                    alt=""
                    src={"/icon/delete.svg"}
                  />
                  批量刪除
                </button>
                <button className="py-2 px-5 rounded-lg text-white bg-[#0075AC] flex justify-center items-center gap-1 font-semibold">
                  <Image width={24} height={24} alt="" src={"/icon/add.svg"} />
                  新增項目
                </button>
              </div>
            </div>
            <div className="flex h-full">
              <div className="flex-grow">
                <Box
                  sx={{
                    height: 500,
                    "& .MuiDataGrid-columnSeparator": {
                      display: "none",
                    },
                    "& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-row:not(.MuiDataGrid-row--dynamicHeight)>.MuiDataGrid-cell":
                      {
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        textAlign: "center",
                        whiteSpace: "normal",
                      },
                    "& .table-header": {
                      // bgcolor: "#ACC2C180",
                      borderColor: "white",
                      borderWidth: 1,
                    },
                    "& .css-f3jnds-MuiDataGrid-columnHeaders": {
                      bgcolor: "#ACC2C180",
                      color: "#467980",
                      fontWeight: "600",
                      fontSize: "16px",
                    },
                    "& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-row:nth-child(odd)":
                      {
                        backgroundColor: "#A3A5BF1A",
                      },
                    "& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-row:nth-child(even)":
                      {
                        backgroundColor: "##A3A5BF33",
                      },
                    "& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-cell": {
                      padding: "14px",
                      minHeight: "100px",
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
                    checkboxSelection
                    disableSelectionOnClick
                    getRowHeight={() => "auto"}
                    // getEstimatedRowHeight={() => 150}
                  />
                </Box>
              </div>
            </div>

            <div className="text-sm my-3">
              <span className="text-[#EB5757]">*</span>
              <span>上傳附件資料</span>
              <span className="text-[#EB5757] text-xs">
                (支援格式JPG、PDF檔案格式)
              </span>
            </div>
            <button className="flex justify-center items-center rounded-xl bg-[#575979] text-white text-md font-medium py-2 px-5 whitespace-nowrap">
              <Image
                width={20}
                height={20}
                alt=""
                src="/icon/doc-upload.svg"
                className="mr-2 brightness-200"
              />
              點擊上傳
            </button>
          </div>
        </div>
        <div className="m-[10px] border border-[#4DA7B0] rounded-lg overflow-hidden">
          <div className="flex justify-start items-center w-full py-4 px-8 border-b text-[#4DA7B0] font-semibold border-[#4DA7B0]">
            <Image
              alt=""
              width={24}
              height={24}
              src={"/icon/自用電力.svg"}
              className="mr-2"
            />
            自用電力
          </div>
          <div className="h-full p-7">
            <div className="mb-5 flex justify-between items-center">
              <div>
                <span className="text-red-500 mr-1">*</span>當年度使用項目
              </div>
              <div className="flex justify-center items-center gap-4 mb-5">
                <button className="py-2 px-5 rounded-lg text-white bg-[#EB5757] flex justify-center items-center gap-1 font-semibold">
                  <Image
                    width={24}
                    height={24}
                    alt=""
                    src={"/icon/delete.svg"}
                  />
                  批量刪除
                </button>
                <button className="py-2 px-5 rounded-lg text-white bg-[#0075AC] flex justify-center items-center gap-1 font-semibold">
                  <Image width={24} height={24} alt="" src={"/icon/add.svg"} />
                  新增項目
                </button>
              </div>
            </div>
            <div className="flex h-full">
              <div className="flex-grow">
                <Box
                  sx={{
                    height: 500,
                    "& .MuiDataGrid-columnSeparator": {
                      display: "none",
                    },
                    "& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-row:not(.MuiDataGrid-row--dynamicHeight)>.MuiDataGrid-cell":
                      {
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        textAlign: "center",
                        whiteSpace: "normal",
                      },
                    "& .table-header": {
                      // bgcolor: "#ACC2C180",
                      borderColor: "white",
                      borderWidth: 1,
                    },
                    "& .css-f3jnds-MuiDataGrid-columnHeaders": {
                      bgcolor: "#ACC2C180",
                      color: "#467980",
                      fontWeight: "600",
                      fontSize: "16px",
                    },
                    "& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-row:nth-child(odd)":
                      {
                        backgroundColor: "#A3A5BF1A",
                      },
                    "& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-row:nth-child(even)":
                      {
                        backgroundColor: "##A3A5BF33",
                      },
                    "& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-cell": {
                      padding: "14px",
                      minHeight: "100px",
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
                    checkboxSelection
                    disableSelectionOnClick
                    getRowHeight={() => "auto"}
                    // getEstimatedRowHeight={() => 150}
                  />
                </Box>
              </div>
            </div>

            <div className="text-sm my-3">
              <span className="text-[#EB5757]">*</span>
              <span>上傳附件資料</span>
              <span className="text-[#EB5757] text-xs">
                (支援格式JPG、PDF檔案格式)
              </span>
            </div>
            <button className="flex justify-center items-center rounded-xl bg-[#575979] text-white text-md font-medium py-2 px-5 whitespace-nowrap">
              <Image
                width={20}
                height={20}
                alt=""
                src="/icon/doc-upload.svg"
                className="mr-2 brightness-200"
              />
              點擊上傳
            </button>
          </div>
        </div>
        <div className="m-[10px] border border-[#4DA7B0] rounded-lg overflow-hidden">
          <div className="flex justify-start items-center w-full py-4 px-8 border-b text-[#4DA7B0] font-semibold border-[#4DA7B0]">
            <Image
              alt=""
              width={24}
              height={24}
              src={"/icon/分攤電力.svg"}
              className="mr-2"
            />
            分攤電力
          </div>
          <div className="h-full p-7">
            <div className="mb-5 flex justify-between items-center">
              <div>
                <span className="text-red-500 mr-1">*</span>當年度使用項目
              </div>
              <div className="flex justify-center items-center gap-4 mb-5">
                <button className="py-2 px-5 rounded-lg text-white bg-[#EB5757] flex justify-center items-center gap-1 font-semibold">
                  <Image
                    width={24}
                    height={24}
                    alt=""
                    src={"/icon/delete.svg"}
                  />
                  批量刪除
                </button>
                <button className="py-2 px-5 rounded-lg text-white bg-[#0075AC] flex justify-center items-center gap-1 font-semibold">
                  <Image width={24} height={24} alt="" src={"/icon/add.svg"} />
                  新增項目
                </button>
              </div>
            </div>
            <div className="flex h-full">
              <div className="flex-grow">
                <Box
                  sx={{
                    height: 500,
                    "& .MuiDataGrid-columnSeparator": {
                      display: "none",
                    },
                    "& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-row:not(.MuiDataGrid-row--dynamicHeight)>.MuiDataGrid-cell":
                      {
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        textAlign: "center",
                        whiteSpace: "normal",
                      },
                    "& .table-header": {
                      // bgcolor: "#ACC2C180",
                      borderColor: "white",
                      borderWidth: 1,
                    },
                    "& .css-f3jnds-MuiDataGrid-columnHeaders": {
                      bgcolor: "#ACC2C180",
                      color: "#467980",
                      fontWeight: "600",
                      fontSize: "16px",
                    },
                    "& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-row:nth-child(odd)":
                      {
                        backgroundColor: "#A3A5BF1A",
                      },
                    "& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-row:nth-child(even)":
                      {
                        backgroundColor: "##A3A5BF33",
                      },
                    "& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-cell": {
                      padding: "14px",
                      minHeight: "100px",
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
                    checkboxSelection
                    disableSelectionOnClick
                    getRowHeight={() => "auto"}
                    // getEstimatedRowHeight={() => 150}
                  />
                </Box>
              </div>
            </div>

            <div className="text-sm my-3">
              <span className="text-[#EB5757]">*</span>
              <span>上傳附件資料</span>
              <span className="text-[#EB5757] text-xs">
                (支援格式JPG、PDF檔案格式)
              </span>
            </div>
            <button className="flex justify-center items-center rounded-xl bg-[#575979] text-white text-md font-medium py-2 px-5 whitespace-nowrap">
              <Image
                width={20}
                height={20}
                alt=""
                src="/icon/doc-upload.svg"
                className="mr-2 brightness-200"
              />
              點擊上傳
            </button>
          </div>
        </div>
        <div className="m-[10px] border border-[#4DA7B0] rounded-lg overflow-hidden">
          <div className="flex justify-start items-center w-full py-4 px-8 border-b text-[#4DA7B0] font-semibold border-[#4DA7B0]">
            <Image
              alt=""
              width={24}
              height={24}
              src={"/icon/自發自用再生能源.svg"}
              className="mr-2"
            />
            自發自用再生能源
          </div>
          <div className="h-full p-7">
            <div className="mb-5 flex justify-between items-center">
              <div>
                <span className="text-red-500 mr-1">*</span>當年度使用項目
              </div>
              <div className="flex justify-center items-center gap-4 mb-5">
                <button className="py-2 px-5 rounded-lg text-white bg-[#EB5757] flex justify-center items-center gap-1 font-semibold">
                  <Image
                    width={24}
                    height={24}
                    alt=""
                    src={"/icon/delete.svg"}
                  />
                  批量刪除
                </button>
                <button className="py-2 px-5 rounded-lg text-white bg-[#0075AC] flex justify-center items-center gap-1 font-semibold">
                  <Image width={24} height={24} alt="" src={"/icon/add.svg"} />
                  新增項目
                </button>
              </div>
            </div>
            <div className="flex h-full">
              <div className="flex-grow">
                <Box
                  sx={{
                    height: 500,
                    "& .MuiDataGrid-columnSeparator": {
                      display: "none",
                    },
                    "& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-row:not(.MuiDataGrid-row--dynamicHeight)>.MuiDataGrid-cell":
                      {
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        textAlign: "center",
                        whiteSpace: "normal",
                      },
                    "& .table-header": {
                      // bgcolor: "#ACC2C180",
                      borderColor: "white",
                      borderWidth: 1,
                    },
                    "& .css-f3jnds-MuiDataGrid-columnHeaders": {
                      bgcolor: "#ACC2C180",
                      color: "#467980",
                      fontWeight: "600",
                      fontSize: "16px",
                    },
                    "& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-row:nth-child(odd)":
                      {
                        backgroundColor: "#A3A5BF1A",
                      },
                    "& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-row:nth-child(even)":
                      {
                        backgroundColor: "##A3A5BF33",
                      },
                    "& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-cell": {
                      padding: "14px",
                      minHeight: "100px",
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      textAlign: "center",
                      whiteSpace: "normal",
                    },
                  }}>
                  <DataGrid
                    rows={rows3}
                    columns={columns3}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    disableSelectionOnClick
                    getRowHeight={() => "auto"}
                    // getEstimatedRowHeight={() => 150}
                  />
                </Box>
              </div>
            </div>

            <div className="text-sm my-3">
              <span className="text-[#EB5757]">*</span>
              <span>上傳附件資料</span>
              <span className="text-[#EB5757] text-xs">
                (支援格式JPG、PDF檔案格式)
              </span>
            </div>
            <button className="flex justify-center items-center rounded-xl bg-[#575979] text-white text-md font-medium py-2 px-5 whitespace-nowrap">
              <Image
                width={20}
                height={20}
                alt=""
                src="/icon/doc-upload.svg"
                className="mr-2 brightness-200"
              />
              點擊上傳
            </button>
          </div>
        </div>
        <div className="m-[10px] border border-[#4DA7B0] rounded-lg overflow-hidden">
          <div className="flex justify-start items-center w-full py-4 px-8 border-b text-[#4DA7B0] font-semibold border-[#4DA7B0]">
            <Image
              alt=""
              width={24}
              height={24}
              src={"/icon/轉供再生能源.svg"}
              className="mr-2"
            />
            轉供再生能源
          </div>
          <div className="h-full p-7">
            <div className="mb-5 flex justify-between items-center">
              <div>
                <span className="text-red-500 mr-1">*</span>當年度使用項目
              </div>
              <div className="flex justify-center items-center gap-4 mb-5">
                <button className="py-2 px-5 rounded-lg text-white bg-[#EB5757] flex justify-center items-center gap-1 font-semibold">
                  <Image
                    width={24}
                    height={24}
                    alt=""
                    src={"/icon/delete.svg"}
                  />
                  批量刪除
                </button>
                <button className="py-2 px-5 rounded-lg text-white bg-[#0075AC] flex justify-center items-center gap-1 font-semibold">
                  <Image width={24} height={24} alt="" src={"/icon/add.svg"} />
                  新增項目
                </button>
              </div>
            </div>
            <div className="flex h-full">
              <div className="flex-grow">
                <Box
                  sx={{
                    height: 500,
                    "& .MuiDataGrid-columnSeparator": {
                      display: "none",
                    },
                    "& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-row:not(.MuiDataGrid-row--dynamicHeight)>.MuiDataGrid-cell":
                      {
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        textAlign: "center",
                        whiteSpace: "normal",
                      },
                    "& .table-header": {
                      // bgcolor: "#ACC2C180",
                      borderColor: "white",
                      borderWidth: 1,
                    },
                    "& .css-f3jnds-MuiDataGrid-columnHeaders": {
                      bgcolor: "#ACC2C180",
                      color: "#467980",
                      fontWeight: "600",
                      fontSize: "16px",
                    },
                    "& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-row:nth-child(odd)":
                      {
                        backgroundColor: "#A3A5BF1A",
                      },
                    "& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-row:nth-child(even)":
                      {
                        backgroundColor: "##A3A5BF33",
                      },
                    "& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-cell": {
                      padding: "14px",
                      minHeight: "100px",
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      textAlign: "center",
                      whiteSpace: "normal",
                    },
                  }}>
                  <DataGrid
                    rows={rows4}
                    columns={columns4}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    disableSelectionOnClick
                    getRowHeight={() => "auto"}
                    // getEstimatedRowHeight={() => 150}
                  />
                </Box>
              </div>
            </div>

            <div className="text-sm my-3">
              <span className="text-[#EB5757]">*</span>
              <span>上傳附件資料</span>
              <span className="text-[#EB5757] text-xs">
                (支援格式JPG、PDF檔案格式)
              </span>
            </div>
            <button className="flex justify-center items-center rounded-xl bg-[#575979] text-white text-md font-medium py-2 px-5 whitespace-nowrap">
              <Image
                width={20}
                height={20}
                alt=""
                src="/icon/doc-upload.svg"
                className="mr-2 brightness-200"
              />
              點擊上傳
            </button>
          </div>
        </div>
        <div className="m-[10px] border border-[#4DA7B0] rounded-lg overflow-hidden">
          <div className="flex justify-start items-center w-full py-4 px-8 border-b text-[#4DA7B0] font-semibold border-[#4DA7B0]">
            <Image
              alt=""
              width={24}
              height={24}
              src={"/icon/再生能源憑證.svg"}
              className="mr-2"
            />
            再生能源憑證
          </div>
          <div className="h-full p-7">
            <div className="mb-5 flex justify-between items-center">
              <div>
                <span className="text-red-500 mr-1">*</span>當年度使用項目
              </div>
              <div className="flex justify-center items-center gap-4 mb-5">
                <button className="py-2 px-5 rounded-lg text-white bg-[#EB5757] flex justify-center items-center gap-1 font-semibold">
                  <Image
                    width={24}
                    height={24}
                    alt=""
                    src={"/icon/delete.svg"}
                  />
                  批量刪除
                </button>
                <button className="py-2 px-5 rounded-lg text-white bg-[#0075AC] flex justify-center items-center gap-1 font-semibold">
                  <Image width={24} height={24} alt="" src={"/icon/add.svg"} />
                  新增項目
                </button>
              </div>
            </div>
            <div className="flex h-full">
              <div className="flex-grow">
                <Box
                  sx={{
                    height: 500,
                    "& .MuiDataGrid-columnSeparator": {
                      display: "none",
                    },
                    "& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-row:not(.MuiDataGrid-row--dynamicHeight)>.MuiDataGrid-cell":
                      {
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        textAlign: "center",
                        whiteSpace: "normal",
                      },
                    "& .table-header": {
                      // bgcolor: "#ACC2C180",
                      borderColor: "white",
                      borderWidth: 1,
                    },
                    "& .css-f3jnds-MuiDataGrid-columnHeaders": {
                      bgcolor: "#ACC2C180",
                      color: "#467980",
                      fontWeight: "600",
                      fontSize: "16px",
                    },
                    "& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-row:nth-child(odd)":
                      {
                        backgroundColor: "#A3A5BF1A",
                      },
                    "& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-row:nth-child(even)":
                      {
                        backgroundColor: "##A3A5BF33",
                      },
                    "& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-cell": {
                      padding: "14px",
                      minHeight: "100px",
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      textAlign: "center",
                      whiteSpace: "normal",
                    },
                  }}>
                  <DataGrid
                    rows={rows5}
                    columns={columns5}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    disableSelectionOnClick
                    getRowHeight={() => "auto"}
                    // getEstimatedRowHeight={() => 150}
                  />
                </Box>
              </div>
            </div>

            <div className="text-sm my-3">
              <span className="text-[#EB5757]">*</span>
              <span>上傳附件資料</span>
              <span className="text-[#EB5757] text-xs">
                (支援格式JPG、PDF檔案格式)
              </span>
            </div>
            <button className="flex justify-center items-center rounded-xl bg-[#575979] text-white text-md font-medium py-2 px-5 whitespace-nowrap">
              <Image
                width={20}
                height={20}
                alt=""
                src="/icon/doc-upload.svg"
                className="mr-2 brightness-200"
              />
              點擊上傳
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatTwo;
