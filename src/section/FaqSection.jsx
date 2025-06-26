import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Who is eligible for an Akhuwat loan?",
    answer:
      "Usually, people with low income who can’t use regular banks because they don’t have collateral or good credit can apply. The requirements for eligibility may change depending on the type of loan.",
  },
  {
    question: "What kind of loans does Akhuwat offer?",
    answer:
      "Akhuwat offers interest-free loans primarily for micro-enterprises, small businesses, education, health care, and housing purposes, focusing on empowering individuals and communities.",
  },
  {
    question: "How can I apply for an Akhuwat loan?",
    answer:
      "Applicants can apply by visiting an Akhuwat office, attending a community meeting, or through our website, where they can find application forms and details on the submission process.",
  },
  {
    question: "What documents are required to apply for a loan?",
    answer:
      "Basic documentation includes a valid ID card, proof of residence, and a business plan or detailed description of how the loan will be utilized, depending on the loan type.",
  },
  {
    question: "What is the repayment process for Akhuwat loans?",
    answer:
      "Repayment terms are flexible and designed to accommodate the borrower’s financial situation, typically structured in monthly installments.",
  },
  {
    question: "Is collateral required for an Akhuwat loan?",
    answer:
      "No, Akhuwat doesn’t need traditional collateral. It focuses on trust and community support.",
  },
  {
    question: "Can women apply for Akhuwat loans?",
    answer:
      "Yes, Akhuwat actively encourages women to apply for loans, offering various programs specifically designed to support women entrepreneurs and individuals.",
  },
  {
    question: "How long does it take to process an Akhuwat loan application?",
    answer:
      "Akhuwat tries to finish the review and give out money quickly, usually within a few weeks, but the time can change.",
  },
  {
    question: "Can I apply for an Akhuwat loan to fund my education?",
    answer:
      "Yes, Akhuwat provides loans for educational purposes, supporting individuals seeking to further their studies or vocational training.",
  },
  {
    question: "What happens if I can't repay the loan on time?",
    answer:
      "Akhuwat helps borrowers who are having trouble repaying their loans by adjusting the repayment schedule to make it easier for them.",
  },
];

const FaqItem = ({ faq, index, isOpen, onClick }) => (
  <motion.div
    className="border border-gray-200 rounded-xl mb-4 overflow-hidden"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.05 }}
    viewport={{ once: true }}
  >
    <button
      onClick={onClick}
      className="w-full flex items-center justify-between p-4 bg-green-100 hover:bg-green-200 transition-colors duration-300 text-left"
    >
      <div className="flex items-center gap-2 text-green-700 font-medium">
        <span className="text-lg">■</span>
        <span>{faq.question}</span>
      </div>
      <span className="text-green-700">{isOpen ? "▲" : "▼"}</span>
    </button>
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          className="p-4 bg-white text-gray-700 text-sm"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {faq.answer}
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-10"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Frequently Asked Questions (FAQs)
        </motion.h2>

        {faqs.map((faq, index) => (
          <FaqItem
            key={index}
            index={index}
            faq={faq}
            isOpen={openIndex === index}
            onClick={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
          />
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
