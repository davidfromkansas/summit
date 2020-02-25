import React, { Component } from "react";
import "./NavBar.css";
import Button from "@material-ui/core/Button";
import fire from "../config/fire";

class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  logout = () => {
    fire.auth().signOut();
  };

  render() {
    return (
      <div id="navbar">
        <Button id="logoutButton" onClick={this.logout}>
          Logout
        </Button>
        <h1 id="navTitle">Summit</h1>
      </div>
    );
  }
}

export default NavBar;
