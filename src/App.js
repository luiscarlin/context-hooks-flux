import React, { useReducer, useContext } from "react";

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
    case "update":
      return state.map(item => {
        if (item.id === action.payload.id) {
          console.log({ ...item, ...action.payload });
          return { ...item, ...action.payload };
        }
        return item;
      });
    default:
      return state;
  }
}

const Context = React.createContext();

function App() {
  const [state, dispatch] = useReducer(appReducer, []);
  return (
    <Context.Provider value={dispatch}>
      <h1>Todo App</h1>
      <button onClick={() => dispatch({ type: "add" })}>Add</button>
      {state.map(item => (
        <TodosItem key={item.id} {...item} />
      ))}
    </Context.Provider>
  );
}

function TodosItem({ id, completed, text }) {
  const dispatch = useContext(Context);
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
