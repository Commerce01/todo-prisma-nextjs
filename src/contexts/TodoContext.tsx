"use client";
import { createContext, useEffect, useState } from "react";
import { ITodo, ITodoContext, ITodoProps } from "@/interfaces/todo";

export const TodoContext = createContext<ITodoContext>({
  todos: [],
  addTodo: () => {},
  updateTodo: () => {},
  removeTodo: () => {},
});

function Provider({ children }: ITodoProps) {
  const [todo, setTodo] = useState<ITodo[]>([]);

  async function getTodo() {
    const res = await fetch("/api/todo");
    const data = await res.json();
    setTodo(data);
  }

  const addTodo = async (p: ITodo) => {
    const res = await fetch("/api/todo", {
      method: "POST",
      body: JSON.stringify(p),
    });
    getTodo();
  };
  const updateTodo = async (todo: ITodo) => {
    // const {id,title,desc,completed} = todo;
    const res = await fetch("/api/todo", {
      method: "PATCH",
      body: JSON.stringify(todo),
    });
    getTodo();
  };
  const removeTodo = async (id: string) => {
    await fetch(`/api/todo/${id}`, {
      method: "DELETE",
    });
    getTodo();
  };
  useEffect(() => {
    getTodo();
    console.log(todo);
  },[todo]);

  return (
    <TodoContext.Provider
      value={{ todos: todo, addTodo, updateTodo, removeTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export default function TodoProvider({ children }: ITodoProps) {
  return <Provider>{children}</Provider>;
}
