import React from 'react';
import { motion } from 'motion/react';
import { 
  Palette, 
  Search, 
  Factory, 
  ShieldCheck, 
  Truck, 
  Recycle, 
  ArrowRight,
  Monitor,
  Globe,
  Zap,
  Users,
  Compass
} from 'lucide-react';

const services = [
  {
    title: "Design & Development",
    desc: "Our creative studio bridges the gap between concept and reality. We offer trend forecasting, mood boards, and full tech-pack creation to ensure your vision is realized with technical precision.",
    icon: Palette,
    features: ["Trend Analysis", "Technical Drawings", "Pattern Making", "3D Sampling"]
  },
  {
    title: "Global Sourcing",
    desc: "Leveraging a vast network of certified mills and trim suppliers. We specialize in finding high-performance, sustainable, and innovative materials that meet your cost and quality targets.",
    icon: Compass,
    features: ["Eco-Fabric Selection", "Trim Customization", "Supply Chain Audit", "Cost Optimization"]
  },
  {
    title: "Custom Manufacturing",
    desc: "State-of-the-art production facilities optimized for both speed and scale. Our specialized lines handle everything from delicate intimates to heavy-duty activewear with surgical precision.",
    icon: Factory,
    features: ["Mass Production", "Small Batch Runs", "Automatic Cutting", "Advanced Stitching"]
  },
  {
    title: "Quality Assurance",
    desc: "Zero-compromise QC protocols at every stage. From fabric testing to final inspection, we ensure 100% compliance with international export standards and your specific AQL requirements.",
    icon: ShieldCheck,
    features: ["In-line Inspection", "Final AQL Check", "Laboratory Testing", "Certification Support"]
  },
  {
    title: "Logistics & Fulfillment",
    desc: "Seamless end-to-end supply chain management. We handle complex customs documentation, multi-modal shipping, and last-mile logistics to get your products into market on schedule.",
    icon: Truck,
    features: ["Customs Clearance", "Freight Forwarding", "Warehousing", "Inventory Management"]
  },
  {
    title: "Sustainable Strategy",
    desc: "Empowering brands to lead in the circular economy. We provide guidance on recycled materials, carbon footprint reduction, and ethical labor practices to build a future-proof brand.",
    icon: Recycle,
    features: ["LCA Reports", "GRS/GOTS Compliance", "Waste Management", "Energy Optimization"]
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#FDFCFB]">
      {/* Hero Section */}
      <section className="bg-brand py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-emerald font-tech font-bold tracking-[0.4em] text-xs uppercase mb-6 block"
          >
            End-to-End Solutions
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-8xl font-tech font-bold text-white uppercase tracking-tighter mb-8"
          >
            Our <span className="text-emerald italic">Expertise</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-2xl mx-auto text-lg font-medium leading-relaxed"
          >
            From the first sketch to the final shipment, ECO INTIMATES provides vertical integration that guarantees quality, speed-to-market, and transparent ethics.
          </motion.p>
        </div>
      </section>

      {/* Grid Services */}
      <section className="py-32 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group p-10 bg-white border border-navy/5 rounded-[40px] hover:shadow-2xl hover:shadow-navy/5 transition-all duration-700 relative overflow-hidden"
              >
                {/* Background Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald/5 rounded-bl-full translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-700" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-soft-gray rounded-2xl flex items-center justify-center text-emerald mb-8 group-hover:bg-emerald group-hover:text-white transition-all duration-500">
                    <service.icon size={32} />
                  </div>
                  
                  <h3 className="text-2xl font-tech font-bold text-navy uppercase tracking-tight mb-6 group-hover:text-emerald transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-navy/50 font-medium leading-relaxed mb-8">
                    {service.desc}
                  </p>
                  
                  <div className="space-y-3">
                    {service.features.map(feature => (
                      <div key={feature} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-emerald/30 group-hover:bg-emerald rounded-full transition-colors" />
                        <span className="text-xs font-tech font-bold text-navy/40 uppercase tracking-widest">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-navy relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <span className="text-emerald font-tech font-bold tracking-[0.3em] text-xs uppercase mb-6 block">The Workflow</span>
              <h2 className="text-4xl lg:text-6xl font-tech font-bold text-white uppercase tracking-tighter mb-8">
                A Seamless <span className="text-emerald italic">Journey</span>
              </h2>
              <div className="space-y-12">
                {[
                  { step: "01", title: "Inquiry & Strategy", desc: "We analyze your brand needs, target price points, and timeline to build a custom road map." },
                  { step: "02", title: "Prototyping", desc: "Transforming designs into physical samples for fitting, testing, and feedback loops." },
                  { step: "03", title: "Bulk Execution", desc: "Rigorous production management ensuring consistency across thousands of units." },
                  { step: "04", title: "Delivery", desc: "Secure shipping and transparent documentation for a smooth import process." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-8 group">
                    <span className="text-3xl font-tech font-bold text-emerald/20 group-hover:text-emerald transition-colors">{item.step}</span>
                    <div>
                      <h4 className="text-xl font-tech font-bold text-white uppercase mb-2">{item.title}</h4>
                      <p className="text-white/40 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
               <div className="aspect-square rounded-[60px] overflow-hidden bg-brand/50 border border-white/10 group">
                  <img 
                    src="https://images.unsplash.com/photo-1558444479-c84825d2ea9e?q=80&w=2000&auto=format&fit=crop" 
                    alt="Process" 
                    className="w-full h-full object-cover mix-blend-overlay group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center animate-pulse">
                      <Users className="text-white" size={40} />
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 px-6 bg-white text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl lg:text-7xl font-tech font-bold text-navy uppercase tracking-tighter mb-12 max-w-4xl mx-auto">
            Ready to scale your <span className="text-emerald italic">Production?</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="bg-brand text-white px-12 py-6 rounded-full font-tech font-bold uppercase tracking-[0.2em] text-xs hover:bg-emerald transition-all hover:scale-105 shadow-2xl flex items-center gap-4 group">
               Discuss Your Project
               <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="px-12 py-6 rounded-full border-2 border-navy text-navy font-tech font-bold uppercase tracking-[0.2em] text-xs hover:bg-soft-gray transition-all">
               Our Compliance
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
