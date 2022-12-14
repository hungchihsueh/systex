import React, { useState } from "react";
const source1 = [
  "煤",
  "汽油",
  "柴油",
  "重油",
  "液化石油氣",
  "天然氣",
  "其他燃料",
  "其他燃料油",
  "其他燃料氣",
  "生質燃料",
];
const source2 = ["汽油", "柴油", "電力", "其他燃料"];
const directEmissions = ["乙炔", "滲碳方式進行金屬及製品表面處理"];
const anthropogenicGas = [
  "消防設備",
  "氣體絕緣斷路器",
  "化糞池(工時)",
  "冷媒設備",
];
const landUseGas = [
  "林地",
  "農地",
  "牧草地",
  "濕地",
  "居留地",
  "其他土地",
];
// main function
const IdentificationOfEmissionSources = () => {
  // state
  const [selectSource1, setSelectSource1] = useState([]);
  const [selectSource2, setSelectSource2] = useState([]);
  const [selectDirectEmissions, setSelectDirectEmissions] = useState([]);
  const [selectAnthropogenicGas, setSelectAnthropogenicGas] = useState([]);
  const [selectLandUseGas, setSelectLandUseGas] = useState([]);
  // template
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div className=" w-full text-2xl font-black text-[#467980]">
          排放源鑑別-鑑別資料新增
        </div>
      </div>
      <div className="w-full overflow-hidden rounded-lg border border-[#63C2CF]">
        <div className="bg-[#63C2CF] w-full p-3 text-white text-center font-bold">
          類別一:直接溫室氣體排放與移除
        </div>
        <div className="px-8 py-6">
          {/* 1-1 */}
          <div className="mb-10 flex justify-between items-center gap-2">
            <div className="w-1/5">1.1 固定式燃料源</div>
            <div className="w-4/5 flex flex-wrap justify-start items-center gap-4">
              {source1.map((source, i) => {
                return (
                  <button
                    key={`${source}${i}`}
                    className={`rounded-md px-4 py-2 border border-[#63C2CF] text-[#63C2CF] whitespace-nowrap ${
                      selectSource1.includes(source) &&
                      "!bg-[#2291C5] !border-[#2291C5] !text-white"
                    }`}
                    onClick={() => {
                      console.log(selectSource1.includes(source));
                      if (!selectSource1.includes(source)) {
                        setSelectSource1([...selectSource1, source]);
                      } else {
                        let newArr = [...selectSource1].filter(
                          (item) => item !== source,
                        );
                        setSelectSource1(newArr);
                      }
                    }}>
                    {source}
                  </button>
                );
              })}
            </div>
          </div>
          {/* 1-2 */}
          <div className="mb-10 flex justify-between items-center gap-2">
            <div className="w-1/5">1.2 移動式燃料源</div>
            <div className=" w-4/5 flex flex-wrap justify-start items-center gap-4">
              {source2.map((source, i) => {
                return (
                  <button
                    key={`${source}${i}`}
                    className={`rounded-md px-4 py-2 border border-[#63C2CF] text-[#63C2CF] whitespace-nowrap ${
                      selectSource2.includes(source) &&
                      "!bg-[#2291C5] !border-[#2291C5] !text-white"
                    }`}
                    onClick={() => {
                      console.log(selectSource2.includes(source));
                      if (!selectSource2.includes(source)) {
                        setSelectSource2([...selectSource2, source]);
                      } else {
                        let newArr = [...selectSource2].filter(
                          (item) => item !== source,
                        );
                        setSelectSource2(newArr);
                      }
                    }}>
                    {source}
                  </button>
                );
              })}
            </div>
          </div>
          {/* 1-3 */}
          <div className="mb-10 flex justify-between items-center gap-2">
            <div className="w-1/5">1.3 產業過程之直接排放</div>
            <div className=" w-4/5 flex flex-wrap justify-start items-center gap-4">
              {directEmissions.map((emission, i) => {
                return (
                  <button
                    key={`${emission}${i}`}
                    className={`rounded-md px-4 py-2 border border-[#63C2CF] text-[#63C2CF] whitespace-nowrap ${
                      selectDirectEmissions.includes(emission) &&
                      "!bg-[#2291C5] !border-[#2291C5] !text-white"
                    }`}
                    onClick={() => {
                      console.log(selectDirectEmissions.includes(emission));
                      if (!selectDirectEmissions.includes(emission)) {
                        setSelectDirectEmissions([
                          ...selectDirectEmissions,
                          emission,
                        ]);
                      } else {
                        let newArr = [...selectDirectEmissions].filter(
                          (item) => item !== emission,
                        );
                        setSelectDirectEmissions(newArr);
                      }
                    }}>
                    {emission}
                  </button>
                );
              })}
            </div>
          </div>
          {/* 1-4 */}
          <div className="mb-10 flex justify-between items-center gap-2">
            <div className="w-1/5">
              1.4 人為系統所釋放的溫室氣體 產生的直接暫時性排放
            </div>
            <div className=" w-4/5 flex flex-wrap justify-start items-center gap-4">
              {anthropogenicGas.map((gas, i) => {
                return (
                  <button
                    key={`${gas}${i}`}
                    className={`rounded-md px-4 py-2 border border-[#63C2CF] text-[#63C2CF] whitespace-nowrap ${
                      selectAnthropogenicGas.includes(gas) &&
                      "!bg-[#2291C5] !border-[#2291C5] !text-white"
                    }`}
                    onClick={() => {
                      if (!selectAnthropogenicGas.includes(gas)) {
                        setSelectAnthropogenicGas([
                          ...selectAnthropogenicGas,
                          gas,
                        ]);
                      } else {
                        let newArr = [...selectAnthropogenicGas].filter(
                          (item) => item !== gas,
                        );
                        setSelectAnthropogenicGas(newArr);
                      }
                    }}>
                    {gas}
                  </button>
                );
              })}
            </div>
          </div>
          {/* 1-5 */}
          <div className=" flex justify-between items-center gap-2">
            <div className="w-1/5">
              1.5 土地使用、土地使用更及林業之直接排放
            </div>
            <div className=" w-4/5 flex flex-wrap justify-start items-center gap-4">
              {landUseGas.map((gas, i) => {
                return (
                  <button
                    key={`${gas}${i}`}
                    className={`rounded-md px-4 py-2 border border-[#63C2CF] text-[#63C2CF] whitespace-nowrap ${
                      selectLandUseGas.includes(gas) &&
                      "!bg-[#2291C5] !border-[#2291C5] !text-white"
                    }`}
                    onClick={() => {
                      if (!selectLandUseGas.includes(gas)) {
                        setSelectLandUseGas([...selectLandUseGas, gas]);
                      } else {
                        let newArr = [...selectLandUseGas].filter(
                          (item) => item !== gas,
                        );
                        setSelectLandUseGas(newArr);
                      }
                    }}>
                    {gas}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdentificationOfEmissionSources;
