import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default function DiscountItem() {
  return (
    <section className="max-w-screen-xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <h2 className="text-[#1A0B5B] font-josifen text-3xl sm:text-4xl lg:text-5xl text-center font-bold">Discount Item</h2>

      {/* Tag Buttons */}
      <ul className="flex gap-6 items-center justify-center mb-12 text-lg sm:text-xl lg:text-2xl font-medium">
        {["Wood Chair", "Plastic Chair", "Sofa Collection"].map((tag, index) => (
          <li
            key={index}
            className={`${tag === "Wood Chair" ? "text-[#FB4997] underline" : "text-gray-700"}
                        hover:text-pink-600 cursor-pointer`}
          >
            {tag}
          </li>
        ))}
      </ul>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Text Section */}
        <div className="text-center lg:text-left">
          <h3 className="text-[#151875] font-semibold text-2xl sm:text-3xl lg:text-4xl font-josifen">
            20% Discount Of All Products
          </h3>
          <h4 className="text-pink-500 text-xl sm:text-2xl lg:text-3xl font-semibold mb-6">Eams Sofa Compact</h4>
          <p className="text-[#ACABC3] mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse
            nec, bibendum condimentum.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[#ACABC3] mb-6">
            {[
              "Material expose like metals.",
              "Clear lines and geometric figures.",
              "Simple neutral colors.",
              "Comfortable and stylish.",
            ].map((feature, idx) => (
              <li key={idx} className="flex items-center">
                <span className="w-5 h-5 flex justify-center items-center border border-gray-600 rounded-full text-gray-600 mr-3">
                  ✓
                </span>
                {feature}
              </li>
            ))}
          </ul>
          <Link href="/shoplist">
            <Button className="bg-[#FB2E86] text-white px-6 py-2 font-medium rounded shadow-md hover:bg-pink-500">
              Shop Now
            </Button>
          </Link>
        </div>

        {/* Right Side - Image Section */}
        <div className="relative flex justify-center">
          <div
            className="absolute inset-0 bg-pink-100 w-full max-w-[350px] sm:max-w-[400px] lg:max-w-[500px] rounded-full -z-10"
            style={{ margin: "auto" }}
          ></div>
          <Image
            src="/images/discountitem.png"
            alt="Discount Sofa"
            width={500}
            height={500}
            className="w-full max-w-[350px] sm:max-w-[400px] lg:max-w-[450px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
