import React, { useContext } from "react";
import { AppContext } from "./context";
import TodosItem from "./TodosItem";
import actions from "./actions";

function App() {
  const { state, dispatch } = useContext(AppContext);

  return (
    <div>
      <h1>TODOs</h1>
      <button onClick={() => dispatch(actions.add())}>Add</button>
      {state.map(item => (
        <TodosItem key={item.id} {...item} />
      ))}
    </div>
  );
}

export default App;
