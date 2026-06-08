import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe2, MapPin, Navigation2 } from 'lucide-react';

const regionData = [
  { 
    name: "Europe", 
    countries: ["Germany", "UK", "France", "Spain"], 
    pct: "45%",
    color: "#6D0F1F", // Brand red-burgundy
    glowColor: "rgba(109, 15, 31, 0.4)",
    // Node coordinate map center (x, y on a 800x450 stage)
    x: 390, 
    y: 130,
    desc: "Our primary garment destination with premium lingerie and high-street fashion partnerships."
  },
  { 
    name: "North America", 
    countries: ["USA", "Canada"], 
    pct: "30%",
    color: "#00897B", // Emerald
    glowColor: "rgba(0, 137, 123, 0.4)",
    x: 180, 
    y: 140,
    desc: "Robust volume shipments of seamless sportswear and core essentials to leading retail giants."
  },
  { 
    name: "Oceania", 
    countries: ["Australia", "New Zealand"], 
    pct: "15%",
    color: "#0B1C2D", // Navy
    glowColor: "rgba(11, 28, 45, 0.4)",
    x: 690, 
    y: 330,
    desc: "Niche collections of luxurious intimate wear exported with premium shipping corridors."
  },
  { 
    name: "Asia", 
    countries: ["Japan", "South Korea"], 
    pct: "10%",
    color: "#B5915D", // Warm Gold
    glowColor: "rgba(181, 145, 93, 0.4)",
    x: 640, 
    y: 150,
    desc: "High-tech technical apparel in growing premium Asian metropolitan hubs."
  }
];

export default function ExportMap() {
  const [hoveredRegion, setHoveredRegion] = useState<any>(null);

  // Bangladesh HQ coordinates on our grid: x: 500, y: 195 (Gazipur / Dhaka region)
  const originX = 500;
  const originY = 195;

  return (
    <section className="py-24 bg-white overflow-hidden" id="export">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Premium Interactive Vector Map */}
          <div className="order-2 lg:order-1 relative">
            <div className="aspect-[16/10] w-full bg-soft-gray rounded-[40px] relative flex items-center justify-center overflow-hidden border border-navy/5 shadow-inner">
              
              {/* High-Tech Vector Grid Background */}
              <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
                <svg width="100%" height="100%">
                  <defs>
                    <pattern id="mapGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1A2B3C" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#mapGrid)" />
                </svg>
              </div>

              {/* 100% Native, Highly Styled Vector World Outline Background */}
              <svg 
                viewBox="0 0 800 450" 
                className="w-full h-full p-4 relative z-10 select-none"
              >
                {/* Simplified aesthetic outlines of continents for elegant context */}
                <g fill="#E5E7EB" opacity="0.8" stroke="#FFFFFF" strokeWidth="1.5">
                  {/* North America */}
                  <path d="M 100,100 L 220,95 L 260,150 L 220,200 L 170,180 L 140,210 L 150,230 L 120,225 Z" />
                  {/* South America */}
                  <path d="M 180,240 L 220,250 L 240,290 L 210,380 L 190,390 L 170,290 Z" />
                  {/* Greenland */}
                  <path d="M 220,50 L 280,45 L 250,85 L 210,75 Z" />
                  {/* Eurasia & Africa */}
                  <path d="M 330,120 L 370,90 L 460,80 L 590,95 L 700,110 L 680,240 L 630,230 L 600,200 L 530,220 L 480,210 L 450,220 L 390,260 L 360,190 Z" />
                  {/* Africa */}
                  <path d="M 370,195 L 430,200 L 470,250 L 450,330 L 415,340 L 365,250 Z" />
                  {/* Australia */}
                  <path d="M 640,300 L 710,310 L 720,355 L 650,350 Z" />
                </g>

                {/* Shipping Route Curved Geodesic Lines from Dhaka to regions */}
                {regionData.map((region) => {
                  const isHovered = hoveredRegion?.name === region.name;
                  // Compute Control point for nice curvature Q
                  const ctrlX = (originX + region.x) / 2;
                  const ctrlY = Math.min(originY, region.y) - 60; // Curve upwards
                  const pathD = `M ${originX},${originY} Q ${ctrlX},${ctrlY} ${region.x},${region.y}`;

                  return (
                    <g key={`route-${region.name}`}>
                      {/* Ambient Shadow Line */}
                      <path 
                        d={pathD}
                        fill="none"
                        stroke="#1A2B3C"
                        strokeWidth={isHovered ? 3 : 1.5}
                        strokeOpacity={isHovered ? 0.3 : 0.08}
                        className="transition-all duration-300"
                      />
                      {/* Pulsing Colorful Routing Arch */}
                      <path 
                        d={pathD}
                        fill="none"
                        stroke={region.color}
                        strokeWidth={isHovered ? 2.5 : 1.5}
                        strokeOpacity={isHovered ? 0.9 : 0.4}
                        strokeDasharray={isHovered ? "4, 4" : "6, 6"}
                        className="transition-all duration-300"
                        style={{
                          strokeDashoffset: isHovered ? -150 : 0,
                          animation: "routeFlow 20s linear infinite"
                        }}
                      />
                    </g>
                  );
                })}

                {/* Bangladesh Origin Hub (Dhaka / Gazipur) */}
                <g transform={`translate(${originX}, ${originY})`} className="cursor-pointer">
                  {/* Multiple Pulsing Waves */}
                  <circle r="20" fill="none" stroke="#00897B" strokeWidth="1" className="animate-ping" style={{ animationDuration: '3s' }} />
                  <circle r="12" fill="none" stroke="#00897B" strokeWidth="1.5" className="animate-ping" style={{ animationDuration: '2s' }} />
                  {/* Physical Point */}
                  <circle r="6" fill="#00897B" stroke="#FFFFFF" strokeWidth="2" className="shadow-lg" />
                  {/* Label */}
                  <text 
                    y="-12" 
                    textAnchor="middle" 
                    fill="#1A2B3C" 
                    className="text-[9px] font-tech font-bold tracking-widest bg-white"
                  >
                    ORIGIN
                  </text>
                </g>

                {/* Export Hub Location Nodes */}
                {regionData.map((region) => {
                  const isHovered = hoveredRegion?.name === region.name;
                  return (
                    <g 
                      key={`node-${region.name}`}
                      transform={`translate(${region.x}, ${region.y})`}
                      className="cursor-pointer"
                      onMouseEnter={() => setHoveredRegion(region)}
                      onMouseLeave={() => setHoveredRegion(null)}
                    >
                      {/* Glow Highlight */}
                      <circle 
                        r={isHovered ? "28" : "18"} 
                        fill={region.glowColor} 
                        className="transition-all duration-500 opacity-60" 
                      />
                      {/* Border ring */}
                      <circle 
                        r={isHovered ? "12" : "7"} 
                        fill="#FFFFFF" 
                        stroke={region.color} 
                        strokeWidth={isHovered ? 3 : 2} 
                        className="transition-all duration-300 shadow-md"
                      />
                      {/* Active core indicator */}
                      {isHovered && (
                        <circle r="4" fill={region.color} className="animate-pulse" />
                      )}
                      
                      {/* Soft Text labels for major regions */}
                      <text 
                        y="22" 
                        textAnchor="middle" 
                        fill="#1A2B3C" 
                        className={`text-[8px] sm:text-[9px] font-tech font-bold uppercase tracking-wider transition-all duration-300 ${
                          isHovered ? 'opacity-100 scale-105 fill-navy font-bold' : 'opacity-65'
                        }`}
                      >
                        {region.name} ({region.pct})
                      </text>
                    </g>
                  );
                })}
              </svg>

              {/* Curated Logistic Overlay Info Box */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between p-4 bg-white/80 backdrop-blur-md rounded-2xl border border-navy/5 shadow-lg relative z-20">
                 <div className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded-full bg-emerald/10 flex items-center justify-center text-emerald">
                     <Navigation2 size={14} className="rotate-45" />
                   </div>
                   <div>
                     <h4 className="text-navy font-tech font-bold text-xs uppercase tracking-wider">
                       Strategic Ingress Hub
                     </h4>
                     <p className="text-navy/50 text-[10px] font-medium leading-tight">
                       Central factory coordinates: Gazipur commercial bypass
                     </p>
                   </div>
                 </div>
                 <div className="text-right">
                   <span className="text-[10px] font-tech font-bold uppercase tracking-widest text-emerald bg-emerald/10 px-2.5 py-1 rounded-full">
                     Active Corridor
                   </span>
                 </div>
              </div>

              {/* Dynamic Interactive Tooltip Overlay */}
              <AnimatePresence>
                {hoveredRegion && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 15 }}
                    className="absolute top-10 left-12 right-12 z-40 pointer-events-none"
                  >
                    <div className="bg-navy p-6 rounded-[24px] shadow-2xl border border-white/10 backdrop-blur-md">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[9px] font-tech font-bold uppercase tracking-[0.2em] text-emerald">
                          Exclusive Destination Network
                        </span>
                        <span className="text-white font-tech font-bold text-lg bg-white/10 px-3 py-1 rounded-full">
                          {hoveredRegion.pct}
                        </span>
                      </div>
                      <h4 className="text-white text-xl font-tech font-bold uppercase tracking-widest mb-2">
                        {hoveredRegion.name}
                      </h4>
                      <p className="text-white/75 text-xs font-medium leading-relaxed mb-4">
                        {hoveredRegion.desc}
                      </p>
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                        {hoveredRegion.countries.map((c: string) => (
                          <span key={c} className="text-[9px] font-tech font-bold uppercase tracking-wider px-2.5 py-1 bg-white/10 text-white rounded-md">
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

          {/* Right Column: Clean Informational panel */}
          <div>
            <span className="text-emerald font-tech font-bold tracking-[0.3em] text-xs uppercase mb-4 block">Worldwide Presence</span>
            <h2 className="text-4xl lg:text-5xl font-tech font-bold text-navy mb-8 uppercase tracking-tighter leading-tight">
              Exporting Excellence <br />
              <span className="text-emerald italic">To The World</span>
            </h2>
            <p className="text-navy/60 mb-12 text-lg font-medium leading-relaxed">
              Our precision-engineered products reach the shelves of major global retailers across Europe, North America, Oceania, and Asian centers of fashion excellence. We maintain a reliable, 100% compliant custom-shipping chain of transit.
            </p>

            <div className="space-y-4">
              {regionData.map((region, idx) => {
                const isHovered = hoveredRegion?.name === region.name;
                return (
                  <motion.div 
                    key={region.name}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    onMouseEnter={() => setHoveredRegion(region)}
                    onMouseLeave={() => setHoveredRegion(null)}
                    className={`p-6 rounded-[30px] border transition-all duration-500 cursor-pointer ${
                      isHovered 
                        ? 'bg-navy border-navy shadow-2xl scale-[1.02]' 
                        : 'bg-soft-gray/50 border-transparent hover:border-emerald/25 hover:bg-white'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-3">
                      <h4 className={`text-xl font-tech font-bold uppercase tracking-tight transition-colors duration-300 ${
                        isHovered ? 'text-white' : 'text-navy'
                      }`}>
                        {region.name}
                      </h4>
                      <span className="text-emerald font-tech font-bold text-2xl">{region.pct}</span>
                    </div>
                    
                    <p className={`text-xs font-medium mb-4 leading-relaxed transition-colors duration-300 ${
                      isHovered ? 'text-white/70' : 'text-navy/50'
                    }`}>
                      {region.desc}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {region.countries.map(c => (
                        <span 
                          key={c} 
                          className={`text-[9px] uppercase font-tech font-bold tracking-widest px-3 py-1 rounded-lg border transition-all ${
                            isHovered
                              ? 'bg-white/10 border-white/10 text-white'
                              : 'bg-white border-navy/5 text-navy/40'
                          }`}
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      {/* Embedded march-ant and flow styling in scope */}
      <style>{`
        @keyframes routeFlow {
          to {
            stroke-dashoffset: -100;
          }
        }
      `}</style>
    </section>
  );
}
