import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from 'react-simple-maps';
import { Tooltip } from 'react-tooltip';
import { Alumni } from '../../data/alumni';

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

interface AlumniFlatMapProps {
  data: Alumni[];
}

const AlumniFlatMap: React.FC<AlumniFlatMapProps> = ({ data }) => {
  const [position, setPosition] = useState({ coordinates: [0, 20] as [number, number], zoom: 1 });

  function handleZoomIn() {
    if (position.zoom >= 4) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom * 1.5 }));
  }

  function handleZoomOut() {
    if (position.zoom <= 1) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom / 1.5 }));
  }

  function handleMoveEnd(position: { coordinates: [number, number]; zoom: number }) {
    setPosition(position);
  }

  return (
    <div style={{ width: '100%', height: '600px', backgroundColor: '#f0f4f8', borderRadius: '12px', overflow: 'hidden', position: 'relative' }}>
        {/* Zoom Controls */}
        <div style={{ position: 'absolute', top: '20px', right: '20px', display: 'flex', flexDirection: 'column', gap: '5px', zIndex: 10 }}>
            <button onClick={handleZoomIn} style={{ width: '30px', height: '30px', background: '#fff', border: '1px solid #ccc', borderRadius: '4px', cursor: 'pointer', fontSize: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>+</button>
            <button onClick={handleZoomOut} style={{ width: '30px', height: '30px', background: '#fff', border: '1px solid #ccc', borderRadius: '4px', cursor: 'pointer', fontSize: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>-</button>
        </div>

        <ComposableMap projection="geoMercator" projectionConfig={{ scale: 140 }}>
          <ZoomableGroup 
            zoom={position.zoom} 
            center={position.coordinates} 
            onMoveEnd={handleMoveEnd}
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#d1d5db"
                    stroke="#fff"
                    strokeWidth={0.5}
                    style={{
                      default: { outline: "none" },
                      hover: { fill: "#9ca3af", outline: "none" },
                      pressed: { fill: "#6b7280", outline: "none" }
                    }}
                  />
                ))
              }
            </Geographies>
            {data.map((alumni) => (
              <Marker 
                key={alumni.id} 
                coordinates={[alumni.lng, alumni.lat]}
                data-tooltip-id="alumni-tooltip"
                data-tooltip-html={`
                    <div style="text-align: center;">
                        <img src="${alumni.avatarUrl}" style="width: 40px; height: 40px; border-radius: 50%; margin-bottom: 5px;" />
                        <div><strong>${alumni.name}</strong></div>
                        <div style="font-size: 0.8em; opacity: 0.8;">${alumni.affiliation}</div>
                    </div>
                `}
                onClick={() => {
                    if (alumni.profileUrl) window.open(alumni.profileUrl, '_blank');
                }}
              >
                <circle r={6 / position.zoom} fill="#eb5757" stroke="#fff" strokeWidth={1} style={{ cursor: 'pointer', transition: 'all 0.3s' }} />
              </Marker>
            ))}
          </ZoomableGroup>
        </ComposableMap>
        
        <Tooltip id="alumni-tooltip" style={{ backgroundColor: "rgba(255, 255, 255, 0.95)", color: "#000", zIndex: 999, borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.15)" }} />
    </div>
  );
};

export default AlumniFlatMap;
