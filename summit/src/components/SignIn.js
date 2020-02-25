import React, { Component } from "react";
import "./SignIn.css";
import fire from "../config/fire";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  signIn = e => {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {})
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    return (
      <div className="signInForm">
        <form>
          <div>
            <label>Email Address</label>
            <input
              value={this.state.email}
              onChange={this.handleChange}
              type="email"
              name="email"
              placeholder="Enter Email"
            />
          </div>
          <div>
            <label>Password</label>
            <input
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              name="password"
              placeholder="password"
            />
          </div>
          <button onClick={this.signIn}>Sign in</button>
        </form>
      </div>
    );
  }
}

export default SignIn;
