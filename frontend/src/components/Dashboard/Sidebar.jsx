// src/components/Dashboard/Sidebar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import {
  User as UserIcon,
  Building as BuildingIcon,
  Calendar as CalendarIcon,
  DollarSign as DollarSignIcon,
  Settings as SettingsIcon,
  LogOut as LogOutIcon,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-blue-500 text-white flex flex-col p-4 h-screen justify-between">
      {/* Dashboard Title */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Employee Ms</h2>

        {/* Navigation Links */}
        <nav className="space-y-2">
          <NavLink
            to="/admin-dashboard"
            className="flex items-center px-4 bg-slate-950 py-2"
          >
            <UserIcon className="mr-3" />
            Dashboard
          </NavLink>
          <NavLink
            to="/admin-dashboard/employees"
            className={({ isActive }) =>
              `flex items-center py-2 px-4 rounded ${
                isActive ? "bg-blue-600" : "hover:bg-blue-600"
              }`
            }
          >
            <UserIcon className="mr-3" />
            Employees
          </NavLink>
          <NavLink
            to="/admin-dashboard/department"
            className={({ isActive }) =>
              `flex items-center py-2 px-4 rounded ${
                isActive ? "bg-blue-600" : "hover:bg-blue-600"
              }`
            }
          >
            <BuildingIcon className="mr-3" />
            Department
          </NavLink>
          <NavLink
            to="/admin-dashboard/leave"
            className={({ isActive }) =>
              `flex items-center py-2 px-4 rounded ${
                isActive ? "bg-blue-600" : "hover:bg-blue-600"
              }`
            }
          >
            <CalendarIcon className="mr-3" />
            Leave
          </NavLink>
          <NavLink
            to="/admin-dashboard/salary"
            className={({ isActive }) =>
              `flex items-center py-2 px-4 rounded ${
                isActive ? "bg-blue-600" : "hover:bg-blue-600"
              }`
            }
          >
            <DollarSignIcon className="mr-3" />
            Salary
          </NavLink>
        </nav>
      </div>

      {/* Settings and Logout Links */}
      <div className="space-y-2">
        <NavLink
          to="/admin-dashboard/settings"
          className={({ isActive }) =>
            `flex items-center py-2 px-4 rounded ${
              isActive ? "bg-blue-600" : "hover:bg-blue-600"
            }`
          }
        >
          <SettingsIcon className="mr-3" />
          Settings
        </NavLink>
        <button
          onClick={() => {
            // Add logout functionality here
            console.log("Logging out...");
          }}
          className="flex items-center py-2 px-4 hover:bg-blue-600 rounded w-full"
        >
          <LogOutIcon className="mr-3" />
          Logout
        </button>
      </div>
    </aside>
  );
}
