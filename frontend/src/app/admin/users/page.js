// src/app/admin/users/page.js
import Link from "next/link";
import { API_BASE_URL } from "@/src/lib/apiClient";

export default async function AdminUsersPage() {
  // Fetch users
  const res = await fetch(`${API_BASE_URL}/admin/users`, {
    cache: "no-store",
  });

  const data = await res.json();
  const users = data.users || [];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Manage Users</h1>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">ID</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Role</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="text-center">
                <td className="border p-2">{user.id}</td>
                <td className="border p-2">{user.name}</td>
                <td className="border p-2">{user.email}</td>
                <td className="border p-2 capitalize">{user.role}</td>
                <td className="border p-2">
                  <Link
                    href={`/admin/users/${user.id}`}
                    className="px-4 py-1 bg-blue-600 text-white rounded"
                  >
                    Details
                  </Link>
                </td>
              </tr>
            ))}

            {users.length === 0 && (
              <tr>
                <td colSpan="5" className="p-4 text-gray-500 text-center">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
