// src/app/admin/users/[id]/page.js
import { UserCircle } from "lucide-react";
import { API_BASE_URL } from "@/src/lib/apiClient";

export default async function UserDetailsPage({ params }) {
  const { id } = params;

  // Fetch user details
  const userRes = await fetch(`${API_BASE_URL}/admin/users/${id}`, {
    cache: "no-store",
  });
  const { user } = await userRes.json();

  // Fetch orders of this user
  const ordersRes = await fetch(`${API_BASE_URL}/orders?userId=${id}`, {
    cache: "no-store",
  });
  const { orders = [] } = await ordersRes.json();

  return (
    <div className="p-6">
      <div className="text-center border-b pb-8">
        <div className="flex justify-center mb-4">
          <UserCircle size={90} strokeWidth={1.2} className="text-purple-600" />
        </div>

        <h1 className="text-2xl font-bold">{user.name}</h1>
        <p className="text-gray-600">{user.email}</p>
        <p className="text-gray-600">{user.phone || "No phone"}</p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Order history */}
        <div className="border rounded-lg p-4">
          <h2 className="bg-blue-600 text-white inline-block px-4 py-1 rounded-t">
            Order History
          </h2>

          <table className="w-full mt-3 text-sm">
            <thead>
              <tr className="border-b font-semibold">
                <th className="py-2 text-left">Order Id</th>
                <th className="py-2 text-left">Date</th>
                <th className="py-2 text-left">Status</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b">
                  <td className="py-2">{order.id}</td>
                  <td className="py-2">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </td>
                  <td className="py-2">{order.status}</td>
                </tr>
              ))}

              {orders.length === 0 && (
                <tr>
                  <td colSpan="3" className="p-4 text-gray-500">
                    No orders for this user.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Personal details */}
        <div className="border rounded-lg p-4">
          <h2 className="bg-blue-600 text-white inline-block px-4 py-1 rounded-t">
            Personal Details
          </h2>

          <div className="mt-3 space-y-3 text-sm">
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Role:</strong> {user.role}</p>
            <p><strong>Joined:</strong> {new Date(user.createdAt).toLocaleDateString()}</p>
          </div>
        </div>

      </div>
    </div>
  );
}
