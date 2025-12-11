import { API_BASE_URL } from "@/src/lib/apiClient";

export async function GET() {
  const res = await fetch(`${API_BASE_URL}/products`);
  return new Response(JSON.stringify(await res.json()), { status: res.status });
}
