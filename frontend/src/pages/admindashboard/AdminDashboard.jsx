import React from "react";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading</div>;
  }
  if (!user) {
    navigate("/login");
  }
  return <div>AdminDashboard --- {user && user.name}</div>;
}
