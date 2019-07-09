import React, { useContext } from "react";
import { AppContext } from "./context";
import TodosItem from "./TodosItem";
import actions from "./actions";
import Header from "./components/Header";

function App() {
  const { state, dispatch } = useContext(AppContext);

  return (
    <main className="app">
      <Header />
      <button onClick={() => dispatch(actions.add())}>Add</button>
      {state.map(item => (
        <TodosItem key={item.id} {...item} />
      ))}
    </main>
  );
}

export default App;
