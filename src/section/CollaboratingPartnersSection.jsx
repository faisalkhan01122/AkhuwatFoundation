
import { motion } from "framer-motion"

const partners = [
  {
    id: 1,
    name: "APFNA",
    fullName: "Association of Physicians of Pakistani Descent of North America",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop",
    description: "Leading medical association supporting healthcare initiatives",
  },
  {
    id: 2,
    name: "Islamic Society",
    fullName: "Islamic Society of North America",
    logo: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=200&h=100&fit=crop",
    description: "Promoting Islamic values and community development",
  },
  {
    id: 3,
    name: "United Way",
    fullName: "United Way International",
    logo: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=200&h=100&fit=crop",
    description: "Global network fighting for health, education, and financial stability",
  },
  {
    id: 4,
    name: "Rotary Club",
    fullName: "Rotary International",
    logo: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=200&h=100&fit=crop",
    description: "Service organization dedicated to solving world problems",
  },
  {
    id: 5,
    name: "Lions Club",
    fullName: "Lions Clubs International",
    logo: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=200&h=100&fit=crop",
    description: "Empowering volunteers to serve their communities",
  },
  {
    id: 6,
    name: "Habitat",
    fullName: "Habitat for Humanity",
    logo: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=200&h=100&fit=crop",
    description: "Building homes, communities and hope",
  },
]

const CollaboratingPartnersSection = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400 rounded-full animate-float"></div>
        <div className="absolute bottom-32 right-20 w-24 h-24 bg-green-400 rounded-full animate-float-reverse"></div>
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
          <motion.span
            className="text-green-600 font-semibold text-lg mb-2 block"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Akhuwat USA
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Collaborating <span className="gradient-text">Partners</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Working together with leading organizations to create lasting impact in communities worldwide
          </motion.p>
        </motion.div>

     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20">
  {partners.map((partner, index) => (
    <motion.div
      key={partner.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, rotateX: 2, rotateY: 2 }}
      className="group relative bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-green-300 transition-all duration-500 text-center p-6 overflow-hidden"
    >
      {/* Glow Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-green-100 via-white to-blue-100 opacity-10 blur-2xl rounded-2xl pointer-events-none" />

      {/* Floating Glow Dot */}
      <div className="absolute -top-4 -left-4 w-16 h-16 bg-green-400 rounded-full opacity-30 blur-2xl animate-pulse pointer-events-none"></div>

      {/* Partner Logo */}
      <motion.div
        className="flex justify-center items-center h-20 mb-4"
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
      >
        <img
          src={partner.logo}
          alt={partner.name}
          className="h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
        />
      </motion.div>

      {/* Title */}
      <motion.h3
        className="text-lg font-bold text-gray-800 mb-2 transition-colors duration-300 group-hover:text-green-600"
        whileHover={{ scale: 1.05 }}
      >
        {partner.name}
      </motion.h3>

      {/* Description */}
      <p className="text-sm text-gray-600 mb-3 leading-relaxed min-h-[60px]">
        {partner.description}
      </p>

      {/* Full Name (on hover reveal) */}
      <motion.div
        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ height: 0 }}
        animate={{ height: "auto" }}
      >
        <p className="text-xs text-green-700 font-semibold italic">
          {partner.fullName}
        </p>
      </motion.div>
    </motion.div>
  ))}
</div>


        {/* Partnership Benefits */}
        <motion.div
          className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <motion.h3
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Why Partner <span className="gradient-text">With Us?</span>
              </motion.h3>

              <div className="space-y-4">
                {[
                  {
                    icon: "🤝",
                    title: "Collaborative Impact",
                    desc: "Join forces to create meaningful change in communities",
                  },
                  {
                    icon: "🌍",
                    title: "Global Reach",
                    desc: "Extend your impact across multiple countries and regions",
                  },
                  {
                    icon: "💡",
                    title: "Innovative Solutions",
                    desc: "Develop cutting-edge approaches to poverty alleviation",
                  },
                  {
                    icon: "📈",
                    title: "Measurable Results",
                    desc: "Track and measure the real impact of our joint efforts",
                  },
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-2xl">{benefit.icon}</span>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{benefit.title}</h4>
                      <p className="text-gray-600 text-sm">{benefit.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=500&h=400&fit=crop"
                  alt="Partnership"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                {/* Floating Stats */}
                <motion.div
                  className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">50+</div>
                    <div className="text-sm text-gray-600">Active Partners</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white px-10 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-semibold animate-pulse-glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Become a Partner
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default CollaboratingPartnersSection
