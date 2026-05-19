import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { productData, Product } from '../data/products';
import { useSearchParams } from 'react-router-dom';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { 
  Filter, 
  LayoutGrid, 
  List, 
  Search, 
  X, 
  ShoppingBag, 
  ShieldCheck, 
  Truck, 
  Recycle, 
  CheckCircle2,
  Maximize2,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  ArrowRight
} from 'lucide-react';

interface ProductCardProps {
  product: Product;
  viewMode: 'grid' | 'list';
  onSelect: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, viewMode, onSelect }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const allImages = product.images && product.images.length > 0 ? product.images : [product.img];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isHovered && allImages.length > 1) {
      interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
      }, 2000); // Change image every 2 seconds on hover
    } else if (!isHovered) {
      setCurrentImageIndex(0); // Reset to first image when not hovering
    }
    return () => clearInterval(interval);
  }, [isHovered, allImages.length]);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -12 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button 
        onClick={() => onSelect(product)}
        className={`group block w-full text-left bg-white border border-navy/5 overflow-hidden transition-all duration-500 hover:shadow-[0_40px_80px_-15px_rgba(11,28,45,0.15)] hover:border-emerald/30 relative rounded-[2.5rem] ${
          viewMode === 'list' ? 'flex items-center gap-8' : ''
        }`}
      >
        <div className={`overflow-hidden relative shrink-0 ${
          viewMode === 'list' ? 'w-64 aspect-square' : 'aspect-[4/5]'
        }`}>
          <AnimatePresence mode="wait">
            <motion.img 
              key={allImages[currentImageIndex]}
              src={allImages[currentImageIndex]}
              alt={product.name} 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>
          
          {/* Hover Overlay - Quick Actions */}
          <div className="absolute inset-0 bg-brand/40 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[6px] flex items-center justify-center">
             <motion.div 
               initial={{ y: 20, opacity: 0 }}
               whileHover={{ scale: 1.05, backgroundColor: '#10b981', color: 'white' }}
               whileTap={{ scale: 0.95 }}
               className="bg-white text-navy px-10 py-5 rounded-full font-tech font-bold uppercase tracking-[0.2em] text-[12px] shadow-2xl flex items-center gap-3 transition-all group-hover:translate-y-0 translate-y-6"
             >
               <Search size={18} className="transition-colors" />
               Quick View
             </motion.div>
          </div>

          {/* Floating Category Badges */}
          <div className="absolute top-8 left-8 z-10 flex flex-col gap-3">
             <span className="bg-emerald text-white px-5 py-2 text-[10px] font-tech font-bold uppercase tracking-[0.2em] rounded-full shadow-lg backdrop-blur-md">
               {product.category}
             </span>
             <span className="bg-white/90 backdrop-blur-md text-navy px-5 py-2 text-[10px] font-tech font-bold uppercase tracking-[0.2em] rounded-full border border-navy/5 shadow-sm flex items-center gap-2">
               <div className="w-1.5 h-1.5 bg-emerald rounded-full" />
               {product.range}
             </span>
          </div>
        </div>

        <div className="p-10 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex gap-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-2 h-2 bg-emerald/20 rounded-full group-hover:bg-emerald transition-all duration-500" />
                ))}
              </div>
              <span className="text-[10px] font-tech font-bold text-navy/20 uppercase tracking-[0.3em]">Export Grade</span>
            </div>
            
            <h3 className="text-2xl font-tech font-bold text-navy uppercase tracking-tighter mb-4 group-hover:text-emerald transition-colors duration-300 leading-tight">
              {product.name}
            </h3>
            <p className="text-[15px] text-navy/50 font-medium line-clamp-2 leading-relaxed mb-8">
              {product.desc}
            </p>
          </div>

          <div className="flex items-center justify-between pt-8 border-t border-navy/5 mt-auto">
             <div className="flex flex-col">
               <span className="text-[10px] font-tech font-bold text-navy/25 uppercase tracking-widest mb-1">Scale of Supply</span>
               <span className="text-sm font-tech font-bold text-navy group-hover:text-emerald transition-colors">{product.moq}</span>
             </div>
             <div 
               className="w-14 h-14 border border-navy/5 rounded-2xl flex items-center justify-center text-navy/20 group-hover:bg-emerald group-hover:text-white group-hover:border-emerald transition-all duration-500 group-hover:translate-x-3 shadow-sm"
             >
               <ArrowRight size={20} />
             </div>
          </div>
        </div>
      </button>
    </motion.div>
  );
}

export default function ProductCatalogPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [imageLoading, setImageLoading] = useState(true);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [activeImage, setActiveImage] = useState<string | null>(null);
  
  const activeCategory = searchParams.get('category') || 'All';
  const activeGender = searchParams.get('gender') || 'All';
  const activeRange = searchParams.get('range') || 'All';
  
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const ranges = ['All', 'Women’s & Girls’', 'Men’s & Boys’', 'Kidswear', 'Other Knitwear'];
  const categories = ['All', 'Lingerie', 'Underwear', 'Bodysuits', 'Swimwear', 'Sleepwear', 'Activewear', 'T-Shirts', 'Hoodies', 'Joggers', 'Kidswear', 'Knitwear', 'Jackets', 'Polo Shirts'];
  const genders = ['All', 'Men', 'Women', 'Kids', 'Unisex'];

  const filteredProducts = useMemo(() => {
    return productData.filter(p => {
      const matchCat = activeCategory === 'All' || p.category === activeCategory;
      const matchGender = activeGender === 'All' || p.gender === activeGender;
      const matchRange = activeRange === 'All' || p.range === activeRange;
      const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.desc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchGender && matchRange && matchSearch;
    });
  }, [activeCategory, activeGender, activeRange, searchQuery]);

  const updateFilter = (type: 'category' | 'gender' | 'range', value: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === 'All') {
      newParams.delete(type);
    } else {
      newParams.set(type, value);
    }
    setSearchParams(newParams);
  };

  const handleProductSelect = (product: Product) => {
    setImageLoading(true);
    setSelectedProduct(product);
    setSelectedColor(product.colors?.[0]?.name || null);
    setSelectedSize(null);
    setActiveImage(product.images?.[0] || product.img);
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB]">
      {/* Hero Section */}
      <section className="bg-brand py-24 px-6 text-center">
        <div className="container mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-emerald font-tech font-bold tracking-[0.3em] text-xs uppercase mb-4 block"
          >
            Export Grade Manufacturing
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-tech font-bold text-white uppercase tracking-tighter mb-8"
          >
            Product <span className="text-emerald italic">Catalog</span>
          </motion.h1>

          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-xl mx-auto relative"
          >
            <input 
              type="text" 
              placeholder="Search by product name or feature..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/10 border border-white/20 rounded-full py-5 px-14 text-white placeholder:text-white/30 focus:outline-none focus:border-emerald/50 focus:bg-white/15 transition-all text-sm font-medium"
            />
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-emerald" size={20} />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-6 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>
            )}
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-64 shrink-0 space-y-10">
            <div>
              <h3 className="text-xs font-tech font-bold text-navy uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                <Filter size={14} /> Product Range
              </h3>
              <div className="flex flex-col gap-3">
                {ranges.map(rng => (
                  <button
                    key={rng}
                    onClick={() => updateFilter('range', rng)}
                    className={`text-left text-[11px] font-tech font-bold uppercase tracking-wider transition-all hover:pl-2 ${
                      activeRange === rng ? 'text-emerald underline underline-offset-4' : 'text-navy/40 hover:text-navy'
                    }`}
                  >
                    {rng}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-tech font-bold text-navy uppercase tracking-[0.2em] mb-6">
                Category
              </h3>
              <div className="flex flex-col gap-3 max-h-[300px] overflow-y-auto custom-scrollbar pr-2">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => updateFilter('category', cat)}
                    className={`text-left text-[11px] font-tech font-bold uppercase tracking-wider transition-all hover:pl-2 ${
                      activeCategory === cat ? 'text-emerald' : 'text-navy/40 hover:text-navy'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-tech font-bold text-navy uppercase tracking-[0.2em] mb-6">
                Gender
              </h3>
              <div className="flex flex-col gap-3">
                {genders.map(g => (
                  <button
                    key={g}
                    onClick={() => updateFilter('gender', g)}
                    className={`text-left text-[11px] font-tech font-bold uppercase tracking-wider transition-all hover:pl-2 ${
                      activeGender === g ? 'text-emerald' : 'text-navy/40 hover:text-navy'
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-10 pb-6 border-b border-navy/5">
              <span className="text-[10px] font-tech font-bold text-navy/40 uppercase tracking-widest">
                Showing {filteredProducts.length} Products
              </span>
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setViewMode('grid')}
                  className={`p-2 transition-colors ${viewMode === 'grid' ? 'text-emerald' : 'text-navy/20'}`}
                >
                  <LayoutGrid size={18} />
                </button>
                <button 
                  onClick={() => setViewMode('list')}
                  className={`p-2 transition-colors ${viewMode === 'list' ? 'text-emerald' : 'text-navy/20'}`}
                >
                  <List size={18} />
                </button>
              </div>
            </div>

            {/* Products Grid */}
            <motion.div 
              layout
              className={`grid gap-8 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3' 
                  : 'grid-cols-1'
              }`}
            >
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((product) => (
                  <ProductCard 
                    key={product.id}
                    product={product}
                    viewMode={viewMode}
                    onSelect={handleProductSelect}
                  />
                ))}
              </AnimatePresence>
            </motion.div>
            
            {filteredProducts.length === 0 && (
              <div className="py-20 text-center">
                <p className="text-navy/30 font-tech font-bold uppercase tracking-widest">No products found matching your search.</p>
                <button 
                   onClick={() => {
                     setSearchParams({});
                     setSearchQuery('');
                   }}
                   className="mt-6 text-emerald font-tech font-bold text-xs uppercase tracking-widest underline decoration-2 underline-offset-8"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Manufacturing & Sourcing Section based on Image Guidelines */}
        <section className="mt-32 pt-24 border-t border-navy/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
               <motion.span 
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 className="text-emerald font-tech font-bold tracking-[0.3em] text-[10px] uppercase mb-4 block"
               >
                 Material Integrity
               </motion.span>
               <h2 className="text-4xl lg:text-5xl font-tech font-bold text-navy uppercase tracking-tighter mb-8 leading-tight">
                 Fabrication & <span className="text-emerald italic">Sourcing</span>
               </h2>
               <p className="text-lg text-navy/60 font-medium leading-relaxed mb-10 max-w-xl">
                 Eco Intimates Ltd manufactures a full range of intimate, lounge, and active apparel using both <span className="text-navy font-bold">locally produced</span> and <span className="text-navy font-bold">internationally sourced</span> fabrics and trims.
               </p>

               <div className="space-y-6">
                  {[
                    { title: "Fabrication", desc: "Cotton, cotton/spandex, viscose/spandex, CVC and different type of blended fabrics are sourced locally & micro/lace fabrics are sourced from China." },
                    { title: "Imported Sourcing", desc: "Laces (fabric & trims), special elastics, cups and wires, H&E and other special trims are sourced from China with a strong dedicated team for support." },
                    { title: "Local Sourcing", desc: "H&E, elastics and other accessories are sourced locally through verified premium partners." }
                  ].map((item, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex gap-6 p-8 bg-white border border-navy/5 rounded-3xl hover:border-emerald/30 transition-all group"
                    >
                      <div className="w-10 h-10 bg-soft-gray rounded-full flex items-center justify-center shrink-0 group-hover:bg-emerald/10 transition-colors">
                        <CheckCircle2 size={20} className="text-emerald" />
                      </div>
                      <div>
                        <h4 className="font-tech font-bold text-navy uppercase tracking-widest text-sm mb-2">{item.title}</h4>
                        <p className="text-sm text-navy/50 leading-relaxed font-medium">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
               </div>
            </div>

            <div className="relative">
               <div className="sticky top-32">
                 <div className="aspect-square bg-brand rounded-[40px] overflow-hidden relative">
                    <img 
                      src="https://images.unsplash.com/photo-1558444479-5c45b8974a62?auto=format&fit=crop&q=80&w=1000" 
                      alt="Manufacturing Detail" 
                      className="w-full h-full object-cover opacity-60 mix-blend-overlay"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand to-transparent" />
                    
                    <div className="absolute bottom-12 left-12 right-12">
                       <span className="text-emerald font-tech font-bold tracking-[0.4em] text-[10px] uppercase mb-4 block">Certified Supply Chain</span>
                       <h3 className="text-3xl font-tech font-bold text-white uppercase tracking-tight mb-6">
                         Global Standard Quality Assurance
                       </h3>
                       <div className="h-1 w-24 bg-emerald rounded-full mb-8" />
                       <p className="text-white/60 font-medium leading-relaxed">
                         Our multi-national sourcing network ensures that every component, from the finest lace to the most durable elastic, meets international compliance and quality benchmarks.
                       </p>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </section>
      </div>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-10">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-navy/90 backdrop-blur-md"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-6xl bg-white rounded-[40px] shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto custom-scrollbar"
            >
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-8 right-8 z-20 w-12 h-12 bg-white rounded-full flex items-center justify-center text-navy hover:bg-emerald hover:text-white transition-all shadow-xl"
              >
                <X size={24} />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left: Image with Zoom */}
                <div className="flex flex-col lg:h-full">
                  <div className="aspect-[4/5] lg:aspect-square overflow-hidden bg-soft-gray shrink-0 relative group/zoom">
                    <AnimatePresence>
                      {imageLoading && (
                        <motion.div 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="absolute inset-0 z-20 bg-soft-gray flex flex-col items-center justify-center gap-4"
                        >
                          <div className="w-12 h-12 border-4 border-emerald/20 border-t-emerald rounded-full animate-spin" />
                          <span className="text-[10px] font-tech font-bold text-navy/40 uppercase tracking-[0.2em]">Optimizing High-Res Image...</span>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <TransformWrapper
                      initialScale={1}
                      initialPositionX={0}
                      initialPositionY={0}
                      key={activeImage} // Reset zoom when image changes
                    >
                      {({ zoomIn, zoomOut, resetTransform }) => (
                        <>
                          <div className="absolute top-4 left-4 z-10 flex flex-col gap-2 opacity-0 group-hover/zoom:opacity-100 transition-opacity">
                            <button 
                              onClick={() => zoomIn()}
                              className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-navy shadow-lg hover:bg-emerald hover:text-white transition-all"
                              title="Zoom In"
                            >
                              <ZoomIn size={18} />
                            </button>
                            <button 
                              onClick={() => zoomOut()}
                              className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-navy shadow-lg hover:bg-emerald hover:text-white transition-all"
                              title="Zoom Out"
                            >
                              <ZoomOut size={18} />
                            </button>
                            <button 
                              onClick={() => resetTransform()}
                              className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-navy shadow-lg hover:bg-emerald hover:text-white transition-all"
                              title="Reset"
                            >
                              <RotateCcw size={18} />
                            </button>
                          </div>

                          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 pointer-events-none opacity-60">
                            <div className="bg-navy/80 text-white px-4 py-2 rounded-full text-[8px] font-tech font-bold uppercase tracking-widest flex items-center gap-2 backdrop-blur-md">
                              <Maximize2 size={12} className="text-emerald" />
                              Scroll to Zoom • Drag to Pan
                            </div>
                          </div>

                          <TransformComponent
                            wrapperClass="!w-full !h-full"
                            contentClass="!w-full !h-full"
                          >
                            <img 
                              src={activeImage || selectedProduct.img} 
                              alt={selectedProduct.name} 
                              onLoad={() => setImageLoading(false)}
                              className={`w-full h-full object-cover cursor-move transition-opacity duration-500 ${imageLoading ? 'opacity-0' : 'opacity-100'}`}
                            />
                          </TransformComponent>
                        </>
                      )}
                    </TransformWrapper>
                  </div>

                  {/* Thumbnail Gallery */}
                  {selectedProduct.images && selectedProduct.images.length > 1 && (
                    <div className="p-4 bg-soft-gray border-t border-navy/5 flex items-center gap-3 overflow-x-auto custom-scrollbar">
                      {selectedProduct.images.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            if (activeImage !== img) {
                              setImageLoading(true);
                              setActiveImage(img);
                            }
                          }}
                          className={`w-20 h-20 shrink-0 rounded-xl overflow-hidden border-2 transition-all ${
                            activeImage === img ? 'border-emerald shadow-lg scale-105' : 'border-transparent opacity-60 hover:opacity-100'
                          }`}
                        >
                          <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Right: Info */}
                <div className="p-8 sm:p-12 lg:p-16 flex flex-col">
                  {imageLoading ? (
                    <div className="space-y-6 animate-pulse">
                      <div className="h-4 bg-navy/5 rounded w-1/4" />
                      <div className="h-12 bg-navy/5 rounded w-3/4" />
                      <div className="h-24 bg-navy/5 rounded w-full" />
                      <div className="grid grid-cols-2 gap-4">
                        <div className="h-20 bg-navy/5 rounded-3xl" />
                        <div className="h-20 bg-navy/5 rounded-3xl" />
                      </div>
                      <div className="h-32 bg-navy/5 rounded-3xl" />
                    </div>
                  ) : (
                    <>
                      <span className="text-emerald font-tech font-bold tracking-[0.3em] text-[10px] sm:text-xs uppercase mb-4 block italic">
                        {selectedProduct.category}'s Collection
                      </span>
                      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-tech font-bold text-navy uppercase tracking-tighter mb-6 leading-none">
                        {selectedProduct.name}
                      </h2>
                      <p className="text-base sm:text-lg text-navy/60 font-medium leading-relaxed mb-6">
                        {selectedProduct.desc}
                      </p>

                      {/* Variants: Color & Size */}
                      <div className="space-y-8 mb-10">
                        {selectedProduct.colors && (
                          <div>
                            <h3 className="text-[10px] font-tech font-bold text-navy/40 uppercase tracking-[0.2em] mb-4">
                              Color: <span className="text-navy">{selectedColor}</span>
                            </h3>
                            <div className="flex flex-wrap gap-4">
                              {selectedProduct.colors.map((color) => (
                                <button
                                  key={color.name}
                                  onClick={() => setSelectedColor(color.name)}
                                  className={`w-10 h-10 rounded-full border-2 transition-all flex items-center justify-center ${
                                    selectedColor === color.name ? 'border-emerald scale-110' : 'border-transparent hover:border-navy/10'
                                  }`}
                                  title={color.name}
                                >
                                  <div 
                                    className="w-7 h-7 rounded-full shadow-inner" 
                                    style={{ backgroundColor: color.hex }}
                                  />
                                </button>
                              ))}
                            </div>
                          </div>
                        )}

                        {selectedProduct.sizes && (
                          <div>
                            <div className="flex items-center justify-between mb-4">
                              <h3 className="text-[10px] font-tech font-bold text-navy/40 uppercase tracking-[0.2em]">
                                Select Size
                              </h3>
                              <button className="text-[8px] font-tech font-bold text-emerald uppercase tracking-widest hover:underline">
                                Size Guide
                              </button>
                            </div>
                            <div className="flex flex-wrap gap-3">
                              {selectedProduct.sizes.map((size) => (
                                <button
                                  key={size.name}
                                  disabled={!size.available}
                                  onClick={() => setSelectedSize(size.name)}
                                  className={`min-w-[50px] h-11 px-4 rounded-xl font-tech font-bold text-[10px] uppercase tracking-widest transition-all ${
                                    !size.available 
                                      ? 'bg-soft-gray text-navy/20 cursor-not-allowed border border-dashed border-navy/10' 
                                      : selectedSize === size.name
                                        ? 'bg-emerald text-white shadow-lg'
                                        : 'bg-white text-navy border border-navy/5 hover:border-emerald/50'
                                  }`}
                                >
                                  {size.name}
                                  {!size.available && <span className="block text-[6px] opacity-50">Sold Out</span>}
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-10">
                        <div className="bg-soft-gray p-6 rounded-3xl border border-navy/5">
                          <p className="text-[10px] font-tech font-bold text-navy/30 uppercase tracking-widest mb-1">Minimum Order</p>
                          <p className="text-xl font-tech font-bold text-navy">{selectedProduct.moq}</p>
                        </div>
                        <div className="bg-soft-gray p-6 rounded-3xl border border-navy/5">
                          <p className="text-[10px] font-tech font-bold text-navy/30 uppercase tracking-widest mb-1">Lead Time</p>
                          <p className="text-xl font-tech font-bold text-navy">45-60 Days</p>
                        </div>
                      </div>

                      <div className="mb-10">
                        <h3 className="text-sm font-tech font-bold text-navy uppercase tracking-widest mb-6 flex items-center gap-2">
                          <div className="w-4 h-1 bg-emerald rounded-full" />
                          Specifications
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                          {selectedProduct.specs?.map((spec, i) => (
                            <div key={i} className="flex items-center gap-3">
                              <CheckCircle2 size={16} className="text-emerald" />
                              <span className="text-[13px] font-medium text-navy/70">{spec}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Trust Micro-Icons */}
                      <div className="flex items-center gap-8 mb-10 pt-8 border-t border-navy/5">
                        <div className="flex items-center gap-3">
                          <ShieldCheck size={18} className="text-emerald" />
                          <span className="text-[10px] font-tech font-bold uppercase text-navy/40">100% QA</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Recycle size={18} className="text-emerald" />
                          <span className="text-[10px] font-tech font-bold uppercase text-navy/40">Eco-Fiber</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Truck size={18} className="text-emerald" />
                          <span className="text-[10px] font-tech font-bold uppercase text-navy/40">Global Ship</span>
                        </div>
                      </div>

                      <div className="mt-auto flex flex-col sm:flex-row gap-4">
                        <button className="flex-1 bg-navy text-white px-10 py-5 rounded-full font-tech font-bold uppercase tracking-widest text-[10px] hover:bg-emerald transition-all shadow-xl shadow-navy/20 flex items-center justify-center gap-3">
                          <ShoppingBag size={18} />
                          Request FOB Quote
                        </button>
                        <button className="px-10 py-5 rounded-full border-2 border-navy text-navy font-tech font-bold uppercase tracking-widest text-[10px] hover:bg-soft-gray transition-all">
                          Tech Pack
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

