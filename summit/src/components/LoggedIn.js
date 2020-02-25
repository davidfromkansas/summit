import React, { Component } from "react";
import "./LoggedIn.css";
import fire from "../config/fire";

class LoggedIn extends Component {
  constructor(props) {
    super(props);
  }

  logout = () => {
    fire.auth().signOut();
  };
  render() {
    return (
      <div>
        <h1>I am home</h1>
        <button onClick={this.logout}>Log Out</button>
      </div>
    );
  }
}

export default LoggedIn;
