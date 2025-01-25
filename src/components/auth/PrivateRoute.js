import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const PrivateRoute = ({ component: Component }) => {
  const { auth } = useContext(AuthContext);

  // Redirect to login if not authenticated
  if (!auth?.accessToken) {
    return <Navigate to="/login" replace />;
  }

  return <Component />;
};

export default PrivateRoute;
