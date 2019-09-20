import React from "react";
import Messages from "./Messages";

export default function Mailbox(props) {
  let unReadMessages = props.messages;
  if (!unReadMessages.length) return null;
  return (
    <div>
      <h2>You have {unReadMessages.length} unread messages in your Mailbox</h2>
      <ul>
        {unReadMessages.map(message => (
          <Messages key={message.toString()} message={message} />
        ))}
      </ul>
    </div>
  );
}
