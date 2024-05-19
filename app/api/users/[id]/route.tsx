import { error } from "console";
import { NextRequest, NextResponse } from "next/server";

export function GET(
    request: NextRequest,
    { params }: { params: { id: number } }
) {
    if (params.id > 10) {
        return NextResponse.json({ error: "User not found", status: 404 });
    }
    return NextResponse.json({ id: params.id, name: "Pratham" });
}

export async function POST(request: NextRequest, response: NextResponse) {
    const body = await request.json();
    if (!body.name)
        return NextResponse.json({ message: "Name is required" });
    return NextResponse.json({ message: "OK", data: body });
}

export async function PUT(request: NextRequest, { params }: { params: { id: number } }) {
    //validate request body
    const body = await request.json();

    // if invalid return 400
    if (!body.name) {
        return NextResponse.json({ error: "Name is required" });
    }

    // fetch the given user
    if (params.id > 10) {
        return NextResponse.json({ error: "User not found" });
    }

    return NextResponse.json({ id: 1, name: body.name });
}


export async function DELETE(request: NextRequest, { params }: { params: { id: number } }) {
    if (params.id > 10) {
        return NextResponse.json({ error: "User not found" });
    }
    return NextResponse.json({ message: "User deleted successfully" });
}