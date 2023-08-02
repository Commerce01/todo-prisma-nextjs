import Todos from "@/components/todos";
import { ITodo } from "@/interfaces/todo";
import { createTodo, deleteTodo, getTodos, updateTodo } from "@/libs/todo";
import { create } from "domain";
import { NextResponse } from "next/server";

export async function GET() {
  const todo = await getTodos();
  return NextResponse.json(todo);
}

export async function POST(request: Request) {
  const body: ITodo = await request.json();
  const todo = await createTodo(body);

  return NextResponse.json(todo);
}

export async function PATCH(request: Request) {
  const body: ITodo = await request.json();
  const todo = await updateTodo(body);
  return NextResponse.json(todo);
}


