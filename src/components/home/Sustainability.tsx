import { motion } from 'motion/react';
import { Leaf, Droplets, Wind, Recycle, CheckCircle2, TrendingDown, Zap, BarChart3 } from 'lucide-react';
import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  PieChart, 
  Pie, 
  Cell,
  LineChart,
  Line,
  CartesianGrid
} from 'recharts';

const waterSavingData = [
  { year: '2021', saved: 65 },
  { year: '2022', saved: 78 },
  { year: '2023', saved: 85 },
  { year: '2024', saved: 95 },
];

const energyMixData = [
  { name: 'Solar', value: 45, color: '#10b981' },
  { name: 'Wind', value: 15, color: '#34d399' },
  { name: 'Grid', value: 40, color: 'rgba(255,255,255,0.1)' },
];

const co2ReductionData = [
  { month: 'Jan', value: 100 },
  { month: 'Mar', value: 85 },
  { month: 'Jun', value: 72 },
  { month: 'Sep', value: 60 },
  { month: 'Dec', value: 48 },
];

export default function Sustainability() {
  const highlights = [
    { icon: Recycle, title: "Zero Waste Initiative", desc: "95% of our textile waste is recycled into secondary products." },
    { icon: Droplets, title: "Water Treatment (ETP)", desc: "Advanced biological ETP plants ensuring 100% water recovery." },
    { icon: Wind, title: "Solar Powered Facility", desc: "45% of our energy is harvested from rooftop solar panels." },
    { icon: Leaf, title: "Organic Materials", desc: "GOTS & OCS certified organic cotton and recycled polyester." }
  ];

  return (
    <section className="py-20 lg:py-32 bg-brand text-white overflow-hidden relative" id="sustainability">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 text-emerald mb-4 sm:mb-6">
              <Leaf size={20} className="animate-pulse" />
              <span className="font-tech font-bold tracking-[0.3em] text-[8px] sm:text-[10px] uppercase">Eco-Conscious Manufacturing</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-7xl font-tech font-bold mb-6 sm:mb-8 leading-tight uppercase tracking-tighter">
              Sustainable <span className="luxury-text text-emerald">Future</span>
            </h2>
            <p className="text-white/60 text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed max-w-xl font-medium">
              We integrate nature with technology to minimize environmental footprint. Our facility is a benchmark for green apparel manufacturing in South Asia.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {highlights.map((item, idx) => (
                <motion.div 
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-5 sm:p-6 bg-white/5 rounded-2xl border border-white/10 group hover:bg-white/10 transition-all text-center sm:text-left"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform mx-auto sm:mx-0">
                    <item.icon className="text-emerald" size={20} />
                  </div>
                  <h3 className="text-base sm:text-lg font-tech font-bold mb-2 uppercase tracking-tight">{item.title}</h3>
                  <p className="text-white/70 text-[10px] sm:text-xs leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="grid grid-cols-2 gap-4"
          >
            {/* Real-time Metric Cards */}
            <div className="col-span-1 bg-emerald p-5 sm:p-6 rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col justify-between aspect-square">
              <TrendingDown size={28} className="text-navy/60" />
              <div>
                <p className="text-4xl sm:text-5xl font-tech font-black text-navy leading-none mb-2">52%</p>
                <p className="text-[8px] sm:text-[10px] font-tech font-bold text-navy/60 uppercase tracking-widest">CO2 Reduction</p>
              </div>
            </div>
            
            <div className="col-span-1 bg-white p-5 sm:p-6 rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col justify-between aspect-square">
              <Zap size={28} className="text-brand/60" />
              <div>
                <p className="text-4xl sm:text-5xl font-tech font-black text-brand leading-none mb-2">60%</p>
                <p className="text-[8px] sm:text-[10px] font-tech font-bold text-brand/60 uppercase tracking-widest">Renewables</p>
              </div>
            </div>

            <div className="col-span-2 bg-navy/40 backdrop-blur-xl border border-white/10 p-6 sm:p-8 rounded-2xl sm:rounded-3xl h-56 sm:h-64">
              <div className="flex justify-between items-center mb-4">
                 <div className="flex items-center gap-2">
                   <Droplets size={16} className="text-emerald" />
                   <span className="text-[10px] font-tech font-bold uppercase tracking-widest text-white/60">Water Recovery Trend</span>
                 </div>
                 <span className="text-xs font-bold text-emerald">+12% YoY</span>
              </div>
              <ResponsiveContainer width="100%" height="80%">
                <BarChart data={waterSavingData}>
                  <Bar dataKey="saved" fill="#10b981" radius={[4, 4, 0, 0]} />
                  <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{fill: 'rgba(255,255,255,0.4)', fontSize: 10}} />
                  <Tooltip 
                    cursor={{fill: 'rgba(255,255,255,0.05)'}}
                    contentStyle={{backgroundColor: '#0B1C2D', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px'}}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        {/* Detailed Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 p-6 sm:p-8 rounded-3xl sm:rounded-[40px] backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
               <div className="w-8 h-8 sm:w-10 sm:h-10 bg-emerald/10 rounded-full flex items-center justify-center">
                 <Wind className="text-emerald w-4 h-4 sm:w-5 sm:h-5" />
               </div>
               <h4 className="text-xs sm:text-sm font-tech font-bold uppercase tracking-widest">Energy Distribution</h4>
            </div>
            <div className="h-40 sm:h-48 w-full flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={energyMixData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {energyMixData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute flex flex-col items-center">
                <span className="text-2xl font-tech font-bold">60%</span>
                <span className="text-[8px] opacity-40 uppercase">Clean</span>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-4 justify-center">
              {energyMixData.map(item => (
                <div key={item.name} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{backgroundColor: item.color}}></div>
                  <span className="text-[10px] text-white/60 uppercase">{item.name} {item.value}%</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white/5 border border-white/10 p-6 sm:p-8 rounded-3xl sm:rounded-[40px] backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
               <div className="w-8 h-8 sm:w-10 sm:h-10 bg-emerald/10 rounded-full flex items-center justify-center">
                 <TrendingDown className="text-emerald w-4 h-4 sm:w-5 sm:h-5" />
               </div>
               <h4 className="text-xs sm:text-sm font-tech font-bold uppercase tracking-widest">Emissions Path</h4>
            </div>
            <div className="h-40 sm:h-48 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={co2ReductionData}>
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#10b981" 
                    strokeWidth={3} 
                    dot={{fill: '#10b981', r: 4}} 
                    activeDot={{r: 8}}
                  />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: 'rgba(255,255,255,0.4)', fontSize: 10}} />
                  <Tooltip contentStyle={{backgroundColor: '#0B1C2D', border: 'none', borderRadius: '8px'}} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-8">
               <p className="text-xs text-white/40 leading-relaxed italic">
                 Targeting Carbon Neutrality by 2030 through regenerative manufacturing practices.
               </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 border border-white/10 p-6 sm:p-8 rounded-3xl sm:rounded-[40px] backdrop-blur-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                 <div className="w-8 h-8 sm:w-10 sm:h-10 bg-emerald/10 rounded-full flex items-center justify-center">
                   <BarChart3 className="text-emerald w-4 h-4 sm:w-5 sm:h-5" />
                 </div>
                 <h4 className="text-xs sm:text-sm font-tech font-bold uppercase tracking-widest">Global Standards</h4>
              </div>
              <div className="space-y-6">
                {[
                  { label: "Oeko-Tex Standard 100", progress: 100 },
                  { label: "GOTS Certified", progress: 100 },
                  { label: "WRAP Gold Medal", progress: 100 },
                  { label: "REACH Compliance", progress: 100 }
                ].map(cert => (
                  <div key={cert.label}>
                    <div className="flex justify-between text-[10px] uppercase font-bold mb-2">
                       <span className="text-white/60">{cert.label}</span>
                       <span className="text-emerald">Active</span>
                    </div>
                    <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                       <motion.div 
                         initial={{ width: 0 }}
                         whileInView={{ width: '100%' }}
                         transition={{ duration: 1, delay: 0.5 }}
                         className="h-full bg-emerald shadow-[0_0_10px_#10b981]"
                       />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-emerald/10 rounded-2xl border border-emerald/20">
               <div className="flex items-center gap-3">
                 <CheckCircle2 size={16} className="text-emerald" />
                 <span className="text-[10px] font-bold uppercase tracking-tighter text-emerald">Audit Score: 98.4/100</span>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

