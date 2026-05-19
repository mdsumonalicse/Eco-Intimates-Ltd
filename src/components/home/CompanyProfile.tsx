import { motion } from 'motion/react';
import { History, Target, Heart, Award, ShieldCheck, Users } from 'lucide-react';

export default function CompanyProfile() {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To lead the global intimate apparel industry through sustainable manufacturing, innovative design, and uncompromising quality while empowering our people and communities."
    },
    {
      icon: Heart,
      title: "Our Vision",
      description: "To become the preferred strategic partner for global brands by setting new benchmarks in ethical production and environmental stewardship in Bangladesh's textile sector."
    },
    {
      icon: ShieldCheck,
      title: "Our Values",
      description: "Integrity, Sustainability, and Excellence are at the core of everything we do. We believe in transparent partnerships and continuous improvement."
    }
  ];

  const milestones = [
    { year: "2010", event: "Foundation of Eco Intimates with a vision for green manufacturing." },
    { year: "2014", event: "Achievement of Platinum LEED Certification for our main facility." },
    { year: "2018", event: "Expansion into high-tech seamless knitting and automated cutting." },
    { year: "2023", event: "Global recognition as a leader in sustainable intimate apparel exports." }
  ];

  return (
    <section className="py-32 bg-soft-gray relative overflow-hidden" id="company-profile">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-navy/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Left Column: History & Content */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-emerald font-tech font-bold tracking-[0.3em] text-xs uppercase mb-4 block">About Us</span>
              <h2 className="text-4xl lg:text-5xl font-tech font-bold text-navy mb-8 uppercase tracking-tighter">
                Crafting Excellence <br />
                <span className="text-emerald italic">Since 2010</span>
              </h2>
              
              <div className="space-y-6 text-navy/70 leading-relaxed font-medium text-lg">
                <p>
                  Eco Intimates Ltd was born out of a desire to redefine the manufacturing landscape in Bangladesh. We recognized that the future of fashion lies at the intersection of high-end technology and deep environmental respect.
                </p>
                <p>
                  Today, we stand as one of the region's most advanced manufacturing hubs, specializing in intricate intimate apparel for the world's most demanding brands. Our journey is defined by a relentless pursuit of perfection and a commitment to the planet.
                </p>
              </div>

              {/* History Timeline */}
              <div className="mt-16 border-l-2 border-emerald/20 pl-8 space-y-12">
                {milestones.map((item, idx) => (
                  <motion.div 
                    key={item.year}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="relative"
                  >
                    <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-emerald border-4 border-soft-gray shadow-sm" />
                    <span className="text-emerald font-tech font-bold text-xl block mb-2">{item.year}</span>
                    <p className="text-navy/60 font-medium">{item.event}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Mission/Vision/Values Cards */}
          <div className="lg:w-1/2 flex flex-col gap-8">
            {values.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-white p-10 rounded-[30px] border border-navy/5 shadow-xl shadow-navy/5 group hover:border-emerald/30 transition-all duration-500"
              >
                <div className="w-16 h-16 bg-emerald/10 rounded-2xl flex items-center justify-center text-emerald mb-6 group-hover:bg-emerald group-hover:text-white transition-colors">
                  <item.icon size={28} />
                </div>
                <h3 className="text-2xl font-tech font-bold text-navy mb-4 uppercase tracking-tight">{item.title}</h3>
                <p className="text-navy/50 leading-relaxed font-medium">{item.description}</p>
              </motion.div>
            ))}

            {/* Quick Stats/Badges */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-navy p-8 rounded-[30px] text-white flex flex-col items-center justify-center text-center">
                <Users className="text-emerald mb-4" size={32} />
                <span className="text-3xl font-tech font-bold block mb-1">5,000+</span>
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] opacity-40">Employees</span>
              </div>
              <div className="bg-emerald p-8 rounded-[30px] text-white flex flex-col items-center justify-center text-center">
                <Award className="text-navy mb-4" size={32} />
                <span className="text-3xl font-tech font-bold block mb-1">100%</span>
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] opacity-60">Compliance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
