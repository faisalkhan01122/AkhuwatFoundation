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
    link: "/loans/business",
  },
  {
    title: "Microfinance Loans",
    desc: "Empowering small entrepreneurs and women with accessible microfinance solutions. Small loans that create massive impacts in communities across Pakistan.",
    image: "/micr.jpg",
    icon: <FaUsers />,
    color: "from-emerald-600 to-teal-700",
    features: ["₨50K to ₨5 Lacs", "Women-Focused", "Group Lending", "Skill Development"],
    link: "/loans/microfinance",
  },
  {
    title: "Personal Loans",
    desc: "Meet your personal financial needs with dignity and respect. From medical emergencies to family celebrations, we're here to support you through life's important moments.",
    image: "/Personal-Loans.webp",
    icon: <FaUser />,
    color: "from-purple-600 to-pink-700",
    features: ["Up to ₨15 Lacs", "Emergency Support", "Fast Disbursement", "Flexible Terms"],
    link: "/loans/personal",
  },
  {
    title: "Healthcare Loans",
    desc: "Access quality healthcare without financial stress. Our medical financing covers treatments, surgeries, and ongoing healthcare needs for you and your loved ones.",
    image: "/Sharing-a-Home-Loan-Yes-or-No-to-a-Joint-Home-Loan.jpg",
    icon: <FaMedkit />,
    color: "from-red-600 to-rose-700",
    features: ["Medical Emergencies", "Surgery Support", "Treatment Plans", "Family Coverage"],
    link: "/loans/healthcares",
  },
  {
    title: "Education Loans",
    desc: "Invest in your future with our comprehensive education financing. From school fees to university expenses, we ensure financial barriers don't limit educational dreams.",
    image: "/What-is-Education-Loan-1-1.png",
    icon: <FaGraduationCap />,
    color: "from-indigo-600 to-purple-700",
    features: ["Full Fee Coverage", "Books & Materials", "Living Expenses", "Merit-based Support"],
    link: "/loans/education",
  },
  {
    title: "Housing Loans",
    desc: "Build your dream home with our Islamic housing finance. Whether buying, building, or renovating, we make homeownership accessible and affordable for everyone.",
    image: "/hmloan.jpg",
    icon: <FaHome />,
    color: "from-green-600 to-emerald-700",
    features: ["Up to ₨50 Lacs", "Long-term Repayment", "Construction Support", "Legal Assistance"],
    link: "/loans/housing",
  },
  {
    title: "Emergency Loans",
    desc: "Rapid financial assistance when you need it most. Our emergency loan program provides immediate relief during unexpected situations and natural disasters.",
    image: "/emergency.jpg",
    icon: <FaExclamationTriangle />,
    color: "from-orange-600 to-red-700",
    features: ["Instant Approval", "24/7 Processing", "Crisis Support", "Disaster Relief"],
    link: "/loans/emergency",
  },
]

const OurServices = () => {
  // const [hoveredCard, setHoveredCard] = useState(null)

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
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <motion.div
          key={index}
          className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-200 transition-all duration-500"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ y: -10 }}
        >
          {/* Image Section */}
          <div className="relative h-60 overflow-hidden">
            <img
              src={service.image || "/placeholder.svg"}
              alt={service.title}
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
            <div className="absolute top-4 left-4">
              {service.popular && (
                <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-semibold px-4 py-1 rounded-full shadow">
                  ⭐ Most Popular
                </span>
              )}
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6 relative z-10">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
              {service.desc}
            </p>

            <ul className="space-y-2 mb-6">
              {service.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-center text-gray-700 text-sm"
                >
                  <FaCheckCircle className="text-emerald-500 mr-2" /> {feature}
                </li>
              ))}
            </ul>

            {/* Call to Action Button */}
            <motion.a
              href={service.link}
              className={`inline-flex items-center justify-center w-full py-3 px-6 text-white font-semibold rounded-xl shadow-md bg-gradient-to-r ${service.color} hover:opacity-90 transition duration-300 cursor-pointer z-10 relative`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Learn More <FaArrowRight className="ml-2" />
            </motion.a>
          </div>

          {/* Decorative Hover Overlay (non-blocking) */}
          <div
            className={`absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-500 bg-gradient-to-r ${service.color} blur-xl pointer-events-none`}
          />
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
                  href="/contact-us"
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
