import React from "react";
import { SidebarChatItem } from "./sidebar-chat-item";

const chats = [1, 2, 3, 4, 5, 6];

const Sidebar = () => {
  return (
    <div className="inbox_chat">
      {chats.map((chat) => (
        <SidebarChatItem key={chat} />
      ))}

      <div className="extra_space"></div>
    </div>
  );
};

export default Sidebar;
