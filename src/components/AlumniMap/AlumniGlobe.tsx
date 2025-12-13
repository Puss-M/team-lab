import React, { useEffect, useState, useRef, useMemo } from 'react';
import Globe, { GlobeMethods } from 'react-globe.gl';
import { Alumni } from '../../data/alumni';

// Fix for server-side rendering issues with Docusaurus/Next.js
const isBrowser = typeof window !== 'undefined';

interface AlumniGlobeProps {
  data: Alumni[];
}

const AlumniGlobe: React.FC<AlumniGlobeProps> = ({ data }) => {
  const globeEl = useRef<GlobeMethods | undefined>(undefined);
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Auto-rotate
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.5;
    }
  }, []);

  useEffect(() => {
    // Handle resizing
    const handleResize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: 600 // Fixed height for consistency
        });
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial size

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const gData = useMemo(() => data.map(d => ({
    lat: d.lat,
    lng: d.lng,
    size: 0.15, // Reverted to original size
    color: '#ff5722', // Reverted to original orange
    ...d 
  })), [data]);

  const handleZoomIn = () => {
    if (globeEl.current) {
        // Get current POV, decrease altitude to zoom in
        const currentPov = globeEl.current.pointOfView();
        globeEl.current.pointOfView({ ...currentPov, altitude: Math.max(0.5, currentPov.altitude * 0.7) }, 400);
    }
  };

  const handleZoomOut = () => {
    if (globeEl.current) {
        // Increase altitude to zoom out
        const currentPov = globeEl.current.pointOfView();
        globeEl.current.pointOfView({ ...currentPov, altitude: Math.min(4.0, currentPov.altitude * 1.4) }, 400);
    }
  };

  if (!isBrowser) return <div style={{ height: 600, background: '#000011' }} />;

  return (
    <div ref={containerRef} style={{ width: '100%', height: '600px', cursor: 'grab', position: 'relative' }}>
      {/* Zoom Controls */}
      <div style={{ position: 'absolute', top: '20px', right: '20px', display: 'flex', flexDirection: 'column', gap: '5px', zIndex: 10 }}>
        <button onClick={handleZoomIn} style={{ width: '30px', height: '30px', background: 'rgba(255,255,255,0.2)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '4px', cursor: 'pointer', fontSize: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>+</button>
        <button onClick={handleZoomOut} style={{ width: '30px', height: '30px', background: 'rgba(255,255,255,0.2)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '4px', cursor: 'pointer', fontSize: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>-</button>
      </div>

      <Globe
        ref={globeEl}
        width={dimensions.width}
        height={dimensions.height}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        pointsData={gData}
        pointAltitude={0.01}
        pointColor="color"
        pointRadius="size"
        pointsMerge={true} 
        pointLabel={(obj: any) => `
          <div style="
            background: rgba(255, 255, 255, 0.9); 
            color: #333; 
            padding: 12px; 
            border-radius: 8px; 
            box-shadow: 0 4px 12px rgba(0,0,0,0.2); 
            text-align: center;
            min-width: 150px;
            font-family: var(--ifm-font-family-base);
          ">
            <img src="${obj.avatarUrl}" style="width: 50px; height: 50px; border-radius: 50%; object-fit: cover; margin-bottom: 8px; border: 2px solid var(--ifm-color-primary);" />
            <div style="font-weight: bold; font-size: 14px;">${obj.name}</div>
            <div style="font-size: 12px; color: #666; margin-bottom: 4px;">${obj.role}</div>
            <div style="font-size: 12px; color: var(--ifm-color-primary); font-weight: 600;">${obj.affiliation}</div>
          </div>
        `}
        onPointClick={(point: any) => {
            if (point.profileUrl) {
                window.open(point.profileUrl, '_blank');
            }
        }}
        atmosphereColor="#3a228a"
        atmosphereAltitude={0.15}
      />
    </div>
  );
};

export default AlumniGlobe;
