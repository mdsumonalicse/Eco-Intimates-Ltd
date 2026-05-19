import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Leaf, ChevronDown } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const toggleSection = (id: string) => {
    setOpenSections(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const SectionHeader = ({ title, id }: { title: string, id: string }) => (
    <button 
      onClick={() => toggleSection(id)}
      className="w-full flex items-center justify-between lg:cursor-default"
    >
      <h4 className="text-lg font-tech font-bold flex items-center gap-2 uppercase tracking-tight">
        <div className="w-4 h-1 bg-emerald rounded-full"></div>
        {title}
      </h4>
      <div className={`lg:hidden transition-transform duration-300 ${openSections[id] ? 'rotate-180' : ''}`}>
        <ChevronDown size={18} className="text-emerald" />
      </div>
    </button>
  );

  return (
    <footer className="bg-navy text-white pt-24 pb-12 overflow-hidden relative" id="footer">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
          {/* Brand Info */}
          <div className="space-y-8">
            <a href="#" className="flex items-center gap-3 group">
              <img 
                src="https://i.postimg.cc/VvcR9rL6/Eco-Logo-Marron.png" 
                alt="Eco Intimates Logo" 
                className="h-10 lg:h-12 w-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </a>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs font-medium">
              A premium garment manufacturer specializing in export-quality intimate wear and apparel for global brands. Sustainable, ethical, and world-class.
            </p>
            <div className="flex items-center gap-3 text-emerald bg-white/5 p-3 rounded-xl border border-white/5 w-fit">
              <Leaf size={18} />
              <span className="text-[10px] font-tech font-bold uppercase tracking-widest">100% Green Factory</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="border-b border-white/5 md:border-none pb-6 md:pb-0">
            <SectionHeader title="Navigation" id="nav" />
            <div className="hidden md:block mt-8">
              <ul className="space-y-4">
                {['Home', 'About Us', 'Products', 'Manufacturing', 'Sustainability', 'Certifications'].map(item => (
                  <li key={item}>
                    <a href="#" className="text-white/40 hover:text-emerald transition-colors text-sm font-tech font-bold uppercase tracking-widest">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <AnimatePresence>
              {openSections['nav'] && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="md:hidden overflow-hidden"
                >
                  <ul className="space-y-4 pt-6">
                    {['Home', 'About Us', 'Products', 'Manufacturing', 'Sustainability', 'Certifications'].map(item => (
                      <li key={item}>
                        <a href="#" className="text-white/40 hover:text-emerald transition-colors text-sm font-tech font-bold uppercase tracking-widest">{item}</a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Global HQ */}
          <div className="border-b border-white/5 md:border-none pb-6 md:pb-0">
            <SectionHeader title="Global HQ" id="hq" />
            <div className="hidden md:block mt-8">
              <div className="space-y-6 text-sm text-white/50 font-medium">
                <div>
                  <p className="text-white font-tech font-bold uppercase tracking-widest text-[10px] mb-2 opacity-40">Factory Address</p>
                  <p className="text-white/80">Plot 42, Sector 8, DEPZ Extension Area,</p>
                  <p className="text-white/80">Savar, Dhaka, Bangladesh</p>
                </div>
                <div>
                  <p className="text-white font-tech font-bold uppercase tracking-widest text-[10px] mb-2 opacity-40">Business Hours</p>
                  <p className="text-white/80">Mon - Sat: 09:00 AM - 06:00 PM</p>
                  <p className="text-white/80">Sunday: Closed</p>
                </div>
              </div>
            </div>
            <AnimatePresence>
              {openSections['hq'] && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="md:hidden overflow-hidden"
                >
                  <div className="space-y-6 pt-6 text-sm text-white/50 font-medium">
                    <div>
                      <p className="text-white font-tech font-bold uppercase tracking-widest text-[10px] mb-2 opacity-40">Factory Address</p>
                      <p className="text-white/80">Plot 42, Sector 8, DEPZ Extension Area,</p>
                      <p className="text-white/80">Savar, Dhaka, Bangladesh</p>
                    </div>
                    <div>
                      <p className="text-white font-tech font-bold uppercase tracking-widest text-[10px] mb-2 opacity-40">Business Hours</p>
                      <p className="text-white/80">Mon - Sat: 09:00 AM - 06:00 PM</p>
                      <p className="text-white/80">Sunday: Closed</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Newsletter */}
          <div className="pb-6 md:pb-0">
            <SectionHeader title="Newsletter" id="news" />
            <div className="hidden md:block mt-8">
              <p className="text-white/40 text-sm mb-6 font-medium">Get the latest updates on manufacturing trends and sustainability.</p>
              <form className="relative" onSubmit={e => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Enter email" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-emerald transition-colors font-medium"
                />
                <button className="absolute right-2 top-2 bottom-2 bg-emerald text-white px-6 rounded-lg font-tech font-bold text-[10px] uppercase tracking-widest hover:bg-white hover:text-navy transition-all">
                  Join
                </button>
              </form>
            </div>
            <AnimatePresence>
              {openSections['news'] && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="md:hidden overflow-hidden"
                >
                  <div className="pt-6">
                    <p className="text-white/40 text-sm mb-6 font-medium">Get the latest updates on manufacturing trends and sustainability.</p>
                    <form className="relative" onSubmit={e => e.preventDefault()}>
                      <input 
                        type="email" 
                        placeholder="Enter email" 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-emerald transition-colors font-medium"
                      />
                      <button className="absolute right-2 top-2 bottom-2 bg-emerald text-white px-6 rounded-lg font-tech font-bold text-[10px] uppercase tracking-widest hover:bg-white hover:text-navy transition-all">
                        Join
                      </button>
                    </form>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-xs font-medium">
            © {currentYear} Eco Intimates Limited. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-white/20">
            <a href="#" className="hover:text-emerald transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-emerald transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-emerald transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
