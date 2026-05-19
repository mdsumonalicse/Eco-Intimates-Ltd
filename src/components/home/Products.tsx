import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ShoppingBag, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { productData } from '../../data/products';

export default function Products() {
  const [activeGender, setActiveGender] = useState<'Women' | 'Men'>('Women');

  const filteredProducts = productData.filter(p => p.gender === activeGender).slice(0, 3);

  return (
    <section className="py-32 bg-white" id="products">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <span className="text-emerald font-tech font-bold tracking-[0.3em] text-[10px] sm:text-xs uppercase mb-4 block underline decoration-navy/10 underline-offset-8 italic">Our Collections</span>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-tech font-bold text-navy max-w-2xl uppercase tracking-tighter leading-tight">
              Mastering The Art <br />
              Of <span className="text-emerald italic">Intimacy</span>
            </h2>
          </div>
          
          <div className="flex bg-soft-gray p-1.5 sm:p-2 rounded-xl sm:rounded-2xl border border-navy/5 overflow-x-auto no-scrollbar">
            {(['Women', 'Men'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveGender(cat)}
                className={`px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-tech font-bold uppercase tracking-widest text-[9px] sm:text-[10px] transition-all whitespace-nowrap ${
                  activeGender === cat 
                    ? 'bg-navy text-white shadow-xl' 
                    : 'text-navy/40 hover:text-navy'
                }`}
              >
                {cat}'s Collection
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="wait">
            {filteredProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group"
              >
                <Link to="/products">
                  <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden mb-6 shadow-2xl group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.15)] transition-all duration-700">
                    <img 
                      src={product.img} 
                      alt={product.name} 
                      className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                    
                    {/* Floating Specs */}
                    <div className="absolute top-8 left-8 flex flex-col gap-2">
                      <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-tech font-bold text-white uppercase tracking-widest border border-white/20">
                        MOQ: {product.moq}
                      </div>
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
                      <div className="w-20 h-20 bg-emerald rounded-full flex items-center justify-center text-white shadow-2xl">
                        <Eye size={32} />
                      </div>
                    </div>

                    <div className="absolute bottom-10 left-10 right-10">
                      <h3 className="text-3xl font-tech font-bold text-white uppercase tracking-tight mb-2 leading-none">
                        {product.name}
                      </h3>
                      <p className="text-white/60 text-sm font-medium line-clamp-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        {product.desc}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between px-4">
                    <div>
                      <p className="text-[10px] font-tech font-bold text-emerald uppercase tracking-[0.2em]">0{idx + 1} / SKU</p>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-tech font-bold text-navy uppercase tracking-widest group-hover:text-emerald transition-colors">
                      View Catalog
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        <div className="mt-24 flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link 
            to="/products"
            className="inline-flex items-center gap-6 bg-emerald text-white px-12 py-6 rounded-full font-tech font-bold uppercase tracking-widest text-xs hover:bg-navy transition-all hover:scale-105 shadow-2xl group"
          >
            Explore Full Catalog
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </Link>
          
          <button className="inline-flex items-center gap-6 bg-navy text-white px-12 py-6 rounded-full font-tech font-bold uppercase tracking-widest text-xs hover:bg-emerald transition-all hover:scale-105 shadow-2xl group relative overflow-hidden">
            <span className="relative z-10 flex items-center gap-4">
              <ShoppingBag size={20} />
              Commercial Catalog
            </span>
            <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            <div className="absolute inset-0 bg-white/10 group-hover:bg-emerald transition-colors" />
          </button>
        </div>
      </div>
    </section>
  );
}

