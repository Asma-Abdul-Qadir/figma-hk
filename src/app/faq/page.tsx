'use client';
import Link from "next/link";
import { Input } from "../../components/ui/input";
import BrandsLogo from "../../components/brandslogo";

const faqs = [
  { question: "Eu dictumst cum at sed euismod condimentum?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis." },
  { question: "Magna bibendum est fermentum eros?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis." },
  { question: "Odio muskana hak eris conseekin sceleton?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis." },
  { question: "Elit id blandit sabara boi velit gua mara?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis." },
];

function FAQ() {
  return (
    <>
      <div className="font-sans text-[#151875]">
        {/* Header Section */}
        <div className="bg-[#F6F5FF] py-28 px-8">
          <h1 className="font-josifen font-bold text-[36px] text-[#101750] ml-14">FAQ</h1>
          <div className="flex gap-1 font-medium cursor-pointer ml-14">
            <Link href="/">Home</Link>
            <span>.</span>
            <Link href="/pages">Pages</Link>
            <span>.</span>
            <p className="text-[#FB2E86]">FAQ</p>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-16 px-4 md:px-8">
          {/* FAQ List */}
          <div>
            <h2 className="text-[#1D3178] text-2xl font-josifen font-bold mb-6">General Information</h2>
            {faqs.map((faq, index) => (
              <div key={index} className="mb-8">
                <h3 className="text-[#1D3178] text-lg font-josifen font-bold mb-2">{faq.question}</h3>
                <p className="text-[#A1ABCC] font-josifen">{faq.answer}</p>
              </div>
            ))}
          </div>

          {/* Form Section */}
          <div className="bg-[#F8F8FD] p-6 rounded-md">
            <h2 className="text-[#1D3178] text-2xl font-josifen font-bold mb-6">Ask a Question</h2>
            <form className="space-y-4">
            <Input placeholder="Your Name*" required className="bg-white border rounded-[4px] border-gray-400" />
            <Input placeholder="Subject*" required className="bg-white border rounded-[4px] border-gray-400" />
              <textarea
                placeholder="Type Your Message*"
                required
                aria-label="Your Message"
                className="w-full border rounded-md px-4 py-2 text-sm h-32 resize-none"
              ></textarea>
              <button className="bg-[#FB2E86] text-white font-josifen px-6 py-2 rounded-md hover:bg-[#f95c9b] transition">Send Mail</button>
            </form>
          </div>
        </div>
      </div>

      <BrandsLogo />
    </>
  );
}

export default FAQ;
