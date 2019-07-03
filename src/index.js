import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AppState } from "./context";

function Root() {
  return (
    <AppState>
      <App />
    </AppState>
  );
}

ReactDOM.render(<Root />, document.getElementById("app"));
