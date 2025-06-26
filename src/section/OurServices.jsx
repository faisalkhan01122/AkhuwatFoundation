

import { motion } from "framer-motion"

const services = [
  {
    title: "Akhuwat Business Loan",
    desc: "Applying for a business loan from Akhuwat is easy and can be completed online. The loans are intended to cover urgent financial needs, with approvals usually given quickly.",
    image: "/businessloanbanner.jpg",
    icon: "🏢",
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Akhuwat Home Loan",
    desc: "The Akhuwat Foundation provides home loans for buying, building, or upgrading properties. The application process is streamlined",
    image: "/hmloan.jpg",
    icon: "🏠",
    color: "from-green-500 to-green-600",
  },
  {
    title: "Akhuwat Personal Loan",
    desc: "Akhuwat offers personal loans up to Rs. 2.5 million, with amounts determined by your income and credit status.",
    image: "/Personal-Loans.webp",
    icon: "👤",
    color: "from-purple-500 to-purple-600",
  },
  {
    title: "Microfinance Loans",
    desc: "Microfinance loans offer small, zero-interest funding to individuals and small enterprises, promoting financial freedom.",
    image: "/micr.jpg",
    icon: "👥",
    color: "from-orange-500 to-orange-600",
  },
  {
    title: "Akhuwat Housing Loan",
    desc: "Housing loans provide financial assistance for buying, constructing, or upgrading homes with flexible repayment plans.",
    image: "/Sharing-a-Home-Loan-Yes-or-No-to-a-Joint-Home-Loan.jpg",
    icon: "🏘️",
    color: "from-teal-500 to-teal-600",
  },
  {
    title: "Education Loans",
    desc: "Education loans provide essential financial support for students to manage tuition and academic costs.",
    image: "/What-is-Education-Loan-1-1.png",
    icon: "🎓",
    color: "from-indigo-500 to-indigo-600",
  },
]

const OurServices = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 bg-green-400 rounded-full animate-float"></div>
        <div className="absolute bottom-32 right-20 w-32 h-32 bg-blue-400 rounded-full animate-float-reverse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our <span className="text-green-600 gradient-text">Services</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Comprehensive financial solutions designed to empower individuals and communities across Pakistan
          </motion.p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={service.image || "/placeholder.svg?height=300&width=400"}
                  alt={service.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-0 group-hover:opacity-80 transition-opacity duration-500`}
                />

                <motion.div
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 transform translate-x-12 group-hover:translate-x-0 transition-transform duration-500"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-2xl">{service.icon}</span>
                </motion.div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <motion.button
                    className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                  </motion.button>
                </div>
              </div>

              <div className="p-6">
                <motion.h3
                  className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  {service.title}
                </motion.h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.desc}</p>

                <motion.div
                  className="flex items-center text-green-600 font-semibold group/btn cursor-pointer"
                  whileHover={{ x: 5 }}
                >
                  Apply Now
                  <motion.svg
                    className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    whileHover={{ x: 3 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </motion.svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-10 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-semibold animate-pulse-glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Apply for Loan Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default OurServices
