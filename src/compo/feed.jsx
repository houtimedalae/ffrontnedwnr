import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import img from '../assets/capturecom2.jpeg'
import i1mg from '../assets/capturecom3.jpeg'
import img2 from '../assets/capturecom4.jpeg'
import im3g from '../assets/capturecommentaire.jpeg'
import img4 from '../assets/capturecom5.jpeg'
import img5 from '../assets/capturecom6.jpeg'
import img6 from '../assets/capturecom7.jpeg'

const feedbackScreens = [
  img,
  i1mg,
  img2,
  im3g,
  img4,
  img5,
  img6
];

export default function FeedbackSlider() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(1);

  // ✅ responsive dynamique
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setVisible(3);
      else if (window.innerWidth >= 640) setVisible(2);
      else setVisible(1);
    };

    handleResize(); // initial
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % feedbackScreens.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const slides = feedbackScreens.slice(index, index + visible);

  if (slides.length < visible) {
    slides.push(...feedbackScreens.slice(0, visible - slides.length));
  }

  return (
    <section className=" py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">

        {/* titre */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
          Avis de nos élèves
        </h2>

        {/* slider */}
        <div className="flex justify-center gap-4 sm:gap-6">
          {slides.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-3 sm:p-4 shadow-lg 
              w-full max-w-xs sm:max-w-sm lg:max-w-md
              hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <div className="overflow-hidden rounded-xl">
                <img
                  src={src}
                  alt={`Feedback ${i + 1}`}
                  className="w-full h-auto object-contain mx-auto transition-transform duration-300 hover:scale-110"
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
