"use client";

import { useState } from "react";

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("card");

  const subtotal = 138.00;
  const shipping = 5.00;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-white px-6 py-10">
      <h1 className="text-3xl font-semibold mb-10">Checkout</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* LEFT SIDE – DELIVERY DETAILS */}
        <div className="md:col-span-2 bg-pink-50 p-6 rounded-md shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Delivery Details</h2>

          <form className="space-y-5">

            <div>
              <label className="font-medium">Full Name</label>
              <input
                type="text"
                className="w-full mt-1 p-2 border rounded-md"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="font-medium">Email</label>
              <input
                type="email"
                className="w-full mt-1 p-2 border rounded-md"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="font-medium">Phone Number</label>
              <input
                type="text"
                className="w-full mt-1 p-2 border rounded-md"
                placeholder="0771234567"
              />
            </div>

            <div>
              <label className="font-medium">Address</label>
              <textarea
                className="w-full mt-1 p-2 border rounded-md"
                placeholder="Enter your full address"
              ></textarea>
            </div>

            {/* PAYMENT METHOD */}
            <div>
              <label className="font-medium block mb-2">Payment Method</label>

              <div className="flex items-center gap-5">

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    value="card"
                    checked={paymentMethod === "card"}
                    onChange={() => setPaymentMethod("card")}
                  />
                  Card Payment
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    value="cod"
                    checked={paymentMethod === "cod"}
                    onChange={() => setPaymentMethod("cod")}
                  />
                  Cash on Delivery
                </label>

              </div>
            </div>
          </form>
        </div>

        {/* RIGHT SIDE – ORDER SUMMARY */}
        <div className="bg-pink-50 p-6 rounded-md shadow-md">
          <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

          <div className="space-y-4">
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>${subtotal.toFixed(2)}</p>
            </div>

            <div className="flex justify-between">
              <p>Shipping</p>
              <p>${shipping.toFixed(2)}</p>
            </div>

            <hr />

            <div className="flex justify-between font-semibold text-lg">
              <p>Total</p>
              <p>${total.toFixed(2)}</p>
            </div>
          </div>

          <button
            className="w-full mt-8 bg-black text-white p-3 rounded-md hover:bg-gray-800 transition"
          >
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
}
