import { ITodo } from "@/interfaces/todo";
import { prisma } from "./prisma";

async function getTodos() {
  const todo = await prisma.todo.findMany();
  return todo;
}

async function createTodo({ title, desc }: ITodo) {
  const todo = await prisma.todo.create({
    data: {
      title,
      desc,
      completed: false,
    },
  });
  return todo;
}

async function updateTodo({ id, title, desc, completed }: ITodo) {
  const todo = await prisma.todo.update({
    where: { id },
    data: {
      title,
      desc,
      completed,
    },
  });
  return todo;
}

async function deleteTodo(id: string) {
  const findTodo = await prisma.todo.findUnique({
    where: { id },
  });
  if (!findTodo) {
    return "todo not found";
  }
  await prisma.todo.delete({
    where: { id },
  });
  return "remove Sucess"
}
export { getTodos, createTodo, updateTodo, deleteTodo };
