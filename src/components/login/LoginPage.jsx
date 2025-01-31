import { useState, useContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";

const AuthCard = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await login(username, password);
      console.log("Login successful!");
      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed", error);
      alert("Invalid credentials");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="card" style={{ width: "22rem" }}>
      <div className="card-body">
        <h2 className="card-title mb-4">
          {isLogin ? "Sign in" : "Create an account"}
        </h2>
        <p className="card-text mb-4">
          {isLogin
            ? "Enter your credentials to sign in"
            : "Enter your information to create an account"}
        </p>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="form-control"
                placeholder="John Doe"
                required
              />
            </div>
          )}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="form-control"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span
                  className="spinner-border spinner-border-sm me-2"
                  role="status"
                  aria-hidden="true"
                ></span>
                Processing...
              </>
            ) : isLogin ? (
              "Sign in"
            ) : (
              "Create account"
            )}
          </button>
        </form>
        <hr className="my-4" />
        <div className="d-grid gap-2">
          <button className="btn btn-outline-secondary">
            <i className="bi bi-github me-2"></i> Sign in with GitHub
          </button>
          <button className="btn btn-outline-secondary">
            <i className="bi bi-google me-2"></i> Sign in with Google
          </button>
        </div>
        <div className="text-center mt-3">
          <button onClick={() => setIsLogin(!isLogin)} className="btn btn-link">
            {isLogin
              ? "Don't have an account? Sign up"
              : "Already have an account? Sign in"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthCard;
