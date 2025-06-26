"use client"
import HeroImgSection from "../components/HeroImgSection"
import { motion } from "framer-motion"
import { FaGavel, FaHandshake, FaShieldAlt, FaExclamationTriangle, FaUserCheck, FaFileContract } from "react-icons/fa"

const TermsConditionsPage = () => {
  const termsSections = [
    {
      icon: <FaHandshake />,
      title: "Loan Agreement Terms",
      content:
        "By applying for an Akhuwat loan, you agree to our interest-free lending principles based on Islamic finance. All loans are provided without any interest charges, processing fees, or hidden costs. Repayment terms are flexible and designed to accommodate your financial situation.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <FaUserCheck />,
      title: "Eligibility Requirements",
      content:
        "Applicants must be Pakistani citizens or legal residents, aged 18 or above, with a valid CNIC. You must demonstrate a genuine need for financial assistance and provide accurate information during the application process. Community verification may be required.",
      color: "from-green-500 to-green-600",
    },
    {
      icon: <FaFileContract />,
      title: "Application Process",
      content:
        "All applications must be submitted through official Akhuwat channels. False information or fraudulent applications will result in immediate disqualification. We reserve the right to verify all provided information through community members and official sources.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: <FaShieldAlt />,
      title: "Repayment Obligations",
      content:
        "Borrowers are obligated to repay loans according to the agreed schedule. While we offer flexible terms, consistent non-payment may affect future loan eligibility. Early repayment is encouraged and welcomed without any penalties.",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: <FaExclamationTriangle />,
      title: "Liability and Risks",
      content:
        "Akhuwat Foundation is not liable for any business losses or investment risks taken by borrowers. Loans are provided for specified purposes and should not be used for illegal activities, gambling, or speculative investments.",
      color: "from-red-500 to-red-600",
    },
    {
      icon: <FaGavel />,
      title: "Legal Compliance",
      content:
        "These terms are governed by Pakistani law and Islamic finance principles. Any disputes will be resolved through mediation and, if necessary, through Pakistani courts. We reserve the right to modify these terms with prior notice.",
      color: "from-teal-500 to-teal-600",
    },
  ]

  return (
    <>
      <HeroImgSection
        imageUrl="/termandcodition3.webp"
        text="Terms & Conditions"
      />

      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-40 h-40 bg-blue-400 rounded-full animate-float"></div>
          <div className="absolute bottom-32 right-20 w-32 h-32 bg-green-400 rounded-full animate-float-reverse"></div>
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
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full flex items-center justify-center text-white text-2xl mr-4">
                <FaGavel />
              </div>
              <div>
                <span className="text-blue-600 font-semibold text-lg block">Legal Framework</span>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Terms & <span className="gradient-text">Conditions</span>
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
              Please read these terms and conditions carefully before applying for an Akhuwat loan. By submitting an
              application, you agree to be bound by these terms.
            </motion.p>
          </motion.div>

          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-6 py-3 rounded-full font-semibold">
              <FaFileContract className="mr-2" />
              Effective Date: January 2025
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {termsSections.map((section, index) => (
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
            className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden mb-16"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative z-10 text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Important Notice</h3>
              <p className="text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed text-lg">
                Akhuwat Foundation operates under Islamic finance principles. All our loans are interest-free
                (Qarz-e-Hasna) and designed to help individuals and communities achieve financial stability while
                maintaining dignity and respect.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="mailto:legal@akhuwat.network"
                  className="bg-white text-blue-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Legal Inquiries
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

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <FaHandshake className="text-blue-600 mr-3" />
                Acceptance of Terms
              </h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  By applying, you accept all terms and conditions
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Terms may be updated with prior notice
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Continued use implies acceptance of changes
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Contact us for clarification on any terms
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <FaShieldAlt className="text-blue-600 mr-3" />
                Your Responsibilities
              </h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Provide accurate and truthful information
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Use loans for intended purposes only
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Maintain regular communication with Akhuwat
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Repay loans according to agreed schedule
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default TermsConditionsPage
