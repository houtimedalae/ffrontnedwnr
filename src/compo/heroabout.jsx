import { motion } from "framer-motion";

export default function HeroAbout() {
  return (
    <section className="bg-orange-50 min-h-[80vh] flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center">

        {/* Titre */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent"
        >
          À propos de notre école
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed"
        >
          Notre école d’art à Oran est dédiée à la créativité, à l’apprentissage
          et au développement des talents. Nous proposons des cours de musique,
          dessin, théâtre et bien plus encore pour tous les âges et niveaux.
        </motion.p>

        {/* Ligne décorative */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "120px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="h-1 bg-orange-500 mx-auto mt-8 rounded-full"
        ></motion.div>

      </div>
    </section>
  );
}
