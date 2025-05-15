import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

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

//PUT for replacing an object
//PATCH for updating one or more properties
export async function PUT(request: NextRequest, { params: { userId } }: Props) {
  const body = await request.json();
  // Validate the request body
  // If invalid, return 400
  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  // Fetch the user with the given id
  // If user doesn't exist, return 404
  if (userId > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  // Else, update user
  // Return updated user
  return NextResponse.json({ id: 1, name: body.name });
}

export function DELETE(request: NextRequest, { params: { userId } }: Props) {
  // Fetch the user from the DB
  // If not found, return 404
  // Delete the user
  // Return 200
  if (userId > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json({});
}
