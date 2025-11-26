"use client";
import Image from "next/image";
import Link from "next/link";

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-white">

      
      <nav className="w-full bg-black text-white px-10 py-4 flex justify-between items-center shadow-md">
        <Link href="/" className="text-2xl font-semibold text-yellow-400">
          House of Salaga
        </Link>

        <div className="flex gap-10 text-lg">
          <Link href="/" className="hover:text-yellow-400">Home</Link>
          <Link href="/wishlist" className="hover:text-yellow-400">Wishlist</Link>
          <Link href="/cart" className="hover:text-yellow-400">Cart</Link>
          <Link href="/login" className="hover:text-yellow-400">Login</Link>
        </div>
      </nav>

     
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 px-16 py-14">

       
        <div>
          <Image
            src="/bag1.png"
            alt="Bag"
            width={450}
            height={450}
            className="rounded-lg shadow"
          />

          
          <div className="flex gap-4 mt-6">
            <Image src="/bag1.png" width={60} height={60} alt="" className="rounded-lg shadow" />
            <Image src="/bag2.png" width={60} height={60} alt="" className="rounded-lg shadow" />
            <Image src="/bag3.png" width={60} height={60} alt="" className="rounded-lg shadow" />
          </div>
        </div>

        
        <div>
          <h2 className="text-2xl text-black font-bold">Stylish Leather Bag</h2>
          <p className="text-black mt-2">
            A high quality leather bag suitable for everyday use.
          </p>

          <p className="text-2xl text-black font-bold mt-4">$120.00</p>
          <p className="text-green-600 mt-1">In Stock</p>

         
          <div className="mt-6">
            <p className="font-semibold text-black">Size</p>
            <select className="border px-3 py-2 text-black rounded-md w-48 mt-2">
              <option>Medium</option>
              <option>Large</option>
              <option>Small</option>
            </select>
          </div>

         
          <div className="mt-6">
            <p className="font-semibold text-black">Color</p>
            <select className="border px-3 py-2 rounded-md text-black w-56 mt-2">
              <option>Warm Light Brown</option>
              <option>Dark Coffee</option>
              <option>Black</option>
            </select>
          </div>

         
          <div className="mt-6">
            <p className="font-semibold text-black">Quantity</p>

            <div className="flex items-center gap-4 mt-2">
              <button className="border px-4 py-1 text-black rounded-md">-</button>
              <span className="font-medium text-black">1</span>
              <button className="border px-4 py-1 text-black rounded-md">+</button>
            </div>
          </div>

         
          <button className="bg-black text-white w-64 py-3 rounded-md mt-8 text-lg hover:bg-gray-800">
            Add to Cart
          </button>

         
          <div className="mt-10 flex items-center gap-3">
            <p className="font-semibold text-black">Average rating</p>
          </div>

          <div className="flex items-center gap-2 mt-1">
            <p className="text-yellow-500 text-xl">★★★★★</p>
            <p className="text-black">3 reviews</p>
          </div>
        </div>
      </div>

     
      <div className="px-16 mb-16">
        <div className="border rounded-xl p-6">
          <h3 className="font-semibold text-lg mb-2 text-black">Customer Reviews</h3>

          <div className="flex items-center gap-2">
            <p className="text-yellow-500">★★★★★</p>
            <p className="font-medium text-black">Alice</p>
          </div>

          <p className="text-black mt-3">
            Beautiful bag with plenty of space. Well made and stylish.
          </p>
        </div>
      </div>

     
      <div className="px-16 pb-20">
        <h3 className="text-xl font-semibold text-black mb-6">Related Product</h3>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
          <Image src="/shoes1.png" width={180} height={180} alt="" className="rounded-lg shadow" />
          <Image src="/jacket1.png" width={180} height={180} alt="" className="rounded-lg shadow" />
          <Image src="/watch1.png" width={180} height={180} alt="" className="rounded-lg shadow" />
        </div>
      </div>
    </div>
  );
}
