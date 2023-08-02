"use client";
import { TodoContext } from "@/contexts/TodoContext";
import { ITodo } from "@/interfaces/todo";
import { useRouter } from "next/navigation";
import React, { useContext, useRef } from "react";
import { BiMessageRoundedDetail } from "react-icons/bi";

function AddTodos() {
  const router = useRouter();
  const { todos, addTodo, removeTodo } = useContext(TodoContext);
  const titleRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLInputElement>(null);

  function handleAddTodo(e: React.FormEvent) {
    e.preventDefault();
    let todo: ITodo;
    if (titleRef.current && descRef.current) {
      const title = titleRef.current?.value;
      const desc = descRef.current?.value;
      const id = (todos.length + 1).toString();
      todo = {
        id,
        title,
        desc,
        completed: false,
      };
      addTodo(todo);
      router.push("/");
    }
  }

  return (
    <div className=" flex flex-col items-center justify-center">
      <div className="card w-96 bg-base-300 shadow-xl p-8 my-8">
        <form onSubmit={handleAddTodo}>
          <h1 className="text-xl font-bold flex justify-center items-center ">
            Todolist <BiMessageRoundedDetail />{" "}
          </h1>

          <input
            ref={titleRef}
            placeholder="title"
            type="text"
            className="input input-bordered w-full my-2"
          />
          <input
            ref={descRef}
            placeholder="desc"
            type="text"
            className="input input-bordered w-full my-2"
          />
          <div className="flex justify-center">
            <button className="btn btn-secondary my-2 w-full">submit</button>
          </div>
        </form>
      </div>

    </div>
  );
}

export default AddTodos;
