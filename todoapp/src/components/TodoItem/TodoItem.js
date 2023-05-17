import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import "./TodoItem.css";

const TodoItem = ({ todo, onComplete, onRemove, filter }) => {
  const handleCheckboxChange = () => {
    onComplete(todo.id);
  };

  const handleRemoveClick = () => {
    onRemove(todo.id);
  };

  return (
    <div style={{display:"flex", justifyContent:"space-between" }}>
      <div>
      <input
        type="checkbox"
        checked={todo.isDone}
        onChange={handleCheckboxChange}
        style={{ marginRight: "8px" }}
      />
      <span className={todo.isDone ? "completed" : ""}>{todo.title}</span>
      </div>
      {todo.isDone && filter === "Complete" && (
        <FaTrash
          style={{ color: "gray", marginLeft: "10px", cursor: "pointer" }}
          onClick={handleRemoveClick}
        />
      )}
    </div>
  );
};

export default TodoItem;