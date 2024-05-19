import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export async function GET(req: NextRequest) {
    return NextResponse.json([
        {
            id: 1, name: "milk", price: 1.2,
        },
        {
            id: 2, name: "bread", price: 3.5
        }
    ]);
}


export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = schema.safeParse(body);
    if (validation.error)
        return NextResponse.json({ message: validation.error.errors });
    return NextResponse.json({ message: "OK", data: body });
}

export async function PUT(request: NextRequest) {
    //validate request body
    const body = await request.json();
    const validation = schema.safeParse(body);
    if (!validation.success) {
        return NextResponse.json({ error: validation.error.errors });
    }
    return NextResponse.json({ data: body });
}

export async function DELETE(request: NextRequest) {
    const body = await request.json();
    const validation = schema.safeParse(body);
    if (!validation.success) {
        return NextResponse.json({ error: validation.error.errors });
    }
    return NextResponse.json({ data: body });
}