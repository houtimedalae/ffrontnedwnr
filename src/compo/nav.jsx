import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logownr from "../assets/images-removebg-preview.png";

export default function Nav({ isAdmin }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const handleAuthClick = () => {
    if (isAdmin) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  };

  const menuItems = ["Acceuil", "NosCours", "A propos"];

  return (
    <>
      {/* NAVBAR PRINCIPALE */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-5 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-6 py-3 w-[90%] max-w-6xl"
        style={{
          background: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(12px)",
          borderRadius: "999px",
          border: "1px solid rgba(234,88,12,0.15)",
          boxShadow: "0 8px 32px rgba(234,88,12,0.12)",
        }}
      >
        {/* Logo */}
        <motion.img
          src={logownr}
          alt="Logo"
          className="w-12 h-12 rounded-full border-2 border-orange-500 shadow"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          whileHover={{ scale: 1.08, rotate: -4 }}
        />

        {/* Menu Desktop */}
        <nav className="hidden md:flex flex-1 justify-center space-x-10">
          {menuItems.map((item) => (
            <motion.div
              key={item}
              whileHover={{ y: -1 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Link
                to={item === "Acceuil" ? "/" : `/${item.toLowerCase()}`}
                className="relative text-base font-bold group"
                style={{ color: "#f3671cfb" }}
              >
                {item}
                <span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 rounded-full"
                  style={{ background: "linear-gradient(to right, #ea580c, #fb923c)" }}
                />
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Bouton Sign In / Dashboard */}
        <motion.button
          onClick={handleAuthClick}
          className="hidden md:block px-6 py-2.5 text-white font-bold text-sm rounded-full shadow-lg"
          style={{
            background: "linear-gradient(to right, #ea580c, #fb923c)",
            boxShadow: "0 4px 20px rgba(234,88,12,0.35)",
          }}
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.15 }}
          whileHover={{ scale: 1.05, boxShadow: "0 8px 28px rgba(234,88,12,0.45)" }}
          whileTap={{ scale: 0.96 }}
        >
          {isAdmin ? "Dashboard" : "Sign In"}
        </motion.button>

        {/* Hamburger Mobile */}
        <motion.button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          whileTap={{ scale: 0.9 }}
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 rounded-full"
            style={{ background: "#ea580c" }}
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-0.5 rounded-full"
            style={{ background: "#ea580c" }}
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 rounded-full"
            style={{ background: "#ea580c" }}
          />
        </motion.button>
      </motion.div>

      {/* MENU MOBILE */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-0 left-0 w-full h-screen z-40 md:hidden flex flex-col items-center justify-center space-y-8"
            style={{ background: "linear-gradient(135deg, #ea580c 0%, #fb923c 100%)" }}
          >
            {/* Motif de points */}
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />

            {menuItems.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 + 0.1 }}
              >
                <Link
                  to={item === "Acceuil" ? "/" : `/${item.toLowerCase()}`}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl font-extrabold text-white"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {item}
                </Link>
              </motion.div>
            ))}

            <motion.button
              onClick={() => { handleAuthClick(); setMobileOpen(false); }}
              className="px-8 py-3 rounded-full font-bold text-base"
              style={{
                background: "white",
                color: "#ea580c",
                boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
            >
              {isAdmin ? "Dashboard" : "Sign In"}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
