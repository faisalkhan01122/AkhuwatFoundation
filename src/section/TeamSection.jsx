"use client"

import { motion } from "framer-motion"
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa"

const teamMembers = [
  {
    id: 1,
    name: "Dr. Amjad Saqib",
    role: "The Founder",
    image: "/images.jpg",
    bio: "Visionary leader who founded Akhuwat with the mission to eliminate poverty through interest-free microfinance.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "amjad@akhuwat.org",
    },
  },
  {
    id: 2,
    name: "Mr. Azhar Hameed",
    role: "Global President",
    image: "/Blog2.jpg",
    bio: "Leading global operations and strategic partnerships to expand Akhuwat's reach worldwide.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "azhar@akhuwat.org",
    },
  },
  {
    id: 3,
    name: "Dr. Nauman Mufti",
    role: "President",
    image: "/numan.jpg",
    bio: "Overseeing organizational development and ensuring sustainable growth of our programs.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "nauman@akhuwat.org",
    },
  },
  {
    id: 4,
    name: "Mr. Asim Ashary",
    role: "Director",
    image: "/yuman-p-300x300.jpg",
    bio: "Managing operational excellence and program implementation across all regions.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "asim@akhuwat.org",
    },
  },
  // {
  //   id: 5,
  //   name: "Mr. Yuman Pirzada",
  //   role: "Director",
  //   image: "/dfsdf-1.jpg",
  //   bio: "Leading financial operations and ensuring transparency in all our lending processes.",
  //   social: {
  //     linkedin: "#",
  //     twitter: "#",
  //     email: "yuman@akhuwat.org",
  //   },
  // },
  // {
  //   id: 6,
  //   name: "Mr. Shahid Jamil",
  //   role: "Ambassador, Maryland",
  //   image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
  //   bio: "Representing Akhuwat in Maryland and building community partnerships in the region.",
  //   social: {
  //     linkedin: "#",
  //     twitter: "#",
  //     email: "shahid@akhuwat.org",
  //   },
  // },
  // {
  //   id: 7,
  //   name: "Mr. Mian Mushtaq Javed",
  //   role: "Ambassador, New York & Florida",
  //   image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=200&h=200&fit=crop&crop=face",
  //   bio: "Expanding Akhuwat's presence in New York and Florida through strategic initiatives.",
  //   social: {
  //     linkedin: "#",
  //     twitter: "#",
  //     email: "mushtaq@akhuwat.org",
  //   },
  // },
]

const TeamSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-green-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-32 h-32 bg-blue-400 rounded-full animate-float"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-green-400 rounded-full animate-float-reverse"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-purple-400 rounded-full animate-pulse"></div>
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
            Our <span className="gradient-text">Team</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Meet the dedicated leaders working tirelessly to eliminate poverty and empower communities
          </motion.p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <motion.img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Social Links */}
                <motion.div
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ y: 20 }}
                  whileInView={{ y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {[
                    { icon: <FaLinkedin />, link: member.social.linkedin, color: "bg-blue-600" },
                    { icon: <FaTwitter />, link: member.social.twitter, color: "bg-sky-500" },
                    { icon: <FaEnvelope />, link: `mailto:${member.social.email}`, color: "bg-green-600" },
                  ].map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.link}
                      className={`w-10 h-10 ${social.color} rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300`}
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </motion.div>

                {/* Role Badge */}
                <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {member.role}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <motion.h3
                  className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  {member.name}
                </motion.h3>

                <p className="text-gray-600 mb-4 leading-relaxed text-sm">{member.bio}</p>

                {/* Contact Button */}
                <motion.button
                  className="w-full py-2 bg-gradient-to-r from-green-600 to-emerald-700 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 btn-animate"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Connect
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join Mission Section */}
        <motion.div
          className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full translate-y-24 -translate-x-24"></div>
          </div>

          <div className="relative z-10 text-center">
            <motion.span
              className="text-green-200 font-semibold text-lg mb-2 block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Join Our Mission
            </motion.span>

            <motion.h3
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Help deserving students in breaking the chains of poverty and securing a bright future
            </motion.h3>

            <motion.p
              className="text-green-100 mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Akhuwat's vision of a poverty-free society hinges on addressing its root cause: illiteracy among the
              impoverished. Recognizing education's vital role in fostering innovation, empathy, and limitless
              possibilities, Akhuwat remains committed to providing free high-quality education across primary,
              secondary, and higher levels.
            </motion.p>

            <motion.button
              className="bg-white text-green-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-green-50 transition-all duration-300 shadow-lg hover:shadow-xl btn-animate"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Donate Now ❤️
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TeamSection
