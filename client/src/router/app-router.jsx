import { useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "../auth/auth-context";
import { ChatPage } from "../pages/chat-page";
import { AuthRouter } from "./auth-router";
import { PrivateRoutes } from "./private-routes";
import { PublicRoutes } from "./public-routes";

export const AppRouter = () => {
  const { auth, verifyToken } = useContext(AuthContext);

  console.log(auth);

  useEffect(() => {
    verifyToken();
  }, [verifyToken]);

  if (auth.checking) {
    return <>Espere por favor</>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoutes isAuthenticated={auth.logged}>
              <ChatPage />
            </PublicRoutes>
          }
        />
        <Route
          path="/auth/*"
          element={
            <PrivateRoutes isAuthenticated={auth.logged}>
              <AuthRouter />
            </PrivateRoutes>
          }
        />

        <Route path="*" element={<ChatPage />} />
      </Routes>
    </BrowserRouter>
  );
};
