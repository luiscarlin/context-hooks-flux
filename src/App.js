import React, { useContext } from "react";
import { AppContext } from "./context";
import TodosItem from "./TodosItem";
import actions from "./actions";
import Header from "./components/presenters/Header";
import "./app.scss";
import Todo from "./components/presenters/Todo";
import AddButton from "./components/presenters/AddButton";

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
      {/* {state.map(item => (
        <Todo key={item.id} {...item} />
      ))} */}
      <AddButton onClickHandler={() => dispatch(actions.add())} />
    </main>
  );
}

export default App;
