
import { LayoutGrid, List } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import BrandsLogo from "../../components/brandslogo";

export default function Shop() {
  const products = [
    {
      id: 1,
      name: "Vel elit euismod",
      price: 26.0,
      oldPrice: 42.0,
      images: ["/images/greychair.png"],
    },
    {
      id: 2,
      name: "Ultricies condimentum imperdietsh",
      price: 26.0,
      oldPrice: 42.0,
      images: ["/images/smallsofa.png"],
    },
    {
      id: 3,
      name: "Vitae suspendisse sed",
      price: 26.0,
      oldPrice: 42.0,
      images: ["/images/whitechair.png"],
    },
    {
      id: 4,
      name: "Sed at fermentum",
      price: 26.0,
      oldPrice: 42.0,
      images: ["/images/bag.png"],
    },
    {
      id: 5,
      name: "Fusce pellentesque atmfy",
      price: 26.0,
      oldPrice: 42.0,
      images: ["/images/smartwatch.png"],
    },
    {
      id: 6,
      name: "Vestibulum magna laoreetffice",
      price: 26.0,
      oldPrice: 42.0,
      images: ["/images/bwatch.png"],
    },
    {
      id: 7,
      name: "Sollicitudin amet orcil",
      price: 26.0,
      oldPrice: 42.0,
      images: ["/images/redheadphone.png"],
    },
    {
      id: 8,
      name: "Ultrices mauris sit",
      price: 26.0,
      oldPrice: 42.0,
      images: ["/images/peachsofa.png"],
    },
    {
      id: 9,
      name: "Pellentesque condimentum ac",
      price: 26.0,
      oldPrice: 42.0,
      images: ["/images/watch.png"],
    },
    {
      id: 10,
      name: "Cras scelerisque velit",
      price: 26.0,
      oldPrice: 42.0,
      images: ["/images/camera.png"],
    },
    {
      id: 11,
      name: "Lectus vulputate faucibus",
      price: 26.0,
      oldPrice: 42.0,
      images: ["/images/headphone.png"],
    },
    {
      id: 12,
      name: "Purus risus, utg",
      price: 26.0,
      oldPrice: 42.0,
      images: ["/images/blackbag.png"],
    },
  ];

  return (
    <div>
      <div className="bg-[#F6F5FF]">
        <div className="max-w-screen-xl mx-auto h-[286px] flex flex-col justify-center gap-2 px-4">
          <h1 className="font-josifen font-bold text-[36px] text-[#101750]">
            Shop Grid Default
          </h1>
          <ul className="flex gap-1 font-lato font-medium cursor-pointer">
            <li>Home .</li>
            <li>Pages .</li>
            <li className="text-[#FB2E86]">Shop Grid Default</li>
          </ul>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto py-12 px-4">
        <div className="flex justify-between gap-4 lg:flex-row flex-col">
          <div className="flex flex-col gap-1">
            <h1 className="text-[22px] font-bold font-josifen text-[#151875]">
              Ecommerce Accessories & Fashion Items
            </h1>
            <h4 className="text-[#8A8FB9] font-lato text-[12px]">
              About 9,620 results (0.62 seconds) results
            </h4>
          </div>

          <div className="flex md:flex-row flex-col gap-6">
            <div className="flex gap-2 items-center">
              <label htmlFor="page" className="font-lato text-[16px]">
                Per Page:
              </label>
              <input
                type="text"
                id="perPage"
                className="w-16 p-1 border rounded text-sm focus:outline-none focus:ring-1 focus:ring-[#FB2E86]"
              />
            </div>
            <div className="flex gap-2 items-center">
              <label htmlFor="sortBy" className="font-lato text-[16px]">
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
            <div className="flex gap-4 items-center">
              <label htmlFor="" className="font-lato text-[16px]">
                View:
              </label>
              <LayoutGrid className="w-[20px]" />
              <List className="w-[20px]" />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-y-20 gap-x-6 pt-16">
          {products.map((product) => (
            <Link
              href={`/shop/${product.id}`}
              key={product.id}
              className="flex flex-col gap-4 items-center"
            >
              <div className="bg-[#F5F6F8] p-4 items-center flex justify-center w-[270px] cursor-pointer overflow-hidden gap-3">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  height={1000}
                  width={1000}
                  className="transition-transform hover:scale-105 duration-700 hover:rounded-md object-contain w-[154px] h-[158px]"
                />
              </div>

              <div className="flex flex-col items-center gap-2">
                <h1 className="font-josifen text-center text-[18px] font-bold text-[#151875]">
                  {product.name}
                </h1>
                <div className="flex w-[52px] items-center justify-center gap-1">
                  <div className="w-[12px] h-[12px] bg-[#00009D] rounded-full" />
                  <div className="w-[12px] h-[12px] bg-[#05E6B7] rounded-full" />
                  <div className="w-[12px] h-[12px] bg-[#F701A8] rounded-full" />
                </div>
                <div className="flex gap-1">
                  <span className="text-[#151875]">${product.price.toFixed(2)}</span>
                  <span className="line-through text-[#FB2E86]">
                    ${product.oldPrice.toFixed(2)}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <BrandsLogo />
      </div>
    </div>
  );
}