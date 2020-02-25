import React from "react";
import logo from "./assets/summit_logo.svg";
import "./App.css";
import fire from "./config/fire";
import LoggedIn from "./components/LoggedIn";
import LoggedOut from "./components/LoggedOut";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    this.authListenser(); // starts process
  }

  authListenser() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.user ? <LoggedIn></LoggedIn> : <LoggedOut></LoggedOut>}
      </div>
    );
  }
}

export default App;
