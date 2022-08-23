import { Buttons } from "../../styled/styledTodoList";
import { Fab } from "./fab";
import { Loader } from "../splashScreen";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import TodoForm from "./todoForm";
import TodoList from "./todoList";
import { AnimatePresence } from "framer-motion";

function Forgetfully() {
  //   Loading screen

  const [loading, setLoading] = useState(false);
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
      }, 4000);
    }
  }, [inView]);

  //   TodoList

  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
    setModal(!modal);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos
        .filter((i) => i)
        .map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          } else {
            return todo;
          }
        })
    );
  };

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo && todo.id !== id));
  }

  //   Input modal

  const [modal, setModal] = useState(false);
  const [color, setColor] = useState(null);
  const [textColor, setTextColor] = useState(null);

  function handleOpenModal() {
    setModal(!modal);
  }

  return (
    <>
      <div style={{ width: "100%", height: "100%" }} ref={ref}>
        {loading ? (
          <Loader />
        ) : (
          <>
            <Buttons
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 80 }}
            >
              <Fab
                setColor={setColor}
                setTextColor={setTextColor}
                openModal={handleOpenModal}
              />
            </Buttons>
            {modal ? (
              <TodoForm
                onClick={addTodo}
                addTodo={addTodo}
                textColor={textColor}
                color={color}
              />
            ) : (
              <TodoList
                removeTodo={removeTodo}
                todos={todos}
                toggleComplete={toggleComplete}
              />
            )}
          </>
        )}
      </div>
    </>
  );
}

export default Forgetfully;
