import React, { useContext } from "react";
import { AppState, AppContext } from "./context";

function App() {
  const { state, dispatch } = useContext(AppContext);

  return (
    <React.Fragment>
      <h1>Todo App</h1>
      <button onClick={() => dispatch({ type: "add" })}>Add</button>
      {state.map(item => (
        <TodosItem key={item.id} {...item} />
      ))}
    </React.Fragment>
  );
}

function TodosItem({ id, completed, text }) {
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

export default App;
