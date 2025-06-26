"use client"

import { motion } from "framer-motion"
import { FaHeart, FaGraduationCap, FaHome, FaHandsHelping, FaLaptop, FaMedkit } from "react-icons/fa"

const causes = [
  {
    id: 1,
    title: "Interest-Free Microfinance",
    category: "Microfinance",
    description:
      "Akhuwat believes in charity backed by compassion, sense of responsibility towards the underprivileged and a bond of brotherhood between the haves and have-nots.",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=300&fit=crop",
    icon: <FaHandsHelping />,
    color: "from-green-500 to-emerald-600",
    raised: "₨2.5M",
    goal: "₨5M",
  },
  {
    id: 2,
    title: "Fee-Free Education",
    category: "Education",
    description:
      "We acknowledge that eradicating poverty requires addressing illiteracy among the underprivileged. Akhuwat is committed to providing education opportunities.",
    image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=300&fit=crop",
    icon: <FaGraduationCap />,
    color: "from-blue-500 to-indigo-600",
    raised: "₨1.8M",
    goal: "₨3M",
  },
  {
    id: 3,
    title: "Mushahhida School",
    category: "Education",
    description:
      "An ideal has taken the initiative of setting 2.5 million girls to complete the Mushahhida School. The school has become a world-class, hospitality education.",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=300&fit=crop",
    icon: <FaGraduationCap />,
    color: "from-purple-500 to-pink-600",
    raised: "₨3.2M",
    goal: "₨4M",
  },
  {
    id: 4,
    title: "Clothes Distribution Drive",
    category: "Welfare",
    description:
      "Akhuwat's Clothes Bank provides is dignified service for the needy to receive clothes with honor and care. Donors contribute pre-loved clothes.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=300&fit=crop",
    icon: <FaHeart />,
    color: "from-orange-500 to-red-600",
    raised: "₨900K",
    goal: "₨1.5M",
  },
  {
    id: 5,
    title: "IT & Vocational Education",
    category: "Education",
    description:
      "By providing accessible and quality education, Akhuwat opens doors to new opportunities and empowers our youth to build fulfilling futures.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
    icon: <FaLaptop />,
    color: "from-teal-500 to-cyan-600",
    raised: "₨2.1M",
    goal: "₨3.5M",
  },
  {
    id: 6,
    title: "Health Services",
    category: "Healthcare",
    description:
      "Akhuwat is dedicated to providing accessible and high-quality healthcare to underserved communities through specialized medical services.",
    image: "https://www.citysearch.pk/UF/Companies/11460/heath-care-services.jpg",
    icon: <FaMedkit />,
    color: "from-red-500 to-pink-600",
    raised: "₨1.5M",
    goal: "₨2.5M",
  },
  {
    id: 7,
    title: "Housing Scheme",
    category: "Housing",
    description:
      "Providing affordable housing solutions to help families build their dream homes with dignity and financial support.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop",
    icon: <FaHome />,
    color: "from-indigo-500 to-purple-600",
    raised: "₨4.2M",
    goal: "₨6M",
  },
  {
    id: 8,
    title: "Emergency Relief",
    category: "Emergency",
    description:
      "Rapid response support for communities affected by natural disasters and emergencies across Pakistan.",
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=400&h=300&fit=crop",
    icon: <FaHandsHelping />,
    color: "from-yellow-500 to-orange-600",
    raised: "₨800K",
    goal: "₨2M",
  },
  {
    id: 9,
    title: "Women Empowerment",
    category: "Empowerment",
    description:
      "Supporting women entrepreneurs and providing them with the tools and resources needed to succeed in business.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop",
    icon: <FaHeart />,
    color: "from-pink-500 to-rose-600",
    raised: "₨1.2M",
    goal: "₨2M",
  },
]

const FeaturedCausesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-green-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 bg-green-400 rounded-full animate-float"></div>
        <div className="absolute bottom-32 right-20 w-32 h-32 bg-blue-400 rounded-full animate-float-reverse"></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-purple-400 rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="text-green-600 font-semibold text-lg mb-2 block"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Akhuwat USA Featured Causes
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            You can make a <span className="gradient-text">huge difference</span>
            <br />
            <span className="text-3xl md:text-4xl">by donating just a little</span>
          </motion.h2>
        </motion.div>

        {/* Causes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {causes.map((cause, index) => (
            <motion.div
              key={cause.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-48">
                <motion.img
                  src={cause.image}
                  alt={cause.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Category Badge */}
                <div
                  className={`absolute top-4 left-4 px-3 py-1 rounded-full text-white text-sm font-semibold bg-gradient-to-r ${cause.color}`}
                >
                  {cause.category}
                </div>

                {/* Icon Overlay */}
                <motion.div
                  className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-r ${cause.color} rounded-full flex items-center justify-center text-white text-xl transform translate-x-16 group-hover:translate-x-0 transition-transform duration-500`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {cause.icon}
                </motion.div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <motion.h3
                  className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  {cause.title}
                </motion.h3>

                <p className="text-gray-600 mb-4 leading-relaxed text-sm">{cause.description}</p>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Raised: {cause.raised}</span>
                    <span>Goal: {cause.goal}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      className={`h-2 rounded-full bg-gradient-to-r ${cause.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${Math.random() * 40 + 40}%` }}
                      transition={{ duration: 1.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                </div>

                {/* Donate Button */}
                <motion.button
                  className={`w-full py-3 rounded-xl text-white font-semibold bg-gradient-to-r ${cause.color} hover:shadow-lg transition-all duration-300 btn-animate`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Donate Now ❤️
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white px-10 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-semibold animate-pulse-glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Causes
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedCausesSection
