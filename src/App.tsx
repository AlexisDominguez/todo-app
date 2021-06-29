import AddNewTodoFrom from "./components/AddNewTodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="container">
      <TodoList />
      <AddNewTodoFrom />
    </div>
  );
}

export default App;
