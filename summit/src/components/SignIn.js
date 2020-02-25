import React, { Component } from "react";
import "./SignIn.css";
import fire from "../config/fire";

// Importing Materialize Components...
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class SignIn extends Component {
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

  closeSignInModal = () => {
    this.setState({ keepOpen: false });
    this.props.close();
  };

  render() {
    return (
      <Dialog maxWidth={"xs"} fullWidth={"xs"} open={this.state.keepOpen}>
        <DialogTitle id="form-dialog-title">Sign In</DialogTitle>
        <DialogContent>
          <DialogContentText>Access Summit</DialogContentText>
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
          <Button onClick={this.closeSignInModal}>Cancel</Button>
          <Button onClick={this.signIn}>Sign In</Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default SignIn;
