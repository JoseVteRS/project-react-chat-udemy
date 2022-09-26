import { ChatSelect } from "../components/chat-select";
import { InboxPeople } from "../components/inbox-people";
import Messages from "../components/messages";
import "./chat-page.css";

export const ChatPage = () => {
  return (
    <div className="messaging">
      <div className="inbox_msg">
        <InboxPeople />
        {true ? <Messages /> : <ChatSelect />}
      </div>
    </div>
  );
};
