import React from "react";

export default function Greeting(props) {
  let isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <h1>Welcome Nishanth!</h1>;
  } else {
    return <h1>Please Login!</h1>;
  }
}
