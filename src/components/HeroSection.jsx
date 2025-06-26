"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  FaUsers,
  FaArrowRight,
  FaShieldAlt,
  FaClock,
  FaGlobe,
  FaMoneyBillWave,
  FaBuilding,
  FaGraduationCap,
} from "react-icons/fa"

const heroSlides = [
  {
    id: 1,
    title: "Transform Lives Through",
    subtitle: "Interest-Free Microfinance",
    description:
      "Pakistan's largest interest-free microfinance organization empowering 4+ million families through Qarz-e-Hasna. Building a poverty-free society with dignity and brotherhood.",
    image: "/akhuwatfoundationbusinessloan3.jpg",
    stats: [
      { label: "Beneficiaries", value: "4.2M+", icon: FaUsers },
      { label: "Max Loan", value: "₨50L", icon: FaMoneyBillWave },
      { label: "Interest Rate", value: "0%", icon: FaShieldAlt },
      { label: "Branches", value: "800+", icon: FaBuilding },
    ],
    cta: "Start Your Journey",
    theme: "emerald",
  },
  {
    id: 2,
    title: "Empower Your Business",
    subtitle: "Sharia-Compliant Business Loans",
    description:
      "Start or expand your business with our ethical financing solutions. Quick approval, flexible repayment, and community support for entrepreneurs across Pakistan.",
    image: "/akhuwatfoundationbusinessloan.jpg",
    stats: [
      { label: "Businesses", value: "2M+", icon: FaBuilding },
      { label: "Max Amount", value: "₨25L", icon: FaMoneyBillWave },
      { label: "Interest Rate", value: "0%", icon: FaShieldAlt },
      { label: "Approval Time", value: "7 Days", icon: FaClock },
    ],
    cta: "Apply for Business Loan",
    theme: "blue",
  },
  {
    id: 3,
    title: "Education for All",
    subtitle: "Breaking Poverty Through Learning",
    description:
      "Free quality education and educational loans ensuring no child is left behind. Building Pakistan's future through comprehensive educational support and scholarships.",
    image: "/What-is-Education-Loan-1-1.png",
    stats: [
      { label: "Students", value: "500K+", icon: FaGraduationCap },
      { label: "Schools", value: "200+", icon: FaBuilding },
      { label: "Interest Rate", value: "0%", icon: FaShieldAlt },
      { label: "Scholarships", value: "50K+", icon: FaUsers },
    ],
    cta: "Support Education",
    theme: "purple",
  },
]

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isPlaying])

  const currentHero = heroSlides[currentSlide]
  const themeColors = {
    emerald: "from-emerald-600 to-teal-600",
    blue: "from-blue-600 to-indigo-600",
    purple: "from-purple-600 to-pink-600",
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-emerald-900 to-teal-900">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(16,185,129,0.05)_50%,transparent_75%)]"></div>

        {/* Floating Elements */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-emerald-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            className="text-white space-y-8"
            key={currentSlide}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Brand Badge */}
            <motion.div
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <img src="/akhuwatfundslogo.png" alt="Akhuwat" className="w-8 h-8 rounded-full" />
              <span className="text-emerald-300 font-bold">Akhuwat Network 2025</span>
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            </motion.div>

            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
                <span className="block text-white">{currentHero.title}</span>
                <motion.span
                  className={`block text-transparent bg-clip-text bg-gradient-to-r ${themeColors[currentHero.theme]}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  {currentHero.subtitle}
                </motion.span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-xl text-gray-300 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              {currentHero.description}
            </motion.p>

            {/* Trust Indicators */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              {[
                { icon: FaShieldAlt, label: "Sharia Compliant", color: "text-emerald-400" },
                { icon: FaUsers, label: "4M+ Trust Us", color: "text-blue-400" },
                { icon: FaClock, label: "Quick Approval", color: "text-purple-400" },
                { icon: FaGlobe, label: "800+ Branches", color: "text-yellow-400" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <item.icon className={`w-4 h-4 ${item.color}`} />
                  <span className="text-sm font-medium text-white">{item.label}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <motion.a
                href="/loan-services"
                className={`group bg-gradient-to-r ${themeColors[currentHero.theme]} hover:shadow-2xl text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 relative overflow-hidden`}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">{currentHero.cta}</span>
                <motion.div
                  className="relative z-10"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                >
                  <FaArrowRight />
                </motion.div>
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.a>

              <motion.a
                href="tel:+923281969250"
                className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-2xl">📞</span>
                <span>+92 328 1969250</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Stats Dashboard */}
          <motion.div
            className="relative"
            key={`stats-${currentSlide}`}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
              {/* Header */}
              <motion.div
                className="text-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-white mb-2">Live Impact Dashboard</h3>
                <p className="text-white/70">Real-time Akhuwat Network statistics</p>
              </motion.div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                {currentHero.stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <div className="flex justify-center mb-3">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${themeColors[currentHero.theme]} rounded-full flex items-center justify-center`}
                      >
                        <stat.icon className="text-white text-xl" />
                      </div>
                    </div>
                    <motion.div
                      className={`text-3xl font-bold mb-2 bg-gradient-to-r ${themeColors[currentHero.theme]} bg-clip-text text-transparent`}
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-sm text-white/70 font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Quick Apply */}
              <motion.div
                className={`p-6 bg-gradient-to-r ${themeColors[currentHero.theme]} bg-opacity-20 rounded-2xl border border-white/20`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.6 }}
              >
                <div className="text-center">
                  <h4 className="text-white font-bold mb-2">Ready to Transform Your Life?</h4>
                  <p className="text-white/80 text-sm mb-4">Join 4+ million beneficiaries</p>
                  <motion.a
                    href="/loan-services"
                    className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Apply Now
                    <FaArrowRight className="w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4 z-20">
        {heroSlides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`relative overflow-hidden rounded-full transition-all duration-300 ${
              currentSlide === index ? "w-12 h-3 bg-white" : "w-3 h-3 bg-white/50 hover:bg-white/70"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            {currentSlide === index && (
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${themeColors[currentHero.theme]} rounded-full`}
                layoutId="activeSlide"
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Play/Pause Button */}
      <motion.button
        onClick={() => setIsPlaying(!isPlaying)}
        className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-sm border border-white/20 text-white p-4 rounded-full hover:bg-white/20 transition-all duration-300 z-20"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isPlaying ? "⏸️" : "▶️"}
      </motion.button>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden z-10">
        <motion.svg
          className="w-full h-20 md:h-28"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <motion.path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28c70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08c36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="white"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1 }}
          />
        </motion.svg>
      </div>
    </section>
  )
}

export default HeroSection
