import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Favour O.',
    role: 'CEO, Ekaiva India',
    text: 'Jeffrey transformed our vision into a polished, high-performing platform. His technical skills and creative problem-solving made the entire process seamless.',
    rating: 5,
  },
  {
    name: 'Robinson H.',
    role: 'CTO, Pxxl Cloud',
    text: 'Working with Jeffrey is a premium experience. He understands not just code, but product — delivering solutions that genuinely move the needle for the business.',
    rating: 5,
  },
  {
    name: 'Daniel A.',
    role: 'Founder, eDrive',
    text: 'From UI design to deployment, Jeffrey handled everything with speed and precision. The final product exceeded our expectations in both design and performance.',
    rating: 5,
  },
  {
    name: 'Miracle I.',
    role: 'Product Lead, Nyatwa',
    text: "Jeffrey's attention to detail is unmatched. He built a platform that not only looks stunning but also performs flawlessly under heavy load.",
    rating: 5,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function Reviews() {
  return (
    <section id="reviews" className="relative overflow-hidden" style={{ background: 'var(--bg-primary)', paddingTop: '96px', paddingBottom: '96px' }}>
      {/* Cloud orb */}
      <div className="cloud-orb cloud-orb-md" style={{ bottom: '-10%', right: '10%', animationDelay: '2s' }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ marginBottom: '56px' }}
        >
          <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-primary)', display: 'block', marginBottom: '16px' }}>
            Testimonials
          </span>
          <h2 style={{ fontFamily: 'clashBold, "Poppins", sans-serif', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: '16px' }}>
            What Clients Say.
          </h2>
          <div style={{ height: '2px', width: '48px', background: 'linear-gradient(90deg, rgba(255,255,255,0.6), transparent)' }} />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}
          className="reviews-grid"
        >
          {reviews.map((review, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '20px',
                padding: '28px 30px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'border-color 0.4s ease, transform 0.4s ease',
              }}
                className="review-card"
              >
                <Quote size={28} style={{ color: 'var(--text-primary)', opacity: 0.1, marginBottom: '20px', flexShrink: 0 }} />
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.75, flex: 1, marginBottom: '24px' }}>
                  &ldquo;{review.text}&rdquo;
                </p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '20px', borderTop: '1px solid var(--border-subtle)' }}>
                  <div>
                    <p style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '14px' }}>{review.name}</p>
                    <p style={{ color: 'var(--text-muted)', fontSize: '12px', marginTop: '2px' }}>{review.role}</p>
                  </div>
                  <div style={{ display: 'flex', gap: '2px' }}>
                    {Array.from({ length: review.rating }, (_, i) => (
                      <Star key={i} size={13} className="fill-current" style={{ color: 'var(--text-primary)' }} />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <style>{`
          @media (max-width: 640px) {
            .reviews-grid {
              grid-template-columns: 1fr !important;
            }
          }
          .review-card:hover {
            border-color: var(--border-hover) !important;
            transform: translateY(-2px);
          }
        `}</style>
      </div>
    </section>
  );
}
