export interface ITodoContext {
    todos: ITodo[];
    addTodo: (todo: ITodo) => void;
    updateTodo:  (todo:ITodo) => void;
    removeTodo: (id: string ) => void;
}

export interface ITodo {
    id?: string;
    title: string;
    desc: string;
    completed: boolean;
}
export interface ITodoProps {
    children: React.ReactNode;
}