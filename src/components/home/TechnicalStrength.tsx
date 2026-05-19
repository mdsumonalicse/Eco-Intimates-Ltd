import { motion } from 'motion/react';
import { Cpu, Zap, Activity, ShieldCheck, Microscope, Database } from 'lucide-react';

export default function TechnicalStrength() {
  const strengths = [
    {
      icon: Cpu,
      title: "Automated Cutting",
      desc: "Precision Gerber cutting systems ensure maximum fabric utilization and identical consistency across millions of pieces."
    },
    {
      icon: Zap,
      title: "Seamless Technology",
      desc: "Santoni seamless knitting machines for high-comfort, zero-waste production of athletic and intimate wear."
    },
    {
      icon: Microscope,
      title: "In-house Laboratory",
      desc: "Fully equipped textile lab for chemical testing, color fastness, and rigorous tensile strength analytics."
    },
    {
      icon: Database,
      title: "ERP Integration",
      desc: "Real-time production tracking and supply chain management through our custom SAP-integrated ERP system."
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-navy text-white relative overflow-hidden" id="technical-strength">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 flex flex-wrap gap-1 pointer-events-none">
        {Array.from({ length: 200 }).map((_, i) => (
          <div key={i} className="w-2 h-2 border border-white/20 rounded-full shrink-0" />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-emerald font-tech font-bold tracking-[0.3em] text-xs uppercase mb-4 block">Infrastructure</span>
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-tech font-bold mb-8 uppercase tracking-tighter leading-tight">
                Engineering <br />
                The <span className="text-emerald italic">Unseen</span>
              </h2>
              <p className="text-white/60 text-base sm:text-lg mb-12 font-medium leading-relaxed">
                Our facilities are powered by the world's most advanced textile machinery. We don't just manufacture; we engineer garments with micro-precision.
              </p>
              
              <div className="grid grid-cols-2 gap-6 sm:gap-8">
                <div className="border-l border-emerald/30 pl-4 sm:pl-6">
                  <span className="text-3xl sm:text-4xl font-tech font-bold block mb-2 text-emerald">480+</span>
                  <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest opacity-40">Modern Workstations</span>
                </div>
                <div className="border-l border-emerald/30 pl-4 sm:pl-6">
                  <span className="text-3xl sm:text-4xl font-tech font-bold block mb-2 text-emerald">12</span>
                  <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest opacity-40">Automated Lines</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full">
            {strengths.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 sm:p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[30px] hover:bg-emerald hover:border-emerald transition-all duration-500 group"
              >
                <item.icon className="text-emerald group-hover:text-white transition-colors mb-4 sm:mb-6" size={28} />
                <h3 className="text-lg sm:text-xl font-tech font-bold mb-2 sm:mb-3 uppercase tracking-tight group-hover:text-white">{item.title}</h3>
                <p className="text-xs sm:text-sm text-white/40 group-hover:text-white/80 transition-colors leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
