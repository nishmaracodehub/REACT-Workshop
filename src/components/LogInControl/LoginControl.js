import React, { Component } from "react";
import Greeting from "./Greeting";
import LogIn from "./LogIn";
import LogOut from "./LogOut";

class LoginControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
    this.handleClickLogOut = this.handleClickLogOut.bind(this);
    this.handleClickLogIn = this.handleClickLogIn.bind(this);
  }

  handleClickLogIn() {
    this.setState(state => ({
      isLoggedIn: !state.isLoggedIn
    }));
  }

  handleClickLogOut() {
    this.setState(state => ({
      isLoggedIn: !state.isLoggedIn
    }));
  }
  render() {
    let { isLoggedIn } = this.state;
    let button;
    if (isLoggedIn) {
      button = <LogOut onClick={this.handleClickLogOut} />;
    } else {
      button = <LogIn onClick={this.handleClickLogIn} />;
    }
    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

export default LoginControl;
