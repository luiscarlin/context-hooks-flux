import React, { useReducer } from "react";
import { timeout } from "q";

function appReducer(state, action) {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          id: Date.now(),
          text: "",
          completed: false
        }
      ];

    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(appReducer, []);
  return (
    <div>
      <h1>Todo App</h1>
      <button onClick={() => dispatch({ type: "add" })}>Add</button>
      {state.map(item => (
        <TodosItem key={item.id} {...item} />
      ))}
    </div>
  );
}

function TodosItem({ id, completed, text }) {
  return (
    <div>
      <input type="checkbox" />
      <input type="text" defaultValue={text} />
      <button>delete</button>
    </div>
  );
}

export default App;
