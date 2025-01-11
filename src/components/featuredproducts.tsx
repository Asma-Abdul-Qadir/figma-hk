import React from "react";
import Link from "next/link";
import Image from 'next/image'; // Keep this import

import { HeartIcon, ShoppingCartIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "Cantilever chair",
      code: "Y523201",
      price: "$42.00",
      image: "/images/chair1.png",
    },
    {
      id: 2,
      name: "Cantilever chair",
      code: "Y523201",
      price: "$42.00",
      image: "/images/chair2.png",
    },
    {
      id: 3,
      name: "Cantilever chair",
      code: "Y523201",
      price: "$42.00",
      image: "/images/chair3.png",
    },
    {
      id: 4,
      name: "Cantilever chair",
      code: "Y523201",
      price: "$42.00",
      image: "/images/chair4.png",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">
        <h2 className="text-center text-3xl sm:text-4xl font-josifen font-bold text-[#1A0B5B] mb-12">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg p-4 relative group overflow-hidden">
              <div className="relative bg-[#F6F7FB] shadow">
                {/* Replacing <img> with <Image /> for optimization */}
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  width={500} 
                  height={500} 
                  className="w-full h-48 py-8 object-contain" 
                  priority // Optionally, you can add priority for images above the fold
                />
                <div className="bg-white py-7 px-4 w-full hover:bg-[#2F1AC4] group-hover:text-white text-center mt-4">
                  <h3 className="text-lg font-lato font-semibold text-[#FB2E86] mb-1">{product.name}</h3>
                  <p className="text-sm text-[#151875] mb-1">Code - {product.code}</p>
                  <div className="flex justify-center space-x-2">
                    <span className="w-4 h-1 bg-[#05E6B7] rounded-md"></span>
                    <span className="w-4 h-1 bg-[#FB2E86] rounded-md"></span>
                    <span className="w-4 h-1 bg-[#00009D] rounded-md"></span>
                  </div>
                  <p className="text-lg font-bold text-[#151875]">{product.price}</p>
                  <Link href="/shop">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center transition-all duration-300">
                      <button className="bg-[#08D15F] text-white font-josifen font-medium text-sm px-4 py-2 rounded-lg mb-2">
                        View Details
                      </button>
                      <div className="absolute top-4 left-4 flex space-x-2 inset-0  opacity-0 group-hover:opacity-100">
                        <div>
                          <ShoppingCartIcon className="w-6 h-6 text-[#3F509E]" />
                        </div>
                        <div>
                          <HeartIcon className="ml-1 w-5 h-5 mb-2 text-[#1389FF]" />
                        </div>
                        <div className="-pt-20">
                          <MagnifyingGlassIcon className="ml-1 w-5 h-5 text-[#1389FF]" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          <span className="w-6 h-2 bg-[#FB2E86] rounded-md"></span>
          <span className="w-6 h-2 bg-[#e29fbc] rounded-md"></span>
          <span className="w-6 h-2 bg-[#e29fbc] rounded-md"></span>
          <span className="w-6 h-2 bg-[#e29fbc] rounded-md"></span>
        </div>
      </div>
    </section>
  );
}
