import { createContext, useCallback, useState } from "react";
import { fetchWithoutToken } from "../lib/utils/fetch";

export const AuthContext = createContext();

const inititalState = {
  uid: null,
  checking: true,
  logged: false,
  name: null,
  email: null,
};

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(inititalState);

  const login = async (email, password) => {
    const resp = await fetchWithoutToken("login", { email, password }, "POST");

    if (resp.ok) {
      localStorage.setItem("token", resp.token);

      const { usuario } = resp;

      setAuth({
        uid: usuario.uid,
        checking: false,
        logged: true,
        name: usuario.nombre,
        email: usuario.email,
      });
    }

    return resp.ok;
  };
  const register = (nombre, emai, password) => {
    console.log(nombre, emai, password);
  };
  const logout = () => {};

  const verifyToken = useCallback(() => {}, []);

  return (
    <AuthContext.Provider
      value={{
        auth,
        login,
        register,
        logout,
        verifyToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
