"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link, useLocation } from "react-router-dom"
import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaBuilding,
  FaUsers,
  FaUser,
  FaMedkit,
  FaGraduationCap,
  FaHome,
  FaExclamationTriangle,
  FaPhone,
} from "react-icons/fa"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const loanServices = [
    { name: "Business Loans", path: "/loans/business", icon: FaBuilding, desc: "Up to ₨30 Lacs for business growth" },
    { name: "Microfinance Loans", path: "/loans/microfinance", icon: FaUsers, desc: "₨50K-₨5L for small entrepreneurs" },
    { name: "Personal Loans", path: "/loans/personal", icon: FaUser, desc: "Up to ₨15 Lacs for personal needs" },
    { name: "Healthcare Loans", path: "/loans/healthcare", icon: FaMedkit, desc: "Medical emergency financing" },
    { name: "Education Loans", path: "/loans/education", icon: FaGraduationCap, desc: "Complete education support" },
    { name: "Housing Loans", path: "/loans/housing", icon: FaHome, desc: "Up to ₨50 Lacs for dream homes" },
    { name: "Emergency Loans", path: "/loans/emergency", icon: FaExclamationTriangle, desc: "Instant crisis support" },
  ]

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Loan Services", path: "/loans", dropdown: loanServices },
    { name: "Impact", path: "/impact" },
    { name: "Contact", path: "/contact-us" },
    { name: "Help Center", path: "/help-center" },
  ]

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-8 transition-all duration-500 ${
          scrolled ? "bg-white/90 shadow-lg backdrop-blur-md border-b border-gray-200" : "bg-transparent"
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src="/akhuwatfundslogo.png" alt="Logo" className="w-12 h-12 rounded-full" />
            <div className="hidden md:block">
              <h1 className={`text-xl font-bold ${scrolled ? "text-gray-800" : "text-white"}`}>Akhuwat Network</h1>
              <p className={`text-sm ${scrolled ? "text-emerald-600" : "text-emerald-300"}`}>Interest-Free Loans</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-4">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.path}
                  className={`flex items-center gap-1 px-5 py-2 rounded-full font-medium transition-all duration-200 ${
                    location.pathname === item.path
                      ? "bg-emerald-600 text-white shadow-md"
                      : scrolled
                        ? "text-gray-800 hover:bg-emerald-100 hover:text-emerald-600"
                        : "text-white hover:bg-white/20"
                  }`}
                >
                  {item.name}
                  {item.dropdown && <FaChevronDown className="w-3 h-3 mt-0.5" />}
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {item.dropdown && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3 }}
                      className="absolute top-full left-0 mt-2 w-[320px] bg-white rounded-2xl shadow-2xl p-4 grid grid-cols-1 gap-3 z-50"
                    >
                      {item.dropdown.map((loan) => (
                        <Link
                          key={loan.name}
                          to={loan.path}
                          onClick={() => setActiveDropdown(null)}
                          className="flex gap-3 items-start hover:bg-emerald-50 p-3 rounded-xl transition"
                        >
                          <div className="bg-emerald-600 text-white p-2 rounded-full">
                            <loan.icon className="w-4 h-4" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800">{loan.name}</h4>
                            <p className="text-xs text-gray-500">{loan.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA & Phone */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+923281969250" className="text-sm font-medium text-blue-600 hover:underline flex items-center gap-2">
              <FaPhone /> +92 328 1969250
            </a>
           <a
  href="https://wa.me/923281969250"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-gradient-to-r from-emerald-600 to-teal-600 px-5 py-2 rounded-full text-white font-semibold hover:shadow-lg"
>
  Apply Now →
</a>

          </div>

          {/* Mobile Button */}
          <button
            className="lg:hidden text-2xl p-2 rounded-md transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes className={scrolled ? "text-gray-800" : "text-white"} /> : <FaBars className={scrolled ? "text-gray-800" : "text-white"} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/60 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl p-6 overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mt-16 space-y-4">
                {navItems.map((item) => (
                  <div key={item.name}>
                    <Link
                      to={item.path}
                      className="block py-3 px-4 rounded-lg font-semibold text-gray-700 hover:bg-emerald-100"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.dropdown && (
                      <div className="ml-4 space-y-2 mt-1">
                        {item.dropdown.map((loan) => (
                          <Link
                            key={loan.name}
                            to={loan.path}
                            className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg"
                            onClick={() => setIsOpen(false)}
                          >
                            <loan.icon className="w-4 h-4" />
                            {loan.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <a
                    href="tel:+923281969250"
                    className="flex items-center gap-2 text-blue-600 font-medium"
                  >
                    <FaPhone /> +92 328 1969250
                  </a>
                  <a
                   href="https://wa.me/923281969250"
  target="_blank"
  rel="noopener noreferrer"
                    className="mt-4 block w-full text-center bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold py-3 rounded-xl"
                    onClick={() => setIsOpen(false)}
                  >
                    Apply Now →
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
