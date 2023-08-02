import AppRouter from "./router/AppRouter";
import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import { YosProvider } from "./context/Context";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <YosProvider>
          <AppRouter />
        </YosProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
