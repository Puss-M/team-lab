import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import HeroCarousel from '../components/HeroCarousel';
import ResearchAreaIcons from '../components/ResearchAreaIcons';

// Latest News & Highlights (Guzj Lab Style - Structured Grid)
function ResearchHighlights() {
  return (
    <section className={styles.features} style={{backgroundColor: 'var(--ifm-background-surface-color)', paddingBottom: '2rem'}}>
      <div className="container">
        <div className="row">
          {/* News Column */}
          <div className="col col--6">
            <div className="card" style={{height: '100%', borderTop: '4px solid var(--ifm-color-primary)'}}>
              <div className="card__header" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <Heading as="h3">Latest News</Heading>
                <Link to="/blog" style={{fontSize: '0.9rem'}}>All News →</Link>
              </div>
              <div className="card__body">
                <ul style={{listStyle: 'none', padding: 0}}>
                  <li style={{marginBottom: '1rem', borderBottom: '1px solid var(--ifm-color-emphasis-200)', paddingBottom: '0.8rem'}}>
                    <small style={{color: 'var(--ifm-color-primary)', fontWeight: 600}}>DEC 10</small>
                    <div style={{fontSize: '1.1rem', fontWeight: 500, margin: '0.2rem 0'}}>Paper Accepted at CVPR 2025</div>
                    <small style={{color: 'var(--ifm-color-content-secondary)'}}>Our research on "Generative Agents" was accepted for oral presentation.</small>
                  </li>
                  <li style={{marginBottom: '1rem', borderBottom: '1px solid var(--ifm-color-emphasis-200)', paddingBottom: '0.8rem'}}>
                    <small style={{color: 'var(--ifm-color-primary)', fontWeight: 600}}>NOV 28</small>
                    <div style={{fontSize: '1.1rem', fontWeight: 500, margin: '0.2rem 0'}}>We are Hiring!</div>
                    <small style={{color: 'var(--ifm-color-content-secondary)'}}>Seeking 2 PhD students for Fall 2025. Apply now.</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Recent Publications Column */}
          <div className="col col--6">
             <div className="card" style={{height: '100%', borderTop: '4px solid var(--ifm-color-primary)'}}>
              <div className="card__header" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <Heading as="h3">Selected Publications</Heading>
                <Link to="/achievements/papers" style={{fontSize: '0.9rem'}}>Full List →</Link>
              </div>
              <div className="card__body">
                <div style={{marginBottom: '1.5rem'}}>
                  <div style={{fontWeight: 600, fontSize: '1.1rem', marginBottom: '0.3rem'}}>
                    <Link to="#" style={{color: 'inherit', textDecoration: 'none'}}>Large Scale Multi-Agent Systems for Scientific Discovery</Link>
                  </div>
                  <div style={{fontSize: '0.9rem', color: 'var(--ifm-color-content-secondary)', marginBottom: '0.3rem'}}>
                    A. Smith, B. Johnson, C. Lee et al.
                  </div>
                  <div style={{fontStyle: 'italic', color: 'var(--ifm-color-primary)'}}>Nature Machine Intelligence, 2024</div>
                </div>

                <div>
                  <div style={{fontWeight: 600, fontSize: '1.1rem', marginBottom: '0.3rem'}}>
                    <Link to="#" style={{color: 'inherit', textDecoration: 'none'}}>Robust Federated Learning under Privacy Constraints</Link>
                  </div>
                  <div style={{fontSize: '0.9rem', color: 'var(--ifm-color-content-secondary)', marginBottom: '0.3rem'}}>
                    D. Wang, E. Chen, F. Wu
                  </div>
                  <div style={{fontStyle: 'italic', color: 'var(--ifm-color-primary)'}}>NeurIPS 2023 (Spotlight)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Lab Life / Community Section (Shalek Lab Style)
function LabLife() {
  return (
    <section className="lab-life-section">
      <div className="container">
        <div style={{textAlign: 'center', marginBottom: '3rem'}}>
          <Heading as="h2">Lab Life & Culture</Heading>
          <p style={{fontSize: '1.1rem', color: 'var(--ifm-color-content-secondary)', maxWidth: '700px', margin: '0 auto'}}>
            Beyond research, we are a vibrant community of thinkers and creators. 
            We value collaboration, diversity, and work-life balance.
          </p>
        </div>
        <div className="row">
          <div className="col col--4">
            <div className="lab-life-image">
              <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="Team Meeting" />
            </div>
            <div style={{textAlign: 'center', marginTop: '1rem', fontWeight: 600}}>Weekly Seminars</div>
          </div>
          <div className="col col--4">
             <div className="lab-life-image">
              <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="Conference" />
            </div>
            <div style={{textAlign: 'center', marginTop: '1rem', fontWeight: 600}}>Conference Travels</div>
          </div>
          <div className="col col--4">
             <div className="lab-life-image">
              <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="Team Building" />
            </div>
            <div style={{textAlign: 'center', marginTop: '1rem', fontWeight: 600}}>Team Retreats</div>
          </div>
        </div>
        <div style={{textAlign: 'center', marginTop: '3rem'}}>
           <Link className="button button--primary button--lg" to="/docs/intro">Learn More About Us</Link>
        </div>
      </div>
    </section>
  );
}

import AlumniMap from '../components/AlumniMap';

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="XXX Research Group - Laboratory Website">
      
      {/* 1. Dynamic Hero Carousel (Shalek/Guzj style) */}
      <HeroCarousel />
      
      <main>
        {/* 2. Structured News & Pubs (Guzj style) */}
        <ResearchHighlights />

        {/* 3. Global Alumni Network (NEW) */}
        <AlumniMap />
        
        {/* 4. Icon-based Research Areas (Gu Lab style) */}
        <ResearchAreaIcons />
        
        {/* 5. Lab Life Visuals (Shalek style) */}
        <LabLife />
      </main>
    </Layout>
  );
}
