import React, { useContext } from "react";
import { AppContext } from "./context";
import TodosItem from "./TodosItem";
import actions from "./actions";
import Header from "./components/Header";
import "./app.scss";

function App() {
  const { state, dispatch } = useContext(AppContext);

  return (
    <main id="main">
      <Header />
      <button onClick={() => dispatch(actions.add())}>Add</button>
      {state.map(item => (
        <TodosItem key={item.id} {...item} />
      ))}
    </main>
  );
}

export default App;
