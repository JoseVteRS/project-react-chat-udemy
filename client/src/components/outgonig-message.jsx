import React from "react";

export const OutgoingMessage = ({ mensaje }) => {
  return (
    <div className="outgoing_msg flex justify-end my-1">
      <div className="sent_msg max-w-xl">
        <div className="triangle"></div>
        <p className="bg-indigo-900 text-slate-200 p-3 rounded-xl">
          {mensaje.mensaje}
        </p>
      </div>
    </div>
  );
};
