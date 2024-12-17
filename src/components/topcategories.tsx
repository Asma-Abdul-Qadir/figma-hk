import Image from "next/image";

function TopCategories() {
  const categories = [
    { id: 1, img: "/images/top1.png", name: "Mini LCW Chair", price: "$56.00" },
    { id: 2, img: "/images/top2.png", name: "Mini LCW Chair", price: "$56.00" },
    { id: 3, img: "/images/top3.png", name: "Mini LCW Chair", price: "$56.00" },
    { id: 4, img: "/images/top4.png", name: "Mini LCW Chair", price: "$56.00" },
  ];

  return (
    <section className="max-w-screen-xl mx-auto pt-16 sm:pt-20 px-4 sm:px-6 lg:px-12">
      {/* Section Heading */}
      <h1 className="text-[#1A0B5B] font-josifen text-3xl sm:text-4xl font-bold text-center leading-tight">
        Top Categories
      </h1>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pt-8">
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex flex-col items-center gap-3 transform hover:scale-105 transition-transform duration-500"
          >
            <div className="bg-[#F5F6F8] p-8 sm:p-10 lg:p-12 rounded-full w-full flex justify-center items-center shadow-md hover:shadow-lg">
              <Image
                src={category.img}
                alt={category.name}
                height={400} 
                width={400} 
                className="object-contain"
              />
            </div>
            <h1 className="font-josifen font-bold text-base sm:text-lg lg:text-xl text-center text-[#1A0B5B]">
              {category.name}
            </h1>
            <p className="text-center text-gray-500 text-sm sm:text-base">
              {category.price}
            </p>
          </div>
        ))}
      </div>

      {/* Pink Dots */}
      <div className="flex justify-center mt-6 sm:mt-8 gap-2">
        {[...Array(3)].map((_, index) => (
          <span
            key={index}
            className="w-2 sm:w-3 h-2 sm:h-3 bg-pink-600 rounded-full"
          ></span>
        ))}
      </div>
    </section>
  );
}

export default TopCategories;
