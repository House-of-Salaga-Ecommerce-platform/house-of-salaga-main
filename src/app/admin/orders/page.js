export default function AdminOrdersPage() {
  const orders = [
    {
      id: "ORD-1001",
      customer: "John Doe",
      total: 4500,
      status: "Pending",
    },
    {
      id: "ORD-1002",
      customer: "Alex Silva",
      total: 7800,
      status: "Completed",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Manage Orders</h1>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Order ID</th>
              <th className="border p-2">Customer</th>
              <th className="border p-2">Total (Rs)</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="text-center">
                <td className="border p-2">{order.id}</td>
                <td className="border p-2">{order.customer}</td>
                <td className="border p-2">Rs {order.total}</td>
                <td className="border p-2">{order.status}</td>
                <td className="border p-2">
                  <button className="px-4 py-1 bg-green-600 text-white rounded mr-2">
                    View
                  </button>
                  <button className="px-4 py-1 bg-yellow-600 text-white rounded">
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
