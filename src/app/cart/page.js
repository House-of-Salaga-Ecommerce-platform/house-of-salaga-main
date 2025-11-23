export default function CartPage() {
  const cartItems = [
    {
      id: 1,
      name: "Casual Shirt",
      price: 49,
      image: "/SHIRT.jpeg",
      qty: 1,
    },
    {
      id: 2,
      name: "Sneakers",
      price: 89,
      image: "/SHO.jpeg",
      qty: 1,
    },
  ];

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.qty, 0);
  const shipping = 5;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-white">
      
      {/* NAVBAR */}
      <nav className="bg-black text-white flex justify-between px-10 py-4">
        <h1 className="text-yellow-400 font-semibold text-xl">House of Salaga</h1>

        <div className="flex space-x-8 text-sm">
          <a href="/" className="hover:text-yellow-400">Home</a>
          <a href="/wishlist" className="hover:text-yellow-400">Wishlist</a>
          <a href="/cart" className="hover:text-yellow-400">Cart</a>
          <a href="/login" className="hover:text-yellow-400">Login</a>
        </div>
      </nav>

      {/* PAGE TITLE */}
      <h1 className="text-center text-3xl font-semibold my-10">Shopping Cart</h1>

      <div className="max-w-5xl mx-auto grid grid-cols-3 gap-10">

        {/* LEFT SIDE CART ITEMS */}
        <div className="col-span-2 space-y-6">

          {cartItems.map((item) => (
            <div key={item.id} className="flex bg-pink-50 p-5 rounded-xl shadow">

              {/* ITEM IMAGE */}
              <img
                src={item.image}
                alt={item.name}
                className="w-28 h-28 object-cover rounded"
              />

              {/* ITEM DETAILS */}
              <div className="ml-5 flex-1">
                <h3 className="text-lg font-semibold">{item.name}</h3>

                <div className="flex justify-between mt-2">
                  <p className="font-medium">${item.price}</p>
                  <p className="font-medium">${item.price}</p>
                </div>

                {/* QTY BUTTONS */}
                <div className="flex items-center mt-4">
                  <button className="border px-3 py-1">-</button>
                  <span className="px-4">{item.qty}</span>
                  <button className="border px-3 py-1">+</button>
                </div>

                {/* REMOVE BUTTON */}
                <button className="text-red-500 text-sm mt-2">Remove</button>

              </div>
            </div>
          ))}
        </div>

        {/* ORDER SUMMARY (RIGHT SIDE) */}
        <div className="bg-pink-50 p-6 rounded-xl shadow h-fit">
          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>

          <div className="flex justify-between mb-2 text-sm">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between mb-2 text-sm">
            <span>Shipping</span>
            <span>${shipping.toFixed(2)}</span>
          </div>

          <hr className="my-3" />

          <div className="flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <button className="w-full bg-black text-white py-3 rounded mt-6 hover:bg-gray-900">
            Proceed to Checkout
          </button>
        </div>

      </div>
    </div>
  );
}



  