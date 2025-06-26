"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import {
  FaBuilding,
  FaHome,
  FaUser,
  FaUsers,
  FaGraduationCap,
  FaMedkit,
  FaArrowRight,
  FaCheckCircle,
  FaHandHoldingHeart ,
  FaExclamationTriangle,
  FaStar,
  FaShieldAlt,
} from "react-icons/fa"

const services = [
  {
    title: "Business Loans",
    desc: "Fuel your entrepreneurial dreams with our Sharia-compliant business financing. From startups to established enterprises, we provide tailored solutions that grow with your business.",
    image: "/businessloanbanner.jpg",
    icon: <FaBuilding />,
    color: "from-blue-600 to-indigo-700",
    features: ["Up to ₨30 Lacs", "Zero Interest", "Quick 5-Day Approval", "Business Mentoring"],
    popular: true,
    link: "/business-loans",
  },
  {
    title: "Microfinance Loans",
    desc: "Empowering small entrepreneurs and women with accessible microfinance solutions. Small loans that create massive impacts in communities across Pakistan.",
    image: "/micr.jpg",
    icon: <FaUsers />,
    color: "from-emerald-600 to-teal-700",
    features: ["₨50K to ₨5 Lacs", "Women-Focused", "Group Lending", "Skill Development"],
    link: "/microfinance-loans",
  },
  {
    title: "Personal Loans",
    desc: "Meet your personal financial needs with dignity and respect. From medical emergencies to family celebrations, we're here to support you through life's important moments.",
    image: "/Personal-Loans.webp",
    icon: <FaUser />,
    color: "from-purple-600 to-pink-700",
    features: ["Up to ₨15 Lacs", "Emergency Support", "Fast Disbursement", "Flexible Terms"],
    link: "/personal-loans",
  },
  {
    title: "Healthcare Loans",
    desc: "Access quality healthcare without financial stress. Our medical financing covers treatments, surgeries, and ongoing healthcare needs for you and your loved ones.",
    image: "/Sharing-a-Home-Loan-Yes-or-No-to-a-Joint-Home-Loan.jpg",
    icon: <FaMedkit />,
    color: "from-red-600 to-rose-700",
    features: ["Medical Emergencies", "Surgery Support", "Treatment Plans", "Family Coverage"],
    link: "/healthcare-loans",
  },
  {
    title: "Education Loans",
    desc: "Invest in your future with our comprehensive education financing. From school fees to university expenses, we ensure financial barriers don't limit educational dreams.",
    image: "/What-is-Education-Loan-1-1.png",
    icon: <FaGraduationCap />,
    color: "from-indigo-600 to-purple-700",
    features: ["Full Fee Coverage", "Books & Materials", "Living Expenses", "Merit-based Support"],
    link: "/education-loans",
  },
  {
    title: "Housing Loans",
    desc: "Build your dream home with our Islamic housing finance. Whether buying, building, or renovating, we make homeownership accessible and affordable for everyone.",
    image: "/hmloan.jpg",
    icon: <FaHome />,
    color: "from-green-600 to-emerald-700",
    features: ["Up to ₨50 Lacs", "Long-term Repayment", "Construction Support", "Legal Assistance"],
    link: "/housing-loans",
  },
  {
    title: "Emergency Loans",
    desc: "Rapid financial assistance when you need it most. Our emergency loan program provides immediate relief during unexpected situations and natural disasters.",
    image: "/businessloanbanner.jpg",
    icon: <FaExclamationTriangle />,
    color: "from-orange-600 to-red-700",
    features: ["Instant Approval", "24/7 Processing", "Crisis Support", "Disaster Relief"],
    link: "/emergency-loans",
  },
]

const OurServices = () => {
  const [hoveredCard, setHoveredCard] = useState(null)

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-float blur-3xl"></div>
        <div className="absolute bottom-32 right-20 w-80 h-80 bg-gradient-to-r from-green-400 to-teal-400 rounded-full animate-float-reverse blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full animate-pulse blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
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
              <FaHandHoldingHeart  className="text-white text-2xl" />
            </div>
            <div className="text-left">
              <span className="text-emerald-600 font-bold text-xl block">Akhuwat Network Services</span>
              <span className="text-gray-500 text-sm">Transforming Lives Since 2001</span>
            </div>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-7xl font-black text-gray-900 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600">
              Financial Solutions
            </span>
          </motion.h2>

          <motion.p
            className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Comprehensive interest-free financial solutions designed to empower individuals, families, and businesses
            across Pakistan. Experience the power of ethical finance with Islamic values.
          </motion.p>

          {/* Enhanced Stats Bar */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8 bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {[
              { label: "Loan Categories", value: "7+", icon: FaStar },
              { label: "Maximum Amount", value: "₨50L", icon: FaShieldAlt },
              { label: "Interest Rate", value: "0%", icon: FaCheckCircle },
              { label: "Processing Time", value: "5 Days", icon: FaArrowRight },
            ].map((stat, index) => (
              <motion.div key={index} className="text-center group" whileHover={{ scale: 1.05 }}>
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="text-white text-xl" />
                </div>
                <div className="text-3xl font-black text-emerald-600 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced Services Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-emerald-200"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -15 }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute top-6 left-6 z-20 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  ⭐ Most Popular
                </div>
              )}

              {/* Image Container */}
              <div className="relative overflow-hidden h-56">
                <motion.img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  animate={hoveredCard === index ? { scale: 1.1 } : { scale: 1 }}
                />

                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-0 group-hover:opacity-80 transition-opacity duration-500`}
                />

                {/* Icon Overlay */}
                <motion.div
                  className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-full p-4 transform translate-x-16 group-hover:translate-x-0 transition-transform duration-500"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className={`text-3xl bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                    {service.icon}
                  </div>
                </motion.div>

                {/* Hover CTA */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <motion.a
                    href={service.link}
                    className="bg-white text-gray-900 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors duration-300 flex items-center gap-3 shadow-2xl"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Apply Now <FaArrowRight />
                  </motion.a>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <motion.h3
                  className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  {service.title}
                </motion.h3>

                <p className="text-gray-600 mb-6 leading-relaxed">{service.desc}</p>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * featureIndex, duration: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <FaCheckCircle className="text-emerald-500 text-lg flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Action Button */}
                <motion.a
                  href={service.link}
                  className={`w-full py-4 rounded-2xl text-white font-bold text-lg bg-gradient-to-r ${service.color} hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 group/btn`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Learn More</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <FaArrowRight className="w-5 h-5" />
                  </motion.div>
                </motion.a>
              </div>

              {/* Hover Glow Effect */}
              <div
                className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-r ${service.color} blur-xl -z-10`}
              ></div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <motion.div
          className="text-center mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-12 md:p-16 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-48 translate-x-48"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-white rounded-full translate-y-40 -translate-x-40"></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-4xl md:text-6xl font-black mb-6">Ready to Transform Your Life?</h3>
              <p className="text-2xl text-emerald-100 mb-10 max-w-4xl mx-auto leading-relaxed">
                Join 4.5+ million Pakistanis who have achieved their dreams through Akhuwat Network's interest-free
                financing solutions. Your journey to financial freedom starts here.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.a
                  href="/loan-services"
                  className="bg-white text-emerald-600 px-10 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transition-all duration-300 shadow-2xl flex items-center justify-center gap-3"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Your Application
                  <FaArrowRight />
                </motion.a>

                <motion.a
                  href="tel:+923281969250"
                  className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-3"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  📞 Call: +92 328 1969250
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default OurServices
