// GET - getting data
// POST - creating data
// PUT - updating data
// DELETE - deleting data

import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  //fetch users from a DB
  return NextResponse.json([
    { id: 1, name: "John" },
    { id: 2, name: "James" },
  ]);
}
