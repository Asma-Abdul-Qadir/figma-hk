'use client'
import Image from 'next/image';
import { HeartIcon, ShoppingCartIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

function LatestProducts() {
  const products = [
    { id: 1, img: "/images/lproduct1.png", name: "Comfy Handy Craft", price: 65, salePrice: 42 },
    { id: 2, img: "/images/lproduct2.png", name: "Elegant Wooden Table", price: 80, salePrice: 60, sale: true },
    { id: 3, img: "/images/lproduct3.png", name: "Modern Lamp", price: 45 },
    { id: 4, img: "/images/lproduct4.png", name: "Luxury Chair", price: 120, salePrice: 100 },
    { id: 5, img: "/images/lproduct5.png", name: "Soft Cushion", price: 30 },
    { id: 6, img: "/images/lproduct6.png", name: "Stylish Sofa", price: 150, salePrice: 120 },
  ];

  return (
    <div className="w-full bg-white py-20">
      {/* Heading */}
      <h1 className="text-[#1A0B5B] font-josifen text-3xl text-center font-bold">
          Latest Products
      </h1>

      {/* Tabs */}
      <div className="flex justify-center space-x-2 sm:space-x-4 md:space-x-8 mb-16">
        {["New Arrival", "Best Seller", "Featured", "Special Offers"].map((tab) => (
          <button
            key={tab}
            className="text-[#3F509E] text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl font-medium relative group hover:text-red-600"
          >
            {tab}
            <span
              className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-600 transition-all duration-300 group-hover:w-full"
            ></span>
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="relative group">
            {/* Product Image */}
            <div className="w-full bg-[#F7F7F7] flex justify-center items-center relative overflow-hidden h-[300px] transition-all duration-300 group-hover:bg-white">
              {/* Sale Tag */}
              {product.sale && (
                <span className="absolute top-2 left-2 bg-[#3F509E] text-white text-sm px-3 py-1 rounded">
                  Sale
                </span>
              )}
              <Image
                src={product.img}
                width={200}
                height={200}
                alt={product.name}
                className="object-contain"
                onError={(e) => {
                  e.currentTarget.src = "/images/placeholder.png";
                }}
              />

              {/* Icons */}
              <div className="absolute top-2 right-2 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-white p-2 rounded-full shadow">
                  <HeartIcon className="w-6 h-6 text-[#3F509E]" />
                </button>
                <button className="bg-white p-2 rounded-full shadow">
                  <MagnifyingGlassIcon className="w-6 h-6 text-[#3F509E]" />
                </button>
                <button className="bg-white p-2 rounded-full shadow">
                  <ShoppingCartIcon className="w-6 h-6 text-[#3F509E]" />
                </button>
              </div>
            </div>

            {/* Product Details */}
            <div className="text-center mt-4">
              <h3 className="text-lg font-semibold text-[#3F509E]">{product.name}</h3>
              <div className="mt-2 text-gray-600 flex justify-center items-center gap-2">
                {product.salePrice && (
                  <span className="text-red-600 font-medium line-through">
                    ${product.price.toFixed(2)}
                  </span>
                )}
                <span className="text-gray-800">
                  ${(product.salePrice || product.price).toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LatestProducts;
