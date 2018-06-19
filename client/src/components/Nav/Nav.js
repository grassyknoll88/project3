import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Nav = props => (
  <nav className="navbar navbar-expand-lg">
    <Link className="navbar-brand nav-title hvr-grow" to="/">
      PupLife
    </Link>
    <div>
      <ul className="navbar-nav">
        <li
          className={
            window.location.pathname === "/" ||
            window.location.pathname === "/home"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/profile"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/profile" className="nav-link">
            Profile
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/searchdash"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/searchdash" className="nav-link">
            Search
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Nav;
