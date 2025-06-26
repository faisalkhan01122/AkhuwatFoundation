"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import {
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaAward,
  FaUsers,
  FaHeart,
  FaGlobe,
} from "react-icons/fa"

const teamMembers = [
  {
    id: 1,
    name: "Dr. Amjad Saqib",
    role: "Founder & Executive Director",
    image: "/images.jpg",
    bio: "Visionary leader who founded Akhuwat with the mission to eliminate poverty through interest-free microfinance. A pioneer in Islamic banking and social entrepreneurship.",
    achievements: ["Founded Akhuwat in 2001", "Served 4.5M+ families", "Zero-interest pioneer"],
    location: "Lahore, Pakistan",
    experience: "25+ Years",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "amjad@akhuwat.org",
      phone: "+92-42-111-253-928",
    },
    color: "from-emerald-600 to-teal-700",
  },
  {
    id: 2,
    name: "Mr. Azhar Hameed",
    role: "Global President",
    image: "/Blog2.jpg",
    bio: "Leading global operations and strategic partnerships to expand Akhuwat's reach worldwide. Expert in international development and microfinance.",
    achievements: ["Global expansion leader", "Strategic partnerships", "International development"],
    location: "Islamabad, Pakistan",
    experience: "20+ Years",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "azhar@akhuwat.org",
      phone: "+92-51-111-253-928",
    },
    color: "from-blue-600 to-indigo-700",
  },
  {
    id: 3,
    name: "Dr. Nauman Mufti",
    role: "President Operations",
    image: "/numan.jpg",
    bio: "Overseeing organizational development and ensuring sustainable growth of our programs. Specialist in operational excellence and program management.",
    achievements: ["Operational excellence", "Program management", "Sustainable growth"],
    location: "Karachi, Pakistan",
    experience: "18+ Years",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "nauman@akhuwat.org",
      phone: "+92-21-111-253-928",
    },
    color: "from-purple-600 to-pink-700",
  },
  {
    id: 4,
    name: "Mr. Asim Ashary",
    role: "Director Programs",
    image: "/yuman-p-300x300.jpg",
    bio: "Managing operational excellence and program implementation across all regions. Expert in field operations and community engagement.",
    achievements: ["Program implementation", "Community engagement", "Field operations"],
    location: "Faisalabad, Pakistan",
    experience: "15+ Years",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "asim@akhuwat.org",
      phone: "+92-41-111-253-928",
    },
    color: "from-orange-600 to-red-700",
  },
  {
    id: 5,
    name: "Ms. Fatima Sheikh",
    role: "Director Women Empowerment",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
    bio: "Leading women empowerment initiatives and microfinance programs specifically designed for female entrepreneurs across Pakistan.",
    achievements: ["Women empowerment", "Female entrepreneurship", "Microfinance specialist"],
    location: "Multan, Pakistan",
    experience: "12+ Years",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "fatima@akhuwat.org",
      phone: "+92-61-111-253-928",
    },
    color: "from-pink-600 to-rose-700",
  },
  {
    id: 6,
    name: "Mr. Hassan Ali",
    role: "Director Technology",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    bio: "Driving digital transformation and technology innovation to enhance service delivery and operational efficiency across all Akhuwat programs.",
    achievements: ["Digital transformation", "Technology innovation", "System optimization"],
    location: "Lahore, Pakistan",
    experience: "10+ Years",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "hassan@akhuwat.org",
      phone: "+92-42-111-253-929",
    },
    color: "from-teal-600 to-cyan-700",
  },
]

const TeamSection = () => {
  const [hoveredMember, setHoveredMember] = useState(null)

  return (
    <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-emerald-50 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-96 h-96 bg-emerald-400 rounded-full animate-float blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-400 rounded-full animate-float-reverse blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-400 rounded-full animate-pulse blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex items-center justify-center gap-4 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full flex items-center justify-center shadow-2xl">
              <FaUsers className="text-white text-2xl" />
            </div>
            <div className="text-left">
              <span className="text-emerald-600 font-bold text-xl block">Akhuwat USA</span>
              <span className="text-gray-500 text-sm">Leadership Team</span>
            </div>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-7xl font-black text-gray-900 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              Leadership Team
            </span>
          </motion.h2>

          <motion.p
            className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Meet the visionary leaders working tirelessly to eliminate poverty and empower communities through
            innovative microfinance solutions
          </motion.p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-emerald-200"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -15 }}
              onHoverStart={() => setHoveredMember(index)}
              onHoverEnd={() => setHoveredMember(null)}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-80">
                <motion.img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  animate={hoveredMember === index ? { scale: 1.1 } : { scale: 1 }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Social Links */}
                <motion.div
                  className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ y: 20 }}
                  whileInView={{ y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {[
                    { icon: FaLinkedin, link: member.social.linkedin, color: "bg-blue-600" },
                    { icon: FaTwitter, link: member.social.twitter, color: "bg-sky-500" },
                    { icon: FaEnvelope, link: `mailto:${member.social.email}`, color: "bg-emerald-600" },
                    { icon: FaPhone, link: `tel:${member.social.phone}`, color: "bg-purple-600" },
                  ].map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.link}
                      className={`w-12 h-12 ${social.color} rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg`}
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </motion.div>

                {/* Role Badge */}
                <div
                  className={`absolute top-4 left-4 px-4 py-2 rounded-full text-white text-sm font-bold bg-gradient-to-r ${member.color}`}
                >
                  {member.role.split(" ")[0]}
                </div>

                {/* Experience Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-800">
                  {member.experience}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <motion.h3
                  className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  {member.name}
                </motion.h3>

                <p className="text-emerald-600 font-semibold text-lg mb-4">{member.role}</p>

                <p className="text-gray-600 mb-6 leading-relaxed">{member.bio}</p>

                {/* Location & Contact */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <FaMapMarkerAlt className="text-emerald-500" />
                    <span>{member.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <FaEnvelope className="text-blue-500" />
                    <a href={`mailto:${member.social.email}`} className="hover:text-blue-600 transition-colors">
                      {member.social.email}
                    </a>
                  </div>
                </div>

                {/* Achievements */}
                <div className="space-y-2 mb-6">
                  <h4 className="text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <FaAward className="text-yellow-500" />
                    Key Achievements
                  </h4>
                  {member.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>

                {/* Connect Button */}
                <motion.a
                  href={`mailto:${member.social.email}`}
                  className={`w-full py-3 rounded-2xl text-white font-bold bg-gradient-to-r ${member.color} hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaEnvelope />
                  Connect
                </motion.a>
              </div>

              {/* Hover Glow Effect */}
              <div
                className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-r ${member.color} blur-xl -z-10`}
              ></div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Join Mission Section */}
        <motion.div
          className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-12 md:p-16 text-white relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-48 translate-x-48"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-white rounded-full translate-y-40 -translate-x-40"></div>
          </div>

          <div className="relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div>
                <motion.div
                  className="flex items-center gap-3 mb-6"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <FaHeart className="text-3xl text-emerald-200" />
                  <span className="text-emerald-200 font-bold text-xl">Join Our Mission</span>
                </motion.div>

                <motion.h3
                  className="text-4xl md:text-5xl font-black mb-6"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  Help deserving students break the chains of poverty
                </motion.h3>

                <motion.p
                  className="text-emerald-100 mb-8 text-xl leading-relaxed"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  Akhuwat's vision of a poverty-free society hinges on addressing its root cause: illiteracy among the
                  impoverished. Join our team in providing free, high-quality education and creating limitless
                  possibilities.
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <motion.button
                    className="bg-white text-emerald-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all duration-300 shadow-lg flex items-center justify-center gap-3"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaHeart />
                    Donate Now
                  </motion.button>

                  <motion.button
                    className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-3"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaUsers />
                    Join Our Team
                  </motion.button>
                </motion.div>
              </div>

              {/* Stats */}
              <motion.div
                className="grid grid-cols-2 gap-6"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {[
                  { number: "4.5M+", label: "Lives Transformed", icon: FaUsers },
                  { number: "850+", label: "Service Centers", icon: FaGlobe },
                  { number: "₨500B+", label: "Disbursed", icon: FaHeart },
                  { number: "20+", label: "Years Experience", icon: FaAward },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <stat.icon className="text-white text-xl" />
                    </div>
                    <div className="text-3xl font-black text-white mb-2">{stat.number}</div>
                    <div className="text-emerald-200 font-semibold">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TeamSection
