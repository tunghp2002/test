import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css"

const TodoList = ({ todos, onComplete, onRemove, filter }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <TodoItem
            todo={todo}
            onComplete={onComplete}
            onRemove={onRemove}
            filter={filter} 
          />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;