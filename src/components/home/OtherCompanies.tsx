import { motion } from 'motion/react';
import { Building2, Globe2, Leaf } from 'lucide-react';

export default function OtherCompanies() {
  const partners = [
    {
      name: "Green Textiles Ltd",
      type: "Fabric Dyeing & Finishing",
      icon: Leaf,
      desc: "Our primary sustainable dyeing partner providing 100% recycled water solutions."
    },
    {
      name: "Asia Packaging Solutions",
      type: "Eco-Friendly Packaging",
      icon: Building2,
      desc: "Suppliers of our biodegradable and FSC certified garment packaging materials."
    },
    {
      name: "Global Logistics Hub",
      type: "Freight & Storage",
      icon: Globe2,
      desc: "Handling our worldwide exports with a focus on low-carbon transport options."
    }
  ];

  return (
    <section className="py-32 bg-white" id="others-companies">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-emerald font-tech font-bold tracking-[0.3em] text-xs uppercase mb-4 block">Ecosystem</span>
              <h2 className="text-4xl font-tech font-bold text-navy mb-8 uppercase tracking-tighter">
                Sister <br />
                <span className="text-emerald italic">Organizations</span>
              </h2>
              <p className="text-navy/50 font-medium leading-relaxed">
                Eco Intimates operates within a vertically integrated network of partner companies, ensuring control over every step of the garment lifecycle.
              </p>
            </motion.div>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {partners.map((partner, idx) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-10 rounded-[40px] bg-soft-gray border border-navy/5 hover:border-emerald/30 transition-all group"
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-emerald mb-6 shadow-sm group-hover:bg-emerald group-hover:text-white transition-colors">
                  <partner.icon size={28} />
                </div>
                <h3 className="text-xl font-tech font-bold text-navy mb-2 uppercase tracking-tight">{partner.name}</h3>
                <p className="text-emerald font-bold text-[10px] uppercase tracking-widest mb-4">{partner.type}</p>
                <p className="text-navy/50 text-sm font-medium">{partner.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
