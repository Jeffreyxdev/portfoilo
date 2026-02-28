import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const etherealTransition = {
  duration: 1.2,
  ease: [0.25, 0.1, 0.25, 1],
};

export default function Hero() {
  const scrollToProjects = () => {
    const el = document.querySelector('#projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: 'var(--bg-primary)' }}
    >
      {/* Ethereal cloud orbs */}
      <div className="cloud-orb cloud-orb-lg" style={{ top: '-15%', left: '50%', transform: 'translateX(-50%)' }} />
      <div className="cloud-orb cloud-orb-md" style={{ bottom: '10%', left: '-5%', animationDelay: '2s' }} />
      <div className="cloud-orb cloud-orb-sm" style={{ top: '30%', right: '-3%', animationDelay: '4s' }} />

      {/* Dot pattern */}
      <div className="absolute inset-0 dot-pattern" style={{ opacity: 0.4 }} />

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 md:px-12 flex flex-col items-center text-center pt-28 pb-20">

        {/* Available badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ ...etherealTransition, delay: 0.2 }}
          className="mb-12"
        >
          <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-medium tracking-[0.12em] uppercase"
            style={{
              border: '1px solid var(--border-subtle)',
              background: 'var(--bg-glass)',
              color: 'var(--text-secondary)',
            }}>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" style={{ boxShadow: '0 0 8px #34d399' }} />
            Available for new projects
          </span>
        </motion.div>

        {/* Headline — Neue Machina font */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.96, filter: 'blur(16px)' }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.4, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-10"
        >
          <h1 className="leading-none tracking-tight" style={{ fontFamily: '"Neue Machina", clashBold, "Poppins", sans-serif' }}>
            <span className="block font-black text-white"
              style={{ fontSize: 'clamp(48px, 11vw, 120px)', letterSpacing: '-0.04em', fontWeight: 700 }}>
              BUILDING
            </span>
            <span className="block"
              style={{
                fontSize: 'clamp(36px, 8vw, 88px)',
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontStyle: 'italic',
                fontWeight: 300,
                color: 'var(--text-secondary)',
                lineHeight: 1.1,
                margin: '4px 0',
              }}>
              Seamless
            </span>
            <span className="block font-black text-white"
              style={{ fontSize: 'clamp(48px, 11vw, 120px)', letterSpacing: '-0.04em', fontWeight: 700, fontFamily: '"Neue Machina", clashBold, "Poppins", sans-serif' }}>
              PROJECTS
            </span>
          </h1>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ ...etherealTransition, delay: 0.8 }}
          className="mb-8"
        >
          <p style={{ fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 500 }}>
            Mobile Apps
            <span style={{ margin: '0 12px', opacity: 0.3 }}>•</span>
            Websites
            <span style={{ margin: '0 12px', opacity: 0.3 }}>•</span>
            AI Automation
            <span style={{ margin: '0 12px', opacity: 0.3 }}>•</span>
            Bots
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ ...etherealTransition, delay: 1.0 }}
          className="mb-12 max-w-sm md:max-w-md"
          style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--text-secondary)' }}
        >
          I craft solid, scalable digital products with exceptional user experiences — from concept to deployment.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ ...etherealTransition, delay: 1.2 }}
          className="flex items-center gap-3"
        >
          <a href="https://wa.me/2347045104464" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Book a Discovery Call
          </a>
          <button onClick={scrollToProjects} className="btn-outline">
            View Work
          </button>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown style={{ width: '18px', height: '18px', color: 'var(--text-muted)' }} />
        </motion.div>
      </motion.div>
    </section>
  );
}