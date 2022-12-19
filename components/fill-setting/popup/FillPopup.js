import React from "react";

const FillPopup = ({
  setShowWarning,
  setShowSuccess,
}) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black/50">
      <div className=" flex flex-col justify-center items-center bg-[#0B3343] rounded-xl py-3 px-10 shadow">
        <div className="text-white text-xl text-center font-bold mb-8">
          請確認資料
          <br />
          是否填寫完畢
        </div>
              <button className=" py-2 px-8 text-white font-semibold rounded-lg bg-[#FFC700]" onClick={() => {
                  setShowWarning(false);
                  setShowSuccess(true);
              setTimeout(() => {
                  setShowSuccess(false);
              }, 1000);}}>
          確認
        </button>
      </div>
    </div>
  );
};

export default FillPopup;
