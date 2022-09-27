import { createContext, useContext, useEffect } from "react";
import { AuthContext } from "../auth/auth-context";
import { useSocket } from "../hooks/use-socket";
import { scrollToBottomAnimated } from "../lib/utils/scroll-to-bottom";
import { TYPES } from "../types/types";
import { ChatContext } from "./chat/chat-context";

export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const { socket, online, conectarSocket, desconectarSocket } = useSocket(
    "http://localhost:8080"
  );
  const { auth } = useContext(AuthContext);
  const { chatDispatch } = useContext(ChatContext);

  useEffect(() => {
    if (auth.logged) {
      conectarSocket();
    }
  }, [auth, conectarSocket]);

  useEffect(() => {
    if (!auth.logged) {
      desconectarSocket();
    }
  }, [auth, desconectarSocket]);

  useEffect(() => {
    socket?.on("lista-usuarios", (usuarios) => {
      chatDispatch({
        type: TYPES.usuariosCargados,
        payload: usuarios,
      });
    });
  }, [socket, chatDispatch]);

  useEffect(() => {
    socket?.on("mensaje-personal", (mensaje) => {
      chatDispatch({ type: TYPES.nuevoMensaje, payload: mensaje });

      scrollToBottomAnimated("mensajes");
    });
  }, [socket, chatDispatch]);

  return (
    <SocketContext.Provider value={{ socket, online }}>
      {children}
    </SocketContext.Provider>
  );
};
