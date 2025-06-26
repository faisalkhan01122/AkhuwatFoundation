"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0)
  const [currentText, setCurrentText] = useState(0)

  const loadingTexts = [
    "Connecting to Akhuwat Network...",
    "Loading Interest-Free Solutions...",
    "Preparing Your Financial Journey...",
    "Almost Ready...",
  ]

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          setTimeout(onComplete, 500)
          return 100
        }
        return prev + 2
      })
    }, 50)

    const textInterval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % loadingTexts.length)
    }, 1000)

    return () => {
      clearInterval(progressInterval)
      clearInterval(textInterval)
    }
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900 z-50 flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-white rounded-full animate-ping"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white rounded-full animate-bounce"></div>
      </div>

      <div className="text-center text-white relative z-10">
        {/* Logo Animation */}
        <motion.div
          className="mb-8"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring" }}
        >
          <div className="relative">
            <motion.img
              src="/akhuwatfundslogo.png"
              alt="Akhuwat Network"
              className="w-24 h-24 mx-auto rounded-full shadow-2xl"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(16, 185, 129, 0.5)",
                  "0 0 40px rgba(16, 185, 129, 0.8)",
                  "0 0 20px rgba(16, 185, 129, 0.5)",
                ],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
            <motion.div
              className="absolute inset-0 border-4 border-emerald-400 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
          </div>
        </motion.div>

        {/* Brand Name */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Akhuwat Network
        </motion.h1>

        <motion.p
          className="text-emerald-200 text-lg mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Pakistan's Largest Interest-Free Microfinance
        </motion.p>

        {/* Progress Bar */}
        <motion.div
          className="w-80 mx-auto mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <div className="bg-white/20 rounded-full h-3 overflow-hidden backdrop-blur-sm">
            <motion.div
              className="h-full bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
          <div className="text-emerald-200 text-sm mt-2">{progress}%</div>
        </motion.div>

        {/* Loading Text */}
        <motion.p
          key={currentText}
          className="text-white/80 text-sm"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
        >
          {loadingTexts[currentText]}
        </motion.p>

        {/* Loading Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-emerald-400 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default LoadingScreen
