import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello World" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(), //This used to generate a new id each time.
        text: action.payload.text,
      };
      state.todos.push(todo); //Here, we are updating the state of the variable todos
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(
        //Here we are also updating the value.
        (todo) => todo.id != action.payload.removeTodoId
      );
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions; //Here we have exported the reducers individually so that they can be used to update the data.
export default todoSlice.reducer; //We have to export the reducer separately so we can register them with the store.
