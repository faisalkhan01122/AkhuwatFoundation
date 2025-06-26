import React from "react";
import { motion } from "framer-motion";

const LoanSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-green-50 to-white py-20 px-6 text-center overflow-hidden">
      {/* Background bubbles */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-10 w-24 h-24 bg-green-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-16 right-16 w-32 h-32 bg-green-300 rounded-full opacity-20 animate-ping"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-8"
        >
          Akhuwat Loan Scheme 2025
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-gray-700 text-base sm:text-lg leading-relaxed"
        >
          The Akhuwat Loan Scheme 2025 continues the foundation's mission of
          providing interest-free financial assistance to empower individuals and
          communities across Pakistan. This year's program features enhanced
          accessibility with simplified application procedures, expanded loan
          categories, and increased outreach to underserved areas. Whether you
          need support for education, healthcare, housing, or business
          development, the 2025 scheme offers tailored solutions to help you
          achieve your goals while maintaining the core principles of dignity and
          mutual support.
        </motion.p>
      </div>
    </section>
  );
};

export default LoanSection;

