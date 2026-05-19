import { motion } from 'motion/react';
import { Newspaper } from 'lucide-react';

export default function NewsTicker() {
  const news = [
    "Eco Intimates awarded LEED Platinum Certification for sustainability excellence.",
    "New Automated Cutting Systems installed in Unit 2, increasing production capacity by 25%.",
    "Partnering with Global Logistics Hub for 100% carbon-neutral worldwide shipping.",
    "Sustainable Lingerie Collection for Autumn/Winter 2026 now in production.",
    "Joining the Better Cotton Initiative (BCI) to promote ethical sourcing.",
  ];

  return (
    <div className="bg-emerald text-white py-2 overflow-hidden border-b border-white/10 relative z-40">
      <div className="flex items-center">
        {/* Static Label */}
        <div className="bg-emerald px-4 sm:px-6 py-1 h-full flex items-center gap-2 z-10 border-r border-white/20 shadow-[10px_0_15px_rgba(0,0,0,0.1)] shrink-0">
          <Newspaper size={12} className="animate-pulse hidden sm:block" />
          <span className="text-[8px] sm:text-[10px] font-tech font-bold uppercase tracking-widest whitespace-nowrap">
            Latest News
          </span>
        </div>

        {/* Scrolling Content */}
        <div className="flex-1 overflow-hidden relative">
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: '-100%' }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            className="flex gap-16 whitespace-nowrap py-1"
          >
            {news.map((item, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <span className="text-[11px] font-medium tracking-tight">
                  {item}
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
              </div>
            ))}
            {/* Duplicated for seamless loop */}
            {news.map((item, idx) => (
              <div key={`dup-${idx}`} className="flex items-center gap-4">
                <span className="text-[11px] font-medium tracking-tight">
                  {item}
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
