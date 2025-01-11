
import Image from "next/image";
import Link from "next/link";

export default function Demo() {
  const cartItems = [
    {
      id: 1,
      name: "Ur diem consequat",
      color: "Brown",
      size: "XL",
      price: 32,
      image: "/images/demo1.jpg",
    },
    {
      id: 2,
      name: "Ur diem consequat",
      color: "Brown",
      size: "XL",
      price: 32,
      image: "/images/demo2.jpg",
    },
    {
      id: 3,
      name: "Ur diem consequat",
      color: "Brown",
      size: "XL",
      price: 32,
      image: "/images/demo3.jpg",
    },
    {
      id: 4,
      name: "Ur diem consequat",
      color: "Brown",
      size: "XL",
      price: 32,
      image: "/images/demo4.jpg",
    },
    {
      id: 5,
      name: "Ur diem consequat",
      color: "Brown",
      size: "XL",
      price: 32,
      image: "/images/demo5.jpg",
    },
  ];

  const subtotal = 219;
  const total = 325;
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      {/* Header */}
      <div className="w-full text-center  pt-5 pl-4 md:pl-10 h-[200px] bg-[#F6F5FF] mb-8">
        <h1 className="text-3xl font-bold font-josifen text-[#101750] text-center md:text-left">
          Hekto Demo
        </h1>
      </div>

      {/* Main Container */}
      <div className="w-full text-center md:text-left mb-4 px-4 py-4">
        <h1 className="text-[#1D3178] text-[24px] leading-[28.13px] font-bold font-josifen">
          Hekto Demo
          <p className="text-[12px] text-[#1D3178] font-lato">
            Cart / &nbsp; Information / &nbsp; Shipping / &nbsp; Payment
          </p>
        </h1>
      </div>
      <div className="w-full flex md:flex-row flex-col  px-4 py-4">
        {/* Left Side */}
        <div className="w-full   md:max-w-full lg:max-w-[60%]  bg-[#F8F8FD] px-4 py-8 rounded-md shadow-md">
          {/* Contact Information */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <h1 className="text-[18px] text-[#1D3178] font-bold font-josifen mb-2 md:mb-0">
              Contact Information
            </h1>
            <p className="text-[#C1C8E1] text-[14px] font-[lato] font-medium">
              Already have an account?{" "}
              <span className=" cursor-pointer">Log in</span>
            </p>
          </div>

          {/* Contact Form */}
          <div className="space-y-4">
            <input
              id="email"
              type="text"
              placeholder="Email or mobile phone number"
              className="w-full border-b-2 bg-[#F8F8FD] text-black  font-[lato] border-[#BFC6E0] focus:border-[#FB2E86] outline-none py-2"
            />
            <div className="flex  items-start gap-2">
              <input type="checkbox" className="w-4 h-4 mt-1 accent-[#4a8f6a]" />
              <p className="text-[#8A91AB] text-[12px] py-1 font-[lato]">
                Keep me up to date on news and exclusive offers
              </p>
            </div>
          </div>

          {/* Shipping Information */}
          <div className="mt-8">
            <h2 className="text-[#1D3178] text-[18px] font-bold font-josifen mb-6">
              Shipping address
            </h2>
            <form className="space-y-4">
              {/* First Name and Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  id="firstName"
                  type="text"
                  placeholder="First name (optional)"
                  className="w-full border-b-2 bg-[#F8F8FD] text-black  font-[lato] border-[#BFC6E0] focus:border-[#FB2E86] outline-none py-2"
                />
                <input
                  id="lastName"
                  type="text"
                  placeholder="Last name"
                  className="w-full border-b-2 bg-[#F8F8FD] text-black  font-[lato] border-[#BFC6E0] focus:border-[#FB2E86] outline-none py-2"
                />
              </div>

              {/* Address */}
              <input
                id="address"
                type="text"
                placeholder="Address"
                className="w-full border-b-2 bg-[#F8F8FD] text-black  font-[lato] border-[#BFC6E0] focus:border-[#FB2E86] outline-none py-2"
              />

              {/* Apartment */}
              <input
                id="apartment"
                type="text"
                placeholder="Apartment, suite, etc. (optional)"
                className="w-full border-b-2 bg-[#F8F8FD] text-black  font-[lato] border-[#BFC6E0] focus:border-[#FB2E86] outline-none py-2"
              />

              {/* City */}
              <input
                id="city"
                type="text"
                placeholder="City"
                className="w-full border-b-2 bg-[#F8F8FD] text-black  font-[lato] border-[#BFC6E0] focus:border-[#FB2E86] outline-none py-2"
              />

              {/* Country and Postal Code */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  id="country"
                  type="text"
                  placeholder="Bangladesh"
                  className="w-full border-b-2 bg-[#F8F8FD] text-black  font-[lato] border-[#BFC6E0] focus:border-[#FB2E86] outline-none py-2"
                />
                <input
                  id="postalCode"
                  type="text"
                  placeholder="Postal Code"
                  className="w-full border-b-2 bg-[#F8F8FD] text-black  font-[lato] border-[#BFC6E0] focus:border-[#FB2E86] outline-none py-2"
                />
              </div>

              {/* Submit Button */}
              <div className="text-center md:text-left">
                <button
                  type="submit"
                  className="bg-[#FB2E86] hover:bg-pink-600 text-white font-josifen font-medium py-2 px-6 rounded-md transition"
                >
                  Continue Shipping
                </button>
              </div>
            </form>
          </div>
        </div>

      {/* Right Section */}
<div className="w-full md:w-[40%] bg-white px-4 py-8 md:px-8 lg:px-16">
  {/* Cart Items */}
  {cartItems.map((item) => (
    <div
      key={item.id}
      className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-200 py-4"
    >
      <div className="flex items-center space-x-4">
        {/* Item Image */}
        <div className="w-16 h-16 relative">
          <Image
            src={item.image}
            alt={item.name}
            layout="fill"
            objectFit="contain"
            className="rounded-md object-contain"
          />
        </div>
        {/* Item Details */}
        <div>
          <h2 className="text-black font-josifen font-medium text-sm md:text-base">
            {item.name}
          </h2>
          <p className="text-[#A1A8C1] text-xs md:text-sm">
            Color: {item.color} <br /> Size: {item.size}
          </p>
        </div>
      </div>
      {/* Price */}
      <div className="text-[#15245E] font-josifen font-bold mt-2 sm:mt-0 text-sm md:text-base">
        ${item.price.toFixed(2)}
      </div>
    </div>
  ))}

  {/* Summary Section */}
  <div className="bg-[#F4F4FC] shadow-md font-[lato] rounded-md p-4 mt-8">
    {/* Subtotal */}
    <div className="flex justify-between text-[#1D3178] border-b border-[#E8E6F1] text-sm md:text-lg font-lato font-semibold">
      <p>Subtotal:</p>
      <p className="text-[#15245E] font-medium">£{subtotal.toFixed(2)}</p>
    </div>

    {/* Total */}
    <div className="flex justify-between text-[#1D3178] border-b border-[#E8E6F1] mt-2 text-sm md:text-lg font-lato font-semibold">
      <p>Totals:</p>
      <p className="text-[#15245E] font-medium">£{total.toFixed(2)}</p>
    </div>

    {/* Shipping Notice */}
    <div className="flex items-start gap-2 mt-4">
      <input
        type="checkbox"
        className="w-4 h-4 mt-1 rounded border-gray-300 accent-[#4a8f6a]"
      />
      <p className="text-[#8A91AB] text-xs md:text-sm leading-relaxed">
        Shipping & taxes calculated at checkout
      </p>
    </div>

    {/* Checkout Button */}
    <Link href="/ordercomplete">
    <button className="w-full mt-4 py-2 bg-[#19D16F] text-white font-medium font-lato text-sm md:text-base rounded-md hover:bg-green-600 transition">
      Proceed To Checkout
    </button>
    </Link>
  </div>
</div>

      </div>
    </div>
  );
}
