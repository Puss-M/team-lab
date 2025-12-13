import React from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import clsx from 'clsx';
import styles from '../pages/index.module.css';

// SVG Icons
const BrainIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{color: 'var(--ifm-color-primary)'}}>
    <path d="M12 16v-6" />
    <path d="M12 8h.01" />
    <path d="M20.5 12a8.5 8.5 0 1 1-17 0" />
    <path d="M3.6 15h16.8" />
    <path d="M5.6 9h12.8" />
  </svg>
);

const MoleculeIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{color: 'var(--ifm-color-primary)'}}>
    <circle cx="12" cy="12" r="3" />
    <line x1="7" y1="7" x2="10" y2="10" />
    <line x1="14" y1="14" x2="17" y2="17" />
    <line x1="10" y1="14" x2="7" y2="17" />
    <line x1="17" y1="7" x2="14" y2="10" />
    <circle cx="5" cy="5" r="2" />
    <circle cx="19" cy="19" r="2" />
    <circle cx="5" cy="19" r="2" />
    <circle cx="19" cy="5" r="2" />
  </svg>
);

const ShieldIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{color: 'var(--ifm-color-primary)'}}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const areas = [
  {
    title: 'Artificial Intelligence',
    description: 'Developing next-generation foundation models and interpretable AI for scientific discovery.',
    icon: <BrainIcon />,
    link: '/research/ai',
  },
  {
    title: 'Computational Science',
    description: 'Simulating complex molecular dynamics and biological systems at unprecedented scales.',
    icon: <MoleculeIcon />,
    link: '/research/comp-sci',
  },
  {
    title: 'System Security',
    description: 'Ensuring robustness and privacy in distributed computing and federated learning systems.',
    icon: <ShieldIcon />,
    link: '/research/security',
  },
];

export default function ResearchAreaIcons() {
  return (
    <div className="container" style={{padding: '4rem 0'}}>
      <Heading as="h2" style={{textAlign: 'center', marginBottom: '3rem', fontSize: '2rem'}}>
        Research Frontiers
      </Heading>
      <div className="row">
        {areas.map((area, idx) => (
          <div key={idx} className={clsx('col col--4')}>
            <div className="card" style={{height: '100%', textAlign: 'center', padding: '2rem', border: '1px solid rgba(0,0,0,0.05)'}}>
              <div style={{marginBottom: '1.5rem', display: 'flex', justifyContent: 'center'}}>
                <div style={{
                  padding: '1.5rem', 
                  borderRadius: '50%', 
                  background: 'rgba(26, 72, 85, 0.05)', // Very light teal bg
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {area.icon}
                </div>
              </div>
              <Heading as="h3" style={{marginBottom: '1rem'}}>{area.title}</Heading>
              <p style={{color: 'var(--ifm-color-content-secondary)'}}>{area.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
