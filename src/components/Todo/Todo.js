import React from "react";
import "./todo.scss";

function Todo({ text }) {
  return <div data-testid="todo__text">{text}</div>;
}

export default Todo;
