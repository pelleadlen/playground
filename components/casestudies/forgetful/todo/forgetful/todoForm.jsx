import { motion } from "framer-motion";
import { useState } from "react";
import {
  Enter,
  Form,
  Input,
  Backdrop,
  Button,
  FormWrapper,
} from "../../styled/styledTodoList";
import { v4 as uuidv4 } from "uuid";

function TodoForm({ addTodo, open, close, setColor, color, text }) {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
    color,
    text,
  });

  function handleTaskInputChange(e) {
    setTodo({ ...todo, task: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuidv4() });
      setTodo({ ...todo, task: "" });
    }
  }

  const bgDrop = {
    i: {
      opacity: 0,
    },
    a: {
      opacity: 0.2,
    },
  };

  const form = {
    i: {
      opacity: 0,
      y: -16,
    },
    a: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
      },
    },
  };

  return (
    <>
      <Backdrop variants={bgDrop} initial="i" animate="a" />
      <FormWrapper variants={form} initial="i" animate="a">
        <Form autoComplete="off" onSubmit={handleSubmit}>
          <Input
            autoComplete="off"
            autoFocus
            name="task"
            placeholder="Add todo"
            type="text"
            value={todo.task}
            onChange={handleTaskInputChange}
          />
          <Button type="submit">
            <Enter />
          </Button>
        </Form>
      </FormWrapper>
    </>
  );
}

export default TodoForm;
