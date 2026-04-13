// src/Dashboard/Sidebar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function Sidebar() {
  const links = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Cours", path: "/dashboard/cours" },
    { name: "Événements", path: "/dashboard/events" },
    { name: "Préinscriptions", path: "/dashboard/preinscriptions" },
  ];

  return (
    <div className="w-60 h-screen bg-white shadow-lg p-6 flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-orange-600">Admin Panel</h1>

      {links.map((link) => (
        <NavLink
          key={link.name}
          to={link.path}
          className={({ isActive }) =>
            `p-3 rounded-lg font-semibold text-lg hover:bg-orange-100 ${
              isActive ? "bg-orange-200 text-orange-700" : "text-gray-700"
            }`
          }
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.1 }}
          >
            {link.name}
          </motion.div>
        </NavLink>
      ))}
    </div>
  );
}
