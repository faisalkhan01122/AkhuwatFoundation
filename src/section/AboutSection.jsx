import React from "react";

const AboutSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-20 py-10 bg-white">
      {/* Text Content */}
      <div className="md:w-1/2 space-y-4">
        <h6 className="text-sm font-semibold text-gray-500">ABOUT US</h6>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Akhuwat Foundation Loan
        </h2>
        <p className="text-gray-600">
          If you are considering applying for a loan from the Akhuwat
          Foundation, you're making a smart choice. Akhuwat offers interest-free
          loans (Qarz-e-Hasna) to help individuals meet their financial needs
          while improving their quality of life. You can apply easily online,
          with loan options ranging from Rs. 500,000 to Rs. 50 million, all from
          the comfort of your home.
        </p>
        <p className="text-gray-600">
          Akhuwat provides five types of loans to suit various needs: Personal
          Loans, Student Loans, Wedding Loans, Business Loans, and Car Loans.
          Their application process is simple and user-friendly, allowing you to
          access ethical, interest-free support.
        </p>
        <a
          href="#"
          className="inline-block mt-4 text-white bg-green-600 hover:bg-green-700 transition px-6 py-2 rounded-full"
        >
          Find Out More
        </a>
      </div>

      {/* Image */}
      <div className="md:w-1/2 mt-8 md:mt-0 md:ml-10">
        <img
          src="https://i.postimg.cc/rmwXRKMC/akhuwatfoundationbusinessloan.jpg"
          alt="Akhuwat Foundation"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default AboutSection;
