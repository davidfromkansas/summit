import React, { Component } from "react";
import "./LoggedIn.css";
import fire from "../config/fire";
import NavBar from "./NavBar";

class LoggedIn extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="loggedInContainer">
        <NavBar></NavBar>
      </div>
    );
  }
}

export default LoggedIn;
