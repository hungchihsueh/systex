import React,{useState} from "react";
import Image from "next/image";
import FillPopup from "./popup/FillPopup";
import Popup from "../popup/Popup";
const CatTitle = ({ text }) => {
  return (
    <div className="col-span-12 text-white bg-[#2291C5] border border-white p-2 text-center flex justify-center items-center font-bold">
      {text}
    </div>
  );
};
const ItemTitle = ({ text }) => {
  return (
    <div className="col-span-2 text-[#333] bg-[#E0E0E0] border border-white p-2  flex justify-start items-center font-bold">
      {text}
    </div>
  );
};
const Cell = ({ cat, data }) => {
  return (
    <div className="bg-[#A3A5BF1A] border border-white p-2  flex justify-center items-center">
      {typeof data !== "number"
        ? data && (
            <Image width={24} height={24} alt="" src={"/icon/Check-box.svg"} />
          )
        : `${cat}-${data}`}
    </div>
  );
};
const MaterialityIdentification = () => {
  // popup
  const [showWarning, setShowWarning] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  return (
    <div>
      <div className="flex justify-between items-start mb-6">
        <div className=" w-full text-2xl font-black text-[#467980]">
          重大性鑑別-重大性鑑別填報資料
        </div>
      </div>
      {/* table */}
      <div className="grid grid-cols-12 w-full h-full mb-6">
        {/* header */}
        <div className="text-[#005E8A] bg-[#A9D6EB] border border-white col-span-2 row-span-2 p-2 text-center flex justify-center items-center font-bold">
          項目
          <br />
          內容
        </div>
        <div className="text-[#005E8A] bg-[#A9D6EB] border border-white col-span-8 p-2 text-center flex justify-center items-center font-bold">
          八大方法學計分項目(單項評分級距為1-3)
        </div>
        <div className="text-[#005E8A] bg-[#A9D6EB] border border-white row-span-2 p-2 text-center  flex justify-center items-center font-bold">
          整體總數
        </div>
        <div className="text-[#005E8A] bg-[#A9D6EB] border border-white row-span-2 p-2 text-center flex justify-center items-center font-bold">
          是否為重大
          <br />
          (總數≥17)
        </div>
        <div className="text-[#005E8A] bg-[#86C1DD] border border-white p-2 text-center flex justify-center items-center font-bold">
          幅度(數量)
        </div>
        <div className="text-[#005E8A] bg-[#86C1DD] border border-white p-2 text-center flex justify-center items-center font-bold">
          影響程度
        </div>
        <div className="text-[#005E8A] bg-[#86C1DD] border border-white p-2 text-center flex justify-center items-center font-bold">
          風險與機會
        </div>
        <div className="text-[#005E8A] bg-[#86C1DD] border border-white p-2 text-center flex justify-center items-center font-bold">
          行業準則
        </div>
        <div className="text-[#005E8A] bg-[#86C1DD] border border-white p-2 text-center flex justify-center items-center font-bold">
          員工參與
        </div>
        <div className="text-[#005E8A] bg-[#86C1DD] border border-white p-2 text-center flex justify-center items-center font-bold">
          活動資料可取得度
        </div>
        <div className="text-[#005E8A] bg-[#86C1DD] border border-white p-2 text-center flex justify-center items-center font-bold">
          排放係數可取得度
        </div>
        <div className="text-[#005E8A] bg-[#86C1DD] border border-white p-2 text-center flex justify-center items-center font-bold">
          成本考量
        </div>
        {/* cat-2 */}
        <CatTitle text="類別二:由輸入能源產生之間接溫室氣體排放" />
        <ItemTitle text="外購電力" />
        {[1, 2, 3, 4, 5, 6, 7, 8, 23, true].map((item) => {
          return <Cell key={item} data={item} cat={"2-1"} />;
        })}
        <ItemTitle text="外購蒸氣" />
        {[1, 2, 3, 4, 5, 6, 7, 8, 54, false].map((item) => {
          return <Cell key={item} data={item} cat={"2-2"} />;
        })}
        {/* cat-3 */}
        <CatTitle text="類別三:運輸產生之間接溫室氣體排放" />
        <ItemTitle text="貨物上游運輸與配送" />
        {[1, 2, 3, 4, 5, 6, 7, 8, 54, false].map((item) => {
          return <Cell key={item} data={item} cat={"3-1"} />;
        })}
        <ItemTitle text="貨物下游運輸與配送" />
        {[1, 2, 3, 4, 5, 6, 7, 8, 12, true].map((item) => {
          return <Cell key={item} data={item} cat={"3-2"} />;
        })}
        <ItemTitle text="員工通勤" />
        {[1, 2, 3, 4, 5, 6, 7, 8, 52, true].map((item) => {
          return <Cell key={item} data={item} cat={"3-3"} />;
        })}
        <ItemTitle text="輸運客戶與訪客" />
        {[1, 2, 3, 4, 5, 6, 7, 8, 52, false].map((item) => {
          return <Cell key={item} data={item} cat={"3-4"} />;
        })}
        <ItemTitle text="商務旅運" />
        {[1, 2, 3, 4, 5, 6, 7, 8, 52, true].map((item) => {
          return <Cell key={item} data={item} cat={"3-4"} />;
        })}
        {/* cat-4 */}
        <CatTitle text="類別四:由組織使用的產品所產生的間接溫室氣體排放" />
        <ItemTitle text="購買商品" />
        {[1, 2, 3, 4, 5, 6, 7, 8, 52, true].map((item) => {
          return <Cell key={item} data={item} cat={"4-1"} />;
        })}
        <ItemTitle text="資本貨物" />
        {[1, 2, 3, 4, 5, 6, 7, 8, 52, true].map((item) => {
          return <Cell key={item} data={item} cat={"4-2"} />;
        })}
        <ItemTitle text="處理固體和液體廢棄物排放量" />
        {[1, 2, 3, 4, 5, 6, 7, 8, 52, true].map((item) => {
          return <Cell key={item} data={item} cat={"4-3"} />;
        })}
        <ItemTitle text="資產使用排量" />
        {[1, 2, 3, 4, 5, 6, 7, 8, 52, false].map((item) => {
          return <Cell key={item} data={item} cat={"4-4"} />;
        })}
        <ItemTitle text="其他(未定義上述類別內)" />
        {[1, 2, 3, 4, 5, 6, 7, 8, 52, true].map((item) => {
          return <Cell key={item} data={item} cat={"4-5"} />;
        })}
        {/* cat-5 */}
        <CatTitle text="類別五:與組織的產品使用相關之間接溫室氣體排放" />
        <ItemTitle text="產品使用階段產生之排放或清除" />
        {[1, 2, 3, 4, 5, 6, 7, 8, 52, true].map((item) => {
          return <Cell key={item} data={item} cat={"5-1"} />;
        })}
        <ItemTitle text="下游承租的資產" />
        {[1, 2, 3, 4, 5, 6, 7, 8, 52, true].map((item) => {
          return <Cell key={item} data={item} cat={"5-2"} />;
        })}
        <ItemTitle text="產品生命終期排放量" />
        {[1, 2, 3, 4, 5, 6, 7, 8, 52, true].map((item) => {
          return <Cell key={item} data={item} cat={"5-3"} />;
        })}
        <ItemTitle text="投資產生排放量" />
        {[1, 2, 3, 4, 5, 6, 7, 8, 52, true].map((item) => {
          return <Cell key={item} data={item} cat={"5-4"} />;
        })}
        {/* cat-6 */}
        <CatTitle text="類別五:與組織的產品使用相關之間接溫室氣體排放" />
        <ItemTitle text="特許行業" />
        {[1, 2, 3, 4, 5, 6, 7, 8, 52, false].map((item) => {
          return <Cell key={item} data={item} cat={"6-1"} />;
        })}
        <ItemTitle text="加盟" />
        {[1, 2, 3, 4, 5, 6, 7, 8, 52, true].map((item) => {
          return <Cell key={item} data={item} cat={"6-2"} />;
        })}
      </div>
      <div className="w-1/3 mx-auto flex justify-center items-center gap-5">
        <button className="py-2 px-8 rounded-md border border-[#23AFA4] text-[#23AFA4]">
          取消
        </button>
        <button className="py-2 px-8 rounded-md border border-[#23AFA4] bg-[#23AFA4] text-white" onClick={()=>{setShowWarning(true);}}>
          儲存資料
        </button>
      </div>
      {showWarning && (
        <FillPopup
          setShowWarning={setShowWarning}
          setShowSuccess={setShowSuccess}
        />
      )}
      {showSuccess && (
        <Popup img={"/icon/white-success.svg"} text="資料新增成功" />
      )}
    </div>
  );
};

export default MaterialityIdentification;
