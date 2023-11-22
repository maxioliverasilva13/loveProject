import Loading from "@/components/shared/Loading/Loading";
import { useDeleteTodoMutation, useUpdateTodoMutation } from "@/services/TodosService";
import { Todo } from "@/types/Todo";
import { classNames } from "@/utils/classNames";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Check, Trash } from "react-feather";
import Swal from "sweetalert2";

interface Props {
  item: Todo;
}

const TodoItem = ({ item = { title: "", completed: false } }: Props) => {
  const [updateTodo, { isLoading: isUpdating, isError: errorUpdating }] = useUpdateTodoMutation();
  const [deleteTodo, { isLoading: isDeleting }] = useDeleteTodoMutation();
  const [isCompleted, setIsCompleted] = useState(item.completed);
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  function handleToggle() {
    if (isUpdating || isDeleting) return;

    setIsCompleted(!item.completed);
    updateTodo({ ...item, completed: !item.completed });
  }

  const handleDeleteTodo = async (item: Todo) => {
    await deleteTodo(item);
  };

  useEffect(() => {
    if (errorUpdating) {
      setIsCompleted(!item.completed);
    }
  }, [errorUpdating, item.completed]);

  return (
    <div
      className={classNames(
        "grid grid-cols-[30px_auto_30px] items-center gap-1 rounded p-4 mt-1 bg-white border transition-all duration-75",
        isDarkMode ? "border-gray-700 text-black" : "border-gray-300",
        isCompleted ? "line-through opacity-70" : "decoration-0",
      )}
      data-testid={item.title}
    >
      <button
        className="w-[30px] h-[30px] rounded-full border border-gray-700 cursor-pointer pt-1 pl-1 transition-all duration-300"
        role="checkbox"
        aria-checked={isCompleted}
        onClick={handleToggle}
      >
        {isCompleted && <Check size="22px" />}
      </button>
      <h4 className="text-lg m-0 p-0 overflow-hidden overflow-ellipsis whitespace-nowrap">{item.title}</h4>
      {isDeleting ? (
        <Loading />
      ) : (
        <Trash
          data-testid={`deleteBtn${item.title}`}
          onClick={() => {
            Swal.fire({
              title: "Are you sure?",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, delete it!",
            }).then(result => {
              if (result.isConfirmed) {
                handleDeleteTodo(item);
              }
            });
          }}
          color="red"
        />
      )}
    </div>
  );
};

export default TodoItem;
