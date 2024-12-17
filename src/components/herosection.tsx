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
          {/* Chair Image Container */}
          <div className="relative z-10">
            <Image
              src="/images/chair.png"
              alt="Luxury chair with modern design"
              height={1000}
              width={1000}
              className="w-full md:w-[760px]"
              priority
            />
            {/* Blue Discount Badge */}
            <div
              className="absolute bottom-1 right-10 bg-[url('/images/vector2.png')] bg-cover bg-center w-[80px] h-[80px] flex flex-col justify-center items-center"
            >
              <span className="text-xl font-bold text-white">50%</span>
              <span className="text-sm font-semibold text-white">OFF</span>
            </div>
          </div>
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
