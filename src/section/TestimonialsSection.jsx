
import { motion } from "framer-motion"
import { useState } from "react"
import { FaQuoteLeft, FaStar } from "react-icons/fa"

const testimonials = [
  {
    id: 1,
    name: "M.M Zulqarnain Amir",
    role: "Business Owner, Punjab",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    text: "I am overwhelmed at what I would join a philanthropic economic movement. This is the one. May Allah help you grow and serve even more people.",
    rating: 5,
    location: "Lahore, Pakistan",
  },
  {
    id: 2,
    name: "Fatima Khan",
    role: "Small Business Owner",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDlmyRFmvHhxc-AhL_myaivUKwoJk5pIfQGA&s",
    text: "Akhuwat Foundation changed my life completely. The interest-free loan helped me start my tailoring business and now I can support my family with dignity.",
    rating: 5,
    location: "Karachi, Pakistan",
  },
  {
    id: 3,
    name: "Ahmed Ali",
    role: "Student",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    text: "Thanks to Akhuwat's education loan, I was able to complete my engineering degree. Now I'm working and helping other students in my community.",
    rating: 5,
    location: "Islamabad, Pakistan",
  },
]

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-white to-emerald-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-green-400 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-emerald-400 rounded-full animate-float-reverse"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-teal-400 rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
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
            Testimonials
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            What People Say <span className="gradient-text">About Us</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Real stories from people whose lives have been transformed by Akhuwat Foundation
          </motion.p>
        </motion.div>

        {/* Main Testimonial */}
        <motion.div
          className="max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden hover-lift">
            {/* Quote Icon */}
            <motion.div
              className="absolute top-6 left-6 text-green-200 text-6xl"
              initial={{ opacity: 0, rotate: -180 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <FaQuoteLeft />
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full -translate-y-16 translate-x-16"></div>

            <div className="relative z-10">
              <motion.div
                className="flex flex-col md:flex-row items-center gap-8"
                key={activeTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Profile Image */}
                <motion.div className="flex-shrink-0" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                  <div className="relative">
                    <img
                      src={testimonials[activeTestimonial].image || "/placeholder.svg"}
                      alt={testimonials[activeTestimonial].name}
                      className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-green-200 shadow-lg"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-green-500 text-white p-2 rounded-full">
                      <FaStar className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <motion.p
                    className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed italic"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  >
                    "{testimonials[activeTestimonial].text}"
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    <h4 className="text-xl font-bold text-gray-900 mb-1">{testimonials[activeTestimonial].name}</h4>
                    <p className="text-green-600 font-semibold mb-2">{testimonials[activeTestimonial].role}</p>
                    <p className="text-gray-500 text-sm">📍 {testimonials[activeTestimonial].location}</p>

                    {/* Rating */}
                    <div className="flex justify-center md:justify-start gap-1 mt-3">
                      {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.6 + i * 0.1, duration: 0.3 }}
                        >
                          <FaStar className="w-5 h-5 text-yellow-400" />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Testimonial Navigation */}
        <motion.div
          className="flex justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.button
              key={testimonial.id}
              onClick={() => setActiveTestimonial(index)}
              className={`w-16 h-16 rounded-full border-2 overflow-hidden transition-all duration-300 ${
                activeTestimonial === index
                  ? "border-green-500 scale-110 shadow-lg"
                  : "border-gray-300 hover:border-green-300"
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

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {[
            { number: "89,982+", label: "Happy Customers" },
            { number: "50L+", label: "Max Loan Amount" },
            { number: "0%", label: "Interest Rate" },
            { number: "15+", label: "Years of Service" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover-lift"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="text-3xl font-bold gradient-text mb-2"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection
