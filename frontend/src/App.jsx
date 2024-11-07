import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login/Login";
import AdminDashboard from "./pages/admindashboard/AdminDashboard";

export default function App() {
  return (
    <Routes>
      {/* Redirect from root ("/") to "/admin-dashboard" */}
      <Route path="/" element={<Navigate to="/admin-dashboard" replace />} />

      {/* Define the Login and AdminDashboard routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
    </Routes>
  );
}
