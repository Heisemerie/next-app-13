import { NextRequest, NextResponse } from "next/server";
import schema, { UserData } from "../schema";
import { prisma } from "@/prisma/client";

interface Props {
  params: { userId: string }; //made a mistake as urls return strings
}

export async function GET(request: NextRequest, { params: { userId } }: Props) {
  // Fetch data from a DB
  // If not found return 404
  // Else return data
  const user = await prisma.user.findUnique({
    where: { id: parseInt(userId) },
  }); //returns null if no user is found

  if (!user)
    return NextResponse.json({ error: "user not found" }, { status: 404 });
  return NextResponse.json(user);
}

//PUT for replacing an object
//PATCH for updating one or more properties
export async function PUT(request: NextRequest, { params: { userId } }: Props) {
  const body: UserData = await request.json();
  // Validate the request body
  // If invalid, return 400
  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  // Fetch the user with the given id
  // If user doesn't exist, return 404
  const user = await prisma.user.findUnique({
    where: { id: parseInt(userId) },
  });
  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  // Else, update user
  // Return updated user
  const updatedUser = await prisma.user.update({
    where: { id: user.id },
    data: { name: body.name, email: body.email },
  });
  return NextResponse.json(updatedUser);
}

export function DELETE(request: NextRequest, { params: { userId } }: Props) {
  // Fetch the user from the DB
  // If not found, return 404
  // Delete the user
  // Return 200
  if (parseInt(userId) > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json({});
}
