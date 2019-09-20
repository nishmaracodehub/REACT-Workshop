import React from "react";
import Messages from "./Messages";

export default function Mailbox(props) {
  let { isLoggedIn, messages } = props;
  if (!isLoggedIn) return null;
  if (!messages.length) return null;
  return (
    <div>
      <h2>You have {messages.length} messages in your Mailbox</h2>
      <ul>
        {messages.map(message => (
          <Messages key={message.toString()} message={message} />
        ))}
      </ul>
    </div>
  );
}
