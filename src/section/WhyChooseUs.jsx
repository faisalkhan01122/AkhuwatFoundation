"use client"

import { motion } from "framer-motion"
import { FaShieldAlt, FaHandHoldingHeart , FaClock, FaUsers, FaGlobe, FaCheckCircle, FaAward, FaHeart } from "react-icons/fa"

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: FaShieldAlt,
      title: "100% Sharia Compliant",
      description:
        "All our financial products are designed according to Islamic principles with zero interest (Riba-free).",
      color: "from-emerald-500 to-teal-600",
      stats: "15+ Years",
    },
    {
      icon: FaHandHoldingHeart ,
      title: "Community-Centered Approach",
      description: "We believe in building communities through mutual support and brotherhood, not just lending money.",
      color: "from-blue-500 to-indigo-600",
      stats: "4.2M+ Lives",
    },
    {
      icon: FaClock,
      title: "Quick & Easy Process",
      description: "Simple application process with quick approval and disbursement within 7 working days.",
      color: "from-purple-500 to-pink-600",
      stats: "7 Days",
    },
    {
      icon: FaUsers,
      title: "No Collateral Required",
      description:
        "Trust-based lending system where community verification replaces traditional collateral requirements.",
      color: "from-orange-500 to-red-600",
      stats: "Trust Based",
    },
    {
      icon: FaGlobe,
      title: "Nationwide Coverage",
      description: "With 800+ branches across Pakistan, we're always close to serve your financial needs.",
      color: "from-green-500 to-emerald-600",
      stats: "800+ Branches",
    },
    {
      icon: FaAward,
      title: "Proven Track Record",
      description: "Pakistan's largest and most trusted microfinance institution with millions of success stories.",
      color: "from-cyan-500 to-blue-600",
      stats: "2M+ Businesses",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-emerald-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 bg-emerald-400 rounded-full animate-pulse blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-400 rounded-full animate-ping blur-xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-purple-400 rounded-full animate-bounce blur-lg"></div>
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
          <motion.div
            className="flex items-center justify-center gap-3 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full flex items-center justify-center">
              <FaHeart className="text-white text-xl" />
            </div>
            <span className="text-emerald-600 font-bold text-lg">Why Choose Akhuwat Network</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Pakistan's Most{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Trusted</span>{" "}
            Microfinance
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            For over 15 years, Akhuwat Network has been transforming lives through ethical, interest-free financial
            solutions. Here's why millions trust us with their dreams.
          </motion.p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-emerald-200 relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              ></div>

              {/* Stats Badge */}
              <div className="absolute top-4 right-4 bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold">
                {reason.stats}
              </div>

              {/* Icon */}
              <motion.div
                className={`w-16 h-16 bg-gradient-to-r ${reason.color} rounded-2xl flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <reason.icon />
              </motion.div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                {reason.title}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">{reason.description}</p>

              {/* Check Icon */}
              <div className="flex items-center gap-2 text-emerald-600">
                <FaCheckCircle className="w-5 h-5" />
                <span className="font-semibold text-sm">Verified & Trusted</span>
              </div>

              {/* Hover Effect */}
              <div
                className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${reason.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full translate-y-24 -translate-x-24"></div>
          </div>

          <div className="relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div>
                <motion.h3
                  className="text-3xl md:text-4xl font-bold mb-6"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  Join the Akhuwat Family Today
                </motion.h3>

                <motion.p
                  className="text-emerald-100 text-lg mb-8 leading-relaxed"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  Experience the difference of ethical banking. Join millions of Pakistanis who have transformed their
                  lives through our interest-free financial solutions.
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <motion.a
                    href="https://wa.me/923281969250"
  target="_blank"
  rel="noopener noreferrer"
                    className="bg-white text-emerald-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all duration-300 shadow-lg text-center"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Apply for Loan
                  </motion.a>

                  <motion.a
                    href="tel:+923281969250"
                    className="bg-white/10 border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300 text-center"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    📞 Call: +92 328 1969250
                  </motion.a>
                </motion.div>
              </div>

              {/* Trust Badges */}
              <motion.div
                className="grid grid-cols-2 gap-6"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {[
                  { icon: "🏆", title: "Award Winning", desc: "Best Microfinance 2023" },
                  { icon: "🛡️", title: "Government Registered", desc: "Licensed & Regulated" },
                  { icon: "⭐", title: "5-Star Rated", desc: "Customer Satisfaction" },
                  { icon: "🌟", title: "ISO Certified", desc: "Quality Assurance" },
                ].map((badge, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/20"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-3xl mb-2">{badge.icon}</div>
                    <div className="font-bold text-sm mb-1">{badge.title}</div>
                    <div className="text-xs text-emerald-200">{badge.desc}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs
