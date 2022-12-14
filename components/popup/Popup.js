import React from 'react'
import Image from 'next/image'
const Popup = ({img,text}) => {
    return (
      <div className="rounded-lg p-12 w-[200px] aspect-square flex flex-col justify-center items-center bg-[#0B3343] drop-shadow-[0_2px_6px_rgba(0,0,0,0.25)] fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <Image width={80} height={80} className="mb-2" alt="" src={img} />
        <div className='text-white font-bold text-md'>{text}</div>
      </div>
    );
}

export default Popup