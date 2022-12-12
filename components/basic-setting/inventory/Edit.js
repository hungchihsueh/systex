import React from "react";
import Image from "next/image";
const Edit = () => {
  return (
    <div className=" w-11/12 mx-auto">
      <div className="grid grid-cols-[repeat(20,_1fr)] gap-5 w-full mb-12">
        <div className="col-span-5 flex flex-col justify-start items-start">
          <label htmlFor="companyName" className="mb-2">
            <span className="text-red-500">*</span>公司名稱:
          </label>
          <input
            id="companyName"
            name="companyName"
            type="text"
            placeholder="請輸入集團公司名稱"
            className="w-full h-9 px-3 py-2  border border-[#4DA7B0] rounded-lg"
          />
        </div>
        <div className="col-span-5 flex flex-col justify-start items-start">
          <label htmlFor="companyLocationName" className="mb-2">
            <span className="text-red-500">*</span>公司據點名稱:
          </label>
          <input
            id="companyLocationName"
            name="companyLocationName"
            type="text"
            placeholder="請輸入公司據點名稱"
            className="w-full h-9 px-3 py-2  border border-[#4DA7B0] rounded-lg"
          />
        </div>
        <div className="col-span-6 flex flex-col justify-start items-start">
          <label htmlFor="companyLocationAddress" className="mb-2">
            <span className="text-red-500">*</span>公司據點地址:
          </label>
          <input
            id="companyLocationAddress"
            name="companyLocationAddress"
            type="text"
            placeholder="請輸入公司據點地址"
            className="w-full h-9 px-3 py-2  border border-[#4DA7B0] rounded-lg"
          />
        </div>
        <div className="col-span-4 flex flex-col justify-start items-start">
          <label htmlFor="companyGUINumber" className="mb-2">
            <span className="text-red-500">*</span>公司據點統編:
          </label>
          <input
            id="companyGUINumber"
            name="companyGUINumber"
            type="text"
            placeholder="請輸入公司據點統編"
            className="w-full h-9 px-3 py-2  border border-[#4DA7B0] rounded-lg"
          />
        </div>

        <div className="col-span-5 flex flex-col justify-start items-start">
          <label htmlFor="companyEMS" className="mb-2">
            EMS管制編號:
          </label>
          <input
            id="companyEMS"
            name="companyEMS"
            type="text"
            placeholder="請輸入EMS管制編號"
            className="w-full h-9 px-3 py-2  border border-[#4DA7B0] rounded-lg"
          />
        </div>
        <div className="col-span-5 flex flex-col justify-start items-start">
          <label htmlFor="checkYear" className="mb-2">
            <span className="text-red-500">*</span>盤查年度:
          </label>
          <input
            id="checkYear"
            name="checkYear"
            type="text"
            placeholder="請輸入盤查年度"
            className="w-full h-9 px-3 py-2  border border-[#4DA7B0] rounded-lg"
          />
        </div>
        <div className="col-span-4 flex flex-col justify-start items-start">
          <label htmlFor="GWPVersion" className="mb-2">
            <span className="text-red-500">*</span>GWP版本:
          </label>
          <input
            id="GWPVersion"
            name="GWPVersion"
            type="text"
            placeholder="請輸入GWP版本"
            className="w-full h-9 px-3 py-2  border border-[#4DA7B0] rounded-lg"
          />
        </div>
        <div className="col-span-4 flex flex-col justify-start items-start">
          <label htmlFor="floorArea" className="mb-2">
            <span className="text-red-500">*</span>樓地板面積:
          </label>
          <input
            id="floorArea"
            name="floorArea"
            type="text"
            placeholder="請輸入樓地板面積"
            className="w-full h-9 px-3 py-2  border border-[#4DA7B0] rounded-lg"
          />
        </div>
      </div>
      <div className="grid grid-cols-[repeat(20,_1fr)] gap-5 w-full">
        <div className=" col-span-5 flex flex-col justify-start items-start">
          <label htmlFor="window" className="mb-2">
            <span className="text-red-500">*</span>承辦窗口人員:
          </label>
          <input
            id="window"
            name="window"
            type="text"
            placeholder="請輸入承辦窗口人員"
            className="w-full h-9 px-3 py-2  border border-[#4DA7B0] rounded-lg"
          />
        </div>
        <div className=" col-span-5 flex flex-col justify-start items-start">
          <label htmlFor="windowPhone" className="mb-2">
            <span className="text-red-500">*</span>承辦人員電話:
          </label>
          <input
            id="windowPhone"
            name="windowPhone"
            type="tel"
            placeholder="請輸入承辦人員電話"
            className="w-full h-9 px-3 py-2  border border-[#4DA7B0] rounded-lg"
          />
        </div>
        <div className="col-span-5 flex flex-col justify-start items-start">
          <label htmlFor="windowMobile" className="mb-2">
            承辦人員手機:
          </label>
          <input
            id="windowMobile"
            name="windowMobile"
            type="tel"
            placeholder="請輸入承辦人員手機"
            className="w-full h-9 px-3 py-2  border border-[#4DA7B0] rounded-lg"
          />
        </div>
        <div className="row-start-2 col-span-5 flex flex-col justify-start items-start">
          <label htmlFor="windowEmail" className="mb-2">
            <span className="text-red-500">*</span>承辦人員信箱:
          </label>
          <input
            id="windowEmail"
            name="windowEmail"
            type="mail"
            placeholder="請輸入承辦人員信箱"
            className="w-full h-9 px-3 py-2  border border-[#4DA7B0] rounded-lg"
          />
        </div>
        <div className="row-start-2 col-span-5 flex flex-col justify-start items-start">
          <label htmlFor="buildingType" className="mb-2">
            <span className="text-red-500">*</span>建築物型態類別:
          </label>
          <select
            name="buildingType"
            id="buildingType"
            className={`w-full h-9 px-3 py-2  border border-[#4DA7B0] rounded-lg`}>
            <option value="獨棟">獨棟</option>
            <option value="廠辦">廠辦</option>
            <option value="租賃">租賃</option>
          </select>
        </div>
      </div>
      <div className="mt-12 w-full flex justify-between items-center">
        <div>
          <div>
            <span className=" text-base font-medium text-red-500">*</span>
            盤查邊界地圖(廠區平面圖):
          </div>
          <div className="text-sm text-red-500">(支援格式JPG、PDF檔案格式)</div>
          <div className="flex justify-center items-center">
                      <label htmlFor="floorPlan" className="flex flex-col justify-center items-center cursor-pointer">
                         <Image alt=""/>         
              <input type="file" name="floorPlan" id="floorPlan" className="hidden"/>
            </label>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Edit;
