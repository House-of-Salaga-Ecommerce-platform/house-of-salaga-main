"use client";

import Image from "next/image";
import Link from "next/link";


function Navbar() {
  return (
    <nav className="w-full bg-black text-white px-10 py-4 flex justify-between items-center shadow-md">
     
      <Link href="/" className="text-2xl font-semibold text-yellow-400">
        House of Salaga
      </Link>

      
      <div className="flex gap-10 text-lg">
        <Link href="/" className="hover:text-yellow-400">Home</Link>
        <Link href="/search" className="hover:text-yellow-400">Search</Link>
        <Link href="/cart" className="hover:text-yellow-400">Cart</Link>
        <Link href="/logout" className="hover:text-yellow-400">Logout</Link>
      </div>
    </nav>
  );
}


export default function ShopPage() {
  return (
    <div className="min-h-screen bg-white">

      <Navbar />

      
      <h1 className="text-4xl font-bold text-black pt-16 ps-16">
        Shop All Product
      </h1>

      <div className="flex gap-10 px-16 py-10">

       
        <div className="w-64 bg-[#FFF4F4] p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold text-black mb-6">Filters</h2>

      
          <div>
            <h3 className="font-medium text-black mb-3">Category</h3>

            <label className="flex items-center text-black gap-2 mb-2">
              <input type="checkbox" className="w-4 h-4" />
              Men
            </label>

            <label className="flex items-center text-black gap-2 mb-2">
              <input type="checkbox" className="w-4 h-4" />
              Women
            </label>

            <label className="flex items-center text-black gap-2 mb-2">
              <input type="checkbox" className="w-4 h-4" />
              Kids
            </label>
          </div>

        
          <div className="mt-8">
            <h3 className="font-medium text-black mb-3">Rating</h3>

            {[5, 4, 3, 2, 1].map((star) => (
              <label key={star} className="flex items-center text-black gap-2 mb-2">
                <input type="radio" name="rating" className="w-4 h-4" />
                {star} Stars & Up
              </label>
            ))}
          </div>
        </div>

  
        <div className="grid grid-cols-2 gap-14 flex-1">

         
          {[
            { img: "/OIP 2.png", name: "Casual Shirt", price: 48.99 },
            { img: "/sneakers.png", name: "Sneakers", price: 39.0 },
            { img: "/img3.png", name: "Jacket", price: 39.0 },
            { img: "/img4.png", name: "Watch", price: 48.99 },
          ].map((product, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={product.img}
                alt={product.name}
                width={250}
                height={250}
                className="rounded-md shadow"
              />
              <p className="font-medium text-black mt-2">{product.name}</p>
              <p className="text-yellow-500">★★★★★</p>
              <p className="font-semibold text-black mt-1">${product.price}</p>
              <button className="mt-2 bg-black text-white px-5 py-2 rounded-md hover:bg-gray-800">
                Add to Cart
              </button>
            </div>
          ))}

        </div>
      </div>

     
      <footer className="bg-[#171B3B] text-white py-14 mt-10">
        <div className="flex flex-col items-center gap-4">
          
         
          <div className="flex items-center gap-3">
            <Image src="/salaga.png" width={70} height={70} alt="Logo" />
            <p className="text-gray-300 text-lg font-medium">
              House of Salaga
            </p>
          </div>

          
          <div className="flex gap-2 mt-3">
            <input
              type="text"
              placeholder="Your Email"
              className="px-4 py-2 rounded-md text-black w-64"
            />
            <button className="bg-[#54d3cf] px-4 py-2 rounded-md">
              Subscribe
            </button>
          </div>

         
          <div className="flex gap-10 mt-6 text-gray-300">
            <p>About</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
