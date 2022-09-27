import React, { useContext } from "react";
import { AuthContext } from "../auth/auth-context";
import { ChatContext } from "../context/chat/chat-context";
import { SidebarChatItem } from "./sidebar-chat-item";

const Sidebar = () => {
  const { chatState } = useContext(ChatContext);
  const { auth } = useContext(AuthContext);

  return (
    <div className="inbox_chat">
      {chatState.usuarios
        .filter((user) => auth.uid !== user.uid)
        .map((usuario) => (
          <SidebarChatItem key={usuario.uid} usuario={usuario} />
        ))}

      <div className="extra_space"></div>
    </div>
  );
};

export default Sidebar;
