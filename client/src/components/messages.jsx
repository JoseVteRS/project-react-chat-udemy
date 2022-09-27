import React, { useContext } from "react";
import { AuthContext } from "../auth/auth-context";
import { ChatContext } from "../context/chat/chat-context";
import { IncomingMessage } from "./incoming-message";
import { OutgoingMessage } from "./outgonig-message";
import { SendMessage } from "./send-message";

const Messages = () => {
  const { chatState } = useContext(ChatContext);
  const { auth } = useContext(AuthContext);

  return (
    <div className="mesgs flex flex-col justify-between w-full">
      <div id="mensajes" className="msg_history w-10/12 mx-auto py-10">
        {chatState.mensajes.map((mensaje) =>
          mensaje.para === auth.uid ? (
            <IncomingMessage key={mensaje._id} mensaje={mensaje} />
          ) : (
            <OutgoingMessage key={mensaje._id} mensaje={mensaje} />
          )
        )}
      </div>

      <SendMessage />
    </div>
  );
};

export default Messages;
