import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "@components/LoginPage";
import SignUpPage from "@components/SignUpPage";
import MainPage from "@components/MainPage";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Verifica se existe um token de usuário ao carregar o aplicativo
    const userToken = localStorage.getItem("userToken");
    setIsAuthenticated(!!userToken);
  }, []);

  const handleLogin = (token) => {
    // Função para fazer login e atualizar o estado de autenticação
    localStorage.setItem("userToken", token);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userName");
    setIsAuthenticated(false);
  };

  /*const handleLogout = () => {
    // Função para fazer logout e limpar o estado de autenticação
    localStorage.removeItem("userToken");
    setIsAuthenticated(false);
  };
*/

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Navigate replace to={isAuthenticated ? "/main" : "/login"} />
          }
        />
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/main" element={<MainPage onLogout={handleLogout} />} />
      </Routes>
    </Router>
  );
};

export default App;
