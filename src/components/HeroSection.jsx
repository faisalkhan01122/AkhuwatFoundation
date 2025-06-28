"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaArrowRight,
  FaPlay,
  FaGlobeAsia,
  FaUniversity,
  FaHeartbeat,
  FaUserFriends,
} from "react-icons/fa";

const slides = [
  {
    id: 1,
    headline: "Zero-Interest Loans for All",
    text: "Empowering millions through ethical and interest-free microfinance solutions.",
    image: "/akhuwatfoundationbusinessloan3.jpg",
    features: [
      { icon: FaUserFriends, label: "4.5M+ Beneficiaries" },
      { icon: FaUniversity, label: "850+ Branches" },
    ],
    theme: "from-green-400 to-emerald-600",
  },
  {
    id: 2,
    headline: "Business Support with Values",
    text: "Sharia-compliant loans that fuel enterprise while honoring tradition.",
    image: "/akhuwatfoundationbusinessloan.jpg",
    features: [
      { icon: FaGlobeAsia, label: "2.3M+ Businesses Funded" },
      { icon: FaHeartbeat, label: "96% Success Rate" },
    ],
    theme: "from-blue-500 to-indigo-700",
  },
  {
    id: 3,
    headline: "Education Without Limits",
    text: "Funding future leaders through scholarships and learning support.",
    image: "/What-is-Education-Loan-1-1.png",
    features: [
      { icon: FaUniversity, label: "300+ Institutes" },
      { icon: FaUserFriends, label: "750K+ Students Helped" },
    ],
    theme: "from-purple-500 to-pink-600",
  },
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const current = slides[index];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);
  const [showModal, setShowModal] = useState(false);
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={current.image}
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/40" />
          <div className={`absolute inset-0 bg-gradient-to-r ${current.theme} opacity-30 mix-blend-multiply`} />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-28 flex flex-col md:flex-row items-center justify-between gap-16">
        <motion.div
          className="text-white md:w-1/2"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            {current.headline}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-6">
            {current.text}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {current.features.map((f, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white/10 backdrop-blur px-5 py-3 rounded-xl"
              >
                <f.icon className="text-white w-5 h-5" />
                <span className="text-sm text-white font-medium">{f.label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <a
             href="https://wa.me/923281969250"
  target="_blank"
  rel="noopener noreferrer"
              className="bg-white text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              Apply Now
            </a>
             {/* Button */}
    {/* Button */}
      <button
        onClick={() => setShowModal(true)}
        className="flex items-center gap-2 text-white border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition"
      >
        <FaPlay /> Watch Story
      </button>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-3xl mx-4 sm:mx-auto p-4 bg-black rounded-lg shadow-xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-3 right-4 text-white text-3xl font-bold"
              >
                &times;
              </button>

              {/* Responsive YouTube Embed */}
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  className="w-full h-96 rounded-lg"
                  src="https://www.youtube.com/embed/CkNYmST2olo"
                  title="Story Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
          </div>
        </motion.div>

        <motion.div
          className="md:w-1/2"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="bg-white/10 border border-white/20 backdrop-blur-xl rounded-2xl p-6 space-y-4">
            <h2 className="text-white text-2xl font-bold text-center">Why Choose Akhuwat?</h2>
            <ul className="text-white/90 space-y-2 text-sm">
              <li>✔ 100% Interest-Free Loans</li>
              <li>✔ National Presence Across Pakistan</li>
              <li>✔ Transparent, Shariah-Compliant Process</li>
              <li>✔ Trusted by 4.5 Million+ People</li>
            </ul>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === i ? "bg-white" : "bg-white/50 hover:bg-white/70"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;