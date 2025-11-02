import React from "react";
import { motion } from "framer-motion";
import {
    Smartphone,
    GitBranch,
   
    Cloud,
    Code,
    
    Briefcase,
    Server
} from 'lucide-react';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';
const services = [
{
    id: 1,
    title: "FOUNDER-LEVEL STRATEGY",
    description: "Leading end-to-end product cycles from idea to MVP to growth. I think in terms of markets, users, distribution, and long-term defensibility.",
    icon: Briefcase, // swap in your preferred icon for "founder/strategy"
    category: "Leadership",
  },
  {
    id: 2,
    title: "BACKEND DEVELOPMENT",
    description: "Designing and engineering scalable backend systems with Node.js and Python. From API architecture to data modeling, I ensure infrastructure that supports real-world growth and scale.",
    icon: Server,
    category: "Development",
  },  {
    id: 3,
    title: "FRONTEND DEVELOPMENT",
    description: "Building modern, responsive web interfaces using React, Next.js, and TypeScript. Focused on performance, scalability, and exceptional user experience — with a product mindset at the core.",
    icon: Code,
    category: "Development",
  },
  {
    id: 4,
    title: "APP DEVELOPMENT",
    description: "Delivering cross-platform mobile and desktop applications that merge design and functionality. Shipping real products, not just prototypes — fast, clean, and user-focused.",
    icon: Smartphone,
    category: "Mobile",
  },
  {
    id: 5,
    title: "SMART CONTRACT DEVELOPMENT",
    description: "Deploying secure, efficient smart contracts on the Sui blockchain using Move. Deeply involved in the Sui ecosystem as both a builder and community voice.",
    icon: GitBranch,
    category: "Blockchain",
  },
  
  {
    id: 6,
    title: "BOT & SYSTEM AUTOMATION",
    description: "Creating bots that automate workflows, monitor data, and scale efficiently. Architecting intelligent systems to give businesses superpowers.",
    icon: Cloud,
    category: "Infrastructure",
  },
  
];



const Services = () => {

     const canvasRef = useRef(null);
    
      useEffect(() => {
        if (!canvasRef.current) return;
    
        // Three.js Scene Setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ 
          canvas: canvasRef.current, 
          alpha: true,
          antialias: true 
        });
        
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        camera.position.z = 5;
    
        // Create particle system
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 100;
        const posArray = new Float32Array(particlesCount * 3);
    
        for (let i = 0; i < particlesCount * 3; i++) {
          posArray[i] = (Math.random() - 0.5) * 10;
        }
    
        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
        const particlesMaterial = new THREE.PointsMaterial({
          size: 0.05,
          color: '#1B2333',
          transparent: true,
          opacity: 0.6,
          blending: THREE.AdditiveBlending
        });
    
        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);
    
        // Animation
        let animationFrameId;
        const animate = () => {
          animationFrameId = requestAnimationFrame(animate);
          
          particlesMesh.rotation.y += 0.0005;
          particlesMesh.rotation.x += 0.0003;
          
          renderer.render(scene, camera);
        };
    
        animate();
    
        // Handle resize
        const handleResize = () => {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
        };
    
        window.addEventListener('resize', handleResize);
    
        // Cleanup
        return () => {
          window.removeEventListener('resize', handleResize);
          cancelAnimationFrame(animationFrameId);
          particlesGeometry.dispose();
          particlesMaterial.dispose();
          renderer.dispose();
        };
      }, []);

    return (
        <section className="relative w-full  bg-gradient-to-br from-indigo-50 via-blue-50  to-slate-50 overflow-hidden py-20 px-6 md:px-12 lg:px-20">
           
               <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full"
        style={{ pointerEvents: 'none' }}
      />

             <div 
        className="absolute inset-0 opacity-90"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e5e7eb 1px, transparent 1px),
            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
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
                    <h1 className="text-2xl poppins md:text-3xl font-medium text-black mb-6 tracking-tight">
                        Skills
                        
                    </h1>
                    <div className="h-1 w-24 bg-gradient-to-r from-blue-800 to-blue-500 mb-6" />
                    <p className="text-black text-base md:text-l ">
                        Specialized in multiple domains of software engineering
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: service.id * 0.05 }}

                            whileHover={{
                                scale: 1.02,
                                translateY: -5,
                                boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
                            }}
                            className="group relative bg-[#000]/90 backdrop-blur-lg rounded-2xl overflow-hidden border border-[#ffffff10]"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative p-8">
                                <div className="flex items-center justify-between mb-6">
                                    <span className="text-3xl transform group-hover:scale-110 transition-transform duration-300">
                                        <service.icon className="w-8 h-8 text-[#fff]" strokeWidth={1.5} />
                                    </span>
                                    <div className="h-px w-16 bg-gradient-to-r from-purple-500 to-blue-500 opacity-50" />
                                </div>

                                <h3 className="text-white text-xl  font-clashbold mb-4 tracking-wide">
                                    {service.title}
                                </h3>

                                <p className="text-[#FFFFFF99] text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </div>

                            <div className="h-[2px] w-full bg-gradient-to-r from-purple-500/50 to-blue-500/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;