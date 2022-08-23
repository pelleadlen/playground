import { AnimatePresence, motion, Reorder } from "framer-motion";
import { Ul } from "../../styled/styledTodoList";
import Todo from "./todo";

function TodoList({ todos, toggleComplete, todo, removeTodo }) {
  return (
    <>
      <Ul>
        {todos
          .filter((i) => i)
          .map((todo) => (
            <motion.div
              whileHover={{ scale: 1.005 }}
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: -4, opacity: 0, scale: 1 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 50 }}
              exit={{ y: -4, opacity: 0 }}
              key={todo.id}
            >
              <Todo
                todo={todo}
                toggleComplete={toggleComplete}
                removeTodo={removeTodo}
              />
            </motion.div>
          ))}
      </Ul>
    </>
  );
}

export default TodoList;
