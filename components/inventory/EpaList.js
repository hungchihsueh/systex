import React from "react";
import Image from "next/image";
// const Title = ({ text, span, rowSpan }) => {
//   let theClass = `text-center col-span-${span} row-span-${rowSpan} p-3 flex justify-center items-center font-bold text-white text-lg bg-[#2291C5] border border-white`;
//   return (
//     <div className={theClass}>
//       <div>{text}</div>
//     </div>
//   );
// };
// const SubTitle = ({ text, span,isEven }) => {
//   return (
//     <div
//       className={`p-3 ${span && `col-span-${span}`} border border-white ${
//         isEven ? "bg-[#86C1DD]" : "bg-[#A9D6EB]"
//       }  text-center flex justify-center items-center text-xl text-[#005E8A] font-bold`}>
//       {text}
//     </div>
//   );
// };
const EpaList = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="flex w-full justify-between items-start mb-6">
        <div className=" w-full text-2xl font-black text-[#467980]">
          環保署清冊
        </div>
      </div>
      <div className="w-full mb-3 flex justify-between items-start">
        <div>
          <div className="text-base font-bold text-[#467980] mb-3">
            定期盤查程序單
          </div>
          <div className="text-base text-[#467980]">
            盤查表單版次:V1.0版本
            <br /> 公司據點名稱:精誠資訊股份有限公司台中分公司
          </div>
        </div>
        <div>
          <div className="mb-2 flex justify-between items-center gap-5">
            <div className="flex justify-start items-center gap-2">
              <label
                htmlFor="export"
                className="bg-[#BDBDBD] rounded-xl py-1 px-2 text-sm text-white">
                匯出方式
              </label>
              <select name="export" id="export" className="text-[#828282] border-none ">
                <option value="">請選擇方式</option>
              </select>
            </div>
            <button className="text-sm rounded-xl py-2 px-5 bg-[#0075AC] text-white flex gap-1">
              <Image width={20} height={20} alt="" src={"/icon/export.svg"} />{" "}
              匯出
            </button>
          </div>
          <div className="text-[#828282] text-base">
            盤查起訖時間:2021-01-01~2021-12-31
          </div>
        </div>
      </div>
      <div className="w-full overflow-x-scroll h-full">
        <div className="w-[9000px] long-table">
          <div className="p-3 col-span-2 bg-[#2291C5] text-white font-bold text-xl flex justify-center items-center border border-white">
            製程
          </div>
          <div className="p-3 col-span-2 bg-[#2291C5] text-white font-bold text-xl flex justify-center items-center border border-white">
            設備
          </div>
          <div className="p-3 col-span-3 bg-[#2291C5] text-white font-bold text-xl flex justify-center items-center border border-white">
            原燃物料或產品
          </div>
          <div className="p-3 col-span-2 bg-[#2291C5] text-white font-bold text-xl flex justify-center items-center border border-white">
            排放源資料
          </div>
          <div className="p-3 col-span-2 bg-[#2291C5] text-white font-bold text-xl flex justify-center items-center border border-white">
            原燃物料或產品
          </div>
          <div className="p-3 col-span-11 bg-[#2291C5] text-white font-bold text-xl flex justify-center items-center border border-white">
            排放係數(公噸/公噸or公秉or立方公尺)數據
          </div>
          <div className="p-3 col-span-9 bg-[#2291C5] text-white font-bold text-xl flex justify-center items-center border border-white">
            排放係數(公噸/公噸or公秉or立方公尺)數據
          </div>
          <div className="p-3 col-span-11 bg-[#2291C5] text-white font-bold text-xl flex justify-center items-center border border-white">
            排放係數(公噸/公噸or公秉or立方公尺)數據
          </div>
          <div className="p-3 row-span-2  bg-[#2291C5] text-white font-bold text-xl flex justify-center items-center border border-white">
            單一排放源排放當量小計(CO2e公噸/年)9
          </div>
          <div className="p-3 row-span-2  bg-[#2291C5] text-white font-bold text-xl flex justify-center items-center border border-white">
            單一排放源生質燃料之CO2排放當量小計(CO2e公噸/年)10
          </div>
          <div className="p-3 row-span-2  bg-[#2291C5] text-white font-bold text-xl flex justify-center items-center border border-white">
            單一排放源占 排放總量比 (%)11
          </div>
          <div className="bg-[#A9D6EB] border border-white text-xl text-[#005E8A] p-3 font-bold flex justify-center items-center">
            編號
          </div>
          <div className="bg-[#86C1DD] border border-white text-xl text-[#005E8A] p-3 font-bold flex justify-center items-center">
            代碼
          </div>
          <div className="bg-[#A9D6EB] border border-white text-xl text-[#005E8A] p-3 font-bold flex justify-center items-center">
            編號
          </div>
          <div className="bg-[#86C1DD] border border-white text-xl text-[#005E8A] p-3 font-bold flex justify-center items-center">
            代碼
          </div>
          <div className="bg-[#A9D6EB] border border-white text-xl text-[#005E8A] p-3 font-bold flex justify-center items-center">
            代碼
          </div>
          <div className="bg-[#86C1DD] border border-white text-xl text-[#005E8A] p-3 font-bold flex justify-center items-center">
            名稱
          </div>
          <div className="bg-[#A9D6EB] border border-white text-xl text-[#005E8A] p-3 font-bold flex justify-center items-center">
            是否屬生質能源
          </div>
          <div className="bg-[#86C1DD] border border-white text-xl text-[#005E8A] p-3 font-bold flex justify-center items-center">
            範疇別
          </div>
          <div className="bg-[#A9D6EB] border border-white text-xl text-[#005E8A] p-3 font-bold flex justify-center items-center">
            排放形式
          </div>
          <div className="bg-[#86C1DD] border border-white text-xl text-[#005E8A] p-3 font-bold flex justify-center items-center">
            活動數據
          </div>
          <div className="bg-[#A9D6EB] border border-white text-xl text-[#005E8A] p-3 font-bold flex justify-center items-center">
            單位
          </div>
          <div className="bg-[#86C1DD] border border-white text-xl text-[#005E8A] p-3 font-bold flex justify-center items-center">
            溫室氣體#1
          </div>
          <div className="bg-[#A9D6EB] border border-white text-xl text-[#005E8A] p-3 font-bold flex justify-center items-center">
            係數類型
          </div>
          <div className="bg-[#86C1DD] border border-white text-xl text-[#005E8A] p-3 font-bold flex justify-center items-center">
            預設排放係數
          </div>
          <div className="bg-[#A9D6EB] border border-white text-xl text-[#005E8A] p-3 font-bold flex justify-center items-center">
            預設係數來源
          </div>
          <div className="bg-[#86C1DD] border border-white text-xl text-[#005E8A] p-3 font-bold flex justify-center items-center">
            自訂排放係數
          </div>
          <div className="bg-[#A9D6EB] border border-white text-xl text-[#005E8A] p-3 font-bold flex justify-center items-center">
            自訂係數來源
          </div>
          <div className="bg-[#86C1DD] border border-white text-xl text-[#005E8A] p-3 font-bold flex justify-center items-center">
            係數單位
          </div>
          <div className="bg-[#A9D6EB] border border-white text-xl text-[#005E8A] p-3 font-bold flex justify-center items-center">
            係數種類
          </div>
          <div className="bg-[#86C1DD] border border-white text-xl text-[#005E8A] p-3 font-bold flex justify-center items-center">
            排放量(公噸/年)
          </div>
          <div className="bg-[#A9D6EB] border border-white text-xl text-[#005E8A] p-3 font-bold flex justify-center items-center">
            GWP
          </div>
          <div className="bg-[#86C1DD] border border-white text-xl text-[#005E8A] p-3 font-bold flex justify-center items-center">
            排放當量(公噸CO2e/年)
          </div>
          <div className="bg-[#A9D6EB] border border-white text-xl text-[#005E8A] p-3 font-bold flex justify-center items-center">
            溫室氣體#2
          </div>
          <div className="bg-[#86C1DD] border border-white text-xl text-[#005E8A] p-3 font-bold flex justify-center items-center">
            係數類型
          </div>
          <div className="bg-[#A9D6EB] border border-white text-xl text-[#005E8A] p-3 font-bold flex justify-center items-center">
            預設排放係數
          </div>
          <div className="bg-[#86C1DD] border border-white text-xl text-[#005E8A] p-3 font-bold flex justify-center items-center">
            預設係數來源
          </div>
          <div className="bg-[#A9D6EB] border border-white text-xl text-[#005E8A] p-3 font-bold flex justify-center items-center">
            自訂排放係數
          </div>
          <div className="bg-[#86C1DD] border border-white text-xl text-[#005E8A] p-3 font-bold flex justify-center items-center">
            自訂排放來源
          </div>
          <div className="bg-[#A9D6EB] border border-white text-xl text-[#005E8A] p-3 font-bold flex justify-center items-center">
            係數單位
          </div>
          <div className="bg-[#86C1DD] border border-white text-xl text-[#005E8A] p-3 font-bold flex justify-center items-center">
            係數種類
          </div>
          <div className="bg-[#A9D6EB] border border-white text-xl text-[#005E8A] p-3 font-bold flex justify-center items-center">
            排放量(公噸/年)
          </div>
          <div className="bg-[#86C1DD] border border-white text-xl text-[#005E8A] p-3 font-bold flex justify-center items-center">
            溫室氣體#3
          </div>
          <div className="bg-[#A9D6EB] border border-white text-xl text-[#005E8A] p-3 font-bold flex justify-center items-center">
            係數類型
          </div>
          <div className="bg-[#86C1DD] border border-white text-xl text-[#005E8A] p-3 font-bold flex justify-center items-center">
            預設排放係數
          </div>
          <div className="bg-[#A9D6EB] border border-white text-xl text-[#005E8A] p-3 font-bold flex justify-center items-center">
            預設係數來源
          </div>
          <div className="bg-[#86C1DD] border border-white text-xl text-[#005E8A] p-3 font-bold flex justify-center items-center">
            自訂排放係數
          </div>
          <div className="bg-[#A9D6EB] border border-white text-xl text-[#005E8A] p-3 font-bold flex justify-center items-center">
            自訂係數來源
          </div>
          <div className="bg-[#86C1DD] border border-white text-xl text-[#005E8A] p-3 font-bold flex justify-center items-center">
            係數單位
          </div>
          <div className="bg-[#A9D6EB] border border-white text-xl text-[#005E8A] p-3 font-bold flex justify-center items-center">
            係數種類
          </div>
          <div className="bg-[#86C1DD] border border-white text-xl text-[#005E8A] p-3 font-bold flex justify-center items-center">
            排放量(公噸/年)
          </div>
          <div className="bg-[#A9D6EB] border border-white text-xl text-[#005E8A] p-3 font-bold flex justify-center items-center">
            GWP
          </div>
          <div className="bg-[#86C1DD] border border-white text-xl text-[#005E8A] p-3 font-bold flex justify-center items-center">
            排放當量(公噸CO2e/年)
          </div>
          {/* data */}
          <div className="bg-[#A3A5BF1A] p-3 text-base flex justify-center items-center">
            G01
          </div>
          <div className="bg-[#A3A5BF1A] p-3 text-base flex justify-center items-center">
            其他未分類製程
          </div>
          <div className="bg-[#A3A5BF1A] p-3 text-base flex justify-center items-center">
            GM01
          </div>
          <div className="bg-[#A3A5BF1A] p-3 text-base flex justify-center items-center">
            柴油引擎
          </div>
          <div className="bg-[#A3A5BF1A] p-3 text-base flex justify-center items-center">
            170006
          </div>
          <div className="bg-[#A3A5BF1A] p-3 text-base flex justify-center items-center">
            柴油
          </div>
          <div className="bg-[#A3A5BF1A] p-3 text-base flex justify-center items-center">
            否
          </div>
          <div className="bg-[#A3A5BF1A] p-3 text-base flex justify-center items-center">
            範疇1
          </div>
          <div className="bg-[#A3A5BF1A] p-3 text-base flex justify-center items-center">
            固定(E)
          </div>
          <div className="bg-[#A3A5BF1A] p-3 text-base flex justify-center items-center">
            2,715.7340
          </div>
          <div className="bg-[#A3A5BF1A] p-3 text-base flex justify-center items-center">
            公秉
          </div>
          <div className="bg-[#A3A5BF1A] p-3 text-base flex justify-center items-center">
            CO2
          </div>
          <div className="bg-[#A3A5BF1A] p-3 text-base flex justify-center items-center">
            CO2
          </div>
          <div className="bg-[#A3A5BF1A] p-3 text-base flex justify-center items-center">
            CO2
          </div>
          <div className="bg-[#A3A5BF1A] p-3 text-base flex justify-center items-center">
            CO2
          </div>
          <div className="bg-[#A3A5BF1A] p-3 text-base flex justify-center items-center">
            CO2
          </div>
          <div className="bg-[#A3A5BF1A] p-3 text-base flex justify-center items-center">
            CO2
          </div>
          <div className="bg-[#A3A5BF1A] p-3 text-base flex justify-center items-center">
            CO2
          </div>
          <div className="bg-[#A3A5BF1A] p-3 text-base flex justify-center items-center">
            CO2
          </div>
          <div className="bg-[#A3A5BF1A] p-3 text-base flex justify-center items-center">
            CO2
          </div>
          <div className="bg-[#A3A5BF1A] p-3 text-base flex justify-center items-center">
            CO2
          </div>
          <div className="bg-[#A3A5BF1A] p-3 text-base flex justify-center items-center">
            CO2
          </div>
          <div className="bg-[#A3A5BF1A] p-3 text-base flex justify-center items-center">
            CO2
          </div>
          <div className="bg-[#A3A5BF1A] p-3 text-base flex justify-center items-center">
            CO2
          </div>
          <div className="bg-[#A3A5BF1A] p-3 text-base flex justify-center items-center">
            CO2
          </div>
          <div className="bg-[#A3A5BF1A] p-3 text-base flex justify-center items-center">
            CO2
          </div>
          <div className="bg-[#A3A5BF1A] p-3 text-base flex justify-center items-center">
            CO2
          </div>
          <div className="bg-[#A3A5BF1A] p-3 text-base flex justify-center items-center">
            CO2
          </div>
          <div className="bg-[#A3A5BF1A] p-3 text-base flex justify-center items-center">
            CO2
          </div>
          <div className="bg-[#A3A5BF1A] p-3 text-base flex justify-center items-center">
            CO2
          </div>
          <div className="bg-[#A3A5BF1A] p-3 text-base flex justify-center items-center">
            CO2
          </div>
          <div className="bg-[#A3A5BF1A] p-3 text-base flex justify-center items-center">
            CO2
          </div>
          <div className="bg-[#A3A5BF1A] p-3 text-base flex justify-center items-center">
            CO2
          </div>
          <div className="bg-[#A3A5BF1A] p-3 text-base flex justify-center items-center">
            CO2
          </div>
          <div className="bg-[#A3A5BF1A] p-3 text-base flex justify-center items-center">
            CO2
          </div>
          <div className="bg-[#A3A5BF1A] p-3 text-base flex justify-center items-center">
            CO2
          </div>
          <div className="bg-[#A3A5BF1A] p-3 text-base flex justify-center items-center">
            CO2
          </div>
          <div className="bg-[#A3A5BF1A] p-3 text-base flex justify-center items-center">
            CO2
          </div>
          <div className="bg-[#A3A5BF1A] p-3 text-base flex justify-center items-center">
            CO2
          </div>
          <div className="bg-[#A3A5BF1A] p-3 text-base flex justify-center items-center">
            CO2
          </div>
          <div className="bg-[#A3A5BF1A] p-3 text-base flex justify-center items-center">
            CO2
          </div>
          <div className="bg-[#A3A5BF1A] p-3 text-base flex justify-center items-center">
            CO2
          </div>
          <div className="bg-[#A3A5BF1A] p-3 text-base flex justify-center items-center">
            CO2
          </div>
          <div className="bg-[#A3A5BF1A] p-3 text-base flex justify-center items-center">
            CO2
          </div>
          <div className="bg-[#A3A5BF1A] p-3 text-base flex justify-center items-center">
            CO2
          </div>
        </div>
      </div>
      <div className="w-full mt-6">
        <button className="block mx-auto py-3 px-20 text-2xl text-white font-black bg-gradient-to-b from-[#63C2CF] to-[#199694] rounded-lg">
          取消離開
        </button>
      </div>
    </div>
  );
};

export default EpaList;
