import BrandsLogo from "../../components/brandslogo";
import Link from "next/link";
import Image from "next/image"; // Import Image from next/image

export default function OrderComplete() {
  return (
    <div className="font-sans text-[#151875]">
      {/* Header Section */}
      <div className="bg-[#F6F5FF] py-28 px-8">
        <h1 className="font-josifen font-bold text-[36px] text-[#101750] ml-14">
          Order Completed
        </h1>
        <div className="flex gap-1 font-medium cursor-pointer ml-14">
          <Link href="/">Home</Link>
          <span>.</span>
          <Link href="/pages">Pages</Link>
          <span>.</span>
          <p className="text-[#FB2E86]">Order Completed</p>
        </div>
      </div>

      <div className="max-w-full mx-auto py-16 relative">
        <div className="md:w-[625px] w-full mx-auto flex flex-col gap-8 justify-center text-center items-center relative">
          {/* Top-left Image */}
          <Image
            className="w-[65px] hidden md:block absolute -left-12 top-4"
            src="/images/order1.png"
            alt="time"
            width={65}
            height={65}
          />
          {/* Center Image */}
          <Image
            className="w-[65px] rounded-[50%] p-2 border-8 border-gray-100"
            src="/images/order2.png"
            alt="tick"
            width={65}
            height={65}
          />
          <h1 className="text-[#101750] font-bold font-josifen text-4xl">
            Your Order Is Completed!
          </h1>
          <p className="font-[lato] leading-[30px] text-[#8D92A7] md:w-[600px]">
            Thank you for your order! Your order is being processed and will be
            completed within 3-6 hours. You will receive an email confirmation
            when your order is completed.
          </p>
          {/* Button */}
          <button className="bg-[#FF1788] text-white font-lato py-4 px-6 hover:bg-pink-700 rounded">
            <Link href={"/"}>Continue Shopping</Link>
          </button>
        </div>

        {/* Image Below the Button and Positioned in Bottom-Right */}
        <Image
          className="absolute right-0 md:right-[10%] bottom-[-40px] w-[60px]"
          src="/images/order3.png"
          alt="corner decoration"
          width={60}
          height={60}
        />
      </div>
      <BrandsLogo />
    </div>
  );
}
