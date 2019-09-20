import React from "react";

export default function Greeting(props) {
  let isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <h1>Welcome {props.name}!</h1>;
  } else {
    return <h1>Please Enter Your Name to Login!</h1>;
  }
}
