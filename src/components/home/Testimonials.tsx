import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Working with Eco Intimates has transformed our supply chain. Their commitment to sustainability isn't just marketing; it's woven into every garment they produce.",
      name: "Marcus Thorne",
      role: "Head of Sourcing",
      company: "Nordic Apparel Group",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100"
    },
    {
      quote: "Their technical capability in seamless knitting is unparalleled in the region. The precision and quality consistency they maintain for our luxury lines is world-class.",
      name: "Elena Rodriguez",
      role: "Design Director",
      company: "Intimates Royale",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100&h=100"
    },
    {
      quote: "Eco Intimates stands out for their transparency. Their LEED Platinum facility and ethical labor practices give us the confidence our customers demand.",
      name: "David Chen",
      role: "COO",
      company: "Urban Essentials",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=100&h=100"
    }
  ];

  return (
    <section className="py-32 bg-soft-gray overflow-hidden" id="testimonials">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-16 bg-emerald/10 rounded-2xl flex items-center justify-center text-emerald mx-auto mb-6"
          >
            <Quote size={32} />
          </motion.div>
          <span className="text-emerald font-tech font-bold tracking-[0.3em] text-xs uppercase mb-4 block">Voices of Partnership</span>
          <h2 className="text-4xl lg:text-5xl font-tech font-bold text-navy mb-8 uppercase tracking-tighter">
            Trusted by <span className="text-emerald italic">Global Leaders</span>
          </h2>
          <div className="h-[2px] w-32 bg-emerald/30 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white p-12 rounded-[50px] shadow-2xl shadow-navy/5 border border-navy/5 flex flex-col justify-between relative group hover:-translate-y-2 transition-all duration-500"
            >
              <div className="absolute top-10 right-10 text-navy/5 group-hover:text-emerald/10 transition-colors">
                <Quote size={80} />
              </div>
              
              <div className="relative z-10">
                <p className="text-navy/70 text-lg font-medium leading-relaxed mb-10 italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-4 relative z-10">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-emerald/20">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-navy font-tech font-bold uppercase tracking-tight">{t.name}</h4>
                  <p className="text-[10px] font-bold text-emerald uppercase tracking-widest">{t.role} • {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Brand Bar / CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 flex flex-wrap justify-center items-center gap-12 opacity-30 grayscale"
        >
          {/* Re-using some brand names for visual density if needed, or just a closing note */}
          <p className="text-[10px] font-tech font-bold uppercase tracking-[0.5em] text-navy">Setting New Benchmarks in Global Apparel Manufacturing</p>
        </motion.div>
      </div>
    </section>
  );
}
