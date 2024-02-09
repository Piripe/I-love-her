import { LayoutDefinition } from "$/index.d";
import { getUser } from "@/auth";
import { insertFallback } from "@/db/core/calendar/incomingFallback";

export async function POST(req: Request) {
    if ((await getUser(req.headers.get("authorization") ?? "")) == null)
        return Response.json({}, { status: 401 });

    const data = (await req.json()) as { priority: number; layout: LayoutDefinition };

    const returnID = await insertFallback(data.priority, data.layout);

    return Response.json({ id: returnID }, { status: returnID == null ? 500 : 200 });
}
