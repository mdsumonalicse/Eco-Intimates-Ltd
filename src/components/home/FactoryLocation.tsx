import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function FactoryLocation() {
  return (
    <section className="py-32 bg-soft-gray overflow-hidden" id="factory-location">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-emerald font-tech font-bold tracking-[0.3em] text-xs uppercase mb-4 block">Geography</span>
              <h2 className="text-4xl lg:text-5xl font-tech font-bold text-navy mb-12 uppercase tracking-tighter">
                Visit Our <br />
                <span className="text-emerald italic">HQ & Factory</span>
              </h2>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-emerald shrink-0 shadow-sm">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-navy/40 mb-2">Corporate Office</h4>
                    <p className="text-lg font-bold text-navy max-w-xs">Building 4, Sector 7, Uttara, Dhaka, Bangladesh</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-emerald shrink-0 shadow-sm">
                    <Building2 size={24} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-navy/40 mb-2">Manufacturing Unit</h4>
                    <p className="text-lg font-bold text-navy max-w-xs">Plot 24-26, Ashulia Industrial Zone, Savar, Dhaka</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-emerald shrink-0 shadow-sm">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-navy/40 mb-2">Visiting Hours</h4>
                    <p className="text-lg font-bold text-navy">Sat - Thu: 09:00 AM - 06:00 PM</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="rounded-[50px] overflow-hidden shadow-2xl h-[500px] border-[10px] border-white relative group"
            >
              {/* Substitute for actual map - image or embed */}
              <img 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000" 
                alt="Map Location" 
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-navy/20 pointer-events-none group-hover:bg-transparent transition-all" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-8 h-8 md:w-12 md:h-12 bg-emerald rounded-full flex items-center justify-center text-white animate-bounce shadow-2xl">
                  <MapPin size={24} />
                </div>
              </div>
              
              <button className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-white text-navy px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-emerald hover:text-white transition-all shadow-xl group">
                Open in Google Maps
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Importing Building2 locally as it's used in the JSX
import { Building2 } from 'lucide-react';
