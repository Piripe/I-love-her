import { getUser } from "@/auth";
import { getFallback } from "@/db/core/calendar/incomingFallback";

export async function GET(req: Request) {
    if ((await getUser(req.headers.get("authorization") ?? "")) == null)
        return Response.json({}, { status: 401 });

    const id = Number.parseInt((await new URL(req.url).searchParams.get("id")) ?? "");
    if (!id) return Response.json({}, { status: 400 });

    const fallback = await getFallback(id);
    if (!fallback) return Response.json({}, { status: 400 });

    return Response.json(fallback, { status: 200 });
}
