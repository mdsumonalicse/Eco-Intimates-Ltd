import { motion } from 'motion/react';
import { ShieldCheck, Award, CheckCircle2, FileText } from 'lucide-react';

export default function Certifications() {
  const certs = [
    {
      name: "OEKO TEX Certification",
      desc: "Mondol Intimates has achieved the OEKO-TEX STANDARD 100, ensuring every component is tested for harmful substances.",
      img: "https://i.postimg.cc/QdMvjZ63/oeko-tex.png",
      color: "#BE5E8A"
    },
    {
      name: "WRAP Certification",
      desc: "Achieved Gold Level Status in Worldwide Responsible Accredited Production (WRAP), confirming our ethical standards.",
      img: "https://i.postimg.cc/pLrXmPVP/wrap.png",
      color: "#BE5E8A"
    },
    {
      name: "Safety First",
      desc: "We prioritize safety above all. We conduct regular fire drills and monthly safety training for all staff and management.",
      img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800",
      color: "#BE5E8A"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-white" id="certifications">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 sm:mb-20">
          <span className="text-emerald font-tech font-bold tracking-[0.3em] text-[10px] sm:text-xs uppercase mb-4 block italic">Global Compliance</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-tech font-bold text-navy mb-8 uppercase tracking-tighter">
            Our <span className="text-emerald italic">Certifications</span>
          </h2>
          <div className="h-[2px] w-24 sm:w-32 bg-emerald/30 mx-auto mt-6 sm:mt-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certs.map((cert, idx) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-2 rounded-lg transition-all duration-500 shadow-xl overflow-hidden"
              style={{ backgroundColor: cert.color }}
            >
              {/* Image Box */}
              <div className="bg-white rounded-md p-6 aspect-[16/10] flex items-center justify-center overflow-hidden mb-6">
                <img 
                  src={cert.img} 
                  alt={cert.name} 
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Content */}
              <div className="px-6 pb-8">
                <h3 className="text-2xl font-display font-bold text-white mb-6 uppercase tracking-tight">
                  {cert.name}
                </h3>
                <p className="text-white/90 text-sm leading-relaxed font-medium">
                  {cert.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Compliance Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-20 p-8 sm:p-12 bg-navy rounded-3xl sm:rounded-[50px] relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald/5 -mr-32 -mt-32 rounded-full blur-3xl" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6">
              <div className="w-16 h-16 bg-emerald rounded-full flex items-center justify-center text-navy shrink-0 animate-pulse">
                <CheckCircle2 size={32} />
              </div>
              <div>
                <h4 className="text-xl sm:text-2xl font-tech font-bold text-white uppercase tracking-tight mb-2">Always Audit-Ready</h4>
                <p className="text-white/40 text-sm sm:text-base font-medium max-w-md">Our factory undergoes regular unannounced third-party audits to ensure 100% adherence to global social and environmental compliance protocols.</p>
              </div>
            </div>
            <button className="w-full md:w-auto px-10 py-5 bg-emerald text-white rounded-full font-bold uppercase tracking-widest text-xs sm:text-sm hover:bg-white hover:text-navy transition-all shadow-xl shadow-emerald/20">
              Download Compliance Report
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
