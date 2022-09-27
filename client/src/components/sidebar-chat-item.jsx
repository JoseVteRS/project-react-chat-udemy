import React, { useContext } from "react";
import { ChatContext } from "../context/chat/chat-context";
import { fetchWithToken } from "../lib/utils/fetch";
import { scrollToBottom } from "../lib/utils/scroll-to-bottom";
import { TYPES } from "../types/types";

export const SidebarChatItem = ({ usuario }) => {
  const { chatState, chatDispatch } = useContext(ChatContext);
  const { chatActivo } = chatState;

  const onClick = async () => {
    chatDispatch({ type: TYPES.activarChat, payload: usuario.uid });

    // Cargar los mensajes de chat
    const resp = await fetchWithToken(`mensajes/${usuario.uid}`);
    chatDispatch({ type: TYPES.cargarMensajes, payload: resp.mensajes });
    scrollToBottom("mesajes");
  };

  return (
    <div
      className={`chat_list  ${
        usuario.uid === chatActivo && "bg-dark"
      }  hover:cursor-pointer py-5 text-slate-200`}
      onClick={onClick}
    >
      <div className="chat_people flex items-center gap-5">
        <div className="chat_img">
          <img
            src="https://ptetutorials.com/images/user-profile.png"
            alt="sunil"
            className="w-10 h-10"
          />
        </div>
        <div className="chat_ib">
          <h5>{usuario.nombre}</h5>
          {usuario.online ? (
            <span className="text-green-500">Online</span>
          ) : (
            <span className="text-red-500">Offline</span>
          )}
        </div>
      </div>
    </div>
  );
};
