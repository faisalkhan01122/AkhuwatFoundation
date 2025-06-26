"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FaUsers, FaMoneyBillWave, FaBuilding, FaGraduationCap, FaHandHoldingHeart , FaGlobe } from "react-icons/fa"

const StatsCounter = () => {
  const [counts, setCounts] = useState({
    beneficiaries: 0,
    loanAmount: 0,
    branches: 0,
    students: 0,
    businesses: 0,
    countries: 0,
  })

  const finalStats = {
    beneficiaries: 4200000,
    loanAmount: 50,
    branches: 800,
    students: 500000,
    businesses: 2000000,
    countries: 15,
  }

  useEffect(() => {
    const duration = 3000 // 3 seconds
    const steps = 60
    const stepDuration = duration / steps

    let currentStep = 0
    const timer = setInterval(() => {
      currentStep++
      const progress = currentStep / steps

      setCounts({
        beneficiaries: Math.floor(finalStats.beneficiaries * progress),
        loanAmount: Math.floor(finalStats.loanAmount * progress),
        branches: Math.floor(finalStats.branches * progress),
        students: Math.floor(finalStats.students * progress),
        businesses: Math.floor(finalStats.businesses * progress),
        countries: Math.floor(finalStats.countries * progress),
      })

      if (currentStep >= steps) {
        clearInterval(timer)
        setCounts(finalStats)
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [])

  const stats = [
    {
      icon: FaUsers,
      value: counts.beneficiaries.toLocaleString() + "+",
      label: "Lives Transformed",
      color: "from-emerald-500 to-teal-600",
      description: "Families empowered through interest-free loans",
    },
    {
      icon: FaMoneyBillWave,
      value: "₨" + counts.loanAmount + "L",
      label: "Maximum Loan",
      color: "from-blue-500 to-indigo-600",
      description: "Highest loan amount available",
    },
    {
      icon: FaBuilding,
      value: counts.branches + "+",
      label: "Service Centers",
      color: "from-purple-500 to-pink-600",
      description: "Branches across Pakistan",
    },
    {
      icon: FaGraduationCap,
      value: counts.students.toLocaleString() + "+",
      label: "Students Supported",
      color: "from-orange-500 to-red-600",
      description: "Educational dreams fulfilled",
    },
    {
      icon: FaHandHoldingHeart ,
      value: counts.businesses.toLocaleString() + "+",
      label: "Businesses Funded",
      color: "from-green-500 to-emerald-600",
      description: "Entrepreneurial ventures supported",
    },
    {
      icon: FaGlobe,
      value: counts.countries + "+",
      label: "Global Presence",
      color: "from-cyan-500 to-blue-600",
      description: "Countries with Akhuwat operations",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-emerald-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 bg-emerald-400 rounded-full animate-pulse blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-400 rounded-full animate-ping blur-xl"></div>
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
            className="text-emerald-600 font-bold text-lg mb-2 block"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Akhuwat Network Impact
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Transforming Lives{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              Across Pakistan
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Since 2001, Akhuwat Network has been Pakistan's leading force in ethical microfinance, creating lasting
            impact through interest-free financial solutions.
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
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
                className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              ></div>

              {/* Icon */}
              <motion.div
                className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <stat.icon />
              </motion.div>

              {/* Value */}
              <motion.div
                className={`text-4xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.3 }}
              >
                {stat.value}
              </motion.div>

              {/* Label */}
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors duration-300">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">{stat.description}</p>

              {/* Hover Effect */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Be Part of This Transformation</h3>
              <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
                Join millions of Pakistanis who have transformed their lives through Akhuwat Network's ethical financial
                solutions.
              </p>
              <motion.a
                href="/loan-services"
                className="inline-flex items-center gap-3 bg-white text-emerald-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Journey
                <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
                  →
                </motion.div>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default StatsCounter
