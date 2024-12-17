import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { Diamond } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="bg-[#F2F0FF] relative"
      aria-label="Hero Section - Furniture Collection"
    >
      <div className="max-w-screen-2xl mx-auto flex items-center lg:items-start lg:flex-row flex-col gap-3 px-4">
        {/* Left Content */}
        <div className="flex">
          <div className="hidden lg:block">
            <Image
              src="/images/lamp.png"
              alt="Modern lamp design for homes"
              height={1000}
              width={1000}
              className="w-[387px]"
              priority
            />
          </div>

          <div className="flex flex-col justify-center pt-24 gap-2 lg:items-start items-center text-center lg:text-start">
            <h5 className="font-lato text-[16px] font-semibold text-[#FB2E86]">
              Best Furniture for Your Castle...
            </h5>
            <h1 className="font-josifen font-bold text-[53px]">
              New Furniture Collection Trends in 2020
            </h1>
            
            <p className="text-sm md:text-lg text-gray-600 mb-6">
              Explore the latest designs that bring elegance and functionality
              to your home.
            </p>
            <Link href="/shop">
              <Button className="w-[163px] h-[50px] bg-[#FB2E86] rounded-md text-white font-josifen hover:bg-pink-600">
                <span className="font-semibold text-[16px]">Shop Now</span>
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 h-full relative flex flex-col items-center justify-start">
          {/* Background 1 - Larger Background Image */}
          <div
            className="absolute top-[50px] left-1/2 transform -translate-x-1/2 w-[450px] h-[450px] bg-[url('/images/background1.png')] bg-cover bg-center z-0"
          ></div>

          {/* Background 2 - Smaller Background Image */}
          <div
            className="absolute top-[100px] left-1/2 transform -translate-x-1/2 w-[350px] h-[350px] bg-[url('/images/background2.png')] bg-cover bg-center z-0"
          ></div>

          {/* Chair Image */}
          <div className="flex items-center py-10 relative z-10">
            <Image
              src="/images/chair.png"
              alt="Luxury chair with modern design"
              height={1000}
              width={1000}
              className="w-full md:w-[760px]"
              priority
            />
          </div>
        </div>

        {/* Blue Discount Badge */}
        <div
          className="absolute top-[40px] right-[75px] bg-[url('/images/vector2.png')] bg-cover bg-center w-[80px] h-[80px] flex flex-col justify-center items-center z-20"
        >
          <span className="text-xl font-bold text-white">50%</span>
          <span className="text-sm font-semibold text-white">OFF</span>
        </div>
      </div>

      <div className="flex gap-1 justify-center items-center cursor-pointer py-10">
  {Array.from({ length: 3 }, (_, i) => (
    <Diamond key={i} className="text-[#fb2e86] w-[12px]" />
  ))}
</div>

    </section>
  );
}
