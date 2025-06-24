import React from 'react'

import Resume from "./Resume";
import resumeUrl from "../Assets/jeffrey.pdf";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section className="relative pt-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#130b1c]/80 to-transparent opacity-30 rounded-2xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="text-[#6f1cd7] text-sm tracking-[0.25em] uppercase mb-4 block font-medium">Experience</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl   poppins font-clashbold text-white mb-6 tracking-tight">
            Professional Journey
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-[#6f1cd7] to-transparent mb-8" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 md:left-12 top-0 w-[1px] h-full bg-gradient-to-b from-[#6f2cd7]/40 via-[#f8c3]/20 to-transparent rounded-2xl" />

          <div className="space-y-12">
            {[
              {
                title: "Frontend Developer",
                company: "Desight foundation",
                location: "Port harcourt, Nigeria",
                period: "2025 - Present",
                description: [
                  "Leading the development of a Progressive Web App (PWA) sturctured website, donation panel",
                  "Implementing responsive and mobile-first design principles with modern frontend technologies",
                  "Collaborating with the organizations and government teams to deliver high-performance eye care services for Africa",
                  "Building scalable frontend architecture for multiple interconnected platforms"
                ]
              },
              {
                 title: "CTO & Full-Stack Developer",
                    company: "Lemren",
                    location: "Remote / Nigeria",
                    period: "2025 - Present",
                    description: [
                      "Spearheading the technical vision and product architecture for Lemren — a decentralized car-sharing platform revolutionizing mobility in Africa",
                      "Leading frontend and backend development using Next.js, Firebase, and modern design systems to deliver a seamless car rental experience",
                      "Integrating authentication flows (Google, Email, Phone) and scalable database structure to support user onboarding and real-time availability",
                      "Collaborating with the founding team on product strategy, market positioning, and go-to-market execution",
                      "Ensuring secure, efficient deployment and CI/CD pipelines to maintain rapid iteration and production stability"
                    ]
                  }     
,
              {
                title: "Fullstack Developer & CEO",
                company: "Suifi.ng",
                location: "PH, Nigeria",
                period: "2023 - Present",
                description: [
                  "Led the development and implementation of innovative web solutions.",
                  "Managed both frontend and backend aspects of projects.",
                  "Oversaw company operations and strategic decision-making as CEO.",
                  "Implementing a new world breaking solution the world is yet to see"
                ]
              },
              {
                title: "Front-end supervisor",
                company: "Autosquare",
                location: "Florida",
                period: "2024 - Present",
                description: [
                  "superviesed and reviewed frontend infrastructure for a car part dealership company.",
                  "Designed and implemented APIs for seamless event booking and management.",
                  "Optimized database performance for handling high-volume."
                ]
              },
              {
                title: "Backend Developer",
                company: "",
                location: "Remote",
                period: "2022 - 2023",
                description: [
                  "Developed robust backend systems for healthcare applications.",
                  "Implemented secure data management solutions for sensitive medical information.",
                  "Collaborated with frontend teams to ensure seamless integration."
                ]
              },
              {
                title: "Tech tutor",
                company: "",
                location: "PH, Nigeria",
                period: "2023 - Present",
                description: [
                  "Taught student the concepts of designing",
                  "Implement innovative technology solutions to enhance learning experiences.",
                  "Manage IT staff and ensure alignment with educational goals."
                ]
              }
            ].map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-6 md:pl-24"
              >
                <motion.div
                  className="absolute left-0 top-3 transform -translate-x-1/2"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-5 h-5 rounded-full bg-[#130b1c] border-2 border-[#6f1cd7] shadow-lg shadow-[#6f1cd7]/20" />
                </motion.div>

                <motion.div
                  whileHover={{
                    scale: 1.02,
                    backgroundColor: 'rgba(111, 28, 215, 0.08)'
                  }}
                  className="group relative bg-[#130b1c]/60 backdrop-blur-sm border border-[#ffffff08] p-8 rounded-sm transition-all duration-500"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#6f1cd7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  <div className="relative z-10">
                    <h3 className="text-2xl md:text-3xl font-clashbold text-white mb-3">
                      {experience.title}
                    </h3>
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-6">
                      <p className="text-[#fff] font-medium tracking-wide">{experience.company}</p>
                      <div className="flex items-center gap-4">
                        <span className="hidden md:inline text-[#fff]">•</span>
                        <span className="text-[#fff] text-sm">{experience.location}</span>
                        <span className="text-[#fff]">•</span>
                        <span className="text-[#fff] text-sm tracking-wider">{experience.period}</span>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {experience.description.map((item, i) => (
                        <li key={i} className="text-[#fff] leading-relaxed font-light flex items-start">
                          <span className="text-[#fff] mr-3 mt-1.5">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 pl-16 md:pl-24 text-white"
            
          >
            <Resume
              pdfUrl={resumeUrl}
              fileName="Jeffery Agabaenwere.pdf"
              buttonText="Download Resume"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;