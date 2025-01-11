'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";
import { useState } from 'react';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
  const [isBlogDropdownOpen, setIsBlogDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleDropdownClick = (setDropdownState: React.Dispatch<React.SetStateAction<boolean>>) => {
    setDropdownState((prev) => !prev);
  };

  const closeAllDropdowns = () => {
    setIsPagesDropdownOpen(false);
    setIsShopDropdownOpen(false);
    setIsBlogDropdownOpen(false);
  };

  const closeBlogDropdown = () => {
    setIsBlogDropdownOpen(false); // Close blog dropdown when clicking an item
  };

  return (
    <main className="border-b-2 bg-neutral-100">
      <div className="w-full flex items-center justify-center bg-white h-[70px]">
        <div className="sm:w-full md:w-[80%] flex items-center justify-between h-[50px]">
          {/* Logo */}
          <div>
            <h2 className="title-font font-extrabold text-blue-950 tracking-widest text-xl mb-3">
              Hekto
            </h2>
          </div>

          {/* Links - Navigation */}
          <div
            className={`${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"} md:flex md:translate-x-0 md:static w-[50%] md:w-auto bg-gray-800 md:bg-transparent absolute top-0 left-0 h-screen md:h-auto z-40 transition-transform duration-500 ease-in-out`}
          >
            <ul className="flex flex-col md:flex-row md:gap-x-2 lg:gap-x-5 xl:gap-x-5 2xl:gap-x-10 sm:text-md md:text-sm lg:text-md xl:text-md text-white md:text-black">
              <li className="p-4 hover:underline hover:text-pink-600 underline-offset-2">
                <Link href="/">Home</Link>
              </li>
              {/* Pages Dropdown */}
              <li className="p-4 hover:underline hover:text-pink-600 underline-offset-2 relative">
                <button
                  className="focus:outline-none"
                  onClick={() => handleDropdownClick(setIsPagesDropdownOpen)}
                >
                  Pages
                </button>
                {isPagesDropdownOpen && (
                  <ul
                    className="absolute left-0 top-full mt-2 bg-white text-black shadow-lg rounded-md z-50"
                  >
                    <li className="px-4 py-2 hover:bg-gray-100" onClick={closeAllDropdowns}>
                      <Link href="/pagenotfound">PAGE Not Found</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100" onClick={closeAllDropdowns}>
                      <Link href="/faq">FAQ</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100" onClick={closeAllDropdowns}>
                      <Link href="/aboutus">ABOUT US</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100" onClick={closeAllDropdowns}>
                      <Link href="/ordercomplete">Order Complete</Link>
                    </li>
                  </ul>
                )}
              </li>
              {/* Products */}
              <li className="p-4 hover:underline hover:text-pink-600 underline-offset-2">
                <Link href="/products">Products</Link>
              </li>
              {/* Blog Link with Dropdown */}
              <li className="p-4 hover:underline hover:text-pink-600 underline-offset-2 relative">
                <Link href="/blog" className="focus:outline-none">
                  Blog
                </Link>
                <button
                  className="ml-2 focus:outline-none"
                  onClick={() => handleDropdownClick(setIsBlogDropdownOpen)}
                >
                  ▼
                </button>
                {isBlogDropdownOpen && (
                  <ul
                    className="absolute left-0 top-full mt-2 bg-white text-black shadow-lg rounded-md z-50"
                  >
                    <li className="px-4 py-2 hover:bg-gray-100" onClick={closeBlogDropdown}>
                      <Link href="/singleblog">Single Blog</Link>
                    </li>
                  </ul>
                )}
              </li>
              {/* Shop Link and Dropdown */}
              <li className="p-4 hover:underline hover:text-pink-600 underline-offset-2 relative">
                <Link href="/shop">Shop</Link>
                <button
                  className="ml-2 focus:outline-none"
                  onClick={(e) => {
                    e.preventDefault(); // Prevent navigation for dropdown toggle
                    handleDropdownClick(setIsShopDropdownOpen);
                  }}
                >
                  ▼
                </button>
                {isShopDropdownOpen && (
                  <ul
                    className="absolute left-0 top-full mt-2 bg-white text-black shadow-lg rounded-md z-50"
                  >
                    <li className="px-4 py-2 hover:bg-gray-100" onClick={closeAllDropdowns}>
                      <Link href="/shoplist">Shop List</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100" onClick={closeAllDropdowns}>
                      <Link href="/shopleftsidebar">Shop Left Sidebar</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="p-4 hover:underline hover:text-pink-600 underline-offset-2">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Right Section - Search and Mobile Toggle */}
          <div className="flex gap-x-4 items-center">
            <div className="hidden lg:flex w-full bg-gray-200 rounded-md items-center">
              <input
                className="w-full p-1 rounded-md bg-gray-200 outline-none"
                type="search"
                placeholder="Search"
              />
              <FontAwesomeIcon
                icon={faSearch}
                className="text-xl ml-3 bg-pink-600 px-1 py-1 text-white"
              />
            </div>
            <button
              className="text-black block md:hidden text-3xl z-50"
              onClick={toggleMobileMenu}
            >
              ☰
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Navbar;
