import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Mail  } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
export default function FloatingNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  const navbarY = useTransform(scrollY, [0, 100], [0, -5]);
  const navbarOpacity = useTransform(scrollY, [0, 50], [0.95, 1]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
 const [timeOfDay, setTimeOfDay] = useState(getTimeOfDay());
  useEffect(() => {
    setTimeOfDay(getTimeOfDay());
  }, []);

  function getTimeOfDay() {
    const now = new Date();
    const currentHour = now.getHours();

    if (currentHour >= 6 && currentHour < 12) {
      return "morning";
    } else if (currentHour >= 12 && currentHour < 18) {
      return "afternoon";
    } else {
      return "evening";
    }
  }
  return (
   
    <>
      <motion.nav
        style={{ y: navbarY, opacity: navbarOpacity }}
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
          scrolled ? 'w-[85%] max-w-4xl' : 'w-[90%] max-w-4xl'
        }`}
      >
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className={`
            backdrop-blur-md bg-white/60 rounded-full
            border border-white/20 shadow-lg
            px-6 py-4
            flex items-center justify-between
            transition-all duration-300
            ${scrolled ? 'shadow-xl' : 'shadow-lg'}
          `}
        >
          {/* Logo/Initials */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/"
              target="_blank"
              rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl bg-gray-900 flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-xl">JA</span>
            </div>
          </motion.div>
          <h2 className="lg:text-3xl sm:text-xl p-3 font-bold text-transparent bg-clip-text bg-purple-300  transition-all duration-700">
  {timeOfDay === "morning" && <span> Good Morning</span>}
  {timeOfDay === "afternoon" && <span> Good Afternoon</span>}
  {timeOfDay === "evening" && <span> Good Evening</span>}
</h2>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <motion.a
              href="https://github.com/Jeffreyxdev"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="lg:w-11 lg:h-11 sm:h-9 sm:w-9 p-2 rounded-2xl bg-gray-900 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow"
            >
              <Github className="w-5 h-5 text-white" />
            </motion.a>

            <motion.a
              href="mailto:agabaenwerejeffrey@gmail.com"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
              className="lg:w-11 lg:h-11 sm:h-9 sm:w-9 p-2 rounded-2xl bg-gray-900 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow"
            >
              <Mail className="w-5 h-5 text-white" />
            </motion.a>

              <motion.a
              href="https://wa.me/2347045104464"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
              className="lg:w-11 lg:h-11 sm:h-9 sm:w-9 p-2 rounded-2xl bg-gray-900 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow"
            >
              <FaWhatsapp className="w-5 h-5 text-white" />
            </motion.a>
            
          </div>
        </motion.div>
      </motion.nav>

     

       
        
      
      
    </>
  );
}