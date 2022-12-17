import React from 'react'
import Image from 'next/image';
const Title = ({text,span,rowSpan}) =>{
  return (
    <div
      className={`col-[span_${span}/span_${span}] ${
        rowSpan ? `row-span-${rowSpan}`:""
      } p-2 flex justify-center items-center font-bold text-white text-lg bg-[#2291C5] border border-white`}>
      <div>{text}</div>
    </div>
  );
}
const SubTitle = ({ text, span }) => {
  return (
    <div
      className={`p-2 col-[span_${span}_/span_${span}] border border-white bg-[#A9D6EB] text-center`}>
      {text}
    </div>
  );
}
const EpaList = () => {
  return (
    <div>
      <div className="flex justify-between items-start mb-6">
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
              <select name="export" id="export" className="text-[#828282]">
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
      <div className="w-full grid grid-cols-[repeat(193,_40px)]  overflow-x-scroll">
        <Title text={"製程"} span={8} />
        <Title text={"設備"} span={8} />
        <Title text={"原燃物料或產品"} span={12} />
        <Title text={"排放源資料"} span={6} />
        <Title text={"原燃物料或產品"} span={8} />
        <Title text={"排放係數(公噸/公噸or公秉or立方公尺)數據"} span={50} />
        <Title text={"排放係數(公噸/公噸or公秉or立方公尺)數據"} span={45} />
        <Title text={"排放係數(公噸/公噸or公秉or立方公尺)數據"} span={40} />
        <Title text={"單一排放源排放當量小計(CO2e公噸/年)9"} span={6} />
        <Title
          text={"單一排放源生質燃料之CO2排放當量小計(CO2e公噸/年)10"}
          span={6}
        />
      </div>
    </div>
  );
}

export default EpaList