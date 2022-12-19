import React, { useState } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";



const News = () => {
  const [isCourseEdit, setIsCourseEdit] = useState(false);
  const [isNewsEdit, setIsNewsEdit] = useState(false);
  let columns = [
  {
    field: "swiperOrder",
    headerName: "輪播排序",
    headerClassName: "dataGrid-header-odd",
    headerAlign: "center",
    flex: 1,
    renderCell: (val) => {
      return (
        <div className="  flex justify-center items-center ">
          <input
            type="number"
            name=""
            id=""
            className="border border-[#4DA7B0] rounded-lg py-1 px-2 w-1/2"
          />
        </div>
      );
    },
  },
  {
    field: "courseTime",
    headerName: "課程時間",
    headerClassName: "dataGrid-header-even",
    headerAlign: "center",
    flex: 1,
    // width: 300,
  },
  {
    field: "courseTitle",
    headerName: " 課程標題",
    headerClassName: "dataGrid-header-odd",
    headerAlign: "center",
    flex: 1,
    // width: 300,
  },
  {
    field: "courseSummary",
    headerName: "總結",
    headerClassName: "dataGrid-header-even",
    headerAlign: "center",
    flex: 1,
    // width: 300,
  },
  {
    field: "link",
    headerName: "超連結",
    headerClassName: "dataGrid-header-odd",
    headerAlign: "center",
    flex: 1,
    // width: 300,
  },
  {
    field: "status",
    headerName: "使用狀態",
    headerClassName: "dataGrid-header-even",
    headerAlign: "center",
    flex: 1,
    // width: 300,
  },
  {
    field: "setting",
    headerName: "設定",
    headerClassName: "dataGrid-header-odd",
    headerAlign: "center",
    flex: 1,
    renderCell: (val) => {
      return (
        <div className="w-full h-full overflow-y-scroll flex justify-center items-center ">
          <button
            className="bg-[#0075AC] rounded-lg p-1"
            onClick={() => setIsCourseEdit(true)}>
            <Image width={24} height={24} alt="" src={"/icon/edit.svg"} />
          </button>
        </div>
      );
    },
    // width: 300
  },
];
let rows = [
  {
    id: 1,
    swiperOrder: "1",
    courseTime: "2022/9/21(三)14:00-15:00",
    courseTitle: "綠色機房科學維運植入ESG永續基因",
    courseSummary:
      "政府為達成全球2050年淨零排放,台灣各行各業朝低碳化方向發展, 提高資源利用率,優化產業結構;企業更需積極開發低碳技術與環境, 尋找多元的可替代方案。面對全球永續發趨勢,精誠以科技力為客戶導入綠色解決方 案,協助客戶實現、創造嶄新的市場機會及綠色服務。",
    link: "https://tw.systex.com/",
    status: "上架",
    setting: 1,
  },
];
let columns2 = [
  {
    field: "category",
    headerName: "消息類別",
    headerClassName: "dataGrid-header-odd",
    headerAlign: "center",
    flex: 1,
  },
  {
    field: "logo",
    headerName: "組織Logo縮圖",
    headerClassName: "dataGrid-header-even",
    headerAlign: "center",
    flex: 1,
    // width: 300,
  },
  {
    field: "status",
    headerName: "  使用狀態",
    headerClassName: "dataGrid-header-odd",
    headerAlign: "center",
    flex: 1,
    // width: 300,
  },
  {
    field: "link1",
    headerName: "超連結",
    headerClassName: "dataGrid-header-even",
    headerAlign: "center",
    flex: 1,
    // width: 300,
  },
  {
    field: "link2",
    headerName: "超連結",
    headerClassName: "dataGrid-header-odd",
    headerAlign: "center",
    flex: 1,
    // width: 300,
  },
  {
    field: "status2",
    headerName: "使用狀態",
    headerClassName: "dataGrid-header-even",
    headerAlign: "center",
    flex: 1,
    // width: 300,
  },

  {
    field: "setting",
    headerName: "設定",
    headerClassName: "dataGrid-header-odd",
    headerAlign: "center",
    flex: 1,
    renderCell: (val) => {
      return (
        <div className="w-full h-full overflow-y-scroll flex justify-center items-center ">
          <button
            className="bg-[#0075AC] rounded-lg p-1"
            onClick={() => {
              setIsNewsEdit(true);
            }}>
            <Image width={24} height={24} alt="" src={"/icon/edit.svg"} />
          </button>
        </div>
      );
    },
    // width: 300
  },
];
let rows2 = [
  {
    id: 1,
    category: "國外碳資訊",
    logo: "",
    status: "上架",
    link1:
      "Africa Climate Week 2022 Builds Important Regional Momentum for Climate Actio In ahead of COP27",
    link2: "https://tw.systex.com/",
    status2: "上架",
    setting: 1,
  },
];
  return (
    <div>
      <div className="flex justify-between items-start mb-8">
        <div className=" w-full text-2xl font-black text-[#467980]">
          消息管理設定
        </div>
      </div>
      <div className="w-full flex  justify-end items-center">
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
      </div>
      <div className="w-full flex justify-between items-center mt-2 mb-3">
        <div className="font-semibold text-[#333]">
          <span className="text-[#EB5757] mr-1">*</span>科技講堂文字輪播
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
              "& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-virtualScrollerContent--overflowed .MuiDataGrid-row--lastVisible .MuiDataGrid-cell":
                {
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
              getRowHeight={() => "auto"}
              getEstimatedRowHeight={() => 150}
            />
          </Box>
        </div>
      </div>
      {/* course popup */}
      {isCourseEdit && (
        <div className="w-screen h-screen bg-black/50 fixed top-0 left-0 grid place-content-center z-20">
          <div className="w-[50vw]  bg-white rounded-lg">
            <div className="py-4 px-6 text-[#333] text-xl font-bold border-b border-[#E0E0E0]">
              新增課程消息
            </div>
            <div className="py-5 px-6 w-full grid grid-cols-2 gap-6">
              <div>
                <label htmlFor="" className="block font-bold text-[#333] mb-2">
                  <span className="text-[#EB5757]">*</span>課程時間
                </label>
                <input
                  type="datetime-local"
                  name=""
                  id=""
                  className="block p-2 border border-[#4DA7B0] rounded-lg w-full"
                />
              </div>
              <div>
                <label htmlFor="" className="block font-bold text-[#333] mb-2">
                  <span className="text-[#EB5757]">*</span>使用狀態：
                </label>
                <select
                  name=""
                  id=""
                  className="block p-2 border border-[#4DA7B0] rounded-lg w-full">
                  <option value="">請選擇當前該則顯示狀態</option>
                  <option value="">上架顯示</option>
                </select>
              </div>
              <div>
                <label htmlFor="" className="block font-bold text-[#333] mb-2">
                  <span className="text-[#EB5757]">*</span>課程標題：
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="block p-2 border border-[#4DA7B0] rounded-lg w-full"
                />
              </div>
              <div>
                <label htmlFor="" className="block font-bold text-[#333] mb-2">
                  <span className="text-[#EB5757]">*</span>使用文案：
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="block p-2 border border-[#4DA7B0] rounded-lg w-full"
                />
              </div>
              <div>
                <label htmlFor="" className="block font-bold text-[#333] mb-2">
                  跳轉連結：
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="block p-2 border border-[#4DA7B0] rounded-lg w-full"
                />
              </div>
              <div>
                <label htmlFor="" className="block font-bold text-[#333] mb-2">
                  <span className="text-[#EB5757]">*</span>連結開啟：
                </label>
                <select
                  name=""
                  id=""
                  className="block p-2 border border-[#4DA7B0] rounded-lg w-full">
                  <option value="">講選擇連结跳轉顯示方式</option>
                  <option value="">直接開啟</option>
                </select>
              </div>
              <div className="mt-12 col-span-2 flex justify-center items-center gap-6">
                <button
                  className="border border-[#23AFA4] text-[#23AFA4] font-semibold rounded-lg px-8 py-2"
                  onClick={() => {
                    setIsCourseEdit(false);
                  }}>
                  取消
                </button>
                <button
                  className="border border-transparent bg-[#23AFA4] text-white font-semibold rounded-lg px-8 py-2"
                  onClick={() => {
                    setIsCourseEdit(false);
                  }}>
                  確認
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="bg-[#BDBDBD] w-full h-px my-8"></div>
      <div className="flex justify-between items-start mb-8">
        <div className=" w-full text-2xl font-black text-[#467980]">
          消息管理設定
        </div>
      </div>
      <div className="w-full flex justify-between items-center mt-2 mb-3">
        <div className="font-semibold text-[#333]">
          <span className="text-[#EB5757] mr-1">*</span>國內外消息
        </div>
        <div className="flex justify-start items-center">
          {/* <button className="flex justify-center items-center rounded-lg ml-4 py-2 px-5 gap-2 bg-[#F58500] font-semibold text-white">
            <Image alt="" width={20} height={20} src={"/icon/sort.svg"} />
            排序設定
          </button> */}
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
              "& .css-1e2bxag-MuiDataGrid-root .MuiDataGrid-virtualScrollerContent--overflowed .MuiDataGrid-row--lastVisible .MuiDataGrid-cell":
                {
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                  whiteSpace: "normal",
                },
            }}>
            <DataGrid
              rows={rows2}
              columns={columns2}
              pageSize={5}
              rowsPerPageOptions={[5]}
              getRowHeight={() => "auto"}
              getEstimatedRowHeight={() => 150}
            />
          </Box>
        </div>
      </div>
      {/* news popup */}
      {isNewsEdit && (
        <div className="w-screen h-screen bg-black/50 fixed top-0 left-0 grid place-content-center z-20">
          <div className="w-[50vw]  bg-white rounded-lg">
            <div className="py-4 px-6 text-[#333] text-xl font-bold border-b border-[#E0E0E0]">
              新增國內外消息
            </div>
            <div className="py-5 px-6 w-full grid grid-cols-2 gap-6">
              <div>
                <label htmlFor="" className="block font-bold text-[#333] mb-2">
                  <span className="text-[#EB5757]">*</span>消息類別：
                </label>
                <input
                  type="datetime-local"
                  name=""
                  id=""
                  className="block p-2 border border-[#4DA7B0] rounded-lg w-full"
                />
              </div>
              <div>
                <label htmlFor="" className="block font-bold text-[#333] mb-2">
                  <span className="text-[#EB5757]">*</span>使用狀態：
                </label>
                <select
                  name=""
                  id=""
                  className="block p-2 border border-[#4DA7B0] rounded-lg w-full">
                  <option value="">請選擇當前該則顯示狀態</option>
                  <option value="">上架顯示</option>
                </select>
              </div>
              <div>
                <label htmlFor="" className="block font-bold text-[#333] mb-2">
                  <span className="text-[#EB5757]">*</span>文章標題：
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="block p-2 border border-[#4DA7B0] rounded-lg w-full"
                />
              </div>
              {/* <div>
                <label htmlFor="" className="block font-bold text-[#333] mb-2">
                  <span className="text-[#EB5757]">*</span>使用文案：
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="block p-2 border border-[#4DA7B0] rounded-lg w-full"
                />
              </div> */}
              <div>
                <label htmlFor="" className="block font-bold text-[#333] mb-2">
                  連結開啟：
                </label>
                <select
                  name=""
                  id=""
                  className="block p-2 border border-[#4DA7B0] rounded-lg w-full">
                  <option value="">講選擇連结跳轉顯示方式</option>
                  <option value="">直接開啟</option>
                </select>
              </div>
              <div>
                <label htmlFor="" className="block font-bold text-[#333] mb-2">
                  <span className="text-[#EB5757]">*</span>圖片上傳：
                </label>
                <input
                  type="file"
                  name=""
                  id=""
                  className="block p-2 border border-[#4DA7B0] rounded-lg w-full"
                />
              </div>
              <button className="self-end w-fit h-fit flex justify-center items-center rounded-lg text-white font-semibold py-2 px-5 bg-[#575979]">
                <Image
                  alt=""
                  width={20}
                  height={20}
                  src={"/icon/doc-upload.svg"}
                  className="brightness-200 mr-2"
                />
                點擊上傳
              </button>
              <div>
                <label htmlFor="" className="block font-bold text-[#333] mb-2">
                  跳轉連結：
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="block p-2 border border-[#4DA7B0] rounded-lg w-full"
                />
              </div>

              <div className="mt-12 col-span-2 flex justify-center items-center gap-6">
                <button
                  className="border border-[#23AFA4] text-[#23AFA4] font-semibold rounded-lg px-8 py-2"
                  onClick={() => {
                    setIsNewsEdit(false);
                  }}>
                  取消
                </button>
                <button
                  className="border border-transparent bg-[#23AFA4] text-white font-semibold rounded-lg px-8 py-2"
                  onClick={() => {
                    setIsNewsEdit(false);
                  }}>
                  確認
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default News;
