import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login/Login";
import DashboardLayout from "./components/Dashboard/DashboardLayout";

import PrivateRoute from "./utils/PrivateRoute";
import RoleBaseRoute from "./utils/RoleBaseRoute";
import Employees from "./pages/employees/Employees";
import Leave from "./pages/leave/Leave";
import Salary from "./pages/salary/Salary";
import Settings from "./pages/settings/Settings";
import AdminDashboard from "./pages/admindashboard/AdminDashboard";
import DepartmentsTable from "./pages/department/Department";
import AddDepartment from "./pages/department/AddDepartment";

export default function App() {
  return (
    <Routes>
      {/* Redirect root ("/") to "/admin-dashboard" */}
      <Route path="/" element={<Navigate to="/admin-dashboard" replace />} />

      {/* Login route */}
      <Route path="/login" element={<Login />} />

      {/* Admin Dashboard with role-based access */}
      <Route
        path="/admin-dashboard"
        element={
          <PrivateRoute>
            <RoleBaseRoute requiredRole={["admin"]}>
              <DashboardLayout />
            </RoleBaseRoute>
          </PrivateRoute>
        }
      >
        {/* Nested routes for dashboard sections */}
        <Route index element={<AdminDashboard />} />
        <Route path="employees" element={<Employees />} />
        <Route path="department" element={<DepartmentsTable />} />
        <Route path="add-department" element={<AddDepartment />} />
        <Route path="leave" element={<Leave />} />
        <Route path="salary" element={<Salary />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}
