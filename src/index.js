import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AppState } from "./context";
import "./index.scss";

function Root() {
  return (
    <AppState>
      <App />
    </AppState>
  );
}

ReactDOM.render(<Root />, document.getElementById("app"));
