import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Github, Linkedin } from 'lucide-react';
import { FaXTwitter, FaInstagram } from 'react-icons/fa6';

const Footer = () => {
  const [time, setTime] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const update = () => setTime(new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    update();
    const t = setInterval(update, 1000);
    return () => clearInterval(t);
  }, []);

  const socialsLinks = [
    { href: 'https://github.com/Jeffreyxdev', icon: Github, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/jeffrey-agabaenwere/', icon: Linkedin, label: 'LinkedIn' },
    { href: 'https://x.com/JeffreyConnect', icon: FaXTwitter, label: 'Twitter' },
    { href: 'https://www.instagram.com/tlc_jeffrey', icon: FaInstagram, label: 'Instagram' },
  ];

  return (
    <footer style={{ background: 'var(--bg-primary)', padding: '0 32px 32px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div className="section-divider" style={{ marginBottom: '28px' }} />
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
          {/* Left */}
          <div>
            <p style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-secondary)' }}>
              © Jeffrey Agabaenwere
              <span style={{ color: 'var(--text-muted)', marginLeft: '6px' }}>— {new Date().getFullYear()}</span>
            </p>
            {mounted && (
              <p style={{ fontSize: '12px', fontFamily: 'monospace', letterSpacing: '0.1em', color: 'var(--accent)', opacity: 0.45, marginTop: '4px' }}>
                {time}
              </p>
            )}
          </div>

          {/* Social links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {socialsLinks.map(({ href, icon: Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={label}
                style={{
                  width: '36px', height: '36px', borderRadius: '50%',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'border-color 0.25s ease, background 0.25s ease',
                  textDecoration: 'none',
                }}
                className="footer-social"
              >
                <Icon size={15} style={{ color: 'var(--text-muted)' }} />
              </motion.a>
            ))}
          </div>
        </div>
        <style>{`
          .footer-social:hover { border-color: var(--border-hover) !important; background: rgba(255,255,255,0.04) !important; }
        `}</style>
      </div>
    </footer>
  );
};

export default Footer;
