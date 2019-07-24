import React from "react";
import AddIcon from "../AddIcon";
import "./add-button.scss";

function AddButton({ onClickHandler }) {
  return (
    <div className="add-button">
      <AddIcon onClick={onClickHandler} />
    </div>
  );
}

export default AddButton;
