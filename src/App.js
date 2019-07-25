import React, { useContext } from "react";
import { AppContext } from "./context";
import TodosItem from "./TodosItem";
import actions from "./actions";
import Header from "./components/Header";
import "./app.scss";
import Todo from "./components/Todo";
import AddButton from "./components/AddButton";

function App() {
  const { state, dispatch } = useContext(AppContext);

  return (
    <main id="main">
      <Header />
      {state.map(item => (
        // <Todo key={item.id} {...item} />
        <Todo
          onTextUpdate={value => dispatch(actions.updateText(item.id, value))}
          onDelete={() => alert("you clicked delete")}
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
