
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import BrandsLogo from "../../components/brandslogo";

import { FaPenNib } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";


export default function SingleBlog() {
  const posts = [
    {
      id: 1,
      image: "/images/recent1.png",
      title: "It is a long established fact",
      date: "Aug 09 2020",
    },
    {
      id: 2,
      image: "/images/recent2.png",
      title: "It is a long established fact",
      date: "Aug 09 2020",
    },
    {
      id: 3,
      image: "/images/recent3.png",
      title: "It is a long established fact",
      date: "Aug 09 2020",
    },
    {
      id: 4,
      image: "/images/recent4.png",
      title: "It is a long established fact",
      date: "Aug 09 2020",
    },
  ];
  const sales = [
    {
      id: 1,
      image: "/images/sale1.png",
      title: "Elit ornare in enim mauris.",
      date: "Aug 09 2020",
    },
    {
      id: 2,
      image: "/images/sale2.png",
      title: "Viverra pulvinar et enim.",
      date: "Aug 09 2020",
    },
    {
      id: 3,
      image: "/images/sale3.png",
      title: "Mattis varius donec fdsfd",
      date: "Aug 09 2020",
    },
  ];
  const products = [
    {
      id: 1,
      image: "/images/off1.png",
      title: "Duis lectus est.",
      price: "$12.00 - $15.00",
    },
    {
      id: 2,
      image: "/images/off2.png",
      title: "Sed placerat.",
      price: "$12.00 - $15.00",
    },
    {
      id: 3,
      image: "/images/off3.png",
      title: "Netus proin.",
      price: "$12.00 - $15.00",
    },
    {
      id: 4,
      image: "/images/off4.png",
      title: "Platea in.",
      price: "$12.00 - $15.00",
    },
  ];

  const grids = [
    {
      id: 1,
      name: "Quam sed",
      price: "$32.00",
      oldPrice: "$56.00",
      rating: 5,
      image: "/images/sed1.png",
    },
    {
      id: 2,
      name: "Tristique sed",
      price: "$32.00",
      oldPrice: "$56.00",
      rating: 5,
      image: "/images/sed2.png",
    },
    {
      id: 3,
      name: "A etiam",
      price: "$32.00",
      oldPrice: "$56.00",
      rating: 5,
      image: "/images/sed3.png",
    },
    {
      id: 4,
      name: "Mi nisi",
      price: "$32.00",
      oldPrice: "$56.00",
      rating: 5,
      image: "/images/sed4.png",
    },
  ];
  return (
    <div className="w-full bg-gray-50">
      {/* Header Section */}
      <div className="bg-gray-200 py-8">
        <div className="max-w-[1200px] mx-auto px-4">
          <h1 className="text-3xl font-bold font-josifen text-[#101750] mb-2">Single Blog</h1>
          <p className="text-sm text-black font-lato">
            Home <span className="text-black">.</span> Pages <span className="text-black">.</span>{" "}
            <span className="text-[#FB2E86]">Single Blog</span>
          </p>
        </div>
      </div>
      {/* main */}
      <div className="mx-auto px-4 py-8 flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-[75%] px-4">
          <div className="space-y-8">
            {/* Blog Image */}
            <img
              src="/images/blog4.png"
              alt="Post 1"
              className="w-full h-[200px] sm:h-[300px] md:h-[453px] object-cover rounded-lg"
            />

            {/* Blog Details */}
            <div className="flex flex-col sm:flex-row gap-4 p-4 sm:p-6">
              {/* Author Section */}
              <div className="flex items-center gap-2">
                <FaPenNib className="text-2xl sm:text-3xl text-[#FB2E86]" />
                <p className="bg-[#FFECE2] px-3 py-2 text-sm sm:text-base text-[#151875] rounded-lg">
                  Surf Auxion
                </p>
              </div>

              {/* Date Section */}
              <div className="flex items-center gap-2">
                <SlCalender className="text-2xl sm:text-3xl text-[#fb8a2e]" />
                <p className="bg-[#FFECE2] px-3 py-2 text-sm sm:text-base text-[#151875] rounded-lg">
                  Aug 09 2020
                </p>
              </div>
            </div>

            <h2 className="text-[30px] font-bold font-josifen mb-4 text-[#151875]">
              Mauris at orci non vulputate diam tincidunt nec.
            </h2>
            <p className="text-[#8A8FB9] font-lato mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
              facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu
              malesuada vitae ultrices in in neque, porta dignissim. Adipiscing
              purus, cursus vulputate id id dictum at.
            </p>

            <p className="mt-14 text-[#8A8FB9] font-lato">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
              dapibus est, nunc, montes, lacus consequat integer viverra. Sit
              morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante
              posuere malesuada.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat
              integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu
              platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Velit dapibus est, nunc,
            </p>

            <p className="text-[#969CB4] mt-16 font-italic bg-[#FAFAFB] py-4 px-6 border-l-4 leadind-[21.09px] border-l-[#FC45A0]">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
              dictum sapien, amet, consequat. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Commodo dictum sapien, amet,
              consequat toamk risusu”
            </p>

            <div>
              <div className="flex flex-col lg:flex-row items-center gap-4">
                <img
                  src="/images/video1.png"
                  alt="video"
                  className="object-cover w-full h-[300px]"
                />
                <img
                  src="/images/video2.png"
                  alt="picture"
                  className=" object-cover w-full h-[300px]"
                />
              </div>
              <br />
              <p className="text-[#8A8FB9] font-lato">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                dapibus est, nunc, montes, lacus consequat integer viverra. Sit
                morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante
                posuere malesuada.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Velit dapibus est, nunc, montes, lacus
                consequat integer viverra. Sit morbi etiam quam rhoncus. Velit
                in arcu platea donec vitae ante posuere malesuada.Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Velit dapibus est,
                nunc,{" "}
              </p>

              {/* main products */}
              <div className="w-full bg-white  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2 pt-10">
                {grids.map((grid) => (
                  <div
                    key={grid.id}
                    className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition hover:scale-110 transform duration-300"
                  >
                    <img
                      src={grid.image}
                      alt={grid.name}
                      className="w-full h-[200px] sm:h-[220px] md:h-[254px] object-cover"
                    />
                    <div className="py-2 px-4">
                      <h3 className="text-md sm:text-lg font-medium text-black">
                        {grid.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="text-[#232A69] font-semibold">
                          {grid.price}
                        </span>
                        <span className="text-[#FF38B0] line-through">
                          {grid.oldPrice}
                        </span>

                        <div className="flex items-center mb-1">
                          {[...Array(grid.rating)].map((_, i) => (
                            <svg
                              key={i}
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 md:h-5 md:w-5 text-yellow-500"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.948a1 1 0 00.95.69h4.15c.969 0 1.372 1.24.588 1.81l-3.357 2.442a1 1 0 00-.364 1.118l1.286 3.948c.3.921-.755 1.688-1.54 1.118l-3.357-2.442a1 1 0 00-1.176 0l-3.357 2.442c-.784.57-1.838-.197-1.539-1.118l1.285-3.948a1 1 0 00-.364-1.118L2.316 9.376c-.784-.57-.38-1.81.588-1.81h4.15a1 1 0 00.951-.69L9.05 2.927z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-[#8A8FB9] font-[lato] mt-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                dapibus est, nunc, montes, lacus consequat integer viverra. Sit
                morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante
                posuere malesuada.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Velit dapibus est, nunc, montes, lacus
                consequat integer viverra. Sit morbi etiam quam rhoncus. Velit
                in arcu platea donec vitae ante posuere malesuada.Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Velit dapibus est,
                nunc,{" "}
              </p>

              <p className="text-[#8A8FB9] font-[lato] mt-10 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                dapibus est, nunc, montes, lacus consequat integer viverra. Sit
                morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante
                posuere malesuada.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Velit dapibus est, nunc, montes, lacus
                consequat integer viverra. Sit morbi etiam quam rhoncus. Velit
                in arcu platea donec vitae ante posuere malesuada.Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Velit dapibus est,
                nunc,{" "}
              </p>

              <hr className="mt-10" />
              {/* social media */}

              <div className="p-6 max-w-xs mx-auto mt-10">
                <div className="flex justify-start space-x-4 ">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#5625DF] text-white p-3 rounded-full hover:bg-purple-700 transition-transform hover:scale-110 duration-300"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#FF27B7] text-white p-3 rounded-full hover:bg-pink-600 transition-transform hover:scale-110 duration-300"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#37DAF3] text-white p-3 rounded-full hover:bg-teal-500 transition-transform hover:scale-110 duration-300"
                  >
                    <FaTwitter />
                  </a>
                </div>
              </div>

              <div className="flex justify-between items-center bg-[#F7F8FB] py-4 px-6 rounded-md shadow">
                {/* Previous Post */}
                <a
                  href="#"
                  className="text-[#8A8FB9] text-sm sm:text-base flex items-center gap-1 hover:text-[#6C63FF] transition"
                >
                  <IoIosArrowRoundBack className="text-3xl mb-1" /> Previous
                  Post
                </a>

                {/* Next Post */}
                <a
                  href="#"
                  className="text-[#8A8FB9] text-sm sm:text-base flex items-center gap-1 hover:text-[#6C63FF] transition"
                >
                  Next Post
                  <IoIosArrowRoundForward className="text-3xl mb-1" />
                </a>
              </div>

              <div className="p-8 max-w-4xl mx-auto mt-10">
                {/* Comment Cards */}
                <div className="space-y-6 text-[#A3A2B6]">
                  <div className="flex flex-col sm:flex-row items-start p-4 shadow-lg rounded-lg bg-white transition-transform duration-300 hover:scale-105">
                    <img
                      src="/images/single1.png"
                      alt="pic1"
                      className="w-full h-[110px] hover:scale-110 sm:w-28 object-cover rounded-md mr-4"
                    />
                    <div>
                      <div className="flex items-center gap-6">
                        <h3 className="text-lg font-semibold text-[#363385]">
                          Sapien ac
                        </h3>
                        <p className="text-sm ">Jan 09 2020</p>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        At in vitae rutrum vulputate consectetur
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start p-4 shadow-lg rounded-lg bg-white transition-transform duration-300 hover:scale-105">
                    <img
                      src="/images/single2.png"
                      alt="pic2"
                      className="w-full h-[110px] hover:scale-110  sm:w-28 object-cover rounded-md mr-4"
                    />
                    <div>
                      <div className="flex items-center gap-6">
                        <h3 className="text-lg font-semibold text-[#363385]">
                          Augue conva
                        </h3>
                        <p className="text-sm">Aug 18 2020</p>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        At in vitae rutrum vulputate consectetur.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* comment form */}
              <div className="max-w-4xl mx-auto px-4 py-8 mt-10 ">
                <form className="space-y-6">
                  {/* Name and Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <div className="relative">
                        <input
                          type="text"
                          className="w-full text-black border border-[#8A8FB9] rounded-md pl-10 py-2 "
                          placeholder="Your Name*"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          className="w-full text-black border border-[#8A8FB9] rounded-md pl-10 py-2 "
                          placeholder="Write Your Email*"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Comment */}
                  <div>
                    <textarea
                      id="comment"
                      className="w-full text-black border border-[#8A8FB9] rounded-md pl-4 py-2 "
                      placeholder="Write your comment*"
                    ></textarea>
                  </div>

                  {/* Checkbox */}
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="saveInfo"
                      className="h-4 w-4  text-[#8A8FB9] rounded"
                    />
                    <label
                      htmlFor="saveInfo"
                      className="ml-2 text-sm text-[#8A91AB]"
                    >
                      Save my name, email, and website in this browser for the
                      next time I comment.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-[#FB2E86] text-white py-3 rounded-sm text-lg font-medium hover:bg-pink-600 transition"
                    >
                      Continue Shipping
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:w-[25%]  mt-10 lg:mt-0">
          {/* Search */}
          <div className="mb-6">
            <h3 className="text-[22px] text-[#151875] font-bold font-josifen mb-2">
              Search
            </h3>
            <input
              type="text"
              placeholder="Search here"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          {/* Categories */}
          <div className="mb-6 ">
            <h3 className="text-[22px] text-[#151875] font-bold font-josifen mb-2">
              Categories
            </h3>
            <ul className=" text-[#3F509E] grid grid-cols-2 gap-4">
              <li className="hover:bg-[#F939BF] py-1 rounded-sm px-3 hover:text-white cursor-pointer">
                Hobies(14)
              </li>
              <li className="hover:bg-[#F939BF] py-1 rounded-sm px-3 hover:text-white cursor-pointer">
                Women(21)
              </li>
              <li className="hover:bg-[#F939BF] py-1 rounded-sm px-3 hover:text-white cursor-pointer">
                Women(21)
              </li>
              <li className="hover:bg-[#F939BF] py-1 rounded-sm px-3 hover:text-white cursor-pointer">
                Women(21)
              </li>
              <li className="hover:bg-[#F939BF] py-1 rounded-sm px-3 hover:text-white cursor-pointer">
                Women(21)
              </li>
              <li className="hover:bg-[#F939BF] py-1 rounded-sm px-3 hover:text-white cursor-pointer">
                Women(21)
              </li>
            </ul>
          </div>

          {/* recent */}
          <div className="p-6 max-w-md mx-auto">
            <h2 className="text-[22px] font-bold font-josifen text-[#151875] mb-4">
              Recent Post
            </h2>
            <ul>
              {posts.map((post) => (
                <li key={post.id} className="flex items-center mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="rounded-md w-[64px] h-[55px]"
                  />
                  <div className="ml-4">
                    <h3 className="text-[#3F509E] font-medium">{post.title}</h3>
                    <p className="text-[#8A8FB9] font-[lato] text-sm">
                      {post.date}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* sale product */}

          <div className="p-6 max-w-md mx-auto">
            <h2 className="text-[22px] font-bold font-josifen text-[#151875] mb-4">
              Sale Product
            </h2>
            <ul>
              {sales.map((sale) => (
                <li key={sale.id} className="flex items-center mb-4">
                  <img
                    src={sale.image}
                    alt={sale.title}
                    className="rounded-md w-[64px] h-[55px]"
                  />
                  <div className="ml-4">
                    <h3 className="text-[#3F509E] font-medium">{sale.title}</h3>
                    <p className="text-[#8A8FB9] font-lato text-sm">
                      {sale.date}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* offer products */}
          <div className="p-6 max-w-md mx-auto">
            <h2 className="text-[22px] font-bold font-josifen  text-[#151875] mb-4">
              Offer product
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {products.map((product) => (
                <div key={product.id} className="text-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="rounded-md mx-auto w-[125px] h-[80px]"
                  />
                  <h3 className="text-[#151875] font-[lato] font-[600] mt-2">
                    {product.title}
                  </h3>
                  <p className="text-[#8A8FB9] font-[lato] text-sm">
                    {product.price}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* follow */}

          <div className="p-6 max-w-xs mx-auto">
            <h2 className="text-[22px] font-bold font-josifen text-[#151875] mb-4">
              Follow
            </h2>
            <div className="flex justify-start space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#5625DF] text-white p-3 rounded-full hover:bg-purple-700"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FF27B7] text-white p-3 rounded-full hover:bg-pink-600"
              >
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#37DAF3] text-white p-3 rounded-full hover:bg-teal-500"
              >
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Tags */}
          <div className="p-6 max-w-xs mx-auto">
            <h3 className="text-[22px] font-bold font-josifen text-[#151875] mb-4">Tags</h3>
            <div className="flex flex-wrap gap-8 ">
              {["General", "Atsanil", "Insas", "Bibsaas", "Nulla"].map(
                (tag, index) => (
                  <span
                    key={index}
                    className="underline text-[#151875] font-[lato] text-[16px] underline-offset-4 text-lg hover:text-[#FB2E86] cursor-pointer"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    
      <BrandsLogo />
    </div>
  );
}
