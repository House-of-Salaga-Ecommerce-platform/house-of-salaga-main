import { API_BASE_URL } from "@/src/lib/apiClient";

export async function GET(req) {
  const token = req.headers.get("authorization");

  const res = await fetch(`${API_BASE_URL}/admin/users`, {
    headers: { Authorization: token },
  });

  return new Response(JSON.stringify(await res.json()), { status: res.status });
}
