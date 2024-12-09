import "./App.css";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";

function App() {
  return (
    <div>
      <h1>Todos</h1>
      <TodoForm />
      <Todos />
    </div>
  );
}

export default App;
