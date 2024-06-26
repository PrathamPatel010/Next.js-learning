import { error } from "console";
import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";


export function GET(
    request: NextRequest,
    { params }: { params: { id: number } }
) {
    if (params.id > 10) {
        return NextResponse.json({ error: "User not found", status: 404 });
    }
    return NextResponse.json({ id: params.id, name: "Pratham" });
}

export async function PUT(request: NextRequest, { params }: { params: { id: number } }) {
    //validate request body
    const body = await request.json();
    const validation = schema.safeParse(body);
    if (!validation.success) {
        return NextResponse.json({ error: validation.error.errors });
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