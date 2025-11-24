export default function AdminOrdersPage() {
  const orders = [
    {
      id: "ORD-1001",
      customer: "John Doe",
      date: "2015-11-16",
      status: "Pending",
    },
    {
      id: "ORD-1002",
      customer: "Alex Silva",
      date: "2015-11-13",
      status: "Completed",
    },
  ];

  // A helper to style the status
  const getStatusClasses = (status) => {
    if (status === "Pending") {
      return "bg-yellow-200 text-yellow-800 font-semibold px-3 py-1 rounded";
    }
    if (status === "Completed") {
      return "bg-green-200 text-green-800 font-semibold px-3 py-1 rounded";
    }
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
                <td className="border p-2">{order.customer}</td>
                <td className="border p-2">{order.date}</td>
                <td className="border p-2">
                  <span className={getStatusClasses(order.status)}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
