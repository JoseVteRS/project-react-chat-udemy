import React from "react";

export const IncomingMessage = ({ mensaje }) => {
  return (
    <div className="outgoing_msg flex justify-start my-1">
      <div className="sent_msg max-w-xl">
        <p className="bg-pink-700 text-slate-200 p-3 rounded-xl">
          {mensaje.mensaje}
        </p>
      </div>
    </div>
  );
};
