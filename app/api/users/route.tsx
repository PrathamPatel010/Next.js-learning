import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest) {
    return NextResponse.json(
        [
            { id: 1, name: "Pratham" },
            { id: 2, name: "Amy" }
        ]
    );
}

