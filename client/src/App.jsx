import { AuthProvider } from "./auth/auth-context";
import { ChatProvider } from "./context/chat/chat-context";
import { SocketProvider } from "./context/socket-context";
import { AppRouter } from "./router/app-router";

function App() {
  return (
    <div className="App">
      <ChatProvider>
        <AuthProvider>
          <SocketProvider>
            <AppRouter />
          </SocketProvider>
        </AuthProvider>
      </ChatProvider>
    </div>
  );
}

export default App;
