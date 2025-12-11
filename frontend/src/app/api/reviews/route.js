import { API_BASE_URL } from "@/src/lib/apiClient";

export async function POST(req) {
  const body = await req.json();
  const token = req.headers.get("authorization");

  const res = await fetch(`${API_BASE_URL}/reviews`, {
    method: "POST",
    headers: {
      Authorization: token,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body),
  });

  return new Response(JSON.stringify(await res.json()), { status: res.status });
}
