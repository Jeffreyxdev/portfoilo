import Experience from './Experience';
import { motion } from 'framer-motion';
import { skills } from '../data/data';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.03 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16, filter: 'blur(4px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
};

const Skills = () => {
  return (
    <section id="skills" className="relative overflow-hidden" style={{ background: 'var(--bg-secondary)', paddingTop: '96px', paddingBottom: '96px' }}>
      {/* Cloud orb */}
      <div className="cloud-orb cloud-orb-md" style={{ top: '20%', right: '-8%', animationDelay: '1s' }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 1 }}>

        <motion.div
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ marginBottom: '48px' }}
        >
          <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-primary)', display: 'block', marginBottom: '16px' }}>
            Expertise
          </span>
          <h2 style={{ fontFamily: 'clashBold, "Poppins", sans-serif', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: '16px' }}>
            Technical Proficiency.
          </h2>
          <div style={{ height: '2px', width: '48px', background: 'linear-gradient(90deg, rgba(255,255,255,0.6), transparent)', marginBottom: '16px' }} />
          <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.7, maxWidth: '480px' }}>
            A comprehensive toolkit refined through years of practical experience
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}
        >
          {skills.map((skill, index) => (
            <motion.div key={index} variants={itemVariants}>
              <span className="tag" style={{ cursor: 'default' }}>{skill.title}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="section-divider" style={{ margin: '80px 0' }} />

        {/* Experience */}
        <div id="experience">
          <Experience />
        </div>
      </div>
    </section>
  );
};

export default Skills;