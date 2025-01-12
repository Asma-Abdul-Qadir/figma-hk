'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function TwoSections() {
  const features = [
    "All frames constructed with hardwood solids and laminates.",
    "Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails.",
    "Arms, backs and seats are structurally reinforced."
  ]

  return (
    <section className="bg-[#F1F0FF] w-full">
    <div className="  container  mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="relative w-full md:w-1/2">
          <div className="relative aspect-square">
            
            <div className="relative h-full">
              <Image
                src="/images/BlueSofa.png"
                alt="B&B Italian Sofa"
                width={600}
                height={600}
                className="object-contain p-8"
                priority
              />
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-[35px] md:text-4xl font-josifen font-bold text-[#151875]  leading-tight">
            Unique Features Of leatest & Trending Products
          </h2>
          
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className={`w-2 h-2 rounded-full mt-2 ${
                  index === 0 ? "bg-[#FB2E86]" :
                  index === 1 ? "bg-blue-500" :
                  "bg-cyan-400"
                }`} />
                <span className="text-[#ACABC3] font-lato">{feature}</span>
              </li>
            ))}
          </ul>
          
          <div className="flex space-x-3">
            
          <Link href={"/shopping-cart"}>
          <button 
            className="bg-[#FB2E86] hover:bg-[#FB2E86] py-4 text-white px-8 font-josifen"
          >
            Add To Cart
          </button>
          </Link>
          <h3 className="flex flex-col text-lg font-josifen font-semibold  text-[#151875]">
              B&B Italian Sofa
            
            <span className="text-[#151875] font-normal font-lato">
              $32.00
            </span>
            </h3>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}
