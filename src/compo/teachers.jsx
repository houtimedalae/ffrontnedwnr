import { motion } from "framer-motion";
import prof1 from "../assets/profetchef/imgprof1.jpg";
import prof2 from "../assets/profetchef/imgprof2.jpg";
import prof3 from "../assets/profetchef/radjaa.jpg";
import prof4 from "../assets/profetchef/hichemramzi.jpg";

const teachers = [
  {
    img: prof1,
    name: "Alae HOUTI",
    skill: "Violon",
  },
  {
    img: prof2,
    name: "Karim BELBEDJAOUI",
    skill: "Andalous",
  },
    {
    img: prof3,
    name: "Radjaa Benatsmane",
    skill: "Stylisme",
  },
  {
    img: prof4,
    name: "hichem Ramzi",
    skill: "Dessin",
  },


];

export default function Teachers() {
  return (
    <section className="bg-orange-50 py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
          Nos Professeurs
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teachers.map((teacher, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-4 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <img
                src={teacher.img}
                alt={teacher.name}
                className="w-20 h-20 mx-auto rounded-full object-cover mb-3"
              />

              <h3 className="text-sm font-semibold text-gray-800">
                {teacher.name}
              </h3>

              <p className="text-orange-500 text-xs">
                {teacher.skill}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
