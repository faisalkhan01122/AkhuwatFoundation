"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaHeart,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa"

const Footer = () => {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const footerSections = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "/", icon: "🏠" },
        { name: "Loan Services", href: "/loans", icon: "💰" },
        { name: "About Akhuwat", href: "/about", icon: "ℹ️" },
        { name: "Apply Online", href: "/loans", icon: "📝" },
        { name: "Success Stories", href: "/about", icon: "⭐" },
      ],
    },
    {
      title: "Loan Types",
      links: [
        { name: "Business Loans", href: "/loans/business", icon: "🏢" },
        { name: "Personal Loans", href: "/loans/personal", icon: "👤" },
        { name: "Education Loans", href: "/loans/education", icon: "🎓" },
        { name: "Housing Loans", href: "/loans/housing", icon: "🏠" },
        { name: "Emergency Loans", href: "/loans/emergency", icon: "🚨" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "/help-center", icon: "❓" },
        { name: "Contact Us", href: "/contact-us", icon: "📞" },
        { name: "Privacy Policy", href: "/privacy-policy", icon: "🔒" },
        { name: "Terms & Conditions", href: "/terms-and-conditions", icon: "📋" },
        { name: "Disclaimer", href: "/disclaimer", icon: "⚠️" },
      ],
    },
  ]

  const socialLinks = [
    { icon: FaFacebook, href: "#", color: "hover:text-blue-500", bg: "hover:bg-blue-500" },
    { icon: FaTwitter, href: "#", color: "hover:text-sky-500", bg: "hover:bg-sky-500" },
    { icon: FaInstagram, href: "#", color: "hover:text-pink-500", bg: "hover:bg-pink-500" },
    { icon: FaLinkedin, href: "#", color: "hover:text-blue-600", bg: "hover:bg-blue-600" },
    { icon: FaYoutube, href: "#", color: "hover:text-red-500", bg: "hover:bg-red-500" },
  ]

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail("")
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-emerald-900 to-teal-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 bg-emerald-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-teal-400 rounded-full blur-2xl animate-ping"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-green-400 rounded-full blur-xl animate-bounce"></div>
      </div>

      <div className="relative z-10">
        {/* Newsletter Section */}
        <motion.div
          className="bg-gradient-to-r from-emerald-600 to-teal-600 py-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.h3
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Stay Connected with Akhuwat Network
            </motion.h3>
            <motion.p
              className="text-emerald-100 text-lg mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Get the latest updates about our loan programs, success stories, and community impact
            </motion.p>

            <motion.form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-emerald-200 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
                required
              />
              <motion.button
                type="submit"
                className="bg-white text-emerald-600 px-8 py-4 rounded-2xl font-bold hover:bg-emerald-50 transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isSubscribed}
              >
                {isSubscribed ? (
                  <>
                    <FaCheckCircle />
                    Subscribed!
                  </>
                ) : (
                  <>
                    Subscribe
                    <FaArrowRight />
                  </>
                )}
              </motion.button>
            </motion.form>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Brand Section */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <img src="/akhuwatfundslogo.png" alt="Akhuwat Network" className="w-24 h-16 rounded-full shadow-lg" />
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur"></div>
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                    Akhuwat Network
                  </h3>
                  <p className="text-emerald-300 text-sm font-medium">Pakistan's Largest Interest-Free Microfinance</p>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Pakistan's largest interest-free microfinance organization, empowering communities through Qarz-e-Hasna
                since 2001. Building a poverty-free society with dignity and brotherhood across Pakistan.
              </p>

              {/* Enhanced Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className={`group w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-300 ${social.color} transition-all duration-300 hover:bg-white/20 border border-white/10 hover:border-white/30`}
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Footer Sections */}
            {footerSections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-xl font-bold mb-6 text-emerald-300 flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <motion.li key={link.name}>
                      <motion.a
                        href={link.href}
                        className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-3 group py-2 px-3 rounded-lg hover:bg-white/5"
                        whileHover={{ x: 5 }}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: linkIndex * 0.05, duration: 0.3 }}
                        viewport={{ once: true }}
                      >
                        <span className="text-lg">{link.icon}</span>
                        <span>{link.name}</span>
                        <FaArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Contact Information Cards */}
          <motion.div
            className="mt-16 pt-8 border-t border-white/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: FaMapMarkerAlt,
                  title: "Visit Our Office",
                  content: "New Shahbaz Building, Thandi Sadak, Hyderabad, Pakistan",
                  color: "from-emerald-600 to-green-600",
                },
                {
                  icon: FaPhone,
                  title: "Call Us 24/7",
                  content: "+92 328 1969250",
                  color: "from-blue-600 to-indigo-600",
                  link: "tel:+923281969250",
                },
                {
                  icon: FaEnvelope,
                  title: "Email Support",
                  content: "support@akhuwat.network",
                  color: "from-purple-600 to-pink-600",
                  link: "mailto:support@akhuwat.network",
                },
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${contact.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <contact.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h5 className="font-bold text-white mb-2">{contact.title}</h5>
                      {contact.link ? (
                        <a
                          href={contact.link}
                          className="text-gray-300 hover:text-emerald-400 transition-colors duration-300"
                        >
                          {contact.content}
                        </a>
                      ) : (
                        <p className="text-gray-300">{contact.content}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {[
              { number: "4.2M+", label: "Beneficiaries Served", icon: "👥" },
              { number: "₨50L", label: "Maximum Loan", icon: "💰" },
              { number: "0%", label: "Interest Rate", icon: "🚫" },
              { number: "15+", label: "Years of Service", icon: "⏰" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-emerald-400/30 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <motion.div
                  className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-2"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-400 font-medium text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <motion.div
                className="flex items-center gap-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <FaHeart className="text-red-400 animate-pulse" />
                <p className="text-gray-400 text-sm">
                  © 2025 Akhuwat Network. All rights reserved. | Empowering Pakistan since 2001
                </p>
              </motion.div>

              <motion.div
                className="flex items-center gap-4 text-sm text-gray-400"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <span className="flex items-center gap-2">
                  <FaGlobe className="w-4 h-4" />
                  www.akhuwat.network
                </span>
                <span>|</span>
                <span className="flex items-center gap-1">
                  Made with <FaHeart className="text-red-400 w-3 h-3" /> for Pakistan
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
