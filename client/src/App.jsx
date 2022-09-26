import { AuthProvider } from "./auth/auth-context";
import { AppRouter } from "./router/app-router";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </div>
  );
}

export default App;
