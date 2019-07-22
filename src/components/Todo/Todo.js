import React from "react";
import "./todo.scss";
import CloseIcon from "../../assets/CloseIcon";
import CheckmarkIcon from "../../assets/CheckmarkIcon";

const PLACEHOLDER_TEXT = "What do you want to do?....";

function Todo({ text, onTextUpdate, isCompleted, onDelete, onToggle }) {
  return (
    <div className="todo">
      <div className="todo__checkbox" data-testid="checkbox" onClick={onToggle}>
        {isCompleted && <CheckmarkIcon />}
      </div>
      <input
        data-testid="input-text"
        className="todo__task"
        type="text"
        placeholder={PLACEHOLDER_TEXT}
        onChange={event => onTextUpdate(event.target.value)}
        value={text}
      />
      <div
        data-testid="delete-button"
        className="todo__delete"
        onClick={onDelete}
      >
        <CloseIcon />
      </div>
    </div>
  );
}

export default Todo;
