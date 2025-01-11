
import Link from "next/link";
import Image from "next/image";
import { Heart } from "lucide-react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { BiRightArrowAlt } from "react-icons/bi";
import BrandsLogo from "../../components/brandslogo";

export default function ProductDetails() {
  const products = [
    {
      id: 1,
      name: "Mens Fashion Wear",
      price: "$43.00",
      image: "/images/men.png",
      rating: 4,
    },
    {
      id: 2,
      name: "Women's Fashion",
      price: "$67.00",
      image: "/images/women.png",
      rating: 5,
    },
    {
      id: 3,
      name: "Wolx Dummy Fashion",
      price: "$67.00",
      image: "/images/dummy.png",
      rating: 4,
    },
    {
      id: 4,
      name: "Top Wall Digital Clock",
      price: "$51.00",
      image: "/images/topwall.png",
      rating: 3,
    },
  ];
  return (
    <div className="w-full bg-gray-50">
      {/* Header Section */}
      <div className="bg-gray-200 py-8">
        <div className="max-w-[1200px] mx-auto px-4">
          <h1 className="text-3xl font-bold font-josifen text-[#101750] mb-2">Product Details</h1>
          <p className="text-sm text-black font-lato">
            Home <span className="text-black">.</span> Pages <span className="text-black">.</span>{" "}
            <span className="text-[#FB2E86]">Product Details</span>
          </p>
        </div>
      </div>
      {/* 1st portion */}
      <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg p-4 md:p-8 max-w-6xl mx-auto">
        {/* Left Section - Images */}
        <div className="w-full md:w-1/2 flex gap-4 flex-col-reverse md:flex-row">
          {/* Small Thumbnails */}
          <div className="flex md:flex-col flex-row gap-2 md:gap-4">
            <div className="relative w-[120px] h-[120px] md:w-[151px] md:h-[155px]">
              <Image
                src="/images/thumbnail1.png"
                alt="Thumbnail 1"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <div className="relative w-[120px] h-[120px] md:w-[151px] md:h-[155px]">
              <Image
                src="/images/thumbnail2.png"
                alt="Thumbnail 2"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <div className="relative w-[120px] h-[120px] md:w-[151px] md:h-[155px]">
              <Image
                src="/images/thumbnail3.png"
                alt="Thumbnail 3"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
          </div>

          {/* Main Image */}
          <div className="relative w-full h-[250px] md:w-[375px] md:h-[487px]">
            <Image
              src="/images/playwood.png"
              alt="Main Product"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
        </div>

        {/* Right Section - Product Details */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-8">
          <h1 className="text-2xl md:text-3xl font-bold font-josifen text-[#0D134E] mb-4">
            Playwood Arm Chair
          </h1>

          {/* Ratings */}
          <div className="flex items-center gap-2 text-sm mb-4">
            <div className="text-yellow-400">★★★★★</div>
            <p className="text-[#151875]">(22)</p>
          </div>

          {/* Price */}
          <div className="flex items-center gap-4 mb-4">
            <p className="text-lg font-semibold text-[#151875]">$32.00</p>
            <p className="text-lg font-semibold text-[#FB2E86] line-through">
              $32.00
            </p>
          </div>

          {/* Description */}
          <div className="mb-4">
            <p className="font-medium text-[#0D134E] mb-1">Color</p>
            <p className="text-[#A9ACC6] text-sm md:text-[16px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              tellus porttitor purus, et volutpat sit.
            </p>
          </div>

          {/* Add to Cart Button */}
          <button className="flex items-center gap-2 text-[#151875] font-medium font-josifen py-2 px-6 rounded-md transition mb-4">
            Add To Cart <Heart className="w-5 h-5" />
          </button>

          {/* Categories and Tags */}
          <div className="text-[#151875] font-josifen text-sm md:text-[16px]">
            <p className="mb-2">Categories:</p>
            <p>Tags</p>
          </div>

          {/* Share Section */}
          <div className="flex items-center gap-4 mt-4">
            <p className="text-[#151875] font-medium">Share:</p>
            <div className="flex gap-2">
              <Link href="#">
                <div className="w-8 h-8 bg-[#151875] rounded-full flex items-center justify-center hover:bg-[#0B0E3A] transition">
                  <FaFacebookF className="text-white text-sm" />
                </div>
              </Link>
              <Link href="#">
                <div className="w-8 h-8 bg-[#FB2E86] rounded-full flex items-center justify-center hover:bg-pink-700 transition">
                  <FaInstagram className="text-white text-sm" />
                </div>
              </Link>
              <Link href="#">
                <div className="w-8 h-8 bg-[#151875] rounded-full flex items-center justify-center hover:bg-[#0B0E3A] transition">
                  <FaTwitter className="text-white text-sm" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 2nd portion */}
      <div className="w-full bg-[#F9F8FE] my-4 py-8">
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 mx-auto w-[90%] md:w-full h-auto ">
          <Link
            href={"#"}
            className="text-[#151875] font-josifen text-[24px]  hover:underline"
          >
            Description
          </Link>
          <Link
            href={"#"}
            className="text-[#151875] font-josifen text-[24px]  hover:underline"
          >
            Additional Info
          </Link>
          <Link
            href={"#"}
            className="text-[#151875] font-josifen text-[24px]  hover:underline"
          >
            Reviews
          </Link>
          <Link
            href={"#"}
            className="text-[#151875] text-[24px] font-josifen  hover:underline"
          >
            Video
          </Link>
        </div>

        {/* Content Section */}
        <div className="mx-auto w-[90%] md:w-[90%] pt-5">
          {/* Heading */}
          <h1 className="text-[#151875] text-[20px] md:text-[22px] mb-4">
            Varius tempor.
          </h1>

          {/* Description */}
          <p className="text-[#A9ACC6] text-[14px] md:text-[16px] leading-relaxed">
            Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor
            ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris
            varius ac est bibendum. Scelerisque a, risus ac ante. Velit
            consectetur neque, elit, aliquet. Non varius proin sed urna, egestas
            consequat laoreet diam tincidunt. Magna eget faucibus cras justo,
            tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla
            lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui,
            massa viverr.
          </p>

          {/* More Details List */}
          <ul className="text-[#151875] text-[18px] md:text-[22px] pt-5">
            <span className="block mb-2">More Details</span>
            <li className="flex items-start text-[14px] md:text-[16px] text-[#A9ACC6] mb-2">
              <BiRightArrowAlt className="w-5 h-5 text-black mr-2 mt-1" />
              Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
              arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate
              nunc nec. Dui, massa viverr .
            </li>
            <li className="flex items-start text-[14px] md:text-[16px] text-[#A9ACC6] mb-2">
              <BiRightArrowAlt className="w-5 h-5 text-black mr-2 mt-1" />
              Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
              arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate
              nunc nec. Dui, massa viverr .
            </li>
            <li className="flex items-start text-[14px] md:text-[16px] text-[#A9ACC6] mb-2">
              <BiRightArrowAlt className="w-5 h-5 text-black mr-2 mt-1" />
              Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
              arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate
              nunc nec. Dui, massa viverr .
            </li>
            <li className="flex items-start text-[14px] md:text-[16px] text-[#A9ACC6] mb-2">
              <BiRightArrowAlt className="w-5 h-5 text-black mr-2 mt-1" />
              Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
              arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate
              nunc nec. Dui, massa viverr .
            </li>
          </ul>
        </div>
      </div>

      {/* 3rd portion */}

      <section className="w-full py-8">
        <div className="max-w-6xl mx-auto px-4">
          {/* Section Title */}
          <h2 className="text-2xl md:text-3xl font-bold font-josifen text-[#101750] mb-6">
            Related Products
          </h2>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white  overflow-hidden">
                {/* Product Image */}
                <div className="relative w-full h-[350px]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>

                {/* Product Details */}
                <div className="pt-2 ">
                  <div className="flex justify-between items-start">
                    <h3 className="text-[#151875] text-[16px]  mb-2">
                      {product.name}
                    </h3>
                    {/* Ratings */}
                    <div className="flex  gap-1 text-yellow-400">
                      {Array.from({ length: 5 }, (_, i) =>
                        i < product.rating ? (
                          <FaStar key={i} />
                        ) : (
                          <FaStarHalfAlt key={i} />
                        )
                      )}
                    </div>
                  </div>
                  <p className="text-[#151875] text-sm font-semibold mb-2">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>




        {/* 4th portion */}

        <BrandsLogo/>


    </div>
  );
}
