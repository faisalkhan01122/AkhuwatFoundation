"use client"
import HeroImgSection from "../components/HeroImgSection"
import { motion } from "framer-motion"
import {
  FaExclamationTriangle,
  FaInfoCircle,
  FaShieldAlt,
  FaBalanceScale,
  FaHandsHelping,
  FaGlobeAmericas,
} from "react-icons/fa"

const DisclaimerPage = () => {
  const disclaimerSections = [
    {
      icon: <FaExclamationTriangle />,
      title: "General Disclaimer",
      content:
        "The information provided on this website is for general informational purposes only. While we strive to keep the information up to date and correct, we make no representations or warranties of any kind about the completeness, accuracy, reliability, or availability of the information.",
      color: "from-yellow-500 to-orange-600",
    },
    {
      icon: <FaBalanceScale />,
      title: "Financial Advice Disclaimer",
      content:
        "Akhuwat Foundation does not provide financial, investment, or legal advice. Our loan services are designed to provide financial assistance based on Islamic principles. Borrowers should seek independent professional advice before making financial decisions.",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: <FaShieldAlt />,
      title: "Loan Approval Disclaimer",
      content:
        "Loan approval is subject to eligibility criteria and community verification. Submitting an application does not guarantee loan approval. Akhuwat Foundation reserves the right to approve or decline applications based on our assessment criteria.",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: <FaInfoCircle />,
      title: "Information Accuracy",
      content:
        "While we make every effort to ensure information accuracy, we cannot guarantee that all information is current or error-free. Users should verify information independently and contact us directly for the most current details about our services.",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: <FaHandsHelping />,
      title: "Service Availability",
      content:
        "Our services may not be available in all areas or to all individuals. Service availability depends on various factors including geographic location, community presence, and operational capacity. We reserve the right to modify or discontinue services.",
      color: "from-red-500 to-rose-600",
    },
    {
      icon: <FaGlobeAmericas />,
      title: "External Links Disclaimer",
      content:
        "Our website may contain links to external websites. We have no control over the content and nature of these sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.",
      color: "from-teal-500 to-cyan-600",
    },
  ]

  return (
    <>
      <HeroImgSection imageUrl="/disclaimer-examples.webp" text="Disclaimer" />

      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-yellow-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-40 h-40 bg-yellow-400 rounded-full animate-float"></div>
          <div className="absolute bottom-32 right-20 w-32 h-32 bg-orange-400 rounded-full animate-float-reverse"></div>
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
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-600 to-orange-700 rounded-full flex items-center justify-center text-white text-2xl mr-4">
                <FaExclamationTriangle />
              </div>
              <div>
                <span className="text-yellow-600 font-semibold text-lg block">Important Information</span>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                  <span className="gradient-text">Disclaimer</span>
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
              Please read this disclaimer carefully before using our services. This disclaimer governs your use of our
              website and services provided by Akhuwat Foundation.
            </motion.p>
          </motion.div>

          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center bg-yellow-100 text-yellow-800 px-6 py-3 rounded-full font-semibold">
              <FaInfoCircle className="mr-2" />
              Last Updated: January 2025
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {disclaimerSections.map((section, index) => (
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
            className="bg-gradient-to-r from-yellow-600 to-orange-700 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden mb-16"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative z-10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">Limitation of Liability</h3>
                  <p className="text-yellow-100 mb-6 leading-relaxed text-lg">
                    Akhuwat Foundation shall not be liable for any direct, indirect, incidental, special, or
                    consequential damages resulting from the use or inability to use our services, even if we have been
                    advised of the possibility of such damages.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.a
                      href="mailto:info@akhuwat.network"
                      className="bg-white text-yellow-700 px-6 py-3 rounded-full font-bold hover:bg-yellow-50 transition-all duration-300 shadow-lg text-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Contact Us
                    </motion.a>
                    <motion.a
                      href="tel:+923281969250"
                      className="bg-white/10 border-2 border-white text-white px-6 py-3 rounded-full font-bold hover:bg-white/20 transition-all duration-300 text-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Call: +92 328 1969250
                    </motion.a>
                  </div>
                </div>
                <div className="relative">
                  <motion.div
                    className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="text-xl font-bold mb-4">Key Points to Remember</h4>
                    <ul className="space-y-2 text-yellow-100">
                      <li>• Services are provided "as is"</li>
                      <li>• No guarantee of loan approval</li>
                      <li>• Information subject to change</li>
                      <li>• Independent verification recommended</li>
                    </ul>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                <FaBalanceScale />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Legal Compliance</h4>
              <p className="text-gray-600">All services comply with Pakistani law and Islamic finance principles.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                <FaShieldAlt />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Data Protection</h4>
              <p className="text-gray-600">We protect your personal information according to our privacy policy.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                <FaHandsHelping />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Community Focus</h4>
              <p className="text-gray-600">Our services are designed to benefit communities and individuals in need.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default DisclaimerPage
