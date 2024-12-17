'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function TwoSections() {
  const offers = [
    { id: 1, icon: '/images/support.png', title: '24/7 Support', description: 'Get assistance anytime with our round-the-clock support service.' },
    { id: 2, icon: '/images/free.png', title: 'Fast Delivery', description: 'Experience swift delivery for all your orders with our reliable service.' },
    { id: 3, icon: '/images/secure.png', title: 'Secure Payment', description: 'Enjoy peace of mind with our secure and encrypted payment options.' },
    { id: 4, icon: '/images/quality.png', title: 'Premium Quality', description: 'We offer products of the highest quality for your satisfaction.' },
  ];

  return (
    <>
      {/* Offer Section */}
      <section className="w-full bg-white py-12 md:py-20">
        <h2 className="text-[#3F509E] text-2xl md:text-4xl font-josifen font-bold text-center mb-8 md:mb-12">
          What Shopex Offer!
        </h2>

        <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 px-4 md:px-8">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="flex flex-col items-center text-center border border-gray-300 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-white"
            >
              <div className="w-16 h-16 mb-4">
                <Image
                  src={offer.icon}
                  alt={`${offer.title} icon`}
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <h3 className="text-[#3F509E] font-lato font-semibold text-base md:text-lg mb-2">
                {offer.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base font-lato">
                {offer.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

      {/* Second Section */}
      <section className="bg-[#F1F0FF] px-4 py-8 md:py-16">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side: Image */}
          <div className="relative flex justify-center items-center">
            {/* Background Decoration with Imported Image */}
            <Image
              src="/images/pink-background.png" 
              alt="Background decoration"
              layout="fill"
              className="absolute object-cover rounded-full opacity-30"
            />

            {/* Product Image */}
            <Image
              src="/images/BlueSofa.png"
              alt="Blue Sofa"
              width={400}
              height={400}
              className="relative z-10 object-contain w-full max-w-md"
            />
          </div>

          {/* Right Side: Content */}
          <div className="flex flex-col gap-6 px-4 md:px-0">
            <h1 className="text-[#151875] font-semibold text-2xl md:text-3xl lg:text-4xl font-josifen">
              Unique Features Of leatest & Trending Products
            </h1>

            <ul className="flex flex-col gap-4 text-[#ACABC3]">
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-[#F52B70] flex-shrink-0 mt-1 mr-4"></div>
                <p>All frames constructed with hardwood solids and laminates.</p>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-[#2BF5CC] flex-shrink-0 mt-1 mr-4"></div>
                <p>
                  Reinforced with double wood dowels, glue, screws, nails, and corner blocks.
                </p>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-[#2B2BF5] flex-shrink-0 mt-1 mr-4"></div>
                <p>Arms, backs, and seats are structurally reinforced.</p>
              </li>
            </ul>

            <div className="flex items-center gap-6">
              <Link href="/cart">
                <button className="bg-[#FB2E86] text-white py-2 px-6 rounded-lg hover:bg-pink-500 transition-colors">
                  Add To Cart
                </button>
              </Link>
              <div>
                <p className="text-[#151875] font-semibold text-base md:text-sm">B&B Italian Sofa</p>
                <p className="text-[#151875] font-bold text-sm">
                  $32.00
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    
  

