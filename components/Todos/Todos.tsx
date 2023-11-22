import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
import { Todo } from "@/types/Todo";

interface Props {
  todos: Todo[];
}

const Todos = ({ todos = [] }: Props) => {
  return (
    <div className="w-full">
      {todos.map(todo => (
        <TodoItem key={todo._id} item={todo} />
      ))}
      <AddTodo />
    </div>
  );
};

export default Todos;
