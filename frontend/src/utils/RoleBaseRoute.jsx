import React from "react";
import { useAuth } from "../context/authContext";
import { Navigate } from "react-router-dom";

export default function RoleBaseRoute({ children, requiredRole }) {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (user && !requiredRole.includes(user.role)) {
    return <Navigate to="/unauthorized" />;
  }

  return user ? children : <Navigate to="/login" />;
}
