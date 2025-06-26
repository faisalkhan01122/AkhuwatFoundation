"use client"
import HeroImgSection from "../components/HeroImgSection"
import { motion } from "framer-motion"
import { FaShieldAlt, FaLock, FaUserShield, FaEye, FaDatabase, FaCookie } from "react-icons/fa"

const PrivacyPolicyPage = () => {
  const privacySections = [
    {
      icon: <FaShieldAlt />,
      title: "Information We Collect",
      content:
        "We collect information you provide directly to us, such as when you create an account, apply for a loan, or contact us for support. This includes personal identification information, financial information, and communication records.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <FaLock />,
      title: "How We Use Your Information",
      content:
        "We use the information we collect to provide, maintain, and improve our services, process loan applications, communicate with you, and ensure the security of our platform. We never sell your personal information to third parties.",
      color: "from-green-500 to-green-600",
    },
    {
      icon: <FaUserShield />,
      title: "Information Sharing",
      content:
        "We may share your information with trusted partners who assist us in operating our website and conducting our business, as long as they agree to keep this information confidential and secure.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: <FaEye />,
      title: "Your Privacy Rights",
      content:
        "You have the right to access, update, or delete your personal information. You can also opt-out of certain communications and request a copy of the data we have about you.",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: <FaDatabase />,
      title: "Data Security",
      content:
        "We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. We use industry-standard encryption and security protocols.",
      color: "from-red-500 to-red-600",
    },
    {
      icon: <FaCookie />,
      title: "Cookies and Tracking",
      content:
        "We use cookies and similar tracking technologies to enhance your experience on our website, analyze usage patterns, and provide personalized content. You can control cookie settings in your browser.",
      color: "from-teal-500 to-teal-600",
    },
  ]

  return (
    <>
      <HeroImgSection
        imageUrl="/integrated_loan_app_02-Crop.webp"
        text="Privacy Policy"
      />

      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-green-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-40 h-40 bg-green-400 rounded-full animate-float"></div>
          <div className="absolute bottom-32 right-20 w-32 h-32 bg-blue-400 rounded-full animate-float-reverse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="flex items-center justify-center mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-700 rounded-full flex items-center justify-center text-white text-2xl mr-4">
                <FaShieldAlt />
              </div>
              <div>
                <span className="text-green-600 font-semibold text-lg block">Your Privacy Matters</span>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Privacy <span className="gradient-text">Policy</span>
                </h1>
              </div>
            </motion.div>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              At Akhuwat Foundation, we are committed to protecting your privacy and ensuring the security of your
              personal information.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {privacySections.map((section, index) => (
              <motion.div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className={`bg-gradient-to-r ${section.color} p-6 text-white`}>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl mr-4">
                      {section.icon}
                    </div>
                    <h3 className="text-xl font-bold">{section.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed">{section.content}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative z-10 text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Questions About Your Privacy?</h3>
              <p className="text-green-100 mb-8 max-w-2xl mx-auto leading-relaxed text-lg">
                If you have any questions about this Privacy Policy, please don't hesitate to contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="mailto:privacy@akhuwat.network"
                  className="bg-white text-green-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-green-50 transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Email Privacy Team
                </motion.a>
                <motion.a
                  href="tel:+923281969250"
                  className="bg-white/10 border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Call: +92 328 1969250
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default PrivacyPolicyPage

