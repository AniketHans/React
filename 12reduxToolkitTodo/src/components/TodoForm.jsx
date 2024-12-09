import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function TodoForm() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo({ text: input })); //This input can be retreived inside addTodo() using action.payload.input
    setInput(""); //Cleaning the input field after the todo is added.
  };

  return (
    <>
      <form onSubmit={addTodoHandler}>
        <input
          placeholder="todo"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
}
