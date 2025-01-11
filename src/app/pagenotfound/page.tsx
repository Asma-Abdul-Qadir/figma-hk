
import Image from "next/image";
import React from "react";
import BrandsLogo from "../../components/brandslogo";

function PageNotFound() {
  return (
    <div className="">
      <div className=" bg-[#F6F5FF]">
        <div className="max-w-screen-xl mx-auto h-[286px] flex flex-col justify-center gap-2 px-4">
          <h1 className="font-josifen font-bold text-[36px] text-[#101750]">
            404 Not Found
          </h1>
          <ul className="flex gap-1 font-lato font-medium cursor-pointer">
            <li>Home .</li>
            <li>Pages .</li>
            <li className="text-[#FB2E86]">404 Not Found</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/images/pagenotfound.png"
          width={1000}
          height={1000}
          alt="Not Found"
          className="w-[50%]"
        />
    
       <BrandsLogo /> 
      </div>
    </div>
  );
}

export default PageNotFound;
