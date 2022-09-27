import { useContext } from "react";
import { AuthContext } from "../auth/auth-context";

export const SearchBox = () => {
  const { auth, logout } = useContext(AuthContext);
  return (
    <div className="headind_srch bg-darkest text-slate-200 flex items-center justify-between p-4">
      <div className="recent_heading">
        <h4>{auth.name}</h4>
      </div>
      <div className="srch_bar">
        <div className="stylish-input-group">
          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-600 py-1 px-3 rounded text-slate-200 font-medium "
          >
            Salir
          </button>
        </div>
      </div>
    </div>
  );
};
