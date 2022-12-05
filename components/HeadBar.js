import React from 'react'
import Image from 'next/image';
const HeadBar = () => {
  return (
    <div className="w-full flex justify-between items-center">
      <div className="text-[#467980]">
        <span className='text-5xl font-extrabold'>Hello!</span>
        <br />
        <span className='text-xl'>歡迎回來，一起共綠共益</span>
      </div>
      <div className="flex">
        <select
          name="company"
          id="company"
          className="p-2 mr-6 border border-[#4DA7B0] rounded-xl">
          <option value="some id">精誠資訊有限公司(台北內湖)-2021</option>
        </select>
        <div className="flex justify-start items-center">
          <Image
            width={40}
            height={40}
            src="/head-bar/avatar.svg"
            alt=""
            className="mr-1"
          />
          <div className="text-[#467980] font-normal">asdfg@gmail.com</div>
        </div>
      </div>
    </div>
  );
}

export default HeadBar