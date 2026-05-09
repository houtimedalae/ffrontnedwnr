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
    <div className="fixed left-0 top-0 h-screen w-60 bg-white border-r shadow-sm p-6 flex flex-col gap-6">

      <h1 className="text-2xl font-bold text-orange-500">
        Admin Panel
      </h1>

      <div className="flex flex-col gap-2 mt-4">

        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              `px-3 py-2 rounded-lg text-sm font-medium transition ${
                isActive
                  ? "bg-orange-100 text-orange-600"
                  : "text-gray-600 hover:bg-gray-100"
              }`
            }
          >
            <motion.div whileHover={{ x: 4 }}>
              {link.name}
            </motion.div>
          </NavLink>
        ))}

      </div>

    </div>
  );
}