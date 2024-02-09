import { LayoutDefinition } from "$/index.d";
import { getUser } from "@/auth";
import { updateFallback } from "@/db/core/calendar/incomingFallback";

export async function POST(req: Request) {
    if ((await getUser(req.headers.get("authorization") ?? "")) == null)
        return Response.json({}, { status: 401 });

    const data = (await req.json()) as {id:number; priority: number; layout: LayoutDefinition };

    const success = await updateFallback(data.id,data.priority, data.layout);

    return Response.json({}, { status: success ? 200 : 500 });
}
