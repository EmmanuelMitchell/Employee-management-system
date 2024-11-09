import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-4">
          <Outlet /> {/* Render the specific page component here */}
        </main>
        <Footer />
      </div>
    </div>
  );
}
