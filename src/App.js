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
      <Todo
        onTextUpdate={value => alert(`updated with value: ${value}`)}
        onDelete={() => alert("you clicked delete")}
        text={"some text here"}
        isCompleted={true}
        onToggle={() => console.log("toggled")}
      />
      {/* <button onClick={() => dispatch(actions.add())}>Add</button>
      {state.map(item => (
        <TodosItem key={item.id} {...item} />
      ))} */}
      <AddButton onClickHandler={() => alert("you tapped add")} />
    </main>
  );
}

export default App;
