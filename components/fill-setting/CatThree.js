import React from "react";
import Image from "next/image";
const CatThree = () => {
  return (
    <div className="h-full">
      <div className="flex justify-between items-start mb-6">
        <div className=" w-full text-2xl font-black text-[#467980]">
          類別三:運輸產生之間接溫室氣體排放
        </div>
      </div>
      <div className="w-full mb-1 p-3 bg-[#4DA7B0] text-white text-base flex justify-start items-center gap-2">
        <span>3. 運輸產生之間接溫室氣體排放</span>
        <Image width={20} height={20} alt="" src={"/icon/dropdown-arrow.svg"} />
      </div>
      <div>
        <div className="m-[10px] border border-[#4DA7B0] rounded-lg overflow-hidden">
          <div className="flex justify-start items-center w-full py-4 px-8 border-b text-[#4DA7B0] font-semibold border-[#4DA7B0]">
            <Image
              alt=""
              width={24}
              height={24}
              src={"/icon/貨物上游運輸與配送.svg"}
              className="mr-2"
            />
            貨物上游運輸與配送
          </div>
          <div className="h-full p-7">
            <div className="text-sm my-3 flex items-center gap-1">
              <span className="text-[#EB5757]">*</span>
              <span>請上傳當年度資料</span>
              <span className="text-[#EB5757] text-xs">
                (僅支援格式CSV格式，需依照範本格式進行填寫後上傳)
              </span>
              <button className="flex justify-center items-center rounded-xl bg-[#005E8A] text-white text-md font-medium py-2 px-5 whitespace-nowrap">
                <Image
                  width={20}
                  height={20}
                  alt=""
                  src="/icon/clip.svg"
                  className="mr-2 brightness-200"
                />
                範本下載
              </button>
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
            <div className="h-px w-full bg-[#BDBDBD] my-5"></div>
            <div className="text-sm my-3 flex items-center gap-1">
              <span className="text-[#EB5757]">*</span>
              <span>上傳附件資料</span>
              <span className="text-[#EB5757] text-xs">
                (支援格式JPG、PDF檔案格式)
              </span>
              <button className="flex justify-center items-center rounded-xl bg-[#005E8A] text-white text-md font-medium py-2 px-5 whitespace-nowrap">
                <Image
                  width={20}
                  height={20}
                  alt=""
                  src="/icon/clip.svg"
                  className="mr-2 brightness-200"
                />
                範本下載
              </button>
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
              src={"/icon/貨物下游運輸與配送.svg"}
              className="mr-2"
            />
            貨物下游運輸與配送
          </div>
          <div className="h-full p-7">
            <div className="text-sm my-3 flex items-center gap-1">
              <span className="text-[#EB5757]">*</span>
              <span>請上傳當年度資料</span>
              <span className="text-[#EB5757] text-xs">
                (僅支援格式CSV格式，需依照範本格式進行填寫後上傳)
              </span>
              <button className="flex justify-center items-center rounded-xl bg-[#005E8A] text-white text-md font-medium py-2 px-5 whitespace-nowrap">
                <Image
                  width={20}
                  height={20}
                  alt=""
                  src="/icon/clip.svg"
                  className="mr-2 brightness-200"
                />
                範本下載
              </button>
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
            <div className="h-px w-full bg-[#BDBDBD] my-5"></div>
            <div className="text-sm my-3 flex items-center gap-1">
              <span className="text-[#EB5757]">*</span>
              <span>上傳附件資料</span>
              <span className="text-[#EB5757] text-xs">
                (支援格式JPG、PDF檔案格式)
              </span>
              <button className="flex justify-center items-center rounded-xl bg-[#005E8A] text-white text-md font-medium py-2 px-5 whitespace-nowrap">
                <Image
                  width={20}
                  height={20}
                  alt=""
                  src="/icon/clip.svg"
                  className="mr-2 brightness-200"
                />
                範本下載
              </button>
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

export default CatThree;
