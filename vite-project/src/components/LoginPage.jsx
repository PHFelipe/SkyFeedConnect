import "@style/LoginPage.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // Estado para controle de envio

  const handleForgotPassword = () => {
    console.log("Forgot Password Clicked");
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await axios.post("http://localhost:8080/auth/login", {
        username,
        password,
      });

      const { token } = response.data;
      localStorage.setItem("userToken", token);

      await axios.post("http://localhost:3333/newUser", {
        username,
      });

      navigate("/main");
    } catch (error) {
      setError("Erro ao fazer login. Verifique suas credenciais!");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  return (
    <div className="auth-container sign-in-container">
      <h1 className="title-sign">Sign In</h1>
      <p className="subtitle">Welcome to Sky Feed Connect!</p>
      <form onSubmit={handleSignIn} className="sign-in-form">
        <input
          type="email"
          placeholder="Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="sign-in-button"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Signing In..." : "Sign In"}
        </button>
        <button
          type="button"
          onClick={handleForgotPassword}
          className="forgot-password-link"
        >
          Forgot Password?
        </button>
      </form>
      {error && (
        <p className="error-message" style={{ color: "red" }}>
          {error}
        </p>
      )}
      <p className="sign-in-redirect">
        Not a Member yet?{" "}
        <span className="sign-up-link" onClick={handleSignUpClick}>
          Sign up
        </span>
      </p>
    </div>
  );
};

export default LoginPage;
