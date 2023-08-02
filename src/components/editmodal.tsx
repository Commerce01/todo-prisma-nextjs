import { TodoContext } from "@/contexts/TodoContext";
import { ITodo } from "@/interfaces/todo";
import React, { FormEvent, useContext, useRef, useState } from "react";
import { BiEditAlt } from "react-icons/bi";

function EditModal({ title, desc, id, completed }: ITodo) {
  const { updateTodo } = useContext(TodoContext);

  const titleRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLInputElement>(null);
  const completedRef = useRef<HTMLSelectElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (titleRef.current || descRef.current || completedRef.current) {
      const titleSend = titleRef.current?.value;
      const descSend = descRef.current?.value;
      const completedSend =
        completedRef.current?.value === "true" ? true : false;
      const todolist: ITodo = {
        id: id,
        title: titleSend as string,
        desc: descSend as string,
        completed: completedSend,
      };
      updateTodo(todolist);
    }

    setIsOpen(false);
  }
  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}><BiEditAlt/></button>
      <div
        className={
          isOpen
            ? "fixed top-0 left-0  bg-[rgba(0,0,0,0.5)] w-full h-full"
            : "hidden"
        }
      >
        <div className=" flex justify-center items-center h-full">
          <div className="card w-96 bg-base-100 shadow-xl">
            <form onSubmit={handleSubmit} className="card-body">
              <h2 className="card-title">EDIT TODO</h2>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                  defaultValue={title}
                  ref={titleRef}
                />
                <label className="label">
                  <span className="label-text">Desc</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                  defaultValue={desc}
                  ref={descRef}
                />
                <div>
                  <label className="label">
                    <span className="label-text"> IS COMPLETE</span>
                  </label>
                  <select
                    className="select select-bordered w-full max-w-xs"
                    ref={completedRef}
                  >
                    <option disabled>toggle complete</option>
                    <option value={"true"}>COMPLETE</option>
                    <option value="false">NOT COMPLETE</option>
                  </select>
                </div>
                {/* <label className="label cursor-pointer">
                  <span className="label-text">Complete</span>
                  <input
                    type="checkbox"
                    defaultChecked={false}
                    className="checkbox"
                  />
                </label> */}
              </div>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">SAVE</button>
                <button
                  className="btn btn-secondary "
                  onClick={() => setIsOpen(false)}
                >
                  CLOSE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditModal;
