import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <div className="bg-gray-50">

      {/* SIDEBAR FIXE */}
      <Sidebar />

      {/* CONTENU AVEC MARGE */}
      <main className="ml-60 min-h-screen p-6 overflow-y-auto">

        <Outlet />

      </main>

    </div>
  );
}