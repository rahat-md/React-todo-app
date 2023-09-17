import React, { useState } from "react";

import { v4 as uuidv4 } from "uuid";

// @ts-ignore
import style from "./Home.module.css";

// @ts-ignore
import Todos from "./Todos";
import NewTodo from "./NewTodo";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const handleNewTodo = (todo) => {
    // @ts-ignore
    setTodos((prevTodo) => {
      return [...prevTodo, { id: uuidv4(), todo }];
    });
  };

  const handleRemoveTodo = (id) => {
    // @ts-ignore
    setTodos((prevTodos) => {
      const filteredTodo = todos.filter((todo) => todo.id !== id);
      return filteredTodo;
    });
  };
  return (
    <div className={style.container}>
      <h1 style={{ color: "white" }}>Todo App</h1>
      <NewTodo onAddTodo={handleNewTodo} />
      <Todos todos={todos} onRemoveTodo={handleRemoveTodo} />
    </div>
  );
};

export default Home;
