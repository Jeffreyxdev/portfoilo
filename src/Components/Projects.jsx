import { motion } from 'framer-motion';
import { ArrowUpRight, Bot, Star, Code2 } from 'lucide-react';

const featuredProject = {
  name: 'ApexoAI',
  client: 'ApexoAI',
  outcome: '30% Workflow Efficiency',
  link: 'https://apexoai.vercel.app/',
};

const projects = [
  {
    name: 'Ekaiva India',
    desc: 'An Indian MICE organization platform for travels and connections.',
    tech: 'React.js + Node.js + TypeScript',
    link: 'https://ekaivaindia.com/',
  },
  {
    name: 'PayForeign',
    desc: 'International payment and foreign exchange application.',
    tech: 'React.js + Node.js + TailwindCSS',
    link: 'https://payforeign-app.vercel.app/',
  },
  {
    name: 'Aave',
    desc: 'DeFi protocol interface for lending and borrowing.',
    tech: 'React.js + Web3 + TypeScript',
    link: 'https://aave.com/',
  },
  {
    name: 'eDrive',
    desc: 'Modern electric vehicle management and mobility application.',
    tech: 'React.js + Node.js + TailwindCSS',
    link: 'https://edrive.app/',
  },
  {
    name: 'Deyemi Okanlawon',
    desc: 'Professional portfolio for actor and creative artist.',
    tech: 'React.js + TailwindCSS',
    link: 'https://deyemiokanlawon.com/',
  },
  {
    name: 'Nyatwa',
    desc: 'Modern web platform for digital services and connections.',
    tech: 'React.js + Node.js + TailwindCSS',
    link: 'https://nyatwa.com/',
  },
  {
    name: 'Suiver',
    desc: 'Cutting-edge crypto to local fiat swap technology.',
    tech: 'Node.js + Move + React Native + Web3',
    link: 'https://suiver.pxxl.click/',
  },
];

function SectionLabel({ children }) {
  return (
    <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', display: 'block', marginBottom: '16px' }}>
      {children}
    </span>
  );
}

function SectionTitle({ children }) {
  return (
    <h2 style={{ fontFamily: 'clashBold, "Poppins", sans-serif', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: '16px' }}>
      {children}
    </h2>
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden" style={{ background: 'var(--bg-secondary)', paddingTop: '96px', paddingBottom: '96px' }}>
      {/* Cloud orb accent */}
      <div className="cloud-orb cloud-orb-md" style={{ top: '10%', right: '-10%', animationDelay: '1s' }} />

      <div style={{ maxWidth: '960px', margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 1 }}>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ marginBottom: '56px' }}
        >
          <SectionLabel>Portfolio</SectionLabel>
          <SectionTitle>Here&apos;s What I&apos;ve<br />Been Up To.</SectionTitle>
          <div style={{ height: '2px', width: '48px', background: 'linear-gradient(90deg, var(--accent), transparent)' }} />
        </motion.div>

        {/* ======= BENTO GRID ======= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '16px',
          }}
          className="projects-bento"
        >
          {/* FEATURED CARD — spans 2×2 */}
          <motion.div variants={itemVariants} style={{ gridColumn: 'span 2', gridRow: 'span 2' }}>
            <div style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '24px',
              padding: '28px',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              transition: 'border-color 0.5s ease, box-shadow 0.5s ease',
            }}
              className="card-featured-hover"
            >
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'var(--accent-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Code2 size={18} style={{ color: 'var(--accent)' }} />
                  </div>
                  <div>
                    <p style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '16px', lineHeight: 1 }}>{featuredProject.name}</p>
                    <p style={{ color: 'var(--text-muted)', fontSize: '11px', marginTop: '3px' }}>Featured Case Study</p>
                  </div>
                </div>
                <a href={featuredProject.link} target="_blank" rel="noopener noreferrer"
                  style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'border-color 0.3s ease' }}>
                  <ArrowUpRight size={16} style={{ color: 'var(--text-muted)' }} />
                </a>
              </div>

              {/* Code Block */}
              <div style={{
                flex: 1,
                background: '#080810',
                borderRadius: '14px',
                border: '1px solid var(--border-subtle)',
                padding: '20px',
                marginBottom: '20px',
                fontFamily: '"SF Mono","Fira Code","Cascadia Code",monospace',
                fontSize: '13px',
                lineHeight: 1.8,
                overflowX: 'auto',
              }}>
                <div style={{ display: 'flex', gap: '7px', marginBottom: '16px', alignItems: 'center' }}>
                  <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#555' }} />
                  <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#888' }} />
                  <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#bbb' }} />
                  <span style={{ marginLeft: '8px', fontSize: '11px', color: 'rgba(255,255,255,0.15)' }}>agent.ts</span>
                </div>
                <pre style={{ margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
                  <span style={{ color: '#636175' }}>{`// AI-Powered Job Hunt Agent\n`}</span>
                  <span style={{ color: '#c084fc' }}>const </span>
                  <span style={{ color: '#93c5fd' }}>generateResume</span>
                  <span style={{ color: '#e4e4e7' }}> = </span>
                  <span style={{ color: '#c084fc' }}>async </span>
                  <span style={{ color: '#e4e4e7' }}>(profile) {`=>`} {'{'}</span>
                  {`\n  `}
                  <span style={{ color: '#c084fc' }}>const </span>
                  <span style={{ color: '#e4e4e7' }}>ai = </span>
                  <span style={{ color: '#c084fc' }}>await </span>
                  <span style={{ color: '#93c5fd' }}>initAgent</span>
                  <span style={{ color: '#e4e4e7' }}>{'({'}</span>
                  {`\n    `}
                  <span style={{ color: '#e4e4e7' }}>model: </span>
                  <span style={{ color: '#86efac' }}>&apos;gpt-4-turbo&apos;</span>
                  <span style={{ color: '#e4e4e7' }}>,</span>
                  {`\n    `}
                  <span style={{ color: '#e4e4e7' }}>tools: [</span>
                  <span style={{ color: '#86efac' }}>&apos;emailDraft&apos;</span>
                  <span style={{ color: '#e4e4e7' }}>, </span>
                  <span style={{ color: '#86efac' }}>&apos;cvOptimize&apos;</span>
                  <span style={{ color: '#e4e4e7' }}>],</span>
                  {`\n  `}
                  <span style={{ color: '#e4e4e7' }}>{'}'});</span>
                  {`\n  `}
                  <span style={{ color: '#c084fc' }}>return </span>
                  <span style={{ color: '#e4e4e7' }}>ai.</span>
                  <span style={{ color: '#93c5fd' }}>craft</span>
                  <span style={{ color: '#e4e4e7' }}>(profile);</span>
                  {`\n`}
                  <span style={{ color: '#e4e4e7' }}>{'}'}</span>
                </pre>
              </div>

              {/* Info Tiles */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                {[
                  { label: 'Client', value: featuredProject.client },
                  { label: 'Stack', value: 'Next.js + AI' },
                  { label: 'Outcome', value: featuredProject.outcome, accent: true },
                ].map((tile) => (
                  <div key={tile.label} style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '12px',
                    padding: '12px 14px',
                  }}>
                    <p style={{ fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '5px' }}>{tile.label}</p>
                    <p style={{ fontSize: '13px', fontWeight: 600, color: tile.accent ? 'var(--text-primary)' : 'var(--text-primary)' }}>{tile.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Bot/AI Widget */}
          <motion.div variants={itemVariants}>
            <div className="card h-full" style={{ padding: '24px', borderRadius: '20px', height: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                <Bot size={16} style={{ color: 'var(--text-primary)' }} />
                <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>AI &amp; Bots</span>
              </div>
              <h3 style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '16px', marginBottom: '10px' }}>Bot &amp; Automation</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13px', lineHeight: 1.65 }}>
                Trading bots on Solana, workflow automation, and intelligent system orchestration.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '16px' }}>
                {['Python', 'Solana', 'AI'].map(t => (
                  <span key={t} className="tag" style={{ fontSize: '11px', padding: '4px 12px' }}>{t}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Reviews Widget */}
          <motion.div variants={itemVariants}>
            <div className="card h-full" style={{ padding: '24px', borderRadius: '20px', height: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                <Star size={16} style={{ color: 'var(--text-primary)' }} />
                <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Reviews</span>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13px', lineHeight: 1.65, fontStyle: 'italic', flex: 1 }}>
                &ldquo;Jeffrey delivered beyond expectations. His attention to detail and understanding of modern web standards made a huge difference.&rdquo;
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '3px', marginTop: '14px' }}>
                {[1, 2, 3, 4, 5].map(s => (
                  <Star key={s} size={13} className="fill-current" style={{ color: 'var(--text-primary)' }} />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Project Cards */}
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ display: 'block', height: '100%', textDecoration: 'none' }}>
                <div className="card" style={{ padding: '20px 25px', borderRadius: '20px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#34d399', boxShadow: '0 0 6px rgba(52,211,153,0.4)', flexShrink: 0 }} />
                      <h3 style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '15px', lineHeight: 1.3 }}>{project.name}</h3>
                    </div>
                    <ArrowUpRight size={16} style={{ color: 'var(--text-muted)', flexShrink: 0, marginTop: '2px' }} />
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '13px', lineHeight: 1.6, flex: 1, marginBottom: '12px' }}>{project.desc}</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '11px', fontWeight: 500 }}>{project.tech}</p>
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Responsive bento grid on mobile */}
      <style>{`
        @media (max-width: 767px) {
          .projects-bento {
            grid-template-columns: 1fr !important;
            width: 100% !important;
            max-width: 100% !important;
            overflow: hidden !important;
          }
          .projects-bento > div {
            grid-column: span 1 !important;
            grid-row: span 1 !important;
            width: 100% !important;
            max-width: 100% !important;
          }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .projects-bento {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .projects-bento > div[style*="span 2"] {
            grid-column: span 2 !important;
            grid-row: span 1 !important;
          }
        }
        .card-featured-hover:hover {
          border-color: rgba(255,255,255,0.12) !important;
          box-shadow: 0 20px 60px -12px rgba(255,255,255,0.04);
        }
      `}</style>
    </section>
  );
}