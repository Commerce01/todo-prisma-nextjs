import { deleteTodo } from "@/libs/todo";
import { NextResponse } from "next/server";

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const todo = await deleteTodo(id);

  return NextResponse.json({ todo });
}
