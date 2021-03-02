import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import Signup from "./../containers/Signup";
import Login from "./../containers/Login";

export default function Header() {
  return (
    <React.Fragment>
      <div class="topnav" id="myTopnav">
        <a href="#home" class="active">
          <Link to="/">
            <img src={logo} alt="Vinted-Logo" />
          </Link>
        </a>
        <a className="right" href="#news">
          <Link className="login" to="/signup">
            Sign U
          </Link>
        </a>
        <a className="right" href="#contact">
          <Link className="login" to="/login">
            Login
          </Link>
        </a>
      </div>
    </React.Fragment>
  );
}
