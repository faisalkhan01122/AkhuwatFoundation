"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { FaQuoteLeft, FaStar, FaUser, FaMapMarkerAlt, FaHeart } from "react-icons/fa"
import { AnimatePresence } from "framer-motion"

const testimonials = [
  {
    id: 1,
    name: "Muhammad Zulqarnain Amir",
    role: "Small Business Owner",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    text: "Akhuwat Network transformed my life completely. The interest-free business loan helped me expand my textile business from a small shop to a thriving enterprise. Today, I employ 15 people and support their families too.",
    rating: 5,
    location: "Lahore, Punjab",
    loanType: "Business Loan",
    amount: "₨8 Lacs",
    category: "business",
  },
  {
    id: 2,
    name: "Fatima Bibi",
    role: "Entrepreneur & Mother",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDlmyRFmvHhxc-AhL_myaivUKwoJk5pIfQGA&s",
    text: "As a single mother, I thought my dreams of starting a tailoring business were impossible. Akhuwat's microfinance program not only gave me the funds but also the confidence. Now I run a successful boutique and my children are in good schools.",
    rating: 5,
    location: "Karachi, Sindh",
    loanType: "Microfinance",
    amount: "₨2 Lacs",
    category: "microfinance",
  },
  {
    id: 3,
    name: "Ahmed Hassan",
    role: "Engineering Student",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    text: "Thanks to Akhuwat's education loan, I completed my engineering degree from a top university. The zero-interest policy meant I could focus on studies instead of worrying about mounting debt. Now I'm working at a multinational company.",
    rating: 5,
    location: "Islamabad, ICT",
    loanType: "Education Loan",
    amount: "₨5 Lacs",
    category: "education",
  },
  {
    id: 4,
    name: "Rashida Khatoon",
    role: "Healthcare Worker",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    text: "When my husband needed urgent surgery, Akhuwat's healthcare loan saved our family from financial ruin. The quick approval and compassionate staff made a difficult time bearable. We're forever grateful for their support.",
    rating: 5,
    location: "Faisalabad, Punjab",
    loanType: "Healthcare Loan",
    amount: "₨3 Lacs",
    category: "healthcare",
  },
  {
    id: 5,
    name: "Ali Raza",
    role: "Home Owner",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    text: "Building our dream home seemed impossible with traditional bank interest rates. Akhuwat's housing loan made it possible for our family to own a beautiful home without compromising our Islamic values. Truly a blessing!",
    rating: 5,
    location: "Multan, Punjab",
    loanType: "Housing Loan",
    amount: "₨25 Lacs",
    category: "housing",
  },
]

const categories = [
  { id: "all", label: "All Stories", icon: FaHeart },
  { id: "business", label: "Business", icon: FaUser },
  { id: "microfinance", label: "Microfinance", icon: FaStar },
  { id: "education", label: "Education", icon: FaQuoteLeft },
  { id: "healthcare", label: "Healthcare", icon: FaHeart },
  { id: "housing", label: "Housing", icon: FaMapMarkerAlt },
]

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredTestimonials =
    activeCategory === "all" ? testimonials : testimonials.filter((t) => t.category === activeCategory)

  return (
    <section className="py-24 bg-gradient-to-br from-emerald-50 via-white to-teal-50 relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-96 h-96 bg-emerald-400 rounded-full animate-float blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-teal-400 rounded-full animate-float-reverse blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-400 rounded-full animate-pulse blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Enhanced Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex items-center justify-center gap-4 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full flex items-center justify-center shadow-2xl">
              <FaQuoteLeft className="text-white text-2xl" />
            </div>
            <div className="text-left">
              <span className="text-emerald-600 font-bold text-xl block">Success Stories</span>
              <span className="text-gray-500 text-sm">Real People, Real Impact</span>
            </div>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-7xl font-black text-gray-900 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            What People Say{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              About Us
            </span>
          </motion.h2>

          <motion.p
            className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Real stories from people whose lives have been transformed by Akhuwat Network's interest-free financing
            solutions
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-3 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 border border-gray-200"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <category.icon className="w-4 h-4" />
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Main Testimonial Display */}
        <motion.div
          className="max-w-6xl mx-auto mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Quote Icon */}
            <motion.div
              className="absolute top-8 left-8 text-emerald-200 text-8xl"
              initial={{ opacity: 0, rotate: -180 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <FaQuoteLeft />
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full -translate-y-32 translate-x-32"></div>

            <div className="relative z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={filteredTestimonials[activeTestimonial]?.id}
                  className="flex flex-col md:flex-row items-center gap-12"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Profile Section */}
                  <motion.div
                    className="flex-shrink-0 text-center md:text-left"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative mb-6">
                      <img
                        src={filteredTestimonials[activeTestimonial]?.image || "/placeholder.svg"}
                        alt={filteredTestimonials[activeTestimonial]?.name}
                        className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-emerald-200 shadow-2xl mx-auto"
                      />
                      <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-white p-3 rounded-full shadow-lg">
                        <FaStar className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-2xl font-bold text-gray-900">
                        {filteredTestimonials[activeTestimonial]?.name}
                      </h4>
                      <p className="text-emerald-600 font-semibold text-lg">
                        {filteredTestimonials[activeTestimonial]?.role}
                      </p>
                      <div className="flex items-center justify-center md:justify-start gap-2 text-gray-500">
                        <FaMapMarkerAlt className="w-4 h-4" />
                        <span>{filteredTestimonials[activeTestimonial]?.location}</span>
                      </div>

                      {/* Loan Details */}
                      <div className="bg-emerald-50 rounded-2xl p-4 mt-4">
                        <div className="text-sm text-emerald-700 font-semibold mb-1">
                          {filteredTestimonials[activeTestimonial]?.loanType}
                        </div>
                        <div className="text-2xl font-bold text-emerald-600">
                          {filteredTestimonials[activeTestimonial]?.amount}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Content Section */}
                  <div className="flex-1">
                    <motion.p
                      className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed italic"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                    >
                      "{filteredTestimonials[activeTestimonial]?.text}"
                    </motion.p>

                    {/* Rating */}
                    <motion.div
                      className="flex gap-2 mb-6"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                    >
                      {[...Array(filteredTestimonials[activeTestimonial]?.rating || 5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.6 + i * 0.1, duration: 0.3 }}
                        >
                          <FaStar className="w-6 h-6 text-yellow-400" />
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Impact Badge */}
                    <motion.div
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-full font-semibold"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8, duration: 0.6 }}
                    >
                      <FaHeart className="w-4 h-4" />
                      <span>Life Transformed</span>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Testimonial Navigation */}
        <motion.div
          className="flex justify-center gap-4 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
        >
          {filteredTestimonials.map((testimonial, index) => (
            <motion.button
              key={testimonial.id}
              onClick={() => setActiveTestimonial(index)}
              className={`w-20 h-20 rounded-full border-2 overflow-hidden transition-all duration-300 ${
                activeTestimonial === index
                  ? "border-emerald-500 scale-110 shadow-2xl"
                  : "border-gray-300 hover:border-emerald-300 hover:scale-105"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={testimonial.image || "/placeholder.svg"}
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
            </motion.button>
          ))}
        </motion.div>

        {/* Enhanced Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {[
            { number: "4.5M+", label: "Happy Customers", icon: FaUser },
            { number: "₨50L", label: "Max Loan Amount", icon: FaStar },
            { number: "0%", label: "Interest Rate", icon: FaHeart },
            { number: "20+", label: "Years of Service", icon: FaQuoteLeft },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="text-white text-2xl" />
              </div>
              <motion.div
                className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 mb-3"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-600 font-semibold text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection
