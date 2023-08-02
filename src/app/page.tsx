import AddTodos from "@/components/todos";
import Todos from "@/components/todos";
import Image from "next/image";
import Tabletodo from "@/components/tabletodo";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" flex flex-col justify-center items-center h-screen ">
      <h1>TODO LIST</h1>
      
      <Tabletodo />
      <Link href="/addtodo" className="btn  btn-primary">Add TODO</Link>
    </div>
  );
}
