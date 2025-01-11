import { Heart, LayoutGrid, List, ShoppingCart, ZoomIn, } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import BrandsLogo from "../../components/brandslogo";
const shoplist = [
  {
    id: 1,
    name: "Accumsan tincidunt",
    image: "/images/shoplist1.png",
    price: "$26.00",
    oldPrice: "$52.00",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    rating: 4,
    colors: ["bg-[#DE9034]", "bg-[#FB2E86]", "bg-[#5E37FF]"],
  },
  {
    id: 2,
    name: "In nulla",
    image: "/images/shoplist2.png",
    price: "$26.00",
    oldPrice: "$52.00",
    description: "Magna in est adipiscing in phasellus non in justo.",
    rating: 5,
    colors: ["bg-[#DE9034]", "bg-[#FB2E86]", "bg-[#5E37FF]"],
  },
  {
    id: 3,
    name: "Vel sem",
    image: "/images/shoplist3.png",
    price: "$26.00",
    oldPrice: "$52.00",
    description: "Lorem ipsum dolor sit amet.",
    rating: 5,
    colors: ["bg-[#DE9034]", "bg-[#FB2E86]", "bg-[#5E37FF]"],
  },
  {
    id: 4,
    name: "Porttitor cum",
    image: "/images/shoplist4.png",
    price: "$26.00",
    oldPrice: "$52.00",
    description: "Lorem ipsum dolor sit amet.",
    rating: 5,
    colors: ["bg-[#DE9034]", "bg-[#FB2E86]", "bg-[#5E37FF]"],
  },
  {
    id: 5,
    name: "Nunc in",
    image: "/images/shoplist5.png",
    price: "$26.00",
    oldPrice: "$52.00",
    description: "Lorem Magna in est adipiscing.",
    rating: 5,
    colors: ["bg-[#DE9034]", "bg-[#FB2E86]", "bg-[#5E37FF]"],
  },
  {
    id: 6,
    name: "Vitae facilisis",
    image: "/images/shoplist6.png",
    price: "$26.00",
    oldPrice: "$52.00",
    description: "Consectetur adipiscing elit. Magna in.",
    rating: 5,
    colors: ["bg-[#DE9034]", "bg-[#FB2E86]", "bg-[#5E37FF]"],
  },
  {
    id: 7,
    name: "Curabitur lectus",
    image: "/images/shoplist7.png",
    price: "$26.00",
    oldPrice: "$52.00",
    description: "Lorem ipsum dolor sit amet, consectetur.",
    rating: 5,
    colors: ["bg-[#DE9034]", "bg-[#FB2E86]", "bg-[#5E37FF]"],
  },
];

const ShopList = () => {
  return (
    <>
      <div className="bg-[#F6F5FF]"></div>
      <div className="font-sans text-[#151875]">
        {/* Header Section */}
        <div className="bg-[#F6F5FF] py-28 px-8">
          <h1 className="font-josifen font-bold text-[36px] text-[#101750] ml-14">
            Shop List
          </h1>
          <div className="flex gap-1 font-lato font-medium cursor-pointer ml-12">
            <Link href={"/"}>Home.</Link>
            <p>Pages.</p>
            <p className="text-[#FB2E86]">Shop List</p>
          </div>
        </div>

        {/* Filter and Sorting Section */}
        <div className="py-4 flex flex-col lg:flex-row justify-between px-8">
          <div>
            <h1 className="text-[22px] font-bold font-josifen text-[#151875] ml-8">
              Ecommerce Accessories & Fashion items
            </h1>
            <p className="text-[#8A8FB9] font-lato text-[12px] ml-8">
              About 9,620 results (0.62 seconds)
            </p>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            {/* Per Page */}
            <div className="flex items-center gap-2">
              <label htmlFor="perPage" className="font-lato text-[16px]">
                Per Page:
              </label>
              <input
                type="text"
                id="perPage"
                className="w-16 p-1 border rounded text-sm focus:outline-none focus:ring-1 focus:ring-[#FB2E86]"
              />
            </div>

            {/* Sort By */}
            <div className="flex items-center gap-2">
              <label
                htmlFor="sortBy"
                className="text-sm font-medium text-gray-700"
              >
                Sort By:
              </label>
              <select
                id="sortBy"
                className="p-1 border rounded text-sm focus:outline-none focus:ring-1 focus:ring-[#FB2E86]"
              >
                <option value="bestMatch">Best Match</option>
                <option value="priceLowHigh">Price: Low to High</option>
                <option value="priceHighLow">Price: High to Low</option>
              </select>
            </div>

            {/* View */}
            <div className="flex items-center gap-2">
              <LayoutGrid className="w-[20px] cursor-pointer" />
              <List className="w-[20px] cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Product List */}
        <div className="p-8">
          <div className="space-y-6">
            {shoplist.map((product) => (
              <div
                key={product.id}
                className="flex flex-col lg:flex-row bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                {/* Product Image */}
                <div className="lg:w-1/3 flex-shrink-0">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={500}
                    height={400}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>

                {/* Product Details */}
                <div className="lg:w-2/3 lg:ml-6 mt-4 lg:mt-0">
                  <div className="w-full flex justify-between items-center">
                    <h3 className="font-josifen text-[18px] font-bold text-[#151875]">
                      {product.name}
                    </h3>
                    <div className="mt-2 flex gap-1">
                      {product.colors.map((color, index) => (
                        <span
                          key={index}
                          className={`w-3 h-3 ${color} rounded-full`}
                        ></span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 flex items-center space-x-4">
                    <div>
                      <span className="text-lg font-bold">{product.price}</span>
                      <span className="text-red-500 line-through ml-2">
                        {product.oldPrice}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <span
                          key={index}
                          className={`${
                            index < product.rating
                              ? "text-yellow-400"
                              : "text-gray-300"
                          } text-lg`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="mt-2 text-[#9295AA] font-lato text-sm">
                    {product.description}
                  </p>

                  <div className="mt-4 flex space-x-4">
                    <Link href="/cart">
                      <button
                        aria-label="Add to Cart"
                        className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full hover:bg-gray-300"
                      >
                        <ShoppingCart size={24} />
                      </button>
                    </Link>
                    <button
                      aria-label="Add to Wishlist"
                      className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full hover:bg-gray-300"
                    >
                      <Heart size={24} />
                    </button>
                    <button
                      aria-label="Zoom In"
                      className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full hover:bg-gray-300"
                    >
                      <ZoomIn size={24} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <BrandsLogo />
      </div>
    </>
  );
};

export default ShopList;