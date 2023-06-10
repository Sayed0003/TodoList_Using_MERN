import React, { useEffect } from "react";
import { getAllTodos } from "../redux/actions/index.js";
import { useDispatch, useSelector } from "react-redux";

import Todo from "./Todo.jsx";

export const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    const fetchTodos = () => {
      dispatch(getAllTodos());
    };

    fetchTodos();
  }, [dispatch]);

  return (
    <>
      <article>
        <ul>
          {todos.map((todo) => (
            <Todo key={todo._id} todo={todo} />
          ))}
        </ul>
      </article>
    </>
  );
};
