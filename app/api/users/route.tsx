// GET - getting data
// POST - creating data
// PUT - updating data
// DELETE - deleting data

import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export function GET(request: NextRequest) {
  //fetch users from a DB
  return NextResponse.json([
    { id: 1, name: "John" },
    { id: 2, name: "James" },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  // Validate
  // If invalid, return 400
  // Else return data
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  return NextResponse.json({ id: 1, name: body.name }, { status: 201 }); //test with postman
}
