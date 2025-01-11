import Image from 'next/image';
import OurFeatures from "../../components/ourfeatures";

export default function AboutUs() {
  return (
    <div className="w-full bg-gray-50">
      {/* Header Section */}
      <div className="bg-gray-200 py-8">
        <div className="max-w-[1200px] mx-auto px-4">
          <h1 className="text-3xl font-bold font-josifen text-[#101750] mb-2">
            About Us
          </h1>
          <p className="text-sm text-black">
            Home <span className="text-black">.</span> Pages{" "}
            <span className="text-black">.</span>{" "}
            <span className="text-[#FB2E86]">About Us</span>
          </p>
        </div>
      </div>

      {/* Right side */}
      <div className="w-full flex flex-wrap md:flex-nowrap justify-center items-center">
        {/* Image Section */}
        <div className="w-full md:w-[50%] mx-auto flex justify-center">
          <Image
            src="/images/about.png"
            alt="about"
            width={555}
            height={409}
            className="w-full max-w-[555px] object-cover mt-16"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-[40%] mt-8 md:mt-0 px-4 md:px-0 text-center md:text-left lg:mr-28">
          <h1 className="text-[#151875] text-[28px] md:text-[36px] font-bold font-josifen">
            Know About Our Ecommerce Business, History
          </h1>
          <p className="font-[lato] text-[#8A8FB9] text-[14px] md:text-[16px] mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
            tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
            vitae lobortis quis bibendum quam.
          </p>
          <button className="bg-[#FB2E86] py-2 px-4 mt-8 md:mt-16 hover:bg-pink-600 text-white font-[lato]">
            Contact us
          </button>
        </div>
      </div> {/* Closing div for the right side */}

      <OurFeatures />

      {/* Client Testimonials */}
      <section className="bg-[#FBFBFF] w-full py-16 md:py-20 mb-40">
        <div className="flex justify-center items-center flex-col gap-4 md:max-w-[50%] max-w-[90%] mx-auto text-center">
          <h1 className="text-black text-[28px] md:text-[36px] mt-5 font-bold font-josifen">
            Our Client Say!
          </h1>

          <div className="flex justify-center space-x-6 mt-8">
            {/* Client Images */}
            <div className="flex gap-6">
              {/* Left Image */}
              <Image
                src="/images/client1.jpg"
                alt="Client 1"
                width={80}
                height={80}
                className="w-20 h-20 object-cover rounded-md shadow-lg border border-gray-200"
              />
              {/* Center Image */}
              <Image
                src="/images/client2.jpg"
                alt="Client 2"
                width={96}
                height={96}
                className="w-24 h-24 object-cover rounded-md shadow-lg border border-gray-200 relative -mt-4"
              />
              {/* Right Image */}
              <Image
                src="/images/client3.jpg"
                alt="Client 3"
                width={80}
                height={80}
                className="w-20 h-20 object-cover rounded-md shadow-lg border border-gray-200"
              />
            </div>
          </div>

          <div className="mt-8">
            {/* Client Testimonial */}
            <h3 className="text-black text-[22px] font-lato font-bold">
              Selina Gomez
            </h3>
            <p className="text-[#8A8FB9] font-[lato] text-[14px]">
              CEO at Company Name
            </p>

            <p className="text-[#8A8FB9] font-[lato] font-[700] text-center text-[16px] leading-[25.6px] mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non dui
              ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a
              enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor
              aliquam lacus volutpat praesent.
            </p>
          </div>

          <div className="flex justify-center mb-4 space-x-2 mt-8">
            {/* Decorative Lines */}
            <span className="w-[18px] h-[3px] bg-[#FF75B0]"></span>
            <span className="w-[27px] h-[3px] bg-[#FB2E86]"></span>
            <span className="w-[18px] h-[3px] bg-[#FF75B0]"></span>
          </div>
        </div>
      </section>
    </div>
  );
}
