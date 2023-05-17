import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/ToDoList/TodoList";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (newTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const handleCompleteTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isDone: !todo.isDone };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleRemoveTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "All") {
      return true;
    } else if (filter === "Active") {
      return !todo.isDone;
    } else if (filter === "Complete") {
      return todo.isDone;
    }
    return true;
  });

  const handleDeleteAll = () => {
    setTodos([]);
  };

  const showDeleteAllButton =
    filteredTodos.some((todo) => todo.isDone) && filter === "Complete";

  return (
    <div className="container">
      <div className="todo-app">
        <h1>#todo</h1>
        <div className="function">
          <button onClick={() => handleFilterChange("All")}>All</button>
          <button onClick={() => handleFilterChange("Active")}>Active</button>
          <button onClick={() => handleFilterChange("Complete")}>
            Completed
          </button>
        </div>
        <TodoForm onAddTodo={handleAddTodo} />
        <TodoList
          todos={filteredTodos}
          onComplete={handleCompleteTodo}
          onRemove={handleRemoveTodo}
          filter={filter}
        />
        {showDeleteAllButton && (
          <button className="delete-button" onClick={handleDeleteAll}>
            Delete All
          </button>
        )}
      </div>
    </div>
  );
};

export default App;