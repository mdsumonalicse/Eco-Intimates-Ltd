import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function SocialCompliance() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const compliance = [
    {
      name: "BSCI",
      title: "BSCI",
      description: "Business Social Compliance Initiative",
      logo: "https://i.postimg.cc/9FmK90p0/bsci-logo.png"
    },
    {
      name: "RSC",
      title: "RSC",
      description: "RMG Sustainability Council",
      logo: "https://i.postimg.cc/L8vT9yqj/rsc-logo.png"
    },
    {
      name: "Higg Index",
      title: "HIGG INDEX",
      description: "Sustainable Apparel Coalition",
      logo: "https://i.postimg.cc/mD8N1V7R/higg-index-logo.png"
    },
    {
      name: "Sedex",
      title: "SEDEX",
      description: "Supplier Ethical Data Exchange",
      logo: "https://i.postimg.cc/wT7D8vYm/sedex.png"
    }
  ];

  const totalPages = Math.max(1, compliance.length - 2); // Show 3 at once on desktop

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % (compliance.length - 2));
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + (compliance.length - 2)) % (compliance.length - 2));
  };

  return (
    <section className="py-24 bg-[#FAF9F6]" id="social-compliance">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#B5915D] font-tech font-bold tracking-[0.4em] text-[10px] uppercase mb-5 block">
            Standards We Uphold
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-5xl font-display text-[#1A2B3C] mb-8 leading-tight">
            Social Compliance <span className="font-luxury italic text-[#B5915D]">We Maintain</span>
          </h2>
          <p className="text-navy/50 max-w-xl mx-auto font-medium leading-relaxed text-sm">
            We adhere to international social compliance standards for ethical and responsible manufacturing.
          </p>
        </div>

        <div className="max-w-7xl mx-auto relative overflow-hidden px-4">
          <motion.div 
            className="flex gap-6 lg:gap-8"
            animate={{ x: `-${currentIndex * (100 / 3 + 1)}%` }} // Approximate center for 3 items
            transition={{ type: "spring", damping: 30, stiffness: 100 }}
          >
            {compliance.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="min-w-[100%] md:min-w-[calc(33.333%-22px)] shrink-0 bg-white p-12 lg:p-16 rounded-sm border border-[#EBE6DD] flex flex-col items-center justify-center text-center group transition-all duration-700 hover:border-[#B5915D]/30"
              >
                <div className="aspect-[3/2] w-full flex items-center justify-center mb-10 overflow-hidden px-4">
                  <img 
                    src={item.logo} 
                    alt={item.name} 
                    className="max-h-full max-w-full object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-90 group-hover:scale-100"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://placehold.co/400x200/FFFFFF/1A2B3C?text=${item.name}`;
                    }}
                  />
                </div>
                <h3 className="text-[11px] font-tech font-bold text-[#1A2B3C] uppercase tracking-[0.3em] mb-3">{item.title}</h3>
                <p className="text-[9px] text-[#A0A0A0] font-bold uppercase tracking-[0.1em] max-w-[200px]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Navigation Arrows - Match image style */}
          <div className="flex justify-center gap-4 mt-16">
            <button 
              onClick={prev}
              className="w-11 h-11 border border-[#B5915D]/40 flex items-center justify-center text-[#B5915D] hover:bg-[#B5915D] hover:text-white transition-all duration-300"
            >
              <ChevronLeft size={18} strokeWidth={1.5} />
            </button>
            <button 
              onClick={next}
              className="w-11 h-11 border border-[#B5915D]/40 flex items-center justify-center text-[#B5915D] hover:bg-[#B5915D] hover:text-white transition-all duration-300"
            >
              <ChevronRight size={18} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
