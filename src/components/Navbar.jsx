"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  FaPhone,
  FaWhatsapp,
  FaBars,
  FaTimes,
  FaHome,
  FaHandHoldingUsd,
  FaInfoCircle,
  FaEnvelope,
  FaChevronDown,
} from "react-icons/fa"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <FaHome />,
      description: "Welcome to Akhuwat Network",
    },
    {
      name: "Loan Services",
      link: "/loan-services",
      icon: <FaHandHoldingUsd />,
      description: "Interest-free financial solutions",
      dropdown: [
        { name: "Business Loans", link: "/loan-services#business" },
        { name: "Personal Loans", link: "/loan-services#personal" },
        { name: "Education Loans", link: "/loan-services#education" },
        { name: "Housing Loans", link: "/loan-services#housing" },
      ],
    },
    {
      name: "About Akhuwat",
      link: "/about-us",
      icon: <FaInfoCircle />,
      description: "Our mission and impact",
    },
    {
      name: "Contact",
      link: "/contact-us",
      icon: <FaEnvelope />,
      description: "Get in touch with us",
    },
  ]

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-2xl border-b border-emerald-100"
            : "bg-white/90 backdrop-blur-sm"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <div className="flex justify-between items-center px-4 py-4 max-w-7xl mx-auto">
          {/* Enhanced Logo */}
          <motion.a
            href="/"
            className="flex items-center gap-4 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              <motion.img
                src="/akhuwatfundslogo.png"
                alt="Akhuwat Network"
                className="h-14 w-14 rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              />
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur"></div>
            </div>
            <div className="hidden sm:block">
              <motion.h1
                className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                Akhuwat Network
              </motion.h1>
              <motion.p
                className="text-sm text-gray-600 font-medium"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                Pakistan's Largest Interest-Free Microfinance
              </motion.p>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.dropdown ? item.name : null)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <motion.a
                  href={item.link}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 group relative overflow-hidden"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.name}</span>
                  {item.dropdown && <FaChevronDown className="text-xs" />}

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl"></div>
                </motion.a>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.dropdown && activeDropdown === item.name && (
                    <motion.div
                      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="p-2">
                        {item.dropdown.map((dropItem, dropIndex) => (
                          <motion.a
                            key={dropItem.name}
                            href={dropItem.link}
                            className="block px-4 py-3 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all duration-200"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: dropIndex * 0.05 }}
                            whileHover={{ x: 5 }}
                          >
                            {dropItem.name}
                          </motion.a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Contact Buttons & Mobile Menu */}
          <div className="flex items-center gap-3">
            {/* Apply Now Button */}
            <motion.a
              href="/loan-services"
              className="hidden md:flex bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 items-center gap-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              Apply Now
              <motion.span animate={{ x: [0, 3, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
                →
              </motion.span>
            </motion.a>

            {/* WhatsApp Button */}
            <motion.a
              href="https://wa.me/923281969250"
              className="hidden md:flex bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
            >
              <FaWhatsapp className="w-5 h-5 group-hover:animate-bounce" />
            </motion.a>

            {/* Call Button */}
            <motion.a
              href="tel:+923281969250"
              className="hidden md:flex bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
            >
              <FaPhone className="w-4 h-4 group-hover:animate-pulse" />
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                {isOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200 shadow-xl"
            >
              <div className="px-4 py-6 space-y-4 max-h-96 overflow-y-auto">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.link}
                    className="flex items-center gap-4 px-4 py-4 rounded-2xl font-medium transition-all duration-300 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsOpen(false)}
                    whileHover={{ x: 5, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full flex items-center justify-center text-emerald-600 group-hover:from-emerald-200 group-hover:to-teal-200 transition-all duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-semibold">{item.name}</div>
                      <div className="text-xs text-gray-500">{item.description}</div>
                    </div>
                  </motion.a>
                ))}

                {/* Mobile Contact Buttons */}
                <div className="flex gap-3 pt-4 border-t border-gray-200">
                  <motion.a
                    href="https://wa.me/923281969250"
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white py-4 px-4 rounded-2xl font-semibold text-center transition-all duration-300 flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaWhatsapp />
                    WhatsApp
                  </motion.a>
                  <motion.a
                    href="tel:+923281969250"
                    className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-4 px-4 rounded-2xl font-semibold text-center transition-all duration-300 flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaPhone />
                    Call Now
                  </motion.a>
                </div>

                {/* Apply Now Mobile */}
                <motion.a
                  href="/loan-services"
                  className="block w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-4 px-6 rounded-2xl font-bold text-center shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Apply for Loan Now
                </motion.a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 z-50 origin-left"
        style={{
          scaleX:
            typeof window !== "undefined"
              ? window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)
              : 0,
        }}
        initial={{ scaleX: 0 }}
      />
    </>
  )
}

export default Navbar
