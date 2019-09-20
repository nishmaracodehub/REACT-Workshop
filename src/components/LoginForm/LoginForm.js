import React from "react";

export default function LoginForm(props) {
  let { isLoggedIn } = props;
  if (isLoggedIn) return null;
  return (
    <div>
      <form>
        <label For="username">Username:</label>
        <input
          type="text"
          value={props.name}
          onChange={props.onChange}
          placeholder="Enter Your Name"
          autoFocus
        ></input>
      </form>
    </div>
  );
}
