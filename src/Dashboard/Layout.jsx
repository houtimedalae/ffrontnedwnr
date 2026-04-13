// src/Dashboard/Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar fixe */}
      <Sidebar />

      {/* Contenu principal du dashboard */}
      <main className="flex-1 p-6 overflow-auto">
        <Outlet /> {/* Ici s’affichent les pages enfants : DashboardHome, CoursManagement, etc. */}
      </main>
    </div>
  );
}
