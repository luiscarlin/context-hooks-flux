import React from "react";
import moment from "moment";
// import "./header.scss";

function Header() {
  return (
    <header className="header">
      <h1 data-testid="header__title">Do this</h1>
      <h2 data-testid="header__date">{moment().format("dddd, MMMM Do")}</h2>
    </header>
  );
}

export default Header;
