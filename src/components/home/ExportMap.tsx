import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe2, MapPin } from 'lucide-react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Graticule
} from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const regionData = [
  { 
    name: "Europe", 
    countries: ["Germany", "UK", "France", "Spain"], 
    isoCodes: ["DEU", "GBR", "FRA", "ESP", "ITA", "NLD", "BEL", "CHE", "AUT", "PRT", "SWE", "NOR", "DNK", "FIN"],
    pct: "45%",
    color: "#6D0F1F" // Brand color
  },
  { 
    name: "North America", 
    countries: ["USA", "Canada"], 
    isoCodes: ["USA", "CAN", "MEX"],
    pct: "30%",
    color: "#00897B" // Emerald
  },
  { 
    name: "Oceania", 
    countries: ["Australia", "New Zealand"], 
    isoCodes: ["AUS", "NZL"],
    pct: "15%",
    color: "#0B1C2D" // Navy
  },
  { 
    name: "Asia", 
    countries: ["Japan", "South Korea"], 
    isoCodes: ["JPN", "KOR", "CHN", "SGP", "THA", "VNM", "MYS"],
    pct: "10%",
    color: "#6D0F1F"
  }
];

export default function ExportMap() {
  const [hoveredRegion, setHoveredRegion] = useState<any>(null);

  const getRegionByIso = (iso: string) => {
    return regionData.find(r => r.isoCodes.includes(iso));
  };

  return (
    <section className="py-32 bg-white overflow-hidden" id="export">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
            {/* Interactive World Map */}
            <div className="aspect-video bg-soft-gray rounded-[40px] relative flex items-center justify-center overflow-hidden border border-navy/5 shadow-inner">
              <div className="w-full h-full p-4">
                <ComposableMap
                  projectionConfig={{
                    rotate: [-10, 0, 0],
                    scale: 147
                  }}
                  className="w-full h-full"
                >
                  <Graticule stroke="#E5E7EB" strokeWidth={0.5} />
                  <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                      geographies.map((geo) => {
                        const region = getRegionByIso(geo.id);
                        const isHovered = hoveredRegion?.name === region?.name;
                        
                        return (
                          <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            onMouseEnter={() => {
                              if (region) setHoveredRegion(region);
                            }}
                            onMouseLeave={() => {
                              setHoveredRegion(null);
                            }}
                            style={{
                              default: {
                                fill: region ? region.color : "#D1D5DB",
                                fillOpacity: region ? 0.6 : 1,
                                outline: "none",
                                stroke: "#FFFFFF",
                                strokeWidth: 0.5,
                                transition: "all 300ms"
                              },
                              hover: {
                                fill: region ? region.color : "#9CA3AF",
                                fillOpacity: region ? 1 : 1,
                                outline: "none",
                                cursor: region ? "pointer" : "default",
                                transition: "all 300ms"
                              },
                              pressed: {
                                fill: region ? region.color : "#6B7280",
                                outline: "none"
                              }
                            }}
                          />
                        );
                      })
                    }
                  </Geographies>
                  
                  {/* Origin Marker: Dhaka, Bangladesh */}
                  <Marker coordinates={[90.4125, 23.8103]}>
                    <circle r={4} fill="#00897B" stroke="#fff" strokeWidth={2} />
                    <circle r={12} fill="#00897B" opacity={0.3} className="animate-pulse" />
                  </Marker>
                </ComposableMap>
              </div>

              {/* Tooltip Over Map */}
              <AnimatePresence>
                {hoveredRegion && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 10 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                  >
                    <div className="bg-navy p-6 rounded-[30px] shadow-2xl border border-white/10 min-w-[240px] backdrop-blur-md">
                      <div className="flex justify-between items-center mb-4">
                        <h4 className="text-white font-tech font-bold uppercase tracking-widest">{hoveredRegion.name}</h4>
                        <span className="text-emerald font-tech font-bold text-xl">{hoveredRegion.pct}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {hoveredRegion.countries.map((c: string) => (
                          <span key={c} className="text-[9px] font-tech font-bold uppercase tracking-tighter px-2 py-1 bg-white/10 text-white/70 rounded-md">
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="absolute bottom-8 left-8 p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 max-w-[200px] shadow-xl">
                 <h4 className="text-navy font-tech font-bold flex items-center gap-2 mb-1 text-sm">
                   <MapPin className="text-emerald" size={14} />
                   HQ: DHAKA
                 </h4>
                 <p className="text-navy/50 text-[10px] font-medium leading-tight">Strategic hub connecting Bangladesh to the global fashion markets.</p>
              </div>
            </div>
          </div>

          <div>
            <span className="text-emerald font-tech font-bold tracking-[0.3em] text-xs uppercase mb-4 block underline underline-offset-8">Worldwide Presence</span>
            <h2 className="text-4xl lg:text-5xl font-tech font-bold text-navy mb-8 uppercase tracking-tighter leading-tight">
              Exporting Excellence <br />
              <span className="text-emerald italic">To The World</span>
            </h2>
            <p className="text-navy/60 mb-12 text-lg font-medium leading-relaxed">
              Our precision-engineered products reach the shelves of major global retailers across Europe, USA, and Oceania. We maintain a robust supply chain network.
            </p>

            <div className="space-y-4">
              {regionData.map((region, idx) => (
                <motion.div 
                  key={region.name}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  onMouseEnter={() => setHoveredRegion(region)}
                  onMouseLeave={() => setHoveredRegion(null)}
                  className={`p-6 rounded-[30px] border transition-all duration-500 cursor-pointer ${
                    hoveredRegion?.name === region.name 
                      ? 'bg-navy border-navy shadow-2xl scale-[1.02]' 
                      : 'bg-soft-gray/50 border-transparent hover:border-emerald/20 hover:bg-white'
                  }`}
                >
                  <div className="flex justify-between items-center mb-3">
                    <h4 className={`text-xl font-tech font-bold uppercase tracking-tight ${hoveredRegion?.name === region.name ? 'text-white' : 'text-navy'}`}>
                      {region.name}
                    </h4>
                    <span className="text-emerald font-tech font-bold text-2xl">{region.pct}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {region.countries.map(c => (
                      <span 
                        key={c} 
                        className={`text-[9px] uppercase font-tech font-bold tracking-widest px-3 py-1 rounded-lg border transition-all ${
                          hoveredRegion?.name === region.name
                            ? 'bg-white/10 border-white/10 text-white/60'
                            : 'bg-white border-navy/5 text-navy/40'
                        }`}
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
