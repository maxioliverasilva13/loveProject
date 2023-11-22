import Button from "@/components/shared/Button/Button";
import Loading from "@/components/shared/Loading/Loading";
import { useAddTodoMutation } from "@/services/TodosService";
import { useGlobal } from "@/slices/GlobalSlice";
import { classNames } from "@/utils/classNames";
import { useCallback, useState, KeyboardEvent } from "react";

const AddTodo = () => {
  const [isActive, setIsActive] = useState(false);
  const autoFocus = useCallback((el: HTMLInputElement): void | null => (el ? el.focus() : null), []);
  const [addTodo, { isLoading: isAdding }] = useAddTodoMutation();
  const { darkMode } = useGlobal();

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e?.code === "Enter") {
      addTodo({ title: e.currentTarget?.value, completed: false });
      setIsActive(false);
    }
  };

  return (
    <div className="text-center text-lg cursor-pointer mt-4">
      {isActive ? (
        <input
          className={classNames(
            "w-full bg-transparent rounded border border-1 border-gray-300 outline-0 px-4 py-2 text-gray-400",
            darkMode ? "text-white" : "text-black",
          )}
          ref={autoFocus}
          onKeyDown={handleKeyDown}
          onBlur={() => setIsActive(false)}
          type="text"
        />
      ) : (
        <>
          {isAdding && <Loading />}
          <Button label="Add a new Todo" variant="info" onClick={() => setIsActive(!isActive)} />
        </>
      )}
    </div>
  );
};

export default AddTodo;
