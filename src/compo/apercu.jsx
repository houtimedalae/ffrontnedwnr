import { motion } from "framer-motion";
import { Palette, UserPlus, PhoneCall } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Choisir un cours",
    desc: "Parcourez nos ateliers d’art et trouvez celui qui vous inspire.",
    icon: <Palette className="w-10 h-10 text-white" />,
  },
  {
    id: 2,
    title: "Inscrivez-vous",
    desc: "Remplissez le formulaire d’inscription en ligne en quelques clics.",
    icon: <UserPlus className="w-10 h-10 text-white" />,
  },
  {
    id: 3,
    title: "On vous contacte !",
    desc: "Notre équipe vous accompagne pour finaliser votre inscription.",
    icon: <PhoneCall className="w-10 h-10 text-white" />,
  },
];

export default function Apercu() {
  return (
    <section className="w-full bg-white min-h-[80vh] py-30">
      <div className="max-w-6xl mx-auto py-40 px-6 text-center">
        {/* Titre */}
        <motion.h2
          className="text-4xl font-extrabold mb-12 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: "spring", stiffness: 250 }}
        >
          Comment Ça Marche
        </motion.h2>

        {/* Étapes */}
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8">
          {/* Ligne animée (desktop) */}
          <motion.div
            className="hidden md:block absolute top-1/2 left-0 w-full border-t-4 border-orange-400 z-0 origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />

          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className="relative z-10 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.4,
                type: "spring",
                stiffness: 220,
                damping: 20,
              }}
            >
              {/* Cercle */}
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center shadow-xl bg-gradient-to-r from-orange-600 to-orange-400 text-white">
                {step.icon}
              </div>
              {/* Texte */}
              <h3 className="mt-5 text-lg font-bold text-orange-600">
                {step.title}
              </h3>
              <p className="mt-2 text-gray-500 max-w-xs">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
