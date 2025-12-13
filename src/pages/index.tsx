import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className={styles.hero__title}>
          XXX Research Group
        </Heading>
        <p className={styles.hero__subtitle}>
          Pioneering Research in Artificial Intelligence and Computational Science
          <br />
          <span style={{fontSize: '0.8em', opacity: 0.8}}>XXX Laboratory, University of XXX</span>
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/achievements/papers">
            VIEW PUBLICATIONS
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            to="/about/contact">
            JOIN THE TEAM
          </Link>
        </div>
      </div>
    </header>
  );
}

// Research Highlights (replaces generic features)
function ResearchHighlights() {
  return (
    <section className={styles.features} style={{backgroundColor: 'var(--ifm-background-surface-color)', paddingBottom: '2rem'}}>
      <div className="container">
        <div className="row">
          <div className="col col--4">
            <div className="card" style={{height: '100%', borderTop: '4px solid var(--ifm-color-primary)'}}>
              <div className="card__header">
                <Heading as="h3">News & Updates</Heading>
              </div>
              <div className="card__body">
                <ul style={{listStyle: 'none', padding: 0}}>
                  <li style={{marginBottom: '1rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem'}}>
                    <small style={{color: 'var(--ifm-color-content-secondary)'}}>Dec 10, 2024</small><br />
                    <strong>New Paper Accepted at CVPR 2025</strong><br />
                    congratulations to the team!
                  </li>
                  <li style={{marginBottom: '1rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem'}}>
                    <small style={{color: 'var(--ifm-color-content-secondary)'}}>Dec 05, 2024</small><br />
                    <strong>Open Source Dataset Released</strong><br />
                    Our new large-scale dataset is now available.
                  </li>
                  <li>
                    <Link to="/blog">View Archive →</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="col col--4">
             <div className="card" style={{height: '100%', borderTop: '4px solid var(--ifm-color-primary)'}}>
              <div className="card__header">
                <Heading as="h3">Selected Publications</Heading>
              </div>
              <div className="card__body">
                <p>
                  <strong>Title of a Very Important Paper</strong><br />
                  <span style={{fontSize: '0.9em'}}>Authors List...</span><br />
                  <em style={{color: 'var(--ifm-color-primary)'}}>Nature Machine Intelligence, 2024</em>
                </p>
                <p>
                  <strong>Another Groundbreaking Work</strong><br />
                  <span style={{fontSize: '0.9em'}}>Authors List...</span><br />
                  <em style={{color: 'var(--ifm-color-primary)'}}>NeurIPS 2023 (Oral)</em>
                </p>
                <Link to="/achievements/papers">View All Publications →</Link>
              </div>
            </div>
          </div>

          <div className="col col--4">
             <div className="card" style={{height: '100%', borderTop: '4px solid var(--ifm-color-primary)'}}>
              <div className="card__header">
                <Heading as="h3">Quick Links</Heading>
              </div>
              <div className="card__body">
                 <ul style={{paddingLeft: '1.2rem'}}>
                   <li style={{marginBottom: '0.5rem'}}><Link to="/docs/intro">New Member Guide (Quick Learn)</Link></li>
                   <li style={{marginBottom: '0.5rem'}}><Link to="/resources">Datasets & Code</Link></li>
                   <li style={{marginBottom: '0.5rem'}}><Link to="/about/team">Meet the Team</Link></li>
                   <li style={{marginBottom: '0.5rem'}}><Link to="/archives">Internal Archives</Link></li>
                 </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ResearchAreas() {
  return (
    <section className={styles.features}>
      <div className="container">
        <Heading as="h2" style={{textAlign: 'center', marginBottom: '3rem'}}>Research Areas</Heading>
        <div className="row">
           <div className="col col--4">
             <div className="text--center">
               <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=500&auto=format&fit=crop&q=60" alt="AI" style={{borderRadius: '50%', width: '150px', height: '150px', objectFit: 'cover', marginBottom: '1rem'}} />
               <Heading as="h3">Artificial Intelligence</Heading>
               <p>Deep Learning, Reinforcement Learning, and Foundation Models.</p>
             </div>
           </div>
           <div className="col col--4">
             <div className="text--center">
               <img src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=500&auto=format&fit=crop&q=60" alt="Comp Bio" style={{borderRadius: '50%', width: '150px', height: '150px', objectFit: 'cover', marginBottom: '1rem'}} />
               <Heading as="h3">Computational Science</Heading>
               <p>High-performance computing and scientific simulations.</p>
             </div>
           </div>
           <div className="col col--4">
             <div className="text--center">
               <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&auto=format&fit=crop&q=60" alt="Security" style={{borderRadius: '50%', width: '150px', height: '150px', objectFit: 'cover', marginBottom: '1rem'}} />
               <Heading as="h3">System Security</Heading>
               <p>Building robust and secure computing systems.</p>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Home"
      description="XXX Research Group - University of XXX">
      <HomepageHeader />
      <main>
        <ResearchHighlights />
        <ResearchAreas />
      </main>
    </Layout>
  );
}
