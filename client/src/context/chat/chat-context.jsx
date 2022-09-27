import { createContext, useReducer } from "react";
import { chatReducer } from "./chat-reducer";

export const ChatContext = createContext();

const initialState = {
  uid: "",
  chatActivo: null,
  usuarios: [], // All los usuarios de la base de datos
  mensajes: [], //El chat seleccionado
};

export const ChatProvider = ({ children }) => {
  const [chatState, chatDispatch] = useReducer(chatReducer, initialState);

  return (
    <ChatContext.Provider
      value={{
        chatState,
        chatDispatch,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
