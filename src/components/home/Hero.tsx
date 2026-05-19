import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MousePointer2, ChevronDown, Sparkles, Send, Play } from 'lucide-react';

interface HeroProps {
  onOpenTour: () => void;
}

const backgroundImages = [
  "https://i.postimg.cc/PrdW8Dcp/12.jpg",
  "https://i.postimg.cc/J4RNBXgb/13.jpg",
  "https://i.postimg.cc/ncn4Qm54/16.jpg",
  "https://i.postimg.cc/CLwGf8tn/2.jpg",
  "https://i.postimg.cc/kX7QtSZB/4.jpg",
  "https://i.postimg.cc/ZKJ8yNgW/8.jpg",
  "https://i.postimg.cc/V6BSYGz2/12.jpg",
  "https://i.postimg.cc/G2JBc7c0/14.jpg",
  "https://i.postimg.cc/xCyk0x9W/3.jpg",
  "https://i.postimg.cc/fyzVkcbP/15.jpg"
];

export default function Hero({ onOpenTour }: HeroProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-brand" id="hero">
      {/* Background with Image Slider & Tint */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img 
            key={backgroundImages[currentImageIndex]}
            src={backgroundImages[currentImageIndex]}
            alt="Luxury Fashion Hero" 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        {/* Deep Maroon / Brand Overlay */}
        <div className="absolute inset-0 bg-brand/85 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand via-brand/40 to-transparent"></div>
      </div>

      {/* Floating Elements */}
      <motion.div 
        animate={{ 
          rotate: [0, 360],
        }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/3 right-[10%] z-10 hidden lg:block opacity-10"
      >
        <div className="w-64 h-64 border border-white rounded-full flex items-center justify-center p-8">
           <span className="text-white text-[10px] font-bold tracking-[0.5em] uppercase text-center">Eco Intimates Ltd</span>
        </div>
      </motion.div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-20">
        <div className="max-w-6xl">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full text-white text-[10px] font-bold uppercase tracking-[0.3em] flex items-center gap-2 border border-white/10 w-fit">
                <Sparkles size={12} className="text-white" />
                Premium Intimate Fashion
              </span>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-8 relative flex flex-wrap items-baseline gap-x-4 sm:gap-x-6">
              <h1 className="text-6xl sm:text-8xl md:text-[10rem] lg:text-[12rem] font-bold text-white leading-[0.8] tracking-tighter luxury-text relative z-10">
                ECO
              </h1>
              <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.8] tracking-tighter italic stroke-text">
                INTIMATES LTD
              </h1>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col md:flex-row md:items-center gap-12 mb-12">
              <div className="border-l-2 border-white/20 pl-8 max-w-lg">
                <p className="text-white font-bold uppercase tracking-[0.1em] leading-relaxed text-lg">
                  Elite manufacturing for high-end bras, panties, and women's apparel. Crafting singular, feminine beauty for global markets.
                </p>
              </div>
              
              <div className="flex gap-4">
                 <div className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center text-white text-[10px] font-bold group hover:bg-white hover:text-brand transition-all cursor-default">
                    QC
                 </div>
                 <div className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center text-white text-[10px] font-bold group hover:bg-white hover:text-brand transition-all cursor-default">
                    A+
                 </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <button className="group bg-white text-brand px-10 py-4 lg:px-12 lg:py-5 rounded-full font-bold text-base lg:text-lg transition-all hover:scale-105 active:scale-95 shadow-2xl flex items-center gap-4 uppercase tracking-wider">
                Start Project
                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              
              <button 
                onClick={onOpenTour}
                className="group border border-white/30 backdrop-blur-sm text-white px-10 py-4 lg:px-12 lg:py-5 rounded-full font-bold text-base lg:text-lg transition-all hover:bg-white hover:text-brand hover:scale-105 active:scale-95 flex items-center gap-4 uppercase tracking-wider"
              >
                Virtual Tour
                <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-brand/10 flex items-center justify-center transition-colors">
                  <Play size={16} fill="currentColor" />
                </div>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Reference Side Branding */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-10 z-10 text-white/40">
        <span className="text-[10px] font-bold tracking-[0.4em] rotate-90 uppercase">IG</span>
        <span className="text-[10px] font-bold tracking-[0.4em] rotate-90 uppercase">FB</span>
        <span className="text-[10px] font-bold tracking-[0.4em] rotate-90 uppercase">LI</span>
      </div>

      {/* Styled Vertical Scroll Text */}
      <div className="absolute bottom-12 left-10 hidden xl:flex flex-col items-center gap-8">
        <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.5em] rotate-90 origin-left -translate-y-12">Scroll</span>
        <div className="w-[1px] h-20 bg-gradient-to-t from-white/40 to-transparent"></div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .stroke-text {
          -webkit-text-stroke: 1.5px #00897B;
          color: rgba(0, 137, 123, 0.1);
          text-shadow: 0 0 40px rgba(0,0,0,0.5);
        }
        .luxury-text {
          text-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }
      `}} />
    </section>
  );
}
