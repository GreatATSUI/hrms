import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from 'jwt-decode';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    accessToken: null,
    refreshToken: null,
    user: null,
  });

  useEffect(() => {
    const savedAuth = JSON.parse(localStorage.getItem("auth"));
    if (savedAuth && savedAuth.accessToken) {
      setAuth(savedAuth);
    }
  }, []);

  const login = async (username, password) => {
    const response = await axios.post("http://localhost:8080/api/auth/login", { username, password });
    const { accessToken, refreshToken } = response.data;

    const user = jwtDecode(accessToken);
    setAuth({ accessToken, refreshToken, user });
    localStorage.setItem("auth", JSON.stringify({ accessToken, refreshToken, user }));
  };

  const refreshAccessToken = async () => {
    const response = await axios.post("/refresh", { token: auth.refreshToken });
    const { accessToken } = response.data;

    const user = jwtDecode(accessToken);
    setAuth((prevAuth) => ({
      ...prevAuth,
      accessToken,
      user,
    }));
    localStorage.setItem("auth", JSON.stringify({ ...auth, accessToken }));
  };

  const logout = () => {
    setAuth({ accessToken: null, refreshToken: null, user: null });
    localStorage.removeItem("auth");
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout, refreshAccessToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
