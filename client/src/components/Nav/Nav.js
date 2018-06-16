import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = props => (
  <nav className="navbar navbar-light bg-light">
    <a className="navbar-brand" href="#">
      <img
        src="/docs/4.1/assets/brand/bootstrap-solid.svg"
        width="30"
        height="30"
        class="d-inline-block align-top"
        alt=""
      />
      Bootstrap
    </a>
  </nav>
);

export default Nav;
