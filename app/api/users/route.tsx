import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const users = await prisma.user.findMany();
    return NextResponse.json({ message: "OK", data: users });
}

export async function POST(request: NextRequest, response: NextResponse) {
    const body = await request.json();
    // const validation = schema.safeParse(body);
    // if (validation.error)
    //     return NextResponse.json({ message: validation.error.errors });
    const user = await prisma.user.create({
        data: {
            name: body.name,
            email: body.email,
            followers: body.followers,
            isActive: body.isActive
        }
    });
    return NextResponse.json({ message: "OK", data: user });
}