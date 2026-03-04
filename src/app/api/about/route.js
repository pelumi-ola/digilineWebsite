import { fetchCollection } from "@/lib/api";

export async function GET() {
  const data = await fetchCollection("about", {
    filter: { slug: { _eq: "about" } },
  });
  return new Response(JSON.stringify(data || []), { status: 200 });
}
