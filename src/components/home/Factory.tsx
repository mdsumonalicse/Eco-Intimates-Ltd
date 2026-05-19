import { motion } from 'motion/react';
import { Cpu, Users, Settings, Award, ShieldCheck, Microscope, Play, ArrowRight } from 'lucide-react';

interface FactoryProps {
  onOpenTour: () => void;
}

export default function Factory({ onOpenTour }: FactoryProps) {
  const steps = [
    { icon: Settings, label: "Knitting", desc: "Precision knitting using Italian Lonati machines." },
    { icon: Microscope, label: "QC Testing", desc: "Rigorous shrinkage and color fastness lab testing." },
    { icon: Cpu, label: "Automated Cutting", desc: "Laser-accurate fabric cutting using Gerber technology." },
    { icon: Users, label: "Expert Stitching", desc: "Highly skilled artisans for delicate intimate wear." }
  ];

  const certifications = [
    { name: "BSCI", desc: "Business Social Compliance", level: "A-Grade" },
    { name: "OEKO-TEX", desc: "Standard 100 Certified", level: "Level 1" },
    { name: "WRAP", desc: "Worldwide Responsible", level: "Gold" },
    { name: "ISO 9001", desc: "Quality Management", level: "Certified" }
  ];

  return (
    <section className="py-32 bg-soft-gray" id="manufacturing">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-emerald font-bold tracking-[0.3em] text-xs uppercase mb-4 block underline underline-offset-8">Advanced Infrastructure</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-8">World-Class Production Excellence</h2>
          <p className="text-navy/60 font-medium leading-relaxed">
            From laser cutting to specialized intimate wear stitching, our factory is equipped with the latest European and Asian machinery to ensure zero-defect production.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {steps.map((step, idx) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-[32px] shadow-sm hover:shadow-xl transition-all border border-navy/5 group"
            >
              <div className="w-16 h-16 bg-emerald rounded-2xl flex items-center justify-center mb-6 text-white group-hover:bg-navy transition-colors overflow-hidden relative">
                <motion.div
                  animate={{ 
                    y: [0, -4, 0],
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: idx * 0.2
                  }}
                  whileHover={{ rotate: 15, scale: 1.1 }}
                >
                  <step.icon size={30} className="transition-transform group-hover:scale-110" />
                </motion.div>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">{step.label}</h3>
              <p className="text-sm text-navy/50 leading-relaxed font-medium">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Certifications - Glass Card UI */}
        <div id="certifications" className="mb-32">
          <h3 className="text-2xl font-bold text-navy mb-12 flex items-center gap-3">
             <Award className="text-emerald" /> 
             Compliance & Certifications
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, idx) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass p-8 rounded-3xl border-transparent hover:border-emerald/30 transition-all flex flex-col items-center text-center group"
              >
                <div className="w-14 h-14 rounded-full bg-emerald/10 flex items-center justify-center mb-6 group-hover:bg-emerald group-hover:text-white transition-colors text-emerald">
                   <ShieldCheck size={28} />
                </div>
                <h4 className="text-2xl font-black text-navy mb-1 tracking-tight">{cert.name}</h4>
                <p className="text-xs text-navy/70 font-bold uppercase tracking-widest mb-4">{cert.desc}</p>
                <span className="inline-block px-4 py-1 bg-emerald text-white text-[10px] font-bold rounded-full">
                  {cert.level}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Global Tour CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[40px] overflow-hidden bg-brand p-8 md:p-16 text-white group cursor-pointer"
          onClick={onOpenTour}
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1549439602-43ebca2327af?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay opacity-20 transition-transform duration-1000 group-hover:scale-110"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-xl">
              <span className="text-[10px] font-tech font-bold uppercase tracking-[0.3em] text-emerald mb-4 block">Interactive Experience</span>
              <h3 className="text-4xl md:text-5xl font-tech font-bold mb-6 leading-tight uppercase tracking-tighter">Take the Digital <span className="text-emerald">Factory Tour</span></h3>
              <p className="text-white/60 text-lg">Step inside our high-tech facility from anywhere in the world. Explore our production lines, labs, and clean rooms in immersive detail.</p>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 rounded-full bg-emerald flex items-center justify-center shadow-2xl shadow-emerald/30 transition-transform group-hover:scale-110">
                <Play fill="white" className="text-white ml-1" />
              </div>
              <div className="hidden sm:block">
                <p className="text-xl font-tech font-bold uppercase leading-none mb-1">Start Now</p>
                <p className="text-[10px] text-white/40 uppercase tracking-widest">360 Experience & Video</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
