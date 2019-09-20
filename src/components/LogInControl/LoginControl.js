import React, { Component } from "react";
import Greeting from "./Greeting";
import LogIn from "./LogIn";
import LogOut from "./LogOut";
import Mailbox from "../Mailbox/Mailbox";
import LoginForm from "../LoginForm/LoginForm";

class LoginControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      name: "",
      messages: ["hi", "bye"]
    };
    this.handleClickLogOut = this.handleClickLogOut.bind(this);
    this.handleClickLogIn = this.handleClickLogIn.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClickLogIn() {
    if (!this.state.name) {
      alert("Enter Username");
    } else {
      this.setState(state => ({
        isLoggedIn: !state.isLoggedIn
      }));
    }
  }

  handleClickLogOut() {
    this.setState(state => ({
      isLoggedIn: !state.isLoggedIn,
      name: ""
    }));
  }

  handleChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  render() {
    let { isLoggedIn, messages, name } = this.state;
    let button = isLoggedIn ? (
      <LogOut onClick={this.handleClickLogOut} />
    ) : (
      <LogIn onClick={this.handleClickLogIn} />
    );
    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} name={name} />
        <LoginForm
          isLoggedIn={isLoggedIn}
          name={name}
          onChange={this.handleChange}
        />
        <Mailbox isLoggedIn={isLoggedIn} messages={messages} />
        {button}
      </div>
    );
  }
}

export default LoginControl;
