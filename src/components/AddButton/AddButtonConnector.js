import React, { useContext } from "react";
import { AppContext } from "../../context";
import AddButton from "./AddButton";
import actions from "../../actions";

function AddButtonConnector() {
  const { dispatch } = useContext(AppContext);

  return <AddButton onClickHandler={() => dispatch(actions.add())} />;
}

export default AddButtonConnector;
