// src/app/admin/users/[id]/page.js

import { UserCircle } from "lucide-react";

export default async function UserDetailsPage({ params }) {
  const { id } = await params;

  // Mock data — replace with real DB/API
  const user = {
    id,
    name: "N.G. Silva",
    email: "silva98@gmail.com",
    phone: "+94 77 259 0035",
    fullName: "Namal Gayantha Silva",
    address: "No. 23, Upper Dickson rd., Galle",
    postal: "84300",
    accountNo: "00294233",
    bank: "Bank of Ceylon",
    branch: "Galle",
    orders: [
      { id: "#0101", item: "WMC wrist watch", date: "2025.11.13", method: "COD" },
      { id: "#0081", item: "X704 JBL speaker", date: "2025.05.21", method: "Visa" },
      { id: "#0070", item: "Stereo type mike", date: "2024.12.15", method: "Visa" },
      { id: "#0068", item: "M12 Nike sneaker (p)", date: "2024.12.02", method: "COD" },
      { id: "#0027", item: "Gucci T14 belt", date: "2024.02.08", method: "COD" },
    ],
  };

  return (
    <div className="p-6">
      {/* Profile Header */}
      <div className="text-center border-b pb-8">
        <div className="flex justify-center mb-4">
          <UserCircle size={90} strokeWidth={1.2} className="text-purple-600" />
        </div>

        <h1 className="text-2xl font-bold">{user.name}</h1>
        <p className="text-gray-600">{user.email}</p>
        <p className="text-gray-600">{user.phone}</p>
      </div>

      {/* Content Section */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Order History */}
        <div className="border rounded-lg p-4">
          <h2 className="bg-blue-600 text-white inline-block px-4 py-1 rounded-t">
            Order History
          </h2>

          <table className="w-full mt-3 text-sm">
            <thead>
              <tr className="border-b font-semibold">
                <th className="py-2 text-left">Order Id</th>
                <th className="py-2 text-left">Item</th>
                <th className="py-2 text-left">Date</th>
                <th className="py-2 text-left">Cash/Card</th>
              </tr>
            </thead>
            <tbody>
              {user.orders.map((order) => (
                <tr key={order.id} className="border-b">
                  <td className="py-2">{order.id}</td>
                  <td className="py-2">{order.item}</td>
                  <td className="py-2">{order.date}</td>
                  <td className="py-2">{order.method}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Personal Details */}
        <div className="border rounded-lg p-4">
          <h2 className="bg-blue-600 text-white inline-block px-4 py-1 rounded-t">
            Personal Details
          </h2>

          <div className="mt-3 space-y-3 text-sm">
            <p><strong>Full Name:</strong> {user.fullName}</p>
            <p><strong>Address:</strong> {user.address}</p>
            <p><strong>Postal Code:</strong> {user.postal}</p>
            <p><strong>Account No:</strong> {user.accountNo}</p>
            <p><strong>Bank:</strong> {user.bank}</p>
            <p><strong>Branch:</strong> {user.branch}</p>
          </div>
        </div>

      </div>
    </div>
  );
}
