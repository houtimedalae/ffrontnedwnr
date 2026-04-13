import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../assets/ines.jpg";
import img2 from "../assets/1-2ab036d1.jpg";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const images = [img1, img2];
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
      scale: 0.95,
    }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (direction) => ({
      x: direction < 0 ? 200 : -200,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <section className="relative w-screen min-h-screen pt-28 md:pt-0 bg-gradient-to-r from-orange-600   to-orange-400 text-white overflow-hidden flex items-center">

      {/* Glow léger amélioré */}
      <div className="absolute w-72 h-72 bg-white/10 blur-3xl rounded-full top-10 left-10" />
      <div className="absolute w-96 h-96 bg-white/10 blur-3xl rounded-full bottom-10 right-10" />

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-6 items-center gap-10 h-full">
        
        {/* Texte */}
        <div className="md:col-span-4 flex flex-col justify-center space-y-6 text-left">

          {/* Petit badge */}
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-sm w-fit"
          >
            🎨 École d’art à Oran
          </motion.span>

          {/* TITRE (inchangé mais + depth) */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold drop-shadow-2xl leading-tight"
          >
            Libérez votre créativité
          </motion.h1>

          {/* TEXTE */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-base sm:text-lg md:text-2xl max-w-2xl text-orange-100"
          >
            Rejoignez notre école d’art et explorez un univers de couleurs,
            de formes et d’inspiration.
          </motion.p>

          {/* CTA */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 12px 30px rgba(255, 100, 50, 0.5)",
              
            }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 px-8 sm:px-10 py-3 sm:py-4 bg-white text-orange-600 font-bold rounded-full shadow-xl text-lg sm:text-xl transition"
           onClick={() => navigate("/NosCours")}
          >
            Insrivez-vous dés maintenant →
          </motion.button>

          {/* Petit texte confiance */}
          <p className="text-sm text-orange-100">
            +200 élèves nous font confiance
          </p>

        </div>

        {/* Image slider */}
        <div className="hidden md:flex md:col-span-2 justify-center items-center relative overflow-hidden h-full">
          
          <AnimatePresence custom={direction} mode="wait">
            <motion.img
              key={current}
              src={images[current]}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.8 }}
              alt="Créativité"
              className="w-2/3 max-w-sm rounded-3xl shadow-2xl absolute"
            />
          </AnimatePresence>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white text-xl opacity-70"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        ↓
      </motion.div>

    </section>
  );
}
