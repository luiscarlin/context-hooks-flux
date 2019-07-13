import React from "react";
import "./todo.scss";
import CloseIcon from "./CloseIcon";

function Todo({ text, onTextUpdate, isCompleted, onDelete, onToggle }) {
  return (
    <>
      <input
        data-testid="checkbox"
        type="checkbox"
        checked={isCompleted}
        onChange={onToggle}
      />
      <input
        data-testid="input-text"
        type="text"
        onChange={event => onTextUpdate(event.target.value)}
        value={text}
      />
      <button data-testid="delete-button" onClick={onDelete}>
        <CloseIcon />
      </button>
    </>
  );
}

export default Todo;
