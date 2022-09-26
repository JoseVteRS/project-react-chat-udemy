import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ChatPage } from "../pages";
import { AuthRouter } from "./auth-router";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/*" element={<AuthRouter />} />
        <Route path="/" element={<ChatPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
