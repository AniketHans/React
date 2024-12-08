import { useContext } from "react";
import { createContext } from "react";

const TodoContext = createContext({
  todos: [{ id: 1, todo: "Default Todo", completed: false }], //We have added a demo todo which only defines the structure of todos we will be puting in the context.
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const TodoContextProvider = TodoContext.Provider;

export function useTodo() {
  return useContext(TodoContext);
}
