import React from "react";
import { IncomingMessage } from "./incoming-message";
import { OutgoingMessage } from "./outgonig-message";
import { SendMessage } from "./send-message";

const Messages = () => {
  return (
    <div className="mesgs">
      <div className="msg_history">
        <IncomingMessage />
        <IncomingMessage />
        <IncomingMessage />
        <OutgoingMessage />
        <IncomingMessage />
        <IncomingMessage />
        <OutgoingMessage />
        <OutgoingMessage />
        <OutgoingMessage />
      </div>

      <SendMessage />
    </div>
  );
};

export default Messages;
