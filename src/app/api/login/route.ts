import { login } from "@/auth";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const data = await req.json();

    const token = await login(data.password);

    const res = NextResponse.json({ token: token }, { status: token ? 200 : 401 });
    if (token)
        res.cookies.set({
            name: "currentUser",
            value: token,
            maxAge: 60 * 60 * 24 * 30,
            sameSite:"lax",
            httpOnly:false
        });

    return res;
}
