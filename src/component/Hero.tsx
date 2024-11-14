import React from 'react'
import Image from "next/image";

export const Hero = () => {
  return (
    <div>
        <h1 className="w-[496px] h-[189px] absolute top-[316px] left-[176px] font-serif font-bold text-[40px] leading-[65.8px] tracking-[2.5%] text-[#000000] ">
        IMPECCABLE CRAFTSMANSHIP AND FINESSE
      </h1>

      <p className=" w-[902px] h-[147px] absolute top-[533px] left-[171px] font-serif font-medium text-[30px] leading-[49.35px] tracking-[2.5%] text-[#787054]   ">
        An example of intricate workmanship and detail, elegant <br /> necklaces and
        long and short chains form a part of our <br /> desirable collection
        
        </p>

<button className="w-[270px] h-[58px] absolute top-[730px] left-[176px] font-serif font-medium text-[25px] leading-[37.5px] bg-[#A29875] text-[#FFFFFF]  p-[10px] gap-[10px] rounded-[10px] " >
Explore Now
</button>
<div className="absolute top-[198px] left-[1164px] " >
<Image 
src={"/image.png"}
alt={"image"}
width={462}
height={647}

/>
</div>
    </div>
  )
}
