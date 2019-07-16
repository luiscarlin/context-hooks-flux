import React from "react";
import "./todo.scss";
import CloseIcon from "./CloseIcon";
import CheckmarkIcon from "./CheckmarkIcon";

const PLACEHOLDER_TEXT = "What do you want to do?....";

function Todo({ text, onTextUpdate, isCompleted, onDelete, onToggle }) {
  return (
    <div className="todo">
      <button
        className="todo__checkbox"
        data-testid="checkbox"
        onClick={onToggle}
      >
        {isCompleted && <CheckmarkIcon />}
      </button>
      <input
        data-testid="input-text"
        className="todo__task"
        type="text"
        placeholder={PLACEHOLDER_TEXT}
        onChange={event => onTextUpdate(event.target.value)}
        value={text}
      />
      <button
        data-testid="delete-button"
        className="todo__delete"
        onClick={onDelete}
      >
        <CloseIcon />
      </button>
    </div>
  );
}

export default Todo;
