import { motion } from 'framer-motion';
import {
  Smartphone, GitBranch, Cloud, Code, Briefcase, Server
} from 'lucide-react';

const services = [
  {
    id: 1, title: 'Founder-Level Strategy',
    description: 'Leading end-to-end product cycles from idea to MVP to growth. I think in terms of markets, users, distribution, and long-term defensibility.',
    icon: Briefcase,
  },
  {
    id: 2, title: 'Backend Development',
    description: 'Designing scalable backend systems with Node.js and Python. From API architecture to data modeling, ensuring infrastructure that supports real-world growth.',
    icon: Server,
  },
  {
    id: 3, title: 'Frontend Development',
    description: 'Building modern, responsive web interfaces using React, Next.js, and TypeScript. Focused on performance, scalability, and exceptional user experience.',
    icon: Code,
  },
  {
    id: 4, title: 'App Development',
    description: 'Delivering cross-platform mobile and desktop applications that merge design and functionality. Shipping real products — fast, clean, and user-focused.',
    icon: Smartphone,
  },
  {
    id: 5, title: 'Smart Contracts',
    description: 'Deploying secure, efficient smart contracts on the Sui blockchain using Move. Deeply involved in the Sui ecosystem as both a builder and community voice.',
    icon: GitBranch,
  },
  {
    id: 6, title: 'Bot & Automation',
    description: 'Creating bots that automate workflows, monitor data, and scale efficiently. Architecting intelligent systems to give businesses superpowers.',
    icon: Cloud,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1] } },
};

const Services = () => {
  return (
    <section className="relative overflow-hidden" style={{ background: 'var(--bg-primary)', paddingTop: '96px', paddingBottom: '96px' }}>
      {/* Cloud orb */}
      <div className="cloud-orb cloud-orb-lg" style={{ top: '-20%', left: '-10%', animationDelay: '3s' }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 1 }}>

        <motion.div
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ marginBottom: '56px' }}
        >
          <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', display: 'block', marginBottom: '16px' }}>
            How Can I Help?
          </span>
          <h2 style={{ fontFamily: 'clashBold, "Poppins", sans-serif', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: '16px' }}>
            Skills &amp; Services.
          </h2>
          <div style={{ height: '2px', width: '48px', background: 'linear-gradient(90deg, var(--accent), transparent)' }} />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}
          className="services-grid"
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={itemVariants}>
              <div style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '20px',
                padding: '28px',
                height: '100%',
                transition: 'border-color 0.4s ease, background 0.4s ease, transform 0.4s ease',
                display: 'flex',
                flexDirection: 'column',
              }}
                className="service-card"
              >
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'var(--accent-muted)', border: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <service.icon size={20} style={{ color: 'var(--text-primary)' }} strokeWidth={1.5} />
                </div>
                <h3 style={{ color: 'var(--text-primary)', fontSize: '15px', fontWeight: 600, marginBottom: '10px', lineHeight: 1.35 }}>
                  {service.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '13px', lineHeight: 1.7 }}>
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <style>{`
          @media (max-width: 640px) {
            .services-grid { grid-template-columns: 1fr !important; }
          }
          @media (min-width: 641px) and (max-width: 1023px) {
            .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
          .service-card:hover {
            border-color: var(--border-hover) !important;
            background: var(--bg-card-hover) !important;
            transform: translateY(-2px);
          }
        `}</style>
      </div>
    </section>
  );
};

export default Services;