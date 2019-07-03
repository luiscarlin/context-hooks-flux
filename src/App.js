import React, { useContext } from "react";
import { AppContext } from "./context";
import TodosItem from "./TodosItem";

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

export default App;
