// components/Admin/ProtectedRoute.js
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const authToken = sessionStorage.getItem("authToken");

  if (!authToken) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
