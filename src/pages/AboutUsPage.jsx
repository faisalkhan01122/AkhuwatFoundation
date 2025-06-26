
import HeroImgSection from "../components/HeroImgSection"
import { motion } from "framer-motion"
import TeamSection from "../section/TeamSection"
import TestimonialsSection from "../section/TestimonialsSection"


const AboutUsPage = () => {
  return (
    <>
      <HeroImgSection imageUrl="/maxresdefault.jpg" text="About Us" />

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Text Column */}
          <motion.div
            className="lg:w-1/2 space-y-6 text-gray-700"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-[#318B38] mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Who We Are
            </motion.h2>

            <motion.p
              className="text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              The Akhuwat Foundation is a distinctive loan provider in Pakistan, offering ethical, interest-free loans
              (Qarz-e-Hasna) designed to assist those in need. Unlike conventional banks, Akhuwat prioritizes social
              welfare over profit.
            </motion.p>

            <motion.p
              className="text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              They provide loans for a variety of purposes, including business, education, and healthcare, without any
              hidden charges or processing fees. Applications can be submitted both online and in person at local
              branches, fostering a community-oriented approach.
            </motion.p>

            <motion.p
              className="text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Akhuwat's mission is to alleviate poverty by delivering accessible, transparent, and cost-free financial
              support.
            </motion.p>

            <motion.button
              className="bg-gradient-to-r from-green-600 to-emerald-700 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 mt-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More About Us
            </motion.button>
          </motion.div>

          {/* Image Column */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl hover-lift">
              <motion.img
                src="/depositphotos_153233456-stock-photo-who-we-are-concept-on.jpg"
                alt="Loan Services Akhuwat"
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                whileHover={{ scale: 1.05 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-gray-50 to-green-50 py-20 px-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12">
          {/* Text Column */}
          <motion.div
            className="lg:w-2/3 space-y-8 text-gray-800"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-semibold text-green-700 mb-4">
                How to Apply in just Two Simple Steps
              </h3>
              <p className="mb-4 text-lg leading-relaxed">
                To apply for a loan through the Akhuwat scheme, simply follow these steps:
              </p>
              <ol className="list-decimal list-inside space-y-3 text-lg">
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <strong>Visit the Akhuwat Foundation Website:</strong> Explore the various loan options available.
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <strong>Contact Akhuwat Directly:</strong> Reach out for detailed information about specific
                  eligibility requirements.
                </motion.li>
              </ol>
            </motion.div>

            {/* Additional sections with staggered animations */}
            {[
              {
                title: "How will I know if my Akhuwat loan is approved?",
                content:
                  "After submitting your application for the Akhuwat loan, you can check your loan status on Akhuwat's official website. Once approved, the loan amount will be disbursed to your bank account within a few days.",
              },
              {
                title: "Is the Akhuwat Foundation real or fake?",
                content:
                  "The Akhuwat Foundation is a legitimate loan scheme. It offers personal loans ranging from PKR 1 lakh to PKR 50 lakh, with terms of 1 to 10 years. As a subsidiary of HBL Bank, Akhuwat is a reputable organization with an Ehsaas program guide rating of 15 out of 5 stars.",
              },
              {
                title: "How much is the Akhuwat loan limit?",
                content:
                  "You can secure a loan from the Akhuwat Foundation ranging from PKR 50,000 to PKR 50 lakh online, all without any interest.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl md:text-2xl font-semibold text-green-700 mb-3">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.content}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Image Column */}
          <motion.div
            className="lg:w-1/3 w-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="sticky top-8">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl hover-lift">
                <motion.img
                  src="https://www.idfcfirstbank.com/content/dam/idfcfirstbank/images/blog/finance/benefits-of-microfinance-the-microfinance-industry-240X320.jpg"
                  alt="Personal Loans - Akhuwat Foundation"
                  className="w-full h-auto object-center transition-transform duration-700"
                  whileHover={{ scale: 1.05 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/50 to-transparent"></div>

                {/* Floating Info Card */}
                <motion.div
                  className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-bold text-green-700 mb-2">Quick Facts</h4>
                  <ul className="text-sm space-y-1">
                    <li>✅ 0% Interest Rate</li>
                    <li>✅ Up to 50 Lacs PKR</li>
                    <li>✅ Quick Approval</li>
                    <li>✅ No Hidden Charges</li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <TeamSection />
      <TestimonialsSection />
    </>
  )
}

export default AboutUsPage
