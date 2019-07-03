import React, { useContext } from "react";
import { AppContext } from "./context";

function TodosItem({ id, text }) {
  const { state, dispatch } = useContext(AppContext);
  return (
    <div>
      <input type="checkbox" />
      <input
        type="text"
        value={text}
        onChange={event =>
          dispatch({
            type: "update",
            payload: { id: id, text: event.target.value }
          })
        }
      />
      <button>delete</button>
    </div>
  );
}

export default TodosItem;
