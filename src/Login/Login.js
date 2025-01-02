import React, { useState, useContext } from "react";
import "./Login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const validUsers = [
    { username: "admin", password: "1234" },
    { username: "abcd", password: "pass" },
  ];

  const handleLogin = () => {
    const isValidUser = validUsers.some(
      (user) => user.username === username && user.password === password
    );

    if (isValidUser) {
      setError(false);
      login(username);
      toast.success(`Welcome ${username}!`, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/");
    } else {
      setError(true);
    }
  };

  return (
    <div>
      <div className="login-container">
        <NavBar />
        <div className="login-form">
          <h2 className="text-center mb-4">Login</h2>
          <form>
            <div className="form-group">
              <input
                type="text"
                className={`form-control ${error ? "is-invalid" : ""}`}
                placeholder="Username or Email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                data-testid="username"
                style={{ backgroundColor: "#f5f5f5", borderColor: "#ccc" }}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className={`form-control ${error ? "is-invalid" : ""}`}
                placeholder="Password"
                value={password}
                data-testid="password"
                onChange={(e) => setPassword(e.target.value)}
                style={{ backgroundColor: "#f5f5f5", borderColor: "#ccc" }}
              />
            </div>
            {error && (
              <small className="text-danger mb-3">
                Wrong login credentials. Please try again.
              </small>
            )}
            <button
              type="button"
              className="btn btn-primary btn-block btn-lg"
              data-testid="login-button"
              onClick={handleLogin}
            >
              Login
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
