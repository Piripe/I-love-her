import { getUser } from "@/auth";
import { getFallbackList } from "@/db/core/calendar/incomingFallback";

export async function GET(req: Request) {
    if ((await getUser(req.headers.get("authorization") ?? "")) == null)
        return Response.json({}, { status: 401 });

    const page = Number.parseInt((await new URL(req.url).searchParams.get("page")) ?? "");
    if (page==null) return Response.json({}, { status: 400 });

    const fallback = await getFallbackList(page);
    if (!fallback) return Response.json({}, { status: 500 });

    return Response.json(fallback, { status: 200 });
}
