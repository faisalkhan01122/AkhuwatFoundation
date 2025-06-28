"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FaCalculator, FaMoneyBillWave, FaClock, FaHandHoldingHeart  } from "react-icons/fa"

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(500000)
  const [loanTerm, setLoanTerm] = useState(24)
  const [loanType, setLoanType] = useState("business")

  const loanTypes = [
    { id: "business", name: "Business Loan", maxAmount: 2500000, icon: "🏢" },
    { id: "personal", name: "Personal Loan", maxAmount: 1000000, icon: "👤" },
    { id: "education", name: "Education Loan", maxAmount: 1500000, icon: "🎓" },
    { id: "housing", name: "Housing Loan", maxAmount: 5000000, icon: "🏠" },
  ]

  const selectedLoanType = loanTypes.find((type) => type.id === loanType)
  const monthlyPayment = loanAmount / loanTerm
  const totalPayment = loanAmount // No interest in Akhuwat loans

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 bg-emerald-400 rounded-full animate-pulse blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-teal-400 rounded-full animate-ping blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex items-center justify-center gap-3 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full flex items-center justify-center">
              <FaCalculator className="text-white text-xl" />
            </div>
            <span className="text-emerald-600 font-bold text-lg">Loan Calculator</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Calculate Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              Interest-Free
            </span>{" "}
            Loan
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Plan your financial journey with our easy-to-use loan calculator. See how much you can borrow and your
            monthly payments.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Calculator Form */}
          <motion.div
            className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <FaCalculator className="text-emerald-600" />
              Loan Calculator
            </h3>

            <div className="space-y-8">
              {/* Loan Type Selection */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-4">Select Loan Type</label>
                <div className="grid grid-cols-2 gap-3">
                  {loanTypes.map((type) => (
                    <motion.button
                      key={type.id}
                      onClick={() => {
                        setLoanType(type.id)
                        setLoanAmount(Math.min(loanAmount, type.maxAmount))
                      }}
                      className={`p-4 rounded-2xl border-2 transition-all duration-300 ${
                        loanType === type.id
                          ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                          : "border-gray-200 hover:border-emerald-300"
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="text-2xl mb-2">{type.icon}</div>
                      <div className="font-semibold text-sm">{type.name}</div>
                      <div className="text-xs text-gray-500">Up to ₨{(type.maxAmount / 100000).toFixed(0)}L</div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Loan Amount */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-4">
                  Loan Amount: ₨{loanAmount.toLocaleString()}
                </label>
                <input
                  type="range"
                  min="50000"
                  max={selectedLoanType?.maxAmount || 1000000}
                  step="50000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number.parseInt(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>₨50K</span>
                  <span>₨{((selectedLoanType?.maxAmount || 1000000) / 100000).toFixed(0)}L</span>
                </div>
              </div>

              {/* Loan Term */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-4">Loan Term: {loanTerm} months</label>
                <input
                  type="range"
                  min="6"
                  max="60"
                  step="6"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(Number.parseInt(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>6 months</span>
                  <span>60 months</span>
                </div>
              </div>

              {/* Apply Button */}
              <motion.a
                 href="https://wa.me/923281969250"
  target="_blank"
  rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-4 px-6 rounded-2xl font-bold text-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Apply for This Loan
                <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
                  →
                </motion.div>
              </motion.a>
            </div>
          </motion.div>

          {/* Results Panel */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Monthly Payment */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-8 text-white">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <FaMoneyBillWave className="text-xl" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Monthly Payment</h4>
                  <p className="text-emerald-100 text-sm">Interest-free installment</p>
                </div>
              </div>
              <div className="text-4xl font-bold">₨{monthlyPayment.toLocaleString()}</div>
            </div>

            {/* Total Payment */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <FaClock className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Total Payment</h4>
                  <p className="text-gray-600 text-sm">No interest charges</p>
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900">₨{totalPayment.toLocaleString()}</div>
              <div className="text-sm text-emerald-600 font-semibold mt-2">✅ Same as loan amount - No interest!</div>
            </div>

            {/* Interest Savings */}
            <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-3xl p-8 border border-emerald-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                  <FaHandHoldingHeart  className="text-white text-xl" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Interest Savings</h4>
                  <p className="text-gray-600 text-sm">Compared to conventional banks</p>
                </div>
              </div>
              <div className="text-3xl font-bold text-emerald-600">
                ₨{Math.round(loanAmount * 0.15).toLocaleString()}
              </div>
              <div className="text-sm text-gray-600 mt-2">Estimated savings vs 15% annual interest</div>
            </div>

            {/* Features */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <h4 className="text-lg font-semibold text-gray-900 mb-6">Loan Features</h4>
              <div className="space-y-4">
                {[
                  "0% Interest Rate (Riba-Free)",
                  "No Hidden Charges",
                  "Flexible Repayment Terms",
                  "Quick Approval Process",
                  "Community-Based Verification",
                  "No Collateral Required",
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(to right, #059669, #0d9488);
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }

        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(to right, #059669, #0d9488);
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </section>
  )
}

export default LoanCalculator
