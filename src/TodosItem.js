import React, { useContext } from "react";
import { AppContext } from "./context";
import actions from "./actions";

function TodosItem({ id, text }) {
  const { state, dispatch } = useContext(AppContext);
  return (
    <div>
      <input type="checkbox" />
      <input
        type="text"
        value={text}
        onChange={event => dispatch(actions.updateText(id, event.target.value))}
      />
      <button>delete</button>
    </div>
  );
}

export default TodosItem;
