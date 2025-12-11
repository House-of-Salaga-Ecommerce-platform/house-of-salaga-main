// src/app/admin/orders/page.js
import { API_BASE_URL } from "@/src/lib/apiClient";

export default async function AdminOrdersPage() {
  // Fetch through Next.js API route, which proxies to backend
  const res = await fetch(`${API_BASE_URL}/orders`, {
    cache: "no-store", // ensures fresh data
  });

  const data = await res.json();
  const orders = data.orders || [];

  const getStatusClasses = (status) => {
    if (status === "pending")
      return "bg-yellow-200 text-yellow-800 font-semibold px-3 py-1 rounded";
    if (status === "completed")
      return "bg-green-200 text-green-800 font-semibold px-3 py-1 rounded";
    return "";
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Manage Orders</h1>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Order ID</th>
              <th className="border p-2">Customer</th>
              <th className="border p-2">Date</th>
              <th className="border p-2">Status</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="text-center">
                <td className="border p-2">{order.id}</td>
                <td className="border p-2">{order.user?.name}</td>
                <td className="border p-2">
                  {new Date(order.createdAt).toLocaleDateString()}
                </td>
                <td className="border p-2">
                  <span className={getStatusClasses(order.status)}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
            {orders.length === 0 && (
              <tr>
                <td colSpan="4" className="p-4 text-gray-500 text-center">
                  No orders available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
