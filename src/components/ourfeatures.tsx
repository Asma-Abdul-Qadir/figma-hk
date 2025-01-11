
import Image from 'next/image';

export default function OurFeatures() {
    const offers = [
      { id: 1, icon: '/images/free.png', title: '24/7 Support', description: 'Experience swift delivery for all your orders with our reliable service.' },
      { id: 2, icon: '/images/secure.png', title: '24/7 Support', description: 'Enjoy peace of mind with our secure and encrypted payment options.' },
      { id: 3, icon: '/images/quality.png', title: '24/7 Support', description: 'We offer products of the highest quality for your satisfaction.' },
      { id: 4, icon: '/images/support.png', title: '24/7 Support', description: 'Get assistance anytime with our round-the-clock support service.' },
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
