import { NextRequest, NextResponse } from "next/server";

interface Props {
  params: { userId: number };
}

export function GET(request: NextRequest, { params: { userId } }: Props) {
  // Fetch data from a DB
  // If not found return 404
  // Else return data
  if (userId > 10)
    return NextResponse.json({ error: "user not found" }, { status: 404 });
  return NextResponse.json({ id: 1, name: "James" });
}
