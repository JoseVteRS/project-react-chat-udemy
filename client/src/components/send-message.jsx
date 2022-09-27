import React, { useContext, useState } from "react";
import { AuthContext } from "../auth/auth-context";
import { ChatContext } from "../context/chat/chat-context";
import { SocketContext } from "../context/socket-context";

export const SendMessage = () => {
  const { socket } = useContext(SocketContext);
  const { auth } = useContext(AuthContext);
  const { chatState } = useContext(ChatContext);

  const [mensaje, setMensaje] = useState("");

  const handleOnChange = ({ target }) => {
    setMensaje(target.value);
  };

  const handleOnSubmit = (ev) => {
    ev.preventDefault();

    if (mensaje.length === 0) return;
    setMensaje("");

    // TODO: Emitir evento socket para enviar el mensaje
    /**
     * de: uid del usuario
     * para: uid del usuario
     * mensaje: texto
     */
    socket?.emit("mensaje-personal", {
      de: auth.uid,
      para: chatState.chatActivo,
      mensaje: mensaje,
    });
  };

  return (
    <form onSubmit={handleOnSubmit} className="">
      <div className="type_msg flex w-full relative">
        <input
          type="text"
          className="write_msg p-4 w-full bg-dark-gray outline-none focus:outline-2 focus:outline-yellow-500"
          placeholder="Mensaje..."
          value={mensaje}
          onChange={handleOnChange}
        />

        <button
          className="msg_send_btn absolute right-2 bottom-2 bg-blue-500 text-white p-2 font-medium rounded-xl"
          type="submit"
        >
          Enviar
        </button>
      </div>
    </form>
  );
};
