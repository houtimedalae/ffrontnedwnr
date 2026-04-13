import { motion } from "framer-motion";
import chef1 from "../assets/profetchef/imgchef1.jpg";
import chef2 from "../assets/profetchef/imgchef2.jpg";
import chef3 from "../assets/profetchef/imgchef3.jpg";

const leaders = [
  {
    img: chef1,
    name: "Yacine BENGHLLAM",
    role: "Directeur artistique",
    desc: "Ancien professionnel du théâtre, Yacine est spécialisé dans les relations humaines et le recrutement. Il joue un rôle clé dans la gestion des talents et le développement d’une équipe pédagogique de qualité, tout en assurant une forte proximité avec les élèves et les professeurs."
  },
  {
    img: chef2,
    name: "Hichem BOUREGBA",
    role: "Responsable FINANCE",
    desc: "Titulaire d’un master en commerce et management, Hichem est un ancien photographe et vidéaste. Il gère l’ensemble des finances et de la budgétisation de l’école, tout en contribuant activement aux stratégies marketing et au développement du projet."
  },
  {
    img: chef3,
    name: "Mehdi KETTAF",
    role: "Coordinateur",
    desc: "Mehdi est en charge de la coordination avec les professeurs et du bon déroulement des activités. Force de proposition, il apporte des idées innovantes et participe activement à l’organisation des événements de l’école."
  },
];

export default function TeamLeaders() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* TITRE */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
          Nos Cofondateurs
        </h2>

        {/* STORYTELLING */}
        <p className="text-gray-700 text-base md:text-lg max-w-3xl mx-auto mb-16 leading-relaxed text-center italic">
          Tout a commencé par une idée simple entre trois cousins passionnés par l’art et la transmission du savoir. 
          À l’origine, il ne s’agissait que d’un petit cours de dessin lancé avec peu de moyens mais beaucoup d’ambition. 
          Rapidement, l’intérêt des élèves et l’engouement autour du projet ont permis de créer une école complète, 
          réunissant plusieurs disciplines artistiques et une équipe pédagogique talentueuse.
        </p>

        {/* COFONDATEURS */}
        <div className="space-y-16">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >

              {/* IMAGE */}
              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  src={leader.img}
                  alt={leader.name}
                  className="w-56 h-56 object-cover rounded-2xl shadow-lg"
                />
              </div>

              {/* TEXTE */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {leader.name}
                </h3>

                <p className="text-orange-500 font-semibold mb-4">
                  {leader.role}
                </p>

                <p className="text-gray-600 leading-relaxed">
                  {leader.desc}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
