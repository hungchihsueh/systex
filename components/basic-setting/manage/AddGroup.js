import React, { useEffect, useState } from "react";
import Image from "next/image"; 
let yearsArr = [];  
const getYearsArr = () => {
    let thisYear = new Date().getFullYear();
    let arr = [];
    for (let i = thisYear; i > 1950; i--) {
      arr.push(i);
    }
    yearsArr = arr;
    return;
};
  // const ITEM_HEIGHT = 48;
  // const ITEM_PADDING_TOP = 8;
  // const MenuProps = {
  //   PaperProps: {
  //     style: {
  //       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
  //       width: 250,
  //     },
  //   },
  // };
const AddGroup = ({ isEditing, setIsEditing }) => {
  useEffect(() => {
    getYearsArr();
  }, []);
  // state
  const [step, setStep] = useState(1);
  const [population, setPopulation] = useState("");
  const [years, setYears] = useState([]);
  const handleYearsChange = (event) => {
    const {
      target: { value },
    } = event;
    setYears(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value,
    );
  };

  // functions
  const goPrev = () => {
    setStep((step) => {
      return step - 1;
    });
  };
  const goNext = () => {
    switch (step) {
      case 1:
        setStep(2);
        break;
      case 2:
        setStep(3);
        break;
      case 3:
        setIsEditing(false);
        break;
    }
  };

  return (
    <div className=" w-11/12 mx-auto">
      {/* step */}
      <div className="w-full flex justify-center items-end gap-5 mb-14">
        <div className="w-1/3 flex flex-col justify-start items-start">
          <div
            className={`mb-3 text-xl font-bold ${
              step >= 1 ? "text-[#0075AC]" : "text-[#4F4F4F]/50"
            }`}>
            1.新增集團資料
            <span className="ml-2 font-thin text-sm">建立集團(總部)資料</span>
          </div>
          <div
            className={`w-full h-[3px] rounded-full ${
              step >= 1 ? " bg-[#2291C5] " : " bg-[#4F4F4F]/50 "
            }}`}></div>
        </div>
        <div className="w-1/3 flex flex-col justify-start items-start">
          <div
            className={`mb-3 text-xl font-bold ${
              step >= 2 ? " text-[#2291C5] " : "text-[#4F4F4F]/50"
            }`}>
            2.新增據點資料
            <span className="ml-2 font-thin text-sm">建立集團旗下據點資料</span>
          </div>
          <div
            className={`w-full h-[3px] rounded-full ${
              step >= 2 ? " bg-[#2291C5] " : " bg-[#4F4F4F]/50 "
            }}`}></div>
        </div>
        <div className="w-1/3 flex flex-col justify-start items-start">
          <div
            className={`mb-3 text-xl font-bold ${
              step >= 3 ? " text-[#2291C5] " : "text-[#4F4F4F]/50"
            }`}>
            3.新增成功
            <span className="ml-2 font-thin text-sm">建立完成</span>
          </div>
          <div
            className={`w-full h-[3px] rounded-full ${
              step >= 3 ? " bg-[#2291C5] " : " bg-[#4F4F4F]/50 "
            }}`}></div>
        </div>
      </div>
      {/* form */}
      {/* form-1 */}
      <div className={step == 1 ? "grid grid-cols-3 gap-5 w-full" : "hidden"}>
        <div className="flex flex-col justify-start items-start">
          <label htmlFor="companyName" className="mb-2">
            <span className="text-red-500">*</span>公司名稱：
          </label>
          <input
            id="companyName"
            name="companyName"
            type="text"
            placeholder="請輸入集團公司名稱"
            className="w-full px-3 py-2  border border-[#4DA7B0] rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-start items-start">
          <label htmlFor="GUINumber" className="mb-2">
            <span className="text-red-500">*</span>統一編號：
          </label>
          <input
            id="GUINumber"
            name="GUINumber"
            type="text"
            placeholder="請輸入集團公司統一編號"
            className="w-full px-3 py-2  border border-[#4DA7B0] rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-start items-start">
          <label htmlFor="GUINumber" className="mb-2">
            產業別：
          </label>
          <input
            id="GUINumber"
            name="GUINumber"
            type="text"
            placeholder="請輸入集團產業別"
            className="w-full px-3 py-2  border border-[#4DA7B0] rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-start items-start">
          <label htmlFor="manInCharge" className="mb-2">
            <span className="text-red-500">*</span>公司負責人：
          </label>
          <input
            id="manInCharge"
            name="manInCharge"
            type="text"
            placeholder="請輸入集團公司登記負責人"
            className="w-full px-3 py-2  border border-[#4DA7B0] rounded-lg"
          />
        </div>
        <div className="col-span-2 flex flex-col justify-start items-start">
          <label htmlFor="companyAddress" className="mb-2">
            公司登記地址：
          </label>
          <input
            id="companyAddress"
            name="companyAddress"
            type="text"
            placeholder="請輸入請輸入公司登記地址"
            className="w-full px-3 py-2  border border-[#4DA7B0] rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-start items-start">
          <label htmlFor="companyPhone" className="mb-2">
            公司登記電話：
          </label>
          <input
            id="companyPhone"
            name="companyPhone"
            type="text"
            placeholder="請輸入集團公司登記電話"
            className="w-full px-3 py-2  border border-[#4DA7B0] rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-start items-start">
          <label htmlFor="companyPopulation" className="mb-2">
            公司規模(人數)：
          </label>
          <select
            onChange={(e) => {
              console.log(e.target.value);
              setPopulation(e.target.value);
            }}
            id="companyPopulation"
            name="companyPopulation"
            placeholder=""
            className={`w-full px-3 py-2  border border-[#4DA7B0] rounded-lg ${
              population == "" && "text-[#BDBDBD]"
            }`}>
            <option value="">請輸入集團公司現規模人數</option>
            <option value="1">100人以上</option>
          </select>
        </div>
      </div>

      {/* form-2 */}
      <div className={step == 2 ? "grid grid-cols-3 gap-5 w-full" : "hidden"}>
        <div className="flex flex-col justify-start items-start">
          <label htmlFor="placeName" className="mb-2">
            公司據點名稱：
          </label>
          <input
            id="placeName"
            name="placeName"
            type="text"
            placeholder="請輸入據點名稱"
            className="w-full px-3 py-2  border border-[#4DA7B0] rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-start items-start">
          <label htmlFor="placeNo" className="mb-2">
            公司據點編號：
          </label>
          <input
            id="placeNo"
            name="placeNo"
            type="text"
            placeholder="請輸入據點統一編號"
            className="w-full px-3 py-2  border border-[#4DA7B0] rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-start items-start">
          <label htmlFor="companyAddress" className="mb-2">
            公司登記地址：
          </label>
          <input
            id="companyAddress"
            name="companyAddress"
            type="text"
            placeholder="請輸入請輸入公司登記地址"
            className="w-full px-3 py-2  border border-[#4DA7B0] rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-start items-start">
          <label htmlFor="checkYears" className="mb-2">
            據點盤查年度：
          </label>
        </div>
        <div className=" flex flex-col justify-start items-start">
          <label htmlFor="companyArea" className="mb-2">
            樓地板面積：
          </label>
          <input
            id="companyArea"
            name="companyArea"
            type="text"
            placeholder="請輸入面積"
            className="w-full px-3 py-2  border border-[#4DA7B0] rounded-lg"
          />
        </div>
        <div className="flex justify-between items-end">
          <div className="w-4/5 flex flex-col justify-start items-start">
            <label htmlFor="GWP" className="mb-2">
              GWP版本：
            </label>
            <select
              name="GWP"
              id="GWP"
              className={`w-full px-3 py-2  border border-[#4DA7B0] rounded-lg
            }`}>
              <option value="GWP版本AR6(2021)">GWP版本AR6(2021)</option>
            </select>
          </div>
          <button className="w-1/10 aspect-square bg-[#EB5757] rounded-lg p-1 flex justify-center items-center">
            <Image width={24} height={24} alt="" src={"/icon/delete.svg"} />
          </button>
        </div>

        <div className="col-span-3 flex flex-col justify-center items-center">
          <button className="flex justify-center items-center rounded-lg text-white mb-2 py-2 px-5 bg-[#0075AC]">
            <Image width={20} height={20} alt="" src={"/icon/add.svg"} />{" "}
            新增公司據點數量
          </button>
          <div className="text-sm text-[#EB5757]">
            (若填寫欄位不足,請點選此按鈕增加欄位,請務必留存一筆資料)
          </div>
        </div>
      </div>
      {/* form-3 */}
      <div
        className={`w-full h-full  flex-col justify-center items-center ${
          step == 3 ? "flex" : "hidden"
        }`}>
        <div className="text-2xl text-[#23AFA4] font-bold">
          集團資料新增成功
        </div>
        <Image
          width={100}
          height={100}
          alt=""
          src={"/icon/green-success.svg"}
        />
      </div>
      {/* step button */}
      <div className="mt-10 w-full flex justify-center items-center gap-5">
        <button
          className={`rounded-md text-[#289D9B] py-3 px-16 border border-[#289D9B] bg-white ${
            step < 2 && "hidden"
          }`}
          onClick={() => {
            goPrev();
          }}>
          上一步
        </button>
        <button
          className="rounded-md text-white py-3 px-16 bg-gradient-to-b from-[#63C2CF] to-[#199694]"
          onClick={() => {
            goNext();
          }}>
          下一步
        </button>
      </div>
    </div>
  );
};

export default AddGroup;
