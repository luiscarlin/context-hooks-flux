import React from "react";
import ReactDOM from "react-dom";

function Root() {
  return (
    <div>
      <h1>Hello from react</h1>
    </div>
  );
}

let App = document.getElementById("app");

ReactDOM.render(<Root />, App);
