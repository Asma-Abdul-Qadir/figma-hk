'use client';
import Image from 'next/image';
import Link from "next/link";

function LatestBlog() {
  const blogs = [
    {
      id: 1,
      img: "/images/blog1.png",
      author: "Saber Ali",
      date: "21 August, 2020",
      title: "Top Essential Trends in 2020",
      description: "More off this less hello samlande lied much over tightly circa horse taped mightly.",
      titleColor: "#151875", 
    },
    {
      id: 2,
      img: "/images/blog2.png",
      author: "Surfauxion",
      date: "21 August, 2020",
      title: "Top Essential Trends in 2020",
      description: "More off this less hello samlande lied much over tightly circa horse taped mightly.",
      titleColor: "#FB2E86",
    },
    {
      id: 3,
      img: "/images/blog3.png",
      author: "Saber Ali",
      date: "21 August, 2020",
      title: "Top Essential Trends in 2020",
      description: "More off this less hello samlande lied much over tightly circa horse taped mightly.",
      titleColor: "#151875", 
    },
  ];

  return (
    <div className="w-full bg-white py-8 sm:py-16 lg:py-20">
      {/* Heading */}
      <h2 className="text-center text-[#151875] font-josifen text-2xl sm:text-3xl font-bold mb-8 sm:mb-12">
        Leatest Blog
      </h2>
      

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-screen-xl mx-auto px-4">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="flex flex-col items-start bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            {/* Blog Image */}
            <div className="relative w-full h-[200px] sm:h-[250px] lg:h-[300px] rounded-lg overflow-hidden mb-4">
              <Image
                src={blog.img}
                alt={blog.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>

            {/* Author and Date */}
            <div className="flex items-center space-x-2 text-sm text-[#151875] mb-3">
              {/* Pen Icon */}
              <Image src="/images/pen.png" alt="Pen" width={20} height={20} />
              <span className="font-medium">{blog.author}</span>
              {/* Calendar Icon */}
              <Image src="/images/vector1.png" alt="Calendar" width={20} height={20} />
              <span className="font-medium">{blog.date}</span>
            </div>

            {/* Blog Title */}
            <h3 className="font-bold text-lg sm:text-xl lg:text-2xl mt-2 mb-2" style={{ color: blog.titleColor }}>
              {blog.title}
            </h3>

            {/* Blog Description */}
            <p className="text-gray-600 text-sm sm:text-base">{blog.description}</p>

            {/* Read More */}
            <Link href="/blog">
              <button
                className="underline text-sm font-medium mt-4"
                style={{ color: blog.titleColor }}
              >
                Read More
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LatestBlog;
