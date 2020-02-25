import React, { Component } from "react";
import "./LoggedOut.css";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

class LoggedOut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSignIn: false,
      showSignUp: false
    };
  }

  showSignIn = () => {
    this.setState({ showSignIn: !this.state.showSignIn });
    this.setState({ showSignUp: false });
  };

  showSignUp = () => {
    this.setState({ showSignUp: !this.state.showSignUp });
    this.setState({ showSignIn: false });
  };

  render() {
    return (
      <div id="loggedoutcontainer">
        <h1>You Are Logged Out</h1>
        {/* <div id="authButtons"> */}
        {this.state.showSignIn ? <SignIn></SignIn> : null}
        {this.state.showSignUp ? <SignUp></SignUp> : null}

        <br />

        <button onClick={this.showSignIn}>Sign In</button>
        <br />
        <button onClick={this.showSignUp}>Sign up</button>
        {/* </div> */}
      </div>
    );
  }
}

export default LoggedOut;
