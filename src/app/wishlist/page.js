"use client";

export default function WishlistPage() {

  const wishlistItems = [
    {
      id: 1,
      name: "White Sneaker Shoes",
      price: "$49.00",
      image: "/WHITESHO.png"
    },
    {
      id: 2,
      name: "Brown Leather Jacket",
      price: "$120.00",
      image: "/jaket.jpeg"
    },
    {
      id: 3,
      name: "Classic Watch",
      price: "$80.00",
      image: "/waSh.jpeg"
    },
    {
      id: 4,
      name: "Stylish Leather Bag",
      price: "$60.00",
      image: "/bag.jpeg"
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* NAVBAR */}
      <nav className="w-full bg-black text-white px-8 py-4 flex justify-between items-center shadow">
        <h1 className="text-2xl font-bold text-yellow-400">House of Salaga</h1>
        <ul className="flex space-x-8 text-lg">
          <li><a href="/">Home</a></li>
          <li><a href="/wishlist">Wishlist</a></li>
          <li><a href="/cart">Cart</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </nav>

      {/* TITLE */}
      <h2 className="text-3xl font-bold text-center mt-10 mb-6">
        My Wishlist
      </h2>

      {/* FIXED 2×2 GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 p-10">
        {wishlistItems.map((item) => (
          <div key={item.id} className="bg-white p-4 shadow-lg rounded-xl">

            {/* IMAGE — SMALLER + EQUAL SIZE */}
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-64 object-contain rounded-lg bg-white"
            />

            <h3 className="text-xl font-semibold mt-4 text-center">{item.name}</h3>
            <p className="text-gray-600 text-center">{item.price}</p>

            <div className="mt-4 flex gap-2">
              <button className="flex-1 bg-black text-white py-2 rounded hover:bg-gray-800">
                Move to Cart
              </button>

              <button className="flex-1 bg-red-600 text-white py-2 rounded hover:bg-red-700">
                Remove
              </button>
            </div>

          </div>
        ))}
      </div>

      {/* GO SHOPPING BUTTON */}
      <div className="flex justify-center mb-10">
        <a
          href="/shop"
          className="bg-black text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-800 shadow"
        >
          Go Shopping
        </a>
      </div>

    </div>
  );
}


  