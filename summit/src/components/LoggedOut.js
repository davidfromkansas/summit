import React, { Component } from "react";
import "./LoggedOut.css";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Logo from "../assets/summit_logo.svg";

import Button from "@material-ui/core/Button";

class LoggedOut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSignIn: false,
      showSignUp: false
    };
  }

  showSignIn = () => {
    this.setState({ showSignIn: true });
  };

  closeSignIn = () => {
    this.setState({ showSignIn: false });
  };

  showSignUp = () => {
    this.setState({ showSignUp: true });
  };

  closeSignUp = () => {
    this.setState({ showSignUp: false });
  };

  render() {
    return (
      <div>
        <img src={Logo} height="25%" width="25%" />
        <br />
        <h1>Summit</h1>

        {/* We should only render the sign-in / sign-out components on demand. 
        This increases the efficiency of the React app imo -- DLT */}

        {this.state.showSignIn ? (
          <SignIn open={true} close={this.closeSignIn}></SignIn>
        ) : null}
        {this.state.showSignUp ? (
          <SignUp open={true} close={this.closeSignUp}></SignUp>
        ) : null}

        <Button onClick={this.showSignIn}>Sign In</Button>

        <br />

        <Button variant="outlined" onClick={this.showSignUp}>
          Sign up
        </Button>
      </div>
    );
  }
}

export default LoggedOut;
