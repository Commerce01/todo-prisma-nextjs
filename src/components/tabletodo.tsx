"use client";
import { TodoContext } from "@/contexts/TodoContext";
import React, { ChangeEvent, useCallback, useContext } from "react";
import EditModal from "./editmodal";
import { ITodo } from "@/interfaces/todo";
import { BiTrash } from "react-icons/bi";

function Tabletodo() {
  const { todos, updateTodo, removeTodo } = useContext(TodoContext);

  async function onToggleTodo(todo: ITodo) {
    const updateItem = {
      id: todo.id,
      title: todo.title,
      desc: todo.desc,
      completed: !todo.completed,
    };
    updateTodo(updateItem);
  }

  return (
    <div className="card w-150 bg-base-300 shadow-xl p-4 my-4">
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>No.</th>
              <th>Title</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, index) => {
              return (
                <tr
                  key={index}
                  className={
                    todo.completed ? "line-through hover:no-underline" : ""
                  }
                >
                  <th>
                    <input
                      type="checkbox"
                      defaultChecked={todo.completed}
                      className="checkbox"
                      onChange={() => onToggleTodo(todo)}
                    />
                  </th>
                  <td>{todo.title}</td>
                  <td>{todo.desc}</td>
                  <td>
                    <EditModal
                      id={todo.id}
                      title={todo.title}
                      desc={todo.desc}
                      completed={todo.completed}
                    />
                  </td>
                  <td>
                    <BiTrash
                      className="cursor-pointer"
                      onClick={() => removeTodo(todo.id as string)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Tabletodo;
