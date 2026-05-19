import { motion } from 'motion/react';

export default function Brands() {
  // Mock brand logos using text for now
  const brands = [
    { name: 'La Senza', logo: 'https://logo.clearbit.com/lasenza.com', color: '#E91E63' },
    { name: 'Calvin Klein', logo: 'https://logo.clearbit.com/calvinklein.com', color: '#000000' },
    { name: 'Target', logo: 'https://logo.clearbit.com/target.com', color: '#CC0000' },
    { name: 'Emporio Armani', logo: 'https://logo.clearbit.com/armani.com', color: '#000000' },
    { name: 'Tommy Hilfiger', logo: 'https://logo.clearbit.com/tommy.com', color: '#00175A' },
    { name: 'Gildan', logo: 'https://logo.clearbit.com/gildan.com', color: '#005AAA' },
    { name: 'women\'secret', logo: 'https://logo.clearbit.com/womensecret.com', color: '#D4428B' },
    { name: 'Kappa', logo: 'https://logo.clearbit.com/kappa.com', color: '#E30613' },
    { name: 'Juicy Couture', logo: 'https://logo.clearbit.com/juicycouture.com', color: '#000000' },
    { name: 'Spyder', logo: 'https://logo.clearbit.com/spyder.com', color: '#E30613' },
    { name: 'George.', logo: 'https://logo.clearbit.com/george.com', color: '#000000' },
    { name: 'US Polo Assn', logo: 'https://logo.clearbit.com/uspoloassn.com', color: '#001F33' },
    { name: 'Original Marines', logo: 'https://logo.clearbit.com/originalmarines.com', color: '#E10B17' },
    { name: 'Lisca', logo: 'https://logo.clearbit.com/lisca.com', color: '#B30006' },
    { name: 'SièLei', logo: 'https://logo.clearbit.com/sielei.it', color: '#000000' },
    { name: 'Terranova', logo: 'https://logo.clearbit.com/terranovastyle.com', color: '#000000' },
    { name: 'Big Star', logo: 'https://logo.clearbit.com/bigstarshoes.com', color: '#D90000' },
    { name: 'ICA', logo: 'https://logo.clearbit.com/ica.se', color: '#E20613' },
    { name: 'Calliope', logo: 'https://logo.clearbit.com/calliope.style', color: '#000000' },
    { name: 'C&A', logo: 'https://logo.clearbit.com/c-and-a.com', color: '#005AAA' },
    { name: 'M&S', logo: 'https://logo.clearbit.com/marksandspencer.com', color: '#252525' },
  ];

  return (
    <section className="py-24 bg-white border-y border-navy/5 overflow-hidden" id="clients">
      <div className="container mx-auto px-6 mb-16">
        <div className="text-center">
          <p className="text-base md:text-xl font-tech font-bold uppercase tracking-[0.5em] text-emerald mb-6">
            Strategic Manufacturing Partners
          </p>
          <div className="h-[2px] w-32 bg-emerald/30 mx-auto"></div>
        </div>
      </div>
        
      <div className="relative flex overflow-x-hidden">
        <motion.div
           animate={{
            x: ['0%', '-100%']
           }}
           transition={{
            x: {
              duration: 80,
              repeat: Infinity,
              ease: "linear"
            }
           }}
           className="flex whitespace-nowrap gap-x-24 items-center py-8"
        >
          {[...brands, ...brands].map((brand, idx) => (
            <div
              key={`${brand.name}-${idx}`}
              className="group relative flex flex-col items-center shrink-0"
            >
              <div className="h-10 lg:h-14 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 cursor-pointer flex items-center justify-center min-w-[140px]">
                <img 
                  src={brand.logo} 
                  alt={brand.name}
                  className="h-full w-auto object-contain"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    const parent = target.parentElement;
                    if (parent) {
                      target.style.display = 'none';
                      const span = document.createElement('span');
                      span.className = 'text-lg font-tech font-bold uppercase tracking-tighter';
                      span.style.color = brand.color || '#0B1C2D';
                      span.innerText = brand.name;
                      parent.appendChild(span);
                    }
                  }}
                />
              </div>
              
              {/* Brand Name Tooltip */}
              <div 
                className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-navy text-white text-[9px] font-tech font-bold uppercase tracking-widest rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20"
                style={{ backgroundColor: brand.color || '#0B1C2D' }}
              >
                {brand.name}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
