import React from "react";

export default function Mailbox(props) {
  let unReadMessages = props.messages;
  return (
    <div>
      {unReadMessages.length > 0 && (
        <h1>
          You have {unReadMessages.length} unread messages in your Mailbox
        </h1>
      )}
    </div>
  );
}
