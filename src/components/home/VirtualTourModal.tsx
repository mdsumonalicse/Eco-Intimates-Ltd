import { motion, AnimatePresence } from 'motion/react';
import { X, Info, ChevronRight, ChevronLeft, MapPin, Play, Box } from 'lucide-react';
import { useState, useEffect } from 'react';

interface Scene {
  id: string;
  title: string;
  description: string;
  image: string;
  hotspots: { x: number; y: number; label: string; details: string }[];
}

const factoryScenes: Scene[] = [
  {
    id: 'knitting',
    title: 'Advanced Knitting Unit',
    description: 'Our state-of-the-art circular knitting machines produce high-quality single jersey and rib fabrics.',
    image: 'https://i.postimg.cc/J4RNBXgb/13.jpg',
    hotspots: [
      { x: 30, y: 40, label: 'Circular Knitting', details: 'High-speed precision knitting for consistent fabric density.' },
      { x: 70, y: 60, label: 'Quality Feed', details: 'Automated yarn feeding sensors to prevent fabric defects.' }
    ]
  },
  {
    id: 'cutting',
    title: 'Precision Cutting Floor',
    description: 'CAD-integrated automated cutting ensuring zero-waste efficiency and anatomical precision.',
    image: 'https://i.postimg.cc/kX7QtSZB/4.jpg',
    hotspots: [
      { x: 50, y: 30, label: 'Laser Cutting', details: 'Micron-level accuracy for complex intimate apparel patterns.' }
    ]
  },
  {
    id: 'stitching',
    title: 'Expert Stitching Lines',
    description: 'Specialized machinery for delicate lingerie and high-performance activewear.',
    image: 'https://i.postimg.cc/PrdW8Dcp/12.jpg',
    hotspots: [
      { x: 40, y: 50, label: 'Flatlock Machines', details: 'Iterative stitching process for seamless comfort and durability.' },
      { x: 80, y: 45, label: 'Final Assembly', details: 'Expert craftsmanship combined with automated precision.' }
    ]
  },
  {
    id: 'lab',
    title: 'R&D Laboratory',
    description: 'Advanced testing for fabric stretching, color fastness, and chemical safety standards.',
    image: 'https://i.postimg.cc/xCyk0x9W/3.jpg',
    hotspots: [
      { x: 50, y: 50, label: 'Stretch Testing', details: 'Ensuring 4-way elastic recovery for maximum mobility.' }
    ]
  },
  {
    id: 'warehouse',
    title: 'Smart Logistics Center',
    description: 'Fully digitized inventory management system for efficient global shipping.',
    image: 'https://i.postimg.cc/ZKJ8yNgW/8.jpg',
    hotspots: [
      { x: 30, y: 40, label: 'Barcode Tracking', details: 'Real-time visibility from shelf to destination.' }
    ]
  },
  {
    id: 'qc',
    title: 'Zero-Defect Quality Control',
    description: 'Every single piece undergoes a rigorous 4-step inspection before packaging.',
    image: 'https://i.postimg.cc/ncn4Qm54/16.jpg',
    hotspots: [
      { x: 25, y: 55, label: 'Oeko-Tex Standard', details: 'Certified safe for skin, free from harmful chemical residues.' }
    ]
  }
];

interface VirtualTourModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VirtualTourModal({ isOpen, onClose }: VirtualTourModalProps) {
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState<{ label: string; details: string } | null>(null);
  const [mode, setMode] = useState<'interactive' | 'video'>('interactive');

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isOpen && mode === 'interactive' && !activeHotspot) {
      timer = setInterval(() => {
        setCurrentSceneIndex((prev) => (prev + 1) % factoryScenes.length);
      }, 7000); // Cycle scenes every 7 seconds if no hotspot is selection
    }
    return () => clearInterval(timer);
  }, [isOpen, mode, activeHotspot]);

  const scene = factoryScenes[currentSceneIndex];

  const nextScene = () => {
    setActiveHotspot(null);
    setCurrentSceneIndex((prev) => (prev + 1) % factoryScenes.length);
  };

  const prevScene = () => {
    setActiveHotspot(null);
    setCurrentSceneIndex((prev) => (prev - 1 + factoryScenes.length) % factoryScenes.length);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/95 backdrop-blur-xl p-0 md:p-8"
        >
          <div className="relative w-full h-full md:h-[80vh] md:max-w-7xl bg-black md:rounded-3xl overflow-hidden shadow-2xl border-none md:border md:border-white/10 flex flex-col md:flex-row">
            
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 z-50 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors border border-white/10"
            >
              <X size={24} />
            </button>

            {/* Left Info Panel */}
            <div className="w-full md:w-80 h-auto md:h-full bg-brand/10 backdrop-blur-md p-6 md:p-8 border-b md:border-b-0 md:border-r border-white/10 flex flex-col justify-between relative z-10">
              <div>
                <div className="flex items-center gap-3 text-white/40 mb-4 md:mb-12">
                   <Box className="w-4 h-4 md:w-5 md:h-5" />
                   <span className="text-[9px] md:text-[10px] font-tech font-bold uppercase tracking-[0.3em]">Virtual Experience</span>
                </div>
                
                {/* Mode Switcher */}
                <div className="flex bg-white/5 p-1 rounded-full border border-white/10 mb-8">
                  <button 
                    onClick={() => setMode('interactive')}
                    className={`flex-1 py-2 text-[8px] font-bold uppercase tracking-widest rounded-full transition-all ${mode === 'interactive' ? 'bg-white text-brand shadow-lg' : 'text-white/40 hover:text-white'}`}
                  >
                    Interactive
                  </button>
                  <button 
                    onClick={() => setMode('video')}
                    className={`flex-1 py-2 text-[8px] font-bold uppercase tracking-widest rounded-full transition-all ${mode === 'video' ? 'bg-white text-brand shadow-lg' : 'text-white/40 hover:text-white'}`}
                  >
                    Guided Video
                  </button>
                </div>

                <motion.div
                  key={mode === 'video' ? 'video-mode' : scene.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-3 md:space-y-6"
                >
                  <h2 className="text-xl md:text-3xl font-tech font-bold text-white leading-tight uppercase tracking-tighter">
                    {mode === 'video' ? 'Full Factory Walkthrough' : scene.title}
                  </h2>
                  <p className="text-white/90 text-xs md:text-sm leading-relaxed line-clamp-2 md:line-clamp-none">
                    {mode === 'video' 
                      ? 'Experience a complete cinematic journey through our integrated production facilities, from raw material arrival to final packaging.' 
                      : scene.description}
                  </p>
                </motion.div>
              </div>

              <div className="hidden md:block space-y-6">
                {mode === 'interactive' && (
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={prevScene}
                      className="p-3 bg-white/5 hover:bg-white/20 rounded-full text-white transition-all border border-white/10"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <div className="text-white font-tech font-bold text-xs tracking-widest">
                      {String(currentSceneIndex + 1).padStart(2, '0')} / {String(factoryScenes.length).padStart(2, '0')}
                    </div>
                    <button 
                      onClick={nextScene}
                      className="p-3 bg-white/5 hover:bg-white/20 rounded-full text-white transition-all border border-white/10"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                )}
                
                <div className="text-[10px] text-white/30 font-medium uppercase tracking-widest">
                  {mode === 'video' ? 'Watching cinematic tour' : 'Use hotspots to discover details'}
                </div>
              </div>
            </div>

            {/* Main Interactive Visual */}
            <div className="flex-1 relative overflow-hidden group min-h-[40vh] md:min-h-0">
              {mode === 'video' ? (
                <div className="absolute inset-0 bg-black flex items-center justify-center">
                   {/* Placeholder for Video Walkthrough */}
                   <div className="relative w-full h-full">
                      <img 
                        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80" 
                        className="w-full h-full object-cover opacity-40 blur-sm"
                        alt="Video Background"
                      />
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
                         <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-6 shadow-2xl animate-pulse">
                            <Play fill="#0B1C2D" className="text-brand ml-1" size={40} />
                         </div>
                         <h3 className="text-2xl font-tech font-bold text-white mb-4 uppercase">Cinematic Walkthrough</h3>
                         <p className="text-white/60 max-w-sm mx-auto text-sm">Our 4K guided tour is currently being processed for this interactive platform.</p>
                      </div>
                   </div>
                </div>
              ) : (
                <>
                  {/* Mobile Controls Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 z-40 md:hidden flex items-center justify-between">
                    <div className="flex items-center gap-2">
                  <button onClick={prevScene} className="p-3 bg-black/60 backdrop-blur-md rounded-full text-white border border-white/20"><ChevronLeft size={18} /></button>
                  <button onClick={nextScene} className="p-3 bg-black/60 backdrop-blur-md rounded-full text-white border border-white/20"><ChevronRight size={18} /></button>
                </div>
                <div className="text-white font-tech font-bold text-[10px] px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/20">
                  {currentSceneIndex + 1} / {factoryScenes.length}
                </div>
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={scene.id}
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <img 
                    src={scene.image} 
                    alt={scene.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent"></div>
                </motion.div>
              </AnimatePresence>

              {/* Hotspots */}
              {scene.hotspots.map((spot, idx) => (
                <motion.div
                  key={`${scene.id}-spot-${idx}`}
                  style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                  className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 + idx * 0.2 }}
                >
                  <button 
                    onClick={() => setActiveHotspot(spot)}
                    className="relative flex items-center justify-center"
                  >
                    <motion.div 
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 bg-white/30 rounded-full"
                    />
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-white shadow-2xl rounded-full flex items-center justify-center text-brand transition-transform hover:scale-110 active:scale-90">
                      <PlusIcon className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                  </button>
                </motion.div>
              ))}

              {/* Hotspot Info Overlay */}
              <AnimatePresence>
                {activeHotspot && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[90%] max-w-md z-30"
                  >
                    <div className="bg-white p-6 rounded-2xl shadow-2xl border border-white/20">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-tech font-black text-brand uppercase text-xs tracking-widest">{activeHotspot.label}</h4>
                        <button onClick={() => setActiveHotspot(null)} className="text-brand/40 hover:text-brand"><X size={16} /></button>
                      </div>
                      <p className="text-brand/80 text-sm leading-snug font-medium">
                        {activeHotspot.details}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          )}

          {/* Location Tag */}
              <div className="absolute top-8 left-8 flex items-center gap-3 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                <MapPin size={14} className="text-white" />
                <span className="text-white text-[10px] font-tech font-bold uppercase tracking-widest">{scene.id === 'knitting' ? 'Main Hall, Gazipur' : 'Unit B, Floor 2'}</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function PlusIcon({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="3" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}
