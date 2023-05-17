import { useState } from "react";
import './TodoForm.css'

const TodoForm = ({ onAddTodo }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      const newTodo = {
        id: Date.now(),
        title: title,
        isDone: false,
      };
      onAddTodo(newTodo);
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add details"
      />
      <button className="add-button" type="submit">Add</button>
    </form>
  );
};

export default TodoForm;