import React, { useContext } from "react";
import { AppContext } from "./context";
import actions from "./actions";
import Header from "./components/Header";
import "./app.scss";
import Todo from "./components/Todo";
import AddButton from "./components/AddButton";

function App() {
  const { state, dispatch } = useContext(AppContext);

  if (state.length === 0) {
    dispatch(actions.add());
  }

  return (
    <main id="main">
      <Header />
      {state.map(item => (
        <Todo
          key={item.id}
          onTextUpdate={value => dispatch(actions.updateText(item.id, value))}
          onDelete={() => dispatch(actions.remove(item.id))}
          text={item.text}
          isCompleted={item.completed}
          onToggle={() => dispatch(actions.toggle(item.id, !item.completed))}
        />
      ))}
      <AddButton />
    </main>
  );
}

export default App;
