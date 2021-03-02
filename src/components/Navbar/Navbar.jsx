import { Component } from "react";

import { MenuItems } from "./MenuItems";
import { Button } from "./Button";
import "./Navbar.css";
import { Link } from "react-router-dom";
import InputBar from "./InputBar/InputBar";
import Dropdown from "./Dropdown";

export default class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
            DIBSTUFF
          </Link>
        </h1>
        {/* <Dropdown /> */}
        {/* <InputBar /> */}
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={!this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={!this.state.clicked ? "nav-menu active" : "nav-menu"}>
          <InputBar />
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
        <Button>
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to="/signup"
          >
            Sign Up
          </Link>
        </Button>
        <Button>
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to="/login"
          >
            Login
          </Link>
        </Button>
      </nav>
    );
  }
}
