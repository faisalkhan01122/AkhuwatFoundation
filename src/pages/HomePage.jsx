"use client"

import { Suspense, lazy } from "react"
import { motion } from "framer-motion"
import HeroSection from "../components/HeroSection"
import FooterBar from "../components/FooterBar"

// Lazy load sections for better performance
const AkhuwatScheme = lazy(() => import("../section/AkhuwatScheme"))
const LoanInt = lazy(() => import("../section/LoanInt"))
const OurServices = lazy(() => import("../section/OurServices"))
const TestimonialsSection = lazy(() => import("../section/TestimonialsSection"))
const LoanSection = lazy(() => import("../section/LoanSection"))
const LoanCardSection = lazy(() => import("../section/LoanCardSection"))
const AkhuwatLoanSection = lazy(() => import("../section/AkhuwatLoanSection"))
const FeaturedCausesSection = lazy(() => import("../section/FeaturedCausesSection"))
const AkhuwatTrustSection = lazy(() => import("../section/AkhuwatTrustSection"))
const ApplyLoanSteps = lazy(() => import("../section/ApplyLoanSteps"))
const LoanSchemeSection = lazy(() => import("../section/LoanSchemeSection"))
const TeamSection = lazy(() => import("../section/TeamSection"))
const AboutSection = lazy(() => import("../section/AboutSection"))
const ServicesCarousel = lazy(() => import("../section/ServicesCarousel"))
const FaqSection = lazy(() => import("../section/FaqSection"))
const CollaboratingPartnersSection = lazy(() => import("../section/CollaboratingPartnersSection"))

const SectionLoader = () => (
  <div className="flex justify-center items-center py-20">
    <div className="flex items-center gap-4">
      <div className="relative">
        <div className="w-8 h-8 border-4 border-emerald-200 rounded-full animate-spin"></div>
        <div className="absolute inset-0 w-8 h-8 border-4 border-emerald-600 rounded-full border-t-transparent animate-spin"></div>
      </div>
      <span className="text-gray-600 font-medium">Loading Akhuwat content...</span>
    </div>
  </div>
)

const LazySection = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
    viewport={{ once: true, margin: "-100px" }}
  >
    <Suspense fallback={<SectionLoader />}>{children}</Suspense>
  </motion.div>
)

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section - Load immediately */}
      <HeroSection />
      <FooterBar />

      {/* Lazy loaded sections with staggered animations */}
      <LazySection>
        <AkhuwatScheme />
      </LazySection>

      <LazySection delay={0.1}>
        <LoanInt />
      </LazySection>

      <LazySection delay={0.2}>
        <OurServices />
      </LazySection>

      <LazySection delay={0.1}>
        <TestimonialsSection />
      </LazySection>

      <LazySection delay={0.2}>
        <LoanSection />
      </LazySection>

      <LazySection delay={0.1}>
        <LoanCardSection />
      </LazySection>

      <LazySection delay={0.2}>
        <AkhuwatLoanSection />
      </LazySection>

      <LazySection delay={0.1}>
        <FeaturedCausesSection />
      </LazySection>

      <LazySection delay={0.2}>
        <AkhuwatTrustSection />
      </LazySection>

      <LazySection delay={0.1}>
        <ApplyLoanSteps />
      </LazySection>

      <LazySection delay={0.2}>
        <LoanSchemeSection />
      </LazySection>

      <LazySection delay={0.1}>
        <TeamSection />
      </LazySection>

      <LazySection delay={0.2}>
        <CollaboratingPartnersSection />
      </LazySection>

      <LazySection delay={0.1}>
        <AboutSection />
      </LazySection>

      <LazySection delay={0.2}>
        <ServicesCarousel />
      </LazySection>

      <LazySection delay={0.1}>
        <FaqSection />
      </LazySection>
    </div>
  )
}

export default HomePage
