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
const electricity = [
  "電力",
  "自用電力",
  "分攤電力",
  "自發自用再生能源",
  "轉供再生能源",
  "再生能源憑證",
];
const steam = ["外購蒸氣"];
const transport = [
  "貨物上游運輸與配送",
  "貨物下游運輸與配送",
  "員工通勤",
  "輸運客戶與訪客",
  "商務旅運",
];
const orgGas = [
  "購買商品",
  "資本貨物",
  "處理固體和液體廢棄物排放量",
  "未規定於上述細分類中，由服務使用產生排放(諮商、清潔、維護、郵遞、銀行業務等)",
];
const product = [
  "產品使用階段產生之排放或清除",
  "下游承租的資產",
  "產品生命終期排放量",
  "投資產生排放量",
];
const other = ["特許行業", "加盟"];
// main function
const IdentificationOfEmissionSources = () => {
  // state
  const [selectSource1, setSelectSource1] = useState([]);
  const [selectSource2, setSelectSource2] = useState([]);
  const [selectDirectEmissions, setSelectDirectEmissions] = useState([]);
  const [selectAnthropogenicGas, setSelectAnthropogenicGas] = useState([]);
  const [selectLandUseGas, setSelectLandUseGas] = useState([]);
  const [selectElectricity, setSelectElectricity] = useState([]);
  const [selectSteam, setSelectsteam] = useState([]);
  const [selectTransport, setSelectTransport] = useState([]);
  const [selectOrgGas, setSelectOrgGas] = useState([]);
  const [selectProduct, setSelectProduct] = useState([]);
  const [selectOther, setSelectOther] = useState([]);
  // template
  return (
    <div>
      <div className="flex justify-between items-start mb-6">
        <div className=" w-full text-2xl font-black text-[#467980]">
          排放源鑑別-鑑別資料新增
        </div>
      </div>
      <div className="w-full mb-6 overflow-hidden rounded-lg border border-[#63C2CF]">
        <div className="bg-[#63C2CF] w-full p-3 text-white text-center font-bold">
          類別一:直接溫室氣體排放與移除
        </div>
        <div className="px-8 py-6">
          {/* 1-1 */}
          <div className="mb-10 flex justify-between items-start gap-5">
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
          <div className="mb-10 flex justify-between items-start gap-5">
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
          <div className="mb-10 flex justify-between items-start gap-5">
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
          <div className="mb-10 flex justify-between items-start gap-5">
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
          <div className=" flex justify-between items-start gap-5">
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
      {/* cat-2 */}
      <div className="w-full mb-6 overflow-hidden rounded-lg border border-[#63C2CF]">
        <div className="bg-[#63C2CF] w-full p-3 text-white text-center font-bold">
          類別二:由輸入能源產生之間接溫室氣體排放
        </div>
        <div className="px-8 py-6">
          {/* 2-1 */}
          <div className="mb-10 flex justify-between items-start gap-5">
            <div className="w-1/5">2.1 外購電力</div>
            <div className="w-4/5 flex flex-wrap justify-start items-center gap-4">
              {electricity.map((ele, i) => {
                return (
                  <button
                    key={`${ele}${i}`}
                    className={`rounded-md px-4 py-2 border border-[#63C2CF] text-[#63C2CF] whitespace-nowrap ${
                      selectElectricity.includes(ele) &&
                      "!bg-[#2291C5] !border-[#2291C5] !text-white"
                    }`}
                    onClick={() => {
                      console.log(selectElectricity.includes(ele));
                      if (!selectElectricity.includes(ele)) {
                        setSelectElectricity([...selectElectricity, ele]);
                      } else {
                        let newArr = [...selectElectricity].filter(
                          (item) => item !== ele,
                        );
                        setSelectElectricity(newArr);
                      }
                    }}>
                    {ele}
                  </button>
                );
              })}
            </div>
          </div>
          {/* 2-2 */}
          <div className="mb-10 flex justify-between items-start gap-5">
            <div className="w-1/5">2.2 外購蒸氣</div>
            <div className="w-4/5 flex flex-wrap justify-start items-center gap-4">
              {steam.map((steam, i) => {
                return (
                  <button
                    key={`${steam}${i}`}
                    className={`rounded-md px-4 py-2 border border-[#63C2CF] text-[#63C2CF] whitespace-nowrap ${
                      selectSteam.includes(steam) &&
                      "!bg-[#2291C5] !border-[#2291C5] !text-white"
                    }`}
                    onClick={() => {
                      console.log(selectSteam.includes(steam));
                      if (!selectSteam.includes(steam)) {
                        setSelectsteam([...selectSteam, steam]);
                      } else {
                        let newArr = [...selectSteam].filter(
                          (item) => item !== steam,
                        );
                        setSelectsteam(newArr);
                      }
                    }}>
                    {steam}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* cat-3 */}
      <div className="w-full mb-6 overflow-hidden rounded-lg border border-[#63C2CF]">
        <div className="bg-[#63C2CF] w-full p-3 text-white text-center font-bold">
          類別三:運輸產生之間接溫室氣體排放
        </div>
        <div className="px-8 py-6">
          {/* 3-1 */}
          <div className="flex justify-between items-start gap-5">
            <div className="w-1/5">3. 運輸產生之間接溫室氣體排放</div>
            <div className="w-4/5 flex flex-wrap justify-start items-center gap-4">
              {transport.map((transport, i) => {
                return (
                  <button
                    key={`${transport}${i}`}
                    className={`rounded-md px-4 py-2 border border-[#63C2CF] text-[#63C2CF] whitespace-nowrap ${
                      selectTransport.includes(transport) &&
                      "!bg-[#2291C5] !border-[#2291C5] !text-white"
                    }`}
                    onClick={() => {
                      console.log(selectTransport.includes(transport));
                      if (!selectTransport.includes(transport)) {
                        setSelectTransport([...selectTransport, transport]);
                      } else {
                        let newArr = [...selectTransport].filter(
                          (item) => item !== transport,
                        );
                        setSelectTransport(newArr);
                      }
                    }}>
                    {transport}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* cat-4 */}
      <div className="w-full mb-6 overflow-hidden rounded-lg border border-[#63C2CF]">
        <div className="bg-[#63C2CF] w-full p-3 text-white text-center font-bold">
          類別四:由組織使用的產品所產生的間接溫室氣體排放
        </div>
        <div className="px-8 py-6">
          {/* 4-1 */}
          <div className="flex justify-between items-start gap-5">
            <div className="w-1/5">4. 組織使用產品之間接溫室氣體排放</div>
            <div className="w-4/5 flex flex-wrap justify-start items-center gap-4">
              {orgGas.map((gas, i) => {
                return (
                  <button
                    key={`${gas}${i}`}
                    className={`rounded-md px-4 py-2 border border-[#63C2CF] text-[#63C2CF] whitespace-nowrap ${
                      selectOrgGas.includes(gas) &&
                      "!bg-[#2291C5] !border-[#2291C5] !text-white"
                    }`}
                    onClick={() => {
                      console.log(selectOrgGas.includes(gas));
                      if (!selectOrgGas.includes(gas)) {
                        setSelectOrgGas([...selectOrgGas, gas]);
                      } else {
                        let newArr = [...selectOrgGas].filter(
                          (item) => item !== gas,
                        );
                        setSelectOrgGas(newArr);
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
      {/* cat-5 */}
      <div className="w-full mb-6 overflow-hidden rounded-lg border border-[#63C2CF]">
        <div className="bg-[#63C2CF] w-full p-3 text-white text-center font-bold">
          類別五:與組織的產品使用相關之間接溫室氣體排放
        </div>
        <div className="px-8 py-6">
          {/* 5-1 */}
          <div className="flex justify-between items-start gap-5">
            <div className="w-1/5">5. 使用組織產品之間接室氣體排放</div>
            <div className="w-4/5 flex flex-wrap justify-start items-center gap-4">
              {product.map((p, i) => {
                return (
                  <button
                    key={`${p}${i}`}
                    className={`rounded-md px-4 py-2 border border-[#63C2CF] text-[#63C2CF] whitespace-nowrap ${
                      selectProduct.includes(p) &&
                      "!bg-[#2291C5] !border-[#2291C5] !text-white"
                    }`}
                    onClick={() => {
                      console.log(selectProduct.includes(p));
                      if (!selectProduct.includes(p)) {
                        setSelectProduct([...selectProduct, p]);
                      } else {
                        let newArr = [...selectProduct].filter(
                          (item) => item !== p,
                        );
                        setSelectProduct(newArr);
                      }
                    }}>
                    {p}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* cat-6 */}
      <div className="w-full mb-6 overflow-hidden rounded-lg border border-[#63C2CF]">
        <div className="bg-[#63C2CF] w-full p-3 text-white text-center font-bold">
          類別六:由其他來源產生的間接溫室氣體排放
        </div>
        <div className="px-8 py-6">
          {/* 6-1 */}
          <div className="flex justify-between items-start gap-5">
            <div className="w-1/5">6.其他來源間接排放</div>
            <div className="w-4/5 flex flex-wrap justify-start items-center gap-4">
              {other.map((option, i) => {
                return (
                  <button
                    key={`${option}${i}`}
                    className={`rounded-md px-4 py-2 border border-[#63C2CF] text-[#63C2CF] whitespace-nowrap ${
                      selectOther.includes(option) &&
                      "!bg-[#2291C5] !border-[#2291C5] !text-white"
                    }`}
                    onClick={() => {
                      console.log(selectOther.includes(option));
                      if (!selectOther.includes(option)) {
                        setSelectOther([...selectOther, option]);
                      } else {
                        let newArr = [...selectOther].filter(
                          (item) => item !== option,
                        );
                        setSelectOther(newArr);
                      }
                    }}>
                    {option}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/3 mx-auto flex justify-center items-center gap-5">
        <button className="py-2 px-8 rounded-md border border-[#23AFA4] text-[#23AFA4]">
          取消
        </button>
        <button className="py-2 px-8 rounded-md border border-[#23AFA4] bg-[#23AFA4] text-white">
          儲存資料
        </button>
      </div>
    </div>
  );
};

export default IdentificationOfEmissionSources;
