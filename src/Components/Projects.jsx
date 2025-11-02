import { motion } from "framer-motion";
import React from "react";
import { Arrow } from "./svg";
import { projects } from "../data/data";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <section className="relative py-24 px-4 md:px-8 lg:px-16 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-[#2b2b2bf4] to-[#535559]" />
     {/* Grid Background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, #F3F6F9 1px, transparent 1px),
            linear-gradient(to bottom, #F3F6F9 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
    <div className="max-w-7xl mx-auto relative">
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-left mb-5"
  >
    <h2 className="text-2xl md:text-3xl poppins font-medium text-white mb-6 tracking-tight">
      Projects
    </h2>
    <div className="h-1 w-24 bg-gradient-to-r from-blue-800 to-blue-500 mb-6" />
    <p className="text-[#fff] text-base md:text-l">
      Showcasing my latest works and experiments in tech
    </p>
  </motion.div>

  {/* Projects container */}
  <div
    className="
      flex overflow-x-auto snap-x snap-mandatory space-x-6
      md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:space-x-0
      scrollbar-hide
    "
  >
    {projects.map((project, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: index * 0.05 }}
        whileHover={{
          scale: 1.02,
          translateY: -5,
          boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
        }}
        className="
          group relative bg-black/20 backdrop-blur-lg rounded-2xl
          overflow-hidden border border-[#ffffff10] min-w-[85%]
          sm:min-w-[70%] md:min-w-0 snap-start
        "
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200/10 to-blue-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative p-5 flex flex-col h-full">
          <img src={project.img} alt={project.name} className="rounded-lg mb-4" />
          <h3 className="text-white text-2xl poppins mb-3">{project.name}</h3>
          <p className="text-blue-400 text-sm font-medium mb-4">{project.lang}</p>
          <p className="text-[#FFFFFF99] text-sm flex-grow">{project.desc}</p>

          <Link
            to={project.link}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center group/link"
          >
            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center space-x-3 text-white hover:text-blue-300 transition-colors"
            >
              <span className="text-sm font-medium">View Project</span>
              <Arrow className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
            </motion.div>
          </Link>

          <div className="h-[2px] w-full bg-gradient-to-r from-purple-500/50 to-blue-500/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 absolute bottom-0 left-0" />
        </div>
      </motion.div>
    ))}
  </div>
</div>

</section>
  );
};

export default Projects;