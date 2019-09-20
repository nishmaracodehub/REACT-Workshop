import React from "react";

export default function Mailbox(props) {
  let unReadMessages = props.messages;
  if (!unReadMessages) return null;
  return (
    <div>
      <h2>You have {unReadMessages.length} unread messages in your Mailbox</h2>
    </div>
  );
}
