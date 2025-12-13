import React, { useState } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Heading from '@theme/Heading';
import { alumniData } from '../../data/alumni';

export default function AlumniMap() {
  const [viewMode, setViewMode] = useState<'3D' | '2D'>('3D');

  return (
    <section style={{ padding: '4rem 0', backgroundColor: '#0b0c15', color: '#fff' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '2rem', position: 'relative' }}>
          <Heading as="h2" style={{ color: '#fff' }}>Our Global Network</Heading>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: '#a0a0b0' }}>
            Our alumni are making impacts at top institutions and companies worldwide.
          </p>
          
          <div style={{ 
            marginTop: '1.5rem', 
            display: 'inline-flex', 
            background: 'rgba(255, 255, 255, 0.1)', 
            padding: '4px', 
            borderRadius: '24px' 
          }}>
            <button
              onClick={() => setViewMode('3D')}
              style={{
                background: viewMode === '3D' ? 'var(--ifm-color-primary)' : 'transparent',
                color: '#fff',
                border: 'none',
                padding: '6px 20px',
                borderRadius: '20px',
                cursor: 'pointer',
                fontWeight: 600,
                transition: 'all 0.3s'
              }}
            >
              Globe 3D
            </button>
            <button
              onClick={() => setViewMode('2D')}
              style={{
                background: viewMode === '2D' ? 'var(--ifm-color-primary)' : 'transparent',
                color: '#fff',
                border: 'none',
                padding: '6px 20px',
                borderRadius: '20px',
                cursor: 'pointer',
                fontWeight: 600,
                transition: 'all 0.3s'
              }}
            >
              Map 2D
            </button>
          </div>
        </div>

        <div style={{ position: 'relative', minHeight: '600px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 0 40px rgba(0,0,0,0.5)' }}>
            <BrowserOnly fallback={<div style={{ height: 600, background: '#0b0c15' }} />}>
              {() => {
                const AlumniGlobe = require('./AlumniGlobe').default;
                const AlumniFlatMap = require('./AlumniFlatMap').default;
                return (
                  <>
                    {viewMode === '3D' ? (
                        <AlumniGlobe data={alumniData} />
                    ) : (
                        <AlumniFlatMap data={alumniData} />
                    )}
                  </>
                );
              }}
            </BrowserOnly>
        </div>
      </div>
    </section>
  );
}
