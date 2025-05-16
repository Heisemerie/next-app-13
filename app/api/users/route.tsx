// GET - getting data
// POST - creating data
// PUT - updating data
// DELETE - deleting data

import { NextRequest, NextResponse } from "next/server";
import schema, { UserData } from "./schema";
import { prisma } from "@/prisma/client";

export async function GET(request: NextRequest) {
  //fetch users from a DB
  const users = await prisma.user.findMany();

  return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
  const body: UserData = await request.json();
  // Validate
  const validation = schema.safeParse(body);

  // If invalid, return 400
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const user = await prisma.user.findUnique({ where: { email: body.email } }); //check for email (unique property) to properly handle errors

  if (user)
    return NextResponse.json({ error: "User already exists" }, { status: 400 });

  // Else return data
  const newUser = await prisma.user.create({
    data: { name: body.name, email: body.email },
  });

  return NextResponse.json(newUser, { status: 201 }); //test with postman
}
