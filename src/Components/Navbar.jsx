import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUpRight, Home } from 'lucide-react';
import { FaXTwitter } from 'react-icons/fa6';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4"
      style={{ paddingTop: scrolled ? '14px' : '20px', transition: 'padding 0.4s ease' }}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Unified Pill Nav — same on desktop AND mobile */}
      <nav
        className="flex items-center gap-1 px-3 py-2 rounded-full transition-all duration-500 w-auto max-w-full"
        style={{
          background: scrolled ? 'rgba(6,6,8,0.85)' : 'rgba(255,255,255,0.04)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.07)',
          boxShadow: scrolled ? '0 8px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04)' : 'none',
        }}
      >
        {/* Home */}
        <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          onClick={() => scrollTo('#home')}
          className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200"
          style={{ color: 'var(--text-muted)' }}
          aria-label="Home"
          title="Home"
        >
          <Home size={16} />
        </motion.button>

        {/* Divider */}
        <div style={{ width: '1px', height: '20px', background: 'var(--border-subtle)', margin: '0 2px' }} />

        {/* LinkedIn */}
        <motion.a
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          href="https://www.linkedin.com/in/jeffrey-agabaenwere/"
          target="_blank" rel="noopener noreferrer"
          className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
          style={{ color: 'var(--text-muted)' }}
          aria-label="LinkedIn"
          title="LinkedIn"
        >
          <Mail size={16} />
        </motion.a>

        {/* GitHub */}
        <motion.a
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          href="https://github.com/Jeffreyxdev"
          target="_blank" rel="noopener noreferrer"
          className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
          style={{ color: 'var(--text-muted)' }}
          aria-label="GitHub"
          title="GitHub"
        >
          <Github size={16} />
        </motion.a>

        {/* X / Twitter */}
        <motion.a
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          href="https://x.com/JeffreyConnect"
          target="_blank" rel="noopener noreferrer"
          className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
          style={{ color: 'var(--text-muted)' }}
          aria-label="Twitter/X"
          title="Twitter/X"
        >
          <FaXTwitter size={14} />
        </motion.a>

        {/* Divider */}
        <div style={{ width: '1px', height: '20px', background: 'var(--border-subtle)', margin: '0 2px' }} />

        {/* CTA */}
        <motion.a
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          href="https://calendly.com/agabaenwerejeffrey/design-"
          target="_blank" rel="noopener noreferrer"
          className="btn-primary"
          style={{ padding: '8px 18px', fontSize: '13px', borderRadius: '100px', marginLeft: '2px' }}
        >
          Book a Call
          <ArrowUpRight size={14} />
        </motion.a>
      </nav>
    </motion.header>
  );
}