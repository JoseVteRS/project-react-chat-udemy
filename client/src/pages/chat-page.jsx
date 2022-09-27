import { useContext } from "react";
import { ChatSelect } from "../components/chat-select";
import { InboxPeople } from "../components/inbox-people";
import Messages from "../components/messages";
import { ChatContext } from "../context/chat/chat-context";
import "./chat-page.css";

export const ChatPage = () => {
  const { chatState } = useContext(ChatContext);
  return (
    <div className="messaging min-h-screen bg-dark">
      <div className="inbox_msg flex">
        <InboxPeople />
        {chatState.chatActivo ? <Messages /> : <ChatSelect />}
      </div>
    </div>
  );
};
