import React, { Component } from "react";
import "./SignUp.css";
import fire from "../config/fire";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    console.log("thing created");
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  SignUp = e => {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {})
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    return (
      <div className="SignUpForm">
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
          <button onClick={this.SignUp}>Sign Up</button>
        </form>
      </div>
    );
  }
}

export default SignUp;
