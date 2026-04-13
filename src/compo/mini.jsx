import { motion } from "framer-motion";
import img1 from "../assets/1-2ab036d1.jpg";
import img2 from "../assets/1-2ab036d1.jpg";
import img3 from "../assets/1-2ab036d1.jpg";
import img4 from "../assets/1-2ab036d1.jpg";

export default function MiniGalerie() {
  const images = [img1, img2, img3, img4];

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Titre */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-4xl font-extrabold mb-12 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent"
        >
          Notre Galerie
        </motion.h2>

        {/* Galerie */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="overflow-hidden rounded-2xl shadow-lg group"
            >
              <img
                src={src}
                alt={`Oeuvre ${i + 1}`}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>

        {/* Bouton Voir plus */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="mt-10 px-8 py-3 bg-orange-500 text-white font-bold rounded-full shadow-md hover:bg-orange-600 transition"
        >
          Voir plus
        </motion.button>
      </div>
    </section>
  );
}
