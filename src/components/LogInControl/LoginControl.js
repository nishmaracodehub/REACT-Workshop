import React, { Component } from "react";
import Greeting from "./Greeting";
import LogIn from "./LogIn";
import LogOut from "./LogOut";
import Mailbox from "../Mailbox/Mailbox";

class LoginControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      messages: ["hi", "bye"]
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
    let { isLoggedIn, messages } = this.state;
    let button = isLoggedIn ? (
      <LogOut onClick={this.handleClickLogOut} />
    ) : (
      <LogIn onClick={this.handleClickLogIn} />
    );
    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {isLoggedIn && <Mailbox messages={messages} />}
        {button}
      </div>
    );
  }
}

export default LoginControl;
