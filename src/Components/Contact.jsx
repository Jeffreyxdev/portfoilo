import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  const [timeOfDay, setTimeOfDay] = useState(getTimeOfDay());

  useEffect(() => {
    setTimeOfDay(getTimeOfDay());
  }, []);

  function getTimeOfDay() {
    const h = new Date().getHours();
    if (h >= 6 && h < 12) return 'morning';
    if (h >= 12 && h < 18) return 'afternoon';
    return 'evening';
  }

  const contactItems = [
    { icon: Mail, value: 'agabaenwerejeffrey@gmail.com', href: 'mailto:agabaenwerejeffrey@gmail.com', isLink: true },
    { icon: Phone, value: '+2347045104464', href: 'tel:+2347045104464', isLink: true },
    {
      icon: MapPin,
      value: timeOfDay === 'morning' ? 'metaverse!' : timeOfDay === 'afternoon' ? 'localhost:3000' : '127.0.0.1:5500',
      isLink: false,
    },
  ];

  return (
    <section id="contact" className="relative overflow-hidden" style={{ background: 'var(--bg-primary)', paddingTop: '96px', paddingBottom: '96px' }}>
      {/* Cloud orb */}
      <div className="cloud-orb cloud-orb-lg" style={{ top: '-20%', left: '50%', transform: 'translateX(-50%)', animationDelay: '1s' }} />

      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '0 32px', textAlign: 'center', position: 'relative', zIndex: 1 }}>

        <motion.div
          initial={{ opacity: 0, y: 50, filter: 'blur(12px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-primary)', display: 'block', marginBottom: '20px' }}>
            Get In Touch
          </span>

          <h2 style={{ fontFamily: 'clashBold, "Poppins", sans-serif', fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: '20px' }}>
            Let&apos;s turn your vision<br />into something amazing.
          </h2>

          <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: 1.7, maxWidth: '420px', margin: '0 auto 40px' }}>
            I&apos;m always open to new opportunities, collaborations, or exchanging ideas with like-minded people.
          </p>

          <motion.a
            href="https://wa.me/2347045104464"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="btn-primary"
            style={{ display: 'inline-flex', marginBottom: '64px', padding: '14px 32px', fontSize: '15px' }}
          >
            Book a Discovery Call
            <ArrowUpRight size={16} />
          </motion.a>
        </motion.div>

        {/* Contact items */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '40px' }}
        >
          {contactItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.04, y: -2 }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}
            >
              <div style={{
                width: '48px', height: '48px', borderRadius: '14px',
                background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-subtle)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'border-color 0.4s ease',
              }}>
                <item.icon size={18} style={{ color: 'var(--text-primary)' }} strokeWidth={1.5} />
              </div>
              {item.isLink ? (
                <a href={item.href} style={{ color: 'var(--text-secondary)', fontSize: '13px', fontWeight: 500, textDecoration: 'none', transition: 'color 0.3s ease' }}
                   className="contact-link">
                  {item.value}
                </a>
              ) : (
                <p style={{ color: 'var(--text-secondary)', fontSize: '13px', fontWeight: 500 }}>{item.value}</p>
              )}
            </motion.div>
          ))}
        </motion.div>

        <style>{`
          .contact-link:hover { color: var(--text-primary) !important; }
        `}</style>
      </div>
    </section>
  );
};

export default Contact;