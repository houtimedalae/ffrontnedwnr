import { motion } from "framer-motion";
import salle from "../assets/sallemusique.jpeg";
import profs from "../assets/coursphoto.jpeg";
import prix from "../assets/tarifs.jpeg";
import emplacement from "../assets/profetchef/imgprof2.jpg";
import events from "../assets/fillesviolon.jpeg";

const features = [
  {
    img: salle,
    title: "Des salles modernes et spacieuses",
    desc: "Nos espaces sont conçus pour offrir un confort optimal avec tout le matériel nécessaire pour apprendre dans les meilleures conditions.",
  },
  {
    img: profs,
    title: "Des professeurs passionnés",
    desc: "Une équipe expérimentée et engagée qui accompagne chaque élève dans son évolution artistique.",
  },
  {
    img: prix,
    title: "Des tarifs accessibles",
    desc: "Nous proposons des prix adaptés pour permettre à chacun d’accéder à une formation artistique de qualité.",
  },
  {
    img: emplacement,
    title: "Un emplacement idéal",
    desc: "Située dans un endroit accessible, notre école est facile d’accès pour tous les élèves.",
  },
  {
    img: events,
    title: "Des événements réguliers",
    desc: "Ateliers, spectacles et activités artistiques pour vivre pleinement l’expérience de l’école.",
  },
];

export default function Pourquoi() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Titre */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-14 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent"
        >
          Pourquoi Nous Choisir ?
        </motion.h2>

        <div className="space-y-16 sm:space-y-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center gap-6 sm:gap-10 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >

              {/* IMAGE */}
              <div className="w-full md:w-1/2">
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="w-full h-52 sm:h-64 md:h-80 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* TEXTE */}
              <div className="w-full md:w-1/2 text-center md:text-left px-2">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-500 mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-md mx-auto md:mx-0">
                  {feature.desc}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
