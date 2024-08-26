import React from "react";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <>
        <header>
          <ul>
            <NavLink activeClassName="active" excat to="/">
              <li>Home</li>
            </NavLink>
            <NavLink activeClassName="active" to="/contact">
              <li>Contact</li>
            </NavLink>
            <NavLink activeClassName="active" to="/about">
              <li>About</li>
            </NavLink>
          </ul>
        </header>
      </>
    );
  }
}

export default Header;
