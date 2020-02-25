import React, { Component } from "react";
import "./SignUp.css";
import fire from "../config/fire";

// Importing Materialize Components...
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keepOpen: this.props.open,
      email: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    // console.log("handle change called");
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

  closeSignUpModal = () => {
    this.setState({ keepOpen: false });
    this.props.close();
  };

  render() {
    return (
      <Dialog maxWidth={"xs"} fullWidth={"xs"} open={this.state.keepOpen}>
        <DialogTitle id="form-dialog-title">Register</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Get started with Summit by entering the information below
          </DialogContentText>
          <TextField
            id="filled-basic"
            label="email"
            onChange={this.handleChange}
            name="email"
            type="email"
          />
          <br />
          <TextField
            id="filled-basic"
            label="password"
            onChange={this.handleChange}
            name="password"
            type="password"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.closeSignUpModal}>Cancel</Button>
          <Button onClick={this.SignUp}>Register</Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default SignUp;
