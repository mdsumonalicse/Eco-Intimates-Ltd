import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

export default function ClientGrid() {
  const primaryClients = [
    { name: 'Calvin Klein', logo: 'https://logo.clearbit.com/calvinklein.com', url: 'https://www.calvinklein.us', color: '#000000', category: 'Luxury Intimates' },
    { name: 'Target', logo: 'https://logo.clearbit.com/target.com', url: 'https://www.target.com', color: '#CC0000', category: 'Retail Partner' },
    { name: 'Tommy Hilfiger', logo: 'https://logo.clearbit.com/tommy.com', url: 'https://usa.tommy.com', color: '#00175A', category: 'Premium Essentials' },
    { name: 'Emporio Armani', logo: 'https://logo.clearbit.com/armani.com', url: 'https://www.armani.com', color: '#000000', category: 'High Fashion' },
    { name: 'H&M', logo: 'https://logo.clearbit.com/hm.com', url: 'https://www.hm.com', color: '#E5001C', category: 'Global Retail' },
    { name: 'Marks & Spencer', logo: 'https://logo.clearbit.com/marksandspencer.com', url: 'https://www.marksandspencer.com', color: '#252525', category: 'Quality Apparel' },
    { name: 'Zara', logo: 'https://logo.clearbit.com/zara.com', url: 'https://www.zara.com', color: '#000000', category: 'Fast Fashion' },
    { name: 'Gap', logo: 'https://logo.clearbit.com/gap.com', url: 'https://www.gap.com', color: '#003058', category: 'Lifestyle' }
  ];

  return (
    <section className="py-32 bg-white" id="major-clients">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-emerald font-tech font-bold tracking-[0.3em] text-xs uppercase mb-4 block">Key Accounts</span>
          <h2 className="text-4xl lg:text-5xl font-tech font-bold text-navy mb-8 uppercase tracking-tighter">
            Major <span className="text-emerald italic">Global Clients</span>
          </h2>
          <p className="text-navy/50 max-w-2xl mx-auto font-medium">
            We are proud to be the trusted manufacturing partner for the world's most iconic fashion and retail brands, delivering excellence at scale.
          </p>
          <div className="h-[2px] w-32 bg-emerald/30 mx-auto mt-12"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-navy/5 border border-navy/5 rounded-[40px] overflow-hidden shadow-2xl">
          {primaryClients.map((client, idx) => (
            <motion.a
              key={client.name}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white p-12 landscape:p-16 flex flex-col items-center justify-center group relative hover:z-10 transition-all duration-500 hover:shadow-[0_0_50px_rgba(0,0,0,0.1)]"
            >
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink size={14} className="text-emerald" />
              </div>

              <div className="h-12 w-full flex items-center justify-center mb-8 grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110">
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="max-h-full max-w-full object-contain"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    const parent = target.parentElement;
                    if (parent) {
                      target.style.display = 'none';
                      const span = document.createElement('span');
                      span.className = 'text-lg font-tech font-bold uppercase tracking-tighter text-center';
                      span.style.color = client.color;
                      span.innerText = client.name;
                      parent.appendChild(span);
                    }
                  }}
                />
              </div>

              <div className="text-center">
                <h4 className="text-[10px] font-tech font-bold uppercase tracking-widest text-navy/30 group-hover:text-navy transition-colors mb-1">{client.name}</h4>
                <p className="text-[8px] font-bold text-emerald opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-tighter">{client.category}</p>
              </div>

              {/* Decorative hover line */}
              <div 
                className="absolute bottom-0 left-0 w-0 h-1 transition-all duration-500 group-hover:w-full"
                style={{ backgroundColor: client.color }}
              />
            </motion.a>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-10 bg-soft-gray rounded-[30px] border border-navy/5 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-emerald shadow-sm">
              <ExternalLink size={20} />
            </div>
            <div>
              <h5 className="font-tech font-bold text-navy uppercase tracking-tight">Become a Partner</h5>
              <p className="text-xs text-navy/40 font-medium">Join our network of globally successful brands.</p>
            </div>
          </div>
          <button className="px-8 py-3 bg-navy text-white rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-emerald transition-all shadow-lg shadow-navy/20">
            Strategic Inquiry
          </button>
        </motion.div>
      </div>
    </section>
  );
}
