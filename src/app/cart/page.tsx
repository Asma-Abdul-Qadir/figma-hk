'use client'
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Define types for Cart Item
type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number,
  color: string,
  size: string,
  image: string;
};

// Mock cart products data
const initialCartProducts: CartItem[] = [
  {
    id: 1,
    name: "Ut diam",
    price: 30,
    quantity: 2,
    color: "Red",
    size: "M",
    image: "/images/cart1.png",
  },
  {
    id: 2,
    name: "faucibus posuere",
    price: 45,
    quantity: 1,
    color: "Blue",
    size: "L",
    image: "/images/cart2.png",
  },
  {
    id: 3,
    name: "Ac vitae vestibulum",
    price: 60,
    quantity: 1,
    color: "Green",
    size: "S",
    image: "/images/cart3.png",
  },
  {
    id: 4,
    name: "Elit massa dia",
    price: 50,
    quantity: 2,
    color: "Yellow",
    size: "M",
    image: "/images/cart4.png",
  },
  {
    id: 5,
    name: "Proin pharetra",
    price: 35,
    quantity: 3,
    color: "Black",
    size: "L",
    image: "/images/cart5.png",
  },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartProducts);

  const updateQuantity = (id: number, newQuantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity > 0 ? newQuantity : 1 } : item
      )
    );
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  

  return (
    <>
      {/* "Shopping Curt" Heading */}
      <div className="bg-[#F6F5FF]">
        <div className="max-w-screen-xl mx-auto h-[286px] flex flex-col justify-center items-start gap-2 px-4">
          <h1 className="font-josifen font-bold text-[36px] text-[#101750]">
            Shopping Curt
          </h1>
          <ul className="flex gap-1 font-lato font-medium cursor-pointer">
            <li>Home .</li>
            <li>Pages .</li>
            <li className="text-[#FB2E86]">Shopping Cart</li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {/* Product Header */}
              <div className="hidden md:grid md:grid-cols-5 gap-4 font-josifen text-[20px] font-bold text-[#101750] text-sm mb-4">
                <div className="col-span-2">Product</div>
                <div>Price</div>
                <div>Quantity</div>
                <div>Total</div>
              </div>
              {/* Product List */}
              {cartItems.map((item) => (
                <div key={item.id} className="flex flex-col md:flex-row md:items-center justify-between bg-white p-4 rounded-lg shadow-md">
                  <div className="flex items-center space-x-4">
                    <Image src={item.image} alt={item.name} width={80} height={80} className="w-20 h-20 rounded-lg object-cover" />
                    <div>
                      <p className="font-semibold text-[#1D3178]">{item.name}</p>
                      <p className="text-sm text-gray-500">Color: {item.color}, Size: {item.size}</p>
                    </div>
                  </div>
                  <div>${item.price.toFixed(2)}</div>
                  <div>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                      className="w-12 px-2 py-1 border rounded-md text-center"
                      min="1"
                    />
                  </div>
                  <div>${(item.price * item.quantity).toFixed(2)}</div>
                </div>
              ))}
              <div className="flex justify-between">
                <button className="bg-[#FB2E86] text-white font-josifen py-2 px-4 rounded hover:bg-pink-500" onClick={() => updateQuantity}>
                  Update Curt
                </button>
                <button className="bg-[#FB2E86] text-white font-josifen py-2 px-4 rounded hover:bg-pink-500" onClick={clearCart}>
                  Clear Curt
                </button>
              </div>
            </div>
          </div>

          {/* Cart Totals and Shipping */}
          <div className="bg-[#f4f2fc] p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-josifen font-bold mb-4 text-center text-[#101750]">Cart Totals</h2>
            <div className="space-y-8">
              <div className="flex justify-between border-b-gray-300 border-b pb-4">
                <span className="font-medium text-[#101750]">Subtotal</span>
                <span>${calculateTotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between border-b-gray-300 border-b pb-4">
                <span>Total</span>
                <span>${(calculateTotal() + 15).toFixed(2)}</span>
              </div>
              <div className="flex gap-2 items-center">
                <input type="checkbox" className="accent-[#19D16F]" checked />
                <span className="text-sm text-[#8A91AB]">Shipping and taxes calculated at checkout</span>
              </div>
              <Link href="/checkout">
                <button className="w-full bg-[#19D16F] text-white hover:bg-[#19D46F] mt-8 p-2 rounded">Proceed to Checkout</button>
              </Link>
              {/* Calculate Shipping */}
              <div className="mt-8">
                <h1 className="text-lg my-8 font-josifen font-bold text-center text-[#101750]">Calculate Shipping</h1>
                <div className="space-y-10 mt-4 bg-[#f4f2fc] p-6">
                  <input placeholder="Enter your City" className="w-full p-2 border-none rounded" />
                  <input placeholder="Enter your address" className="w-full p-2 border-none rounded" />
                  <input placeholder="Enter your postal code" className="w-full p-2 border-b-2 border-gray-300 rounded-md" />
                  <button className="w-full bg-[#FB2E86] text-white hover:bg-pink-500 p-2 rounded">Calculate Shipping</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
