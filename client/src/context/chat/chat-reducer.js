import { TYPES } from "../../types/types";

export const chatReducer = (state, action) => {
  switch (action.type) {
    case TYPES.usuariosCargados:
      return {
        ...state,
        usuarios: [...action.payload],
      };

    case TYPES.activarChat:
      if (state.chatActivo === action.payload) return state;
      return {
        ...state,
        chatActivo: action.payload,
        mensajes: [],
      };

    case TYPES.nuevoMensaje:
      if (
        state.chatActivo === action.payload.de ||
        state.chatActivo === action.payload.para
      ) {
        return {
          ...state,
          mensajes: [...state.mensajes, action.payload],
        };
      } else {
        return state;
      }

    case TYPES.cargarMensajes:
      return {
        ...state,
        mensajes: [...action.payload],
      };

    default:
      return state;
  }
};
