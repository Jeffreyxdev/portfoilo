import Resume from './Resume';
import resumeUrl from '../Assets/JEFFREY_AGABAENWERE.pdf';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: 'Frontend Developer',
      company: 'Desight Foundation',
      location: 'Port Harcourt, Nigeria',
      period: '2025 — Present',
      type: 'Full-time',
      description: [
        'Leading development of a Progressive Web App for Africa\'s eye care initiative — serving thousands of patients',
        'Implementing responsive, mobile-first design with modern frontend architecture and performance optimization',
        'Collaborating with government organizations and NGO teams to deliver accessible healthcare technology',
        'Building scalable frontend systems connecting multiple platforms and donation panels'
      ]
    },
    {
      title: 'CTO & Full-Stack Developer',
      company: 'Lemren',
      location: 'Remote / Nigeria',
      period: '2025 — Present',
      type: 'Co-Founder',
      description: [
        'Spearheading technical vision and product architecture for a decentralized car-sharing platform revolutionizing mobility in Africa',
        'Building full-stack infrastructure with Next.js, Firebase, and modern design systems',
        'Architecting multi-provider authentication flows (Google, Email, Phone) and scalable database structures',
        'Driving product strategy, market positioning, and go-to-market execution alongside founding team'
      ]
    },
    {
      title: 'Lead Developer',
      company: 'ApexoAI',
      location: 'Remote',
      period: '2024 — Present',
      type: 'Project Lead',
      description: [
        'Built an AI-powered job hunting agent from scratch — automating resume generation, email drafting, and career optimization',
        'Designed and shipped production-ready Next.js application with GPT-4 Turbo integration',
        'Implemented intelligent tool-calling architecture for email drafts, CV optimization, and job matching',
        'Achieved 30% workflow efficiency improvement for early adopters'
      ]
    },
    {
      title: 'Full-Stack Developer',
      company: 'Ekaiva India',
      location: 'Remote / India',
      period: '2024 — Present',
      type: 'Contract',
      description: [
        'Developed a comprehensive MICE (Meetings, Incentives, Conferences, Exhibitions) platform for India\'s travel industry',
        'Built end-to-end with React.js, Node.js, and TypeScript — handling high concurrent user loads',
        'Implemented real-time booking systems, user dashboards, and content management features',
        'Integrated payment processing and third-party APIs for seamless user experience'
      ]
    },
    {
      title: 'Front-end Supervisor',
      company: 'Autosquare',
      location: 'Florida, USA',
      period: '2024 — Present',
      type: 'Remote',
      description: [
        'Supervised and revamped frontend infrastructure for a car parts dealership platform',
        'Designed RESTful APIs for seamless inventory management and event booking systems',
        'Optimized database queries and frontend rendering for handling high-volume traffic'
      ]
    },
    {
      title: 'Fullstack Developer & CEO',
      company: 'Suifi.ng',
      location: 'Port Harcourt, Nigeria',
      period: '2023 — Present',
      type: 'Founder',
      description: [
        'Founded and lead a digital solutions agency delivering tailored web and mobile applications',
        'Managing end-to-end product development — from client discovery to deployment and iteration',
        'Overseeing company operations, team coordination, and strategic growth initiatives'
      ]
    },
    {
      title: 'Smart Contract Developer',
      company: 'Suiver',
      location: 'Remote',
      period: '2024 — Present',
      type: 'Project',
      description: [
        'Architecting a cutting-edge crypto-to-local-fiat swap protocol on the Sui blockchain',
        'Writing secure smart contracts in Move language with comprehensive testing coverage',
        'Building cross-platform mobile frontend with React Native and Web3.js integration',
        'Pioneering direct fiat off-ramp solutions for African markets'
      ]
    },
    {
      title: 'Full-Stack Developer',
      company: 'Vyral',
      location: 'Remote',
      period: '2024',
      type: 'Project',
      description: [
        'Built a Web3 social media platform enabling creators to share content and engage in decentralized discussions',
        'Developed with React.js, Node.js, and TypeScript — focusing on real-time interactions and scalability',
        'Implemented blockchain-based content ownership and creator monetization features'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'Exla',
      location: 'Remote',
      period: '2024',
      type: 'Project',
      description: [
        'Designed and built a modern concert ticket marketplace for artists and event organizers',
        'Created intuitive discovery flows, ticketing UI, and artist dashboard with React.js',
        'Implemented responsive design across devices with smooth animations and transitions'
      ]
    },
    {
      title: 'Tech Tutor & Mentor',
      company: 'Independent',
      location: 'Port Harcourt, Nigeria',
      period: '2023 — Present',
      type: 'Part-time',
      description: [
        'Mentoring aspiring developers in frontend/backend fundamentals and modern design principles',
        'Teaching practical skills in React, Node.js, and full-stack development workflows',
        'Guiding students from first lines of code to deploying production applications'
      ]
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
    visible: {
      opacity: 1, y: 0, filter: 'blur(0px)',
      transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }
    },
  };

  return (
    <div className="relative overflow-hidden">
      {/* Cloud orb */}
      <div className="cloud-orb cloud-orb-md" style={{ top: '15%', left: '-10%', animationDelay: '2s' }} />

      <motion.div
        initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        className="mb-14"
        style={{ position: 'relative', zIndex: 1 }}
      >
        <span className="text-xs font-medium tracking-[0.25em] uppercase mb-4 block" style={{ color: 'var(--text-primary)' }}>
          Experience
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight" style={{ fontFamily: 'clashBold, sans-serif' }}>
          Professional Journey.
        </h2>
        <div className="h-[2px] w-16 mt-4" style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0.6), transparent)' }} />
      </motion.div>

      {/* Card Grid Layout */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="experience-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '16px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
          >
            <div
              className="experience-card"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '20px',
                padding: '28px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'border-color 0.4s ease, transform 0.4s ease, background 0.4s ease',
              }}
            >
              {/* Header row */}
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '16px' }}>
                <div>
                  <h3 style={{ color: 'var(--text-primary)', fontSize: '16px', fontWeight: 600, lineHeight: 1.3, marginBottom: '4px' }}>
                    {exp.title}
                  </h3>
                  {exp.company && (
                    <p style={{ color: 'var(--text-secondary)', fontSize: '14px', fontWeight: 500 }}>
                      {exp.company}
                    </p>
                  )}
                </div>
                <span
                  style={{
                    fontSize: '10px',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '100px',
                    padding: '4px 10px',
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                  }}
                >
                  {exp.type}
                </span>
              </div>

              {/* Meta */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{exp.location}</span>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)', opacity: 0.4 }}>•</span>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)', letterSpacing: '0.04em' }}>{exp.period}</span>
              </div>

              {/* Description */}
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, flex: 1 }}>
                {exp.description.map((item, i) => (
                  <li key={i} style={{
                    color: 'var(--text-secondary)',
                    fontSize: '13px',
                    lineHeight: 1.7,
                    display: 'flex',
                    alignItems: 'flex-start',
                    marginBottom: i < exp.description.length - 1 ? '8px' : 0,
                  }}>
                    <span style={{ marginRight: '10px', marginTop: '2px', opacity: 0.25, color: 'var(--text-primary)', fontSize: '8px' }}>●</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Resume Download */}
      <motion.div
        initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="mt-12"
        style={{ position: 'relative', zIndex: 1 }}
      >
        <Resume
          pdfUrl={resumeUrl}
          fileName="Jeffrey Agabaenwere.pdf"
          buttonText="Download Resume"
        />
      </motion.div>

      <style>{`
        @media (max-width: 767px) {
          .experience-grid {
            grid-template-columns: 1fr !important;
          }
        }
        .experience-card:hover {
          border-color: var(--border-hover) !important;
          background: var(--bg-card-hover) !important;
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );
};

export default Experience;