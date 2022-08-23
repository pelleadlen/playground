import { Todos } from "../../styled/styledTodoList";

function Todo({ todo, toggleComplete, removeTodo }) {
  const handleCheckBoxClick = (id) => {
    toggleComplete(id);
    setTimeout(() => {
      removeTodo(id);
    }, 2000);
  };

  return (
    <>
      <Todos style={{ backgroundColor: `${todo.color}` }}>
        <input onClick={() => handleCheckBoxClick(todo.id)} type="checkbox" />
        <li
          style={{
            textDecoration: todo.completed ? "line-through" : null,
            color: `${todo.text}`,
          }}
        >
          {todo.task}
        </li>
      </Todos>
    </>
  );
}
export default Todo;
