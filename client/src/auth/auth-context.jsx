import { createContext, useCallback, useState } from "react";
import { fetchWithoutToken, fetchWithToken } from "../lib/utils/fetch";

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

  const register = async (nombre, email, password) => {
    const resp = await fetchWithoutToken(
      "login/new",
      { email, password, nombre },
      "POST"
    );

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
  const logout = () => {
    localStorage.removeItem("token");
    setAuth({
      checking: false,
      logged: false,
    });
  };

  const verifyToken = useCallback(async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      setAuth({
        uid: null,
        checking: false,
        logged: false,
        name: null,
        email: null,
      });
      return false;
    }

    const resp = await fetchWithToken("login/renew");

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
      return true;
    } else {
      setAuth({
        uid: null,
        checking: false,
        logged: false,
        name: null,
        email: null,
      });
      return false;
    }
  }, []);

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
