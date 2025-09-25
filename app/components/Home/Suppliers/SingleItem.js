
import React from "react";
import Image from "next/image";

const SingleItem = ({ item,handleClick }) => {
  
  return (
    <div onClick={()=>handleClick(item)} className="w-full flex flex-col justify-between items-center">
      <div className=" bg-[#e3e3e3] h-20 w-20 relative rounded-full flex items-center justify-center mb-2 shadow-2xl cursor-pointer">
          <Image src={`${process.env.NEXT_PUBLIC_SITE_NAME}${item.image}`} alt="Category" fill className="rounded-full" unoptimized />
      </div>

      <div className="flex justify-center">
        <h3 className="inline-block font-medium text-center text-dark bg-gradient-to-r from-blue to-blue bg-[length:0px_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_1px] group-hover:text-blue">
          {item.supplier}
        </h3>
      </div>
    </div>
  );
};

export default SingleItem;
