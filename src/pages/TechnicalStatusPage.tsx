import React from 'react';
import { ShieldCheck, AlertTriangle, Cpu, Globe, Package } from 'lucide-react';
import { motion } from 'motion/react';

const TechnicalStatusPage: React.FC = () => {
  const depChecks = [
    { name: 'React', version: '19.0.1', status: 'Incompatible Peer with react-simple-maps', type: 'warning' },
    { name: 'Vite', version: '6.2.3', status: 'Active', type: 'success' },
    { name: 'Tailwind CSS', version: '4.1.14', status: 'Active', type: 'success' },
    { name: 'Motion', version: '12.23.24', status: 'Active', type: 'success' },
    { name: 'Prop-Types', version: '15.8.1', status: 'Installed as compatible polyfill', type: 'success' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <span className="text-emerald font-tech font-bold tracking-[0.3em] text-[10px] uppercase mb-4 block">System Infrastructure</span>
          <h1 className="text-5xl font-tech font-bold text-navy uppercase tracking-tighter mb-8 italic">
            Technical <span className="text-emerald">Status</span>
          </h1>
          <p className="text-xl text-navy/60 font-medium max-w-2xl leading-relaxed">
            Real-time assessment of application dependencies and build-time configurations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-xs font-tech font-bold text-navy uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
              <Package size={16} /> Dependency Health
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {depChecks.map((check, idx) => (
                <div key={idx} className="p-8 bg-soft-gray rounded-3xl border border-navy/5 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Cpu size={80} />
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-tech font-bold text-navy uppercase tracking-widest">{check.name}</h4>
                    {check.type === 'success' ? (
                      <ShieldCheck className="text-emerald" size={20} />
                    ) : (
                      <AlertTriangle className="text-amber-500" size={20} />
                    )}
                  </div>
                  <p className="text-[10px] font-tech text-navy/40 uppercase mb-2 tracking-widest">Version: {check.version}</p>
                  <p className={`text-xs font-bold ${check.type === 'success' ? 'text-navy/60' : 'text-amber-600'}`}>
                    {check.status}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-10 bg-navy text-white rounded-[40px] relative overflow-hidden">
               <div className="relative z-10">
                 <h4 className="text-2xl font-tech font-bold uppercase tracking-tight mb-6 flex items-center gap-3">
                   <AlertTriangle className="text-emerald" /> Known Deployment Conflict Fix
                 </h4>
                 <p className="text-white/60 font-medium leading-relaxed mb-8">
                   Due to a peer dependency conflict between <span className="text-white font-bold">react-simple-maps</span> and <span className="text-white font-bold">React 19</span>, Netlify builds may fail.
                 </p>
                 <div className="bg-white/5 p-6 rounded-2xl border border-white/10 font-mono text-sm mb-8">
                    <p className="text-emerald mb-2">// Solution implemented in .npmrc</p>
                    <code className="text-emerald">legacy-peer-deps=true</code>
                 </div>
                 <p className="text-xs text-white/40 italic">
                   This ensures npm ignores incompatible peer ranges during deployment.
                 </p>
               </div>
            </div>
          </div>

          <aside className="space-y-12">
            <div>
              <h3 className="text-xs font-tech font-bold text-navy uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                <Globe size={16} /> Environment
              </h3>
              <div className="space-y-4">
                 {[
                   { label: 'Mode', value: import.meta.env.MODE },
                   { label: 'Base URL', value: import.meta.env.BASE_URL },
                   { label: 'SSR', value: String(import.meta.env.SSR) }
                 ].map((env, i) => (
                   <div key={i} className="flex justify-between items-center py-3 border-b border-navy/5">
                      <span className="text-[10px] font-tech font-bold text-navy/40 uppercase tracking-widest">{env.label}</span>
                      <span className="text-[11px] font-tech font-bold text-navy uppercase">{env.value}</span>
                   </div>
                 ))}
              </div>
            </div>

            <div className="p-8 bg-emerald/5 border border-emerald/20 rounded-3xl">
              <h4 className="font-tech font-bold text-navy uppercase text-sm mb-4">Build Pipeline</h4>
              <p className="text-xs text-navy/60 leading-relaxed font-medium">
                Our pipeline uses Vite 6 with automated TypeScript verification and linter checks to ensure production readiness.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default TechnicalStatusPage;
