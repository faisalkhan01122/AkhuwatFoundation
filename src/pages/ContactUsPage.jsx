"use client"
import HeroImgSection from "../components/HeroImgSection"
import { motion } from "framer-motion"
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa"

const ContactUsPage = () => {
  return (
    <>
      <HeroImgSection imageUrl="/contactus.jpg" text="Contact Us" />

      {/* Contact Images Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            className="relative overflow-hidden rounded-2xl shadow-2xl hover-lift"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="/bussnsloa.jpg"
              alt="Business Loan - Akhuwat Foundation"
              className="w-full h-64 md:h-80 object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <motion.div
              className="absolute bottom-6 left-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-2">Business Loans</h3>
              <p className="text-sm">Grow your business with interest-free loans</p>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative overflow-hidden rounded-2xl shadow-2xl hover-lift"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src="/homeloaan.jpg"
              alt="Home Loan - Akhuwat Foundation"
              className="w-full h-64 md:h-80 object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <motion.div
              className="absolute bottom-6 left-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-2">Home Loans</h3>
              <p className="text-sm">Build your dream home with our support</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get in <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-xl text-gray-600">We're here to help you with your loan needs</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <FaPhone />,
                title: "Call Us",
                info: "+92 328 1969250",
                description: "Available 24/7 for your queries",
                color: "from-blue-500 to-blue-600",
                link: "tel:+923281969250",
              },
              {
                icon: <FaWhatsapp />,
                title: "WhatsApp",
                info: "+92 328 1969250",
                description: "Quick support via WhatsApp",
                color: "from-green-500 to-green-600",
                link: "https://wa.me/+923281969250",
              },
              {
                icon: <FaEnvelope />,
                title: "Email Us",
                info: "support@akhuwat.network",
                description: "Send us your detailed queries",
                color: "from-purple-500 to-purple-600",
                link: "mailto:support@akhuwat.network",
              },
            ].map((contact, index) => (
              <motion.a
                key={index}
                href={contact.link}
                className="block bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift text-center group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-r ${contact.color} rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {contact.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
                  {contact.title}
                </h3>
                <p className="text-lg font-semibold text-gray-700 mb-2">{contact.info}</p>
                <p className="text-gray-600">{contact.description}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-gradient-to-r from-green-800 to-emerald-900 text-white py-20 px-4 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-white rounded-full animate-float-reverse"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Send Us a Message</h2>
            <p className="text-xl text-green-100">We'll get back to you within 24 hours</p>
          </motion.div>

          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form action="submit" method="POST" className="space-y-6">
              <input type="hidden" name="_token" value="cSdACfwvRRbJpn1dO88IcqHwYIIlGWVmzRTlhvGT" autoComplete="off" />

              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Full Name"
                    required
                    className="w-full p-4 rounded-xl border-none text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-green-400 transition-all duration-300"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email Address"
                    required
                    className="w-full p-4 rounded-xl border-none text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-green-400 transition-all duration-300"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <textarea
                  name="message"
                  placeholder="Tell us about your loan requirements..."
                  rows={6}
                  required
                  className="w-full p-4 rounded-xl border-none text-gray-900 placeholder-gray-500 resize-none focus:ring-2 focus:ring-green-400 transition-all duration-300"
                ></textarea>
              </motion.div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.button
                  type="submit"
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold px-12 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 btn-animate"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message 📧
                </motion.button>
              </motion.div>
            </form>
          </motion.div>

          {/* Address Section */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center mb-4">
              <FaMapMarkerAlt className="text-2xl text-green-300 mr-3" />
              <h3 className="text-2xl font-bold">Visit Our Office</h3>
            </div>
            <p className="text-lg text-green-100 leading-relaxed">
              New Shahbaz Building Thandi Sadak
              <br />
              Hyderabad, Pakistan
            </p>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default ContactUsPage
