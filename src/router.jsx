import { createBrowserRouter } from "react-router-dom"
import RootLayout from "./layout/RootLayout"
import HomePage from "./pages/HomePage"
import ContactUsPage from "./pages/ContactUsPage"
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage"
import AboutUsPage from "./pages/AboutUsPage"
import LoanServicesPage from "./pages/LoanServicesPage"
import TermsConditionsPage from "./pages/TermsConditionsPage"
import DisclaimerPage from "./pages/DisclaimerPage"
import ImpactPage from "./pages/ImpactPage"
import ServicesPage from "./pages/ServicesPage"
import MicrofinanceLoansPage from "./pages/MicrofinanceLoansPage"
import BusinessLoansPage from "./pages/BusinessLoansPage"
import HelpCenterPage from "./pages/HelpCenterPage"



const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/loan-services",
        element: <LoanServicesPage />,
      },
	 
      {
        path: "/microfinance-loans",
        element: <MicrofinanceLoansPage/>,
      },
	  {
        path: "/business-loans",
        element: <BusinessLoansPage/>,
      },
	 {
        path: "/help-center",
        element: <HelpCenterPage/>,
      },
	  {
        path: "/services",
        element: <ServicesPage />,
      },
      {
        path: "/impact",
        element: <ImpactPage />,
      },
      {
        path: "/about-us",
        element: <AboutUsPage />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicyPage />,
      },
      {
        path: "/contact-us",
        element: <ContactUsPage />,
      },
      {
        path: "/terms-and-conditions",
        element: <TermsConditionsPage />,
      },
      {
        path: "/disclaimer",
        element: <DisclaimerPage />,
      },
    ],
  },
])

export default router
