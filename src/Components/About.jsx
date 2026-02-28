import { motion } from 'framer-motion';
import { Github, Linkedin, Code2 } from 'lucide-react';
import { FaXTwitter } from 'react-icons/fa6';
import jeffreyImg from '../Assets/jeffrey.jpg';

const About = () => {
  const stats = [
    { label: 'Years Experience', value: '4+' },
    { label: 'Projects Shipped', value: '20+' },
    { label: 'Happy Clients', value: '19+' },
  ];

  const socials = [
    { href: 'https://github.com/Jeffreyxdev', icon: Github, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/jeffrey-agabaenwere/', icon: Linkedin, label: 'LinkedIn' },
    { href: 'https://x.com/JeffreyConnect', icon: FaXTwitter, label: 'Twitter/X' },
  ];

  return (
    <section id="about" className="relative overflow-hidden" style={{ background: 'var(--bg-secondary)', paddingTop: '96px', paddingBottom: '96px' }}>
      {/* Cloud orbs */}
      <div className="cloud-orb cloud-orb-lg" style={{ top: '-15%', right: '-10%', animationDelay: '1s' }} />
      <div className="cloud-orb cloud-orb-sm" style={{ bottom: '10%', left: '-5%', animationDelay: '3s' }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 1 }}>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ marginBottom: '56px' }}
        >
          <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-primary)', display: 'block', marginBottom: '16px' }}>
            About Me
          </span>
          <h2 style={{ fontFamily: 'clashBold, "Poppins", sans-serif', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: '16px' }}>
            The Person Behind<br />the Code.
          </h2>
          <div style={{ height: '2px', width: '48px', background: 'linear-gradient(90deg, rgba(255,255,255,0.6), transparent)' }} />
        </motion.div>

        {/* Content Grid */}
        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '40px', alignItems: 'start' }}>

          {/* Photo Column */}
          <motion.div
            initial={{ opacity: 0, y: 50, filter: 'blur(12px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div style={{
              borderRadius: '24px',
              overflow: 'hidden',
              border: '1px solid var(--border-subtle)',
              position: 'relative',
            }}>
              <img
                src={jeffreyImg}
                alt="Jeffrey Agabaenwere"
                style={{
                  width: '100%',
                  height: '420px',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  display: 'block',
                  filter: 'grayscale(100%) contrast(1.05)',
                }}
              />
              {/* Gradient overlay */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '40%',
                background: 'linear-gradient(to top, var(--bg-secondary), transparent)',
                pointerEvents: 'none',
              }} />
            </div>

            {/* Social Links */}
            <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
              {socials.map(({ href, icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={label}
                  style={{
                    width: '40px', height: '40px', borderRadius: '12px',
                    border: '1px solid var(--border-subtle)',
                    background: 'var(--bg-card)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'border-color 0.3s ease',
                    textDecoration: 'none',
                  }}
                  className="about-social"
                >
                  <Icon size={15} style={{ color: 'var(--text-muted)' }} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 50, filter: 'blur(12px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Name & Title */}
            <h3 style={{
              fontFamily: '"Neue Machina", clashBold, "Poppins", sans-serif',
              fontSize: '28px',
              fontWeight: 700,
              color: 'var(--text-primary)',
              marginBottom: '4px',
              letterSpacing: '-0.02em',
            }}>
              Jeffrey Agabaenwere
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '13px', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '24px' }}>
              FullStack Engineer & Technical Founder · Port Harcourt, Nigeria
            </p>

            {/* Bio */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.8 }}>
                I work on systems where <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>failure is expensive</strong>. My focus is on identifying brittle logic,security auditing, reducing operational overhead, and improving how systems behave under real-world conditions. I&apos;m particularly interested in the parts of systems that are usually labeled &ldquo;temporary&rdquo;, &ldquo;manual&rdquo;, or &ldquo;good enough&rdquo;.
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.8 }}>
                Most of my work lives at the intersection of <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>reliability, internal tooling, payment and data flows, and developer experience</strong> inside production systems. I value boring, well-understood technology when reliability matters.
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.8 }}>
                I&apos;m also an active open source contributor focusing on bug fixes, reliability improvements, and edge cases that only appear under load or failure conditions. Currently building across <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>TypeScript, Node.js, React, Next.js, Move (Sui), and Python</strong>.
              </p>
            </div>

            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '28px' }}>
              {stats.map((stat) => (
                <div key={stat.label} style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '16px',
                  padding: '20px 16px',
                  textAlign: 'center',
                  transition: 'border-color 0.3s ease',
                }}>
                  <p style={{
                    fontFamily: '"Neue Machina", clashBold, sans-serif',
                    fontSize: '28px',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    lineHeight: 1,
                    marginBottom: '6px',
                  }}>
                    {stat.value}
                  </p>
                  <p style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* What I Work On */}
            <div style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '16px',
              padding: '20px 24px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                <Code2 size={16} style={{ color: 'var(--text-primary)' }} />
                <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>What I Work On</span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  'Debugging and improving failure handling in backend systems',
                  'Reducing manual workflows through targeted automation',
                  'Improving observability around critical code paths',
                  'Building products from 0→1 — from architecture to deployment',
                ].map((item, i) => (
                  <li key={i} style={{
                    color: 'var(--text-secondary)',
                    fontSize: '13px',
                    lineHeight: 1.7,
                    display: 'flex',
                    alignItems: 'flex-start',
                    marginBottom: i < 3 ? '8px' : 0,
                  }}>
                    <span style={{ marginRight: '10px', marginTop: '2px', opacity: 0.25, color: 'var(--text-primary)', fontSize: '8px' }}>●</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
        .about-social:hover {
          border-color: var(--border-hover) !important;
        }
      `}</style>
    </section>
  );
};

export default About;
