import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Home from "../pages/Home";

function PrivateRoute() {
  const { currentUser } = useAuth();

  return currentUser ? <Home /> : <Navigate to="/login" replace />;
}

export default PrivateRoute;
