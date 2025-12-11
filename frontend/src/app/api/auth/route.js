import { API_BASE_URL } from "@/src/lib/apiClient";

export async function POST(req) {
  const body = await req.json();
  const res = await fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" }
  });
  return new Response(JSON.stringify(await res.json()), { status: res.status });
}
