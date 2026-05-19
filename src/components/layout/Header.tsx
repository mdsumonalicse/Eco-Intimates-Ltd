import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { Menu, X, ArrowRight, Facebook, Instagram, Linkedin, Twitter, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface NavLinkProps {
  item: any;
  isScrolled: boolean;
  className: string;
  onClick?: () => void;
  showIcon?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ item, isScrolled, className, onClick, showIcon = false }) => {
  const isInternal = !item.href.startsWith('#');
  const content = (
    <>
      <span className="flex items-center gap-3">
        {showIcon && <span className="w-1 h-3 bg-emerald/0 transition-all group-hover/sub:bg-emerald rounded-full" />}
        {item.name}
      </span>
      {item.items && showIcon && <ChevronRight size={14} className={`transition-transform duration-300 group-hover/sub:translate-x-1 ${isScrolled ? 'text-navy/20' : 'text-white/20'}`} />}
    </>
  );

  if (isInternal) {
    return (
      <Link 
        to={`/${item.href}`} 
        className={className}
        onClick={onClick}
      >
        {content}
        {!onClick && <span className={`absolute bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover/main:w-full ${
          isScrolled ? 'bg-brand' : 'bg-white'
        }`}></span>}
      </Link>
    );
  }
  
  return (
    <a 
      href={`/${item.href}`}
      className={className}
      onClick={onClick}
    >
      {content}
      {!onClick && <span className={`absolute bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover/main:w-full ${
        isScrolled ? 'bg-brand' : 'bg-white'
      }`}></span>}
    </a>
  );
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const isServicesPage = location.pathname === '/services';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper to handle hash links across pages
  const getHref = (hash: string) => {
    if (hash === '#') return '/';
    return `/${hash}`;
  };

  const menuItems = [
    { name: 'Home', href: '#' },
    { 
      name: 'About', 
      href: '#about',
      submenu: [
        { name: 'Company Profile', href: '#company-profile' },
        { name: 'Directors Overview', href: '#directors-overview' },
        { name: 'Technical Strength', href: '#technical-strength' },
        { name: 'Certifications', href: '#certifications' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Others Companies', href: '#others-companies' },
        { name: 'Factory Location', href: '#factory-location' },
        { name: 'Contact Us', href: '#contact' },
      ]
    },
    { 
      name: 'Products', 
      href: 'products',
      submenu: [
        { 
          name: "Women's & Girls' Range", 
          href: 'products?range=Women%E2%80%99s+&Girls%E2%80%99',
          items: [
            { name: 'Lingerie', href: 'products?category=Lingerie' },
            { name: 'Underwear', href: 'products?category=Underwear' },
            { name: 'Bodysuits', href: 'products?category=Bodysuits' },
            { name: 'Swimwear', href: 'products?category=Swimwear' },
            { name: 'Loungewear', href: 'products?category=Sleepwear' },
            { name: 'Sleepwear', href: 'products?category=Sleepwear' }
          ]
        },
        { 
          name: "Men's & Boys' Range", 
          href: 'products?range=Men%E2%80%99s+&Boys%E2%80%99',
          items: [
            { name: 'Boxer Briefs', href: 'products?category=Underwear' },
            { name: 'Trunks', href: 'products?category=Underwear' },
            { name: 'Activewear', href: 'products?category=Activewear' },
            { name: 'T-shirts', href: 'products?category=T-Shirts' },
            { name: 'Hoodies', href: 'products?category=Hoodies' },
            { name: 'Joggers', href: 'products?category=Joggers' }
          ]
        },
        { 
          name: 'Kidswear', 
          href: 'products?range=Kidswear',
          items: [
            { name: 'Rompers', href: 'products?category=Kidswear' },
            { name: 'Shorts', href: 'products?category=Kidswear' },
            { name: 'Swimwear', href: 'products?category=Kidswear' },
            { name: 'Knitwear', href: 'products?category=Kidswear' }
          ]
        },
        { 
          name: 'Other Knitwear', 
          href: 'products?range=Other+Knitwear',
          items: [
            { name: 'T-shirts', href: 'products?category=T-Shirts' },
            { name: 'Tops', href: 'products?category=Knitwear' },
            { name: 'Hoodies', href: 'products?category=Hoodies' },
            { name: 'Trousers', href: 'products?category=Jackets' },
            { name: 'Jackets', href: 'products?category=Jackets' },
            { name: 'Polo Shirts', href: 'products?category=Polo+Shirts' }
          ]
        }
      ]
    },
    { 
      name: 'Services', 
      href: 'services'
    },
    { 
      name: 'Compliance', 
      href: '#certifications',
      submenu: [
        { 
          name: "Our Compliance", 
          href: '#certifications',
          items: [
            { name: 'Training & Development', href: '#' },
            { name: 'Fire Safety Management', href: '#' },
            { name: 'Employee Relation & Talent management', href: '#' },
            { name: 'Supervisor Skill Development', href: '#' },
            { name: 'Health & Safety Management', href: '#' },
            { name: 'Employee welfare', href: '#' },
            { name: 'Policy', href: '#' },
          ]
        },
        { name: 'Certificates', href: '#certifications' },
      ]
    },
    { name: 'Manufacturing', href: '#manufacturing' },
    { name: 'Sustainability', href: '#sustainability' },
    { name: 'Clients', href: '#clients' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`transition-all duration-300 border-b relative ${
        isScrolled 
          ? 'bg-white py-2 shadow-xl border-soft-gray' 
          : 'bg-brand py-3 border-white/5'
      }`}
      id="main-header"
    >
      {/* Scroll Progress Bar */}
      {isServicesPage && (
        <motion.div
          className="absolute top-0 left-0 right-0 h-1 bg-emerald origin-left z-[100]"
          style={{ scaleX }}
        />
      )}
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group shrink-0">
          <img 
            src="https://i.postimg.cc/VvcR9rL6/Eco-Logo-Marron.png" 
            alt="Eco Intimates Logo" 
            className={`h-10 lg:h-12 w-auto object-contain transition-all duration-300 group-hover:scale-105 ${
              isScrolled ? '' : 'brightness-0 invert drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]'
            }`}
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {menuItems.slice(0, -1).map((item) => (
            <div key={item.name} className="relative group/main">
              <NavLink 
                item={item}
                isScrolled={isScrolled}
                className={`text-[9px] xl:text-[11px] font-tech font-bold uppercase tracking-[0.2em] transition-all relative block py-2 ${
                  isScrolled ? 'text-brand hover:text-navy' : 'text-white hover:text-white/80'
                }`}
              />

              {item.submenu && (
                <div className="absolute top-full left-0 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover/main:opacity-100 group-hover/main:translate-y-0 group-hover/main:pointer-events-auto transition-all duration-300 min-w-[240px] z-50">
                  <motion.div 
                    initial={false}
                    className={`p-1.5 rounded-xl shadow-2xl border backdrop-blur-xl ${
                      isScrolled 
                        ? 'bg-white/95 border-soft-gray/50' 
                        : 'bg-brand/95 border-white/10'
                    }`}
                  >
                    {item.submenu.map((sub, sIdx) => (
                      <div key={sub.name} className="relative group/sub">
                        <NavLink
                          item={sub}
                          isScrolled={isScrolled}
                          showIcon={true}
                          className={`flex items-center justify-between px-4 py-3 rounded-lg text-[10px] font-tech font-bold uppercase tracking-widest transition-all duration-300 ${
                            isScrolled 
                              ? 'text-navy/70 hover:bg-soft-gray hover:text-brand hover:pl-5' 
                              : 'text-white/70 hover:bg-white/10 hover:text-white hover:pl-5'
                          }`}
                        />
                        {sub.items && (
                          <div className="absolute left-[calc(100%+0.5rem)] top-0 opacity-0 -translate-x-2 pointer-events-none group-hover/sub:opacity-100 group-hover/sub:translate-x-0 group-hover/sub:pointer-events-auto transition-all duration-300 min-w-[220px] z-50">
                            <div className={`p-1.5 rounded-xl shadow-2xl border backdrop-blur-xl ${
                              isScrolled ? 'bg-white/95 border-soft-gray/50' : 'bg-brand/95 border-white/10'
                            }`}>
                              <div className="px-4 py-2 border-b border-soft-gray/10 mb-1">
                                <span className={`text-[8px] font-tech font-bold uppercase tracking-[0.2em] opacity-40 ${isScrolled ? 'text-navy' : 'text-white'}`}>
                                  In This Section
                                </span>
                              </div>
                              {sub.items.map((nested) => (
                                <NavLink
                                  key={nested.name}
                                  item={nested}
                                  isScrolled={isScrolled}
                                  className={`block px-4 py-2.5 rounded-lg text-[9px] font-tech font-bold uppercase tracking-widest transition-all duration-300 ${
                                    isScrolled 
                                      ? 'text-navy/60 hover:bg-soft-gray hover:text-brand hover:pl-6' 
                                      : 'text-white/60 hover:bg-white/10 hover:text-white hover:pl-6'
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </motion.div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right Action & Socials */}
        <div className="flex items-center gap-6">
          {/* Social Icons - UFC Style far right */}
          <div className={`hidden xl:flex items-center gap-4 ${
            isScrolled ? 'text-brand/60' : 'text-white/60'
          }`}>
            <a href="#" className={`hover:text-current transition-colors ${isScrolled ? 'hover:text-brand' : 'hover:text-white'}`}><Facebook size={18} /></a>
            <a href="#" className={`hover:text-current transition-colors ${isScrolled ? 'hover:text-brand' : 'hover:text-white'}`}><Twitter size={18} /></a>
            <a href="#" className={`hover:text-current transition-colors ${isScrolled ? 'hover:text-brand' : 'hover:text-white'}`}><Linkedin size={18} /></a>
            <a href="#" className={`hover:text-current transition-colors ${isScrolled ? 'hover:text-brand' : 'hover:text-white'}`}><Instagram size={18} /></a>
          </div>

          <a 
            href={getHref('#contact')}
            className={`hidden sm:flex items-center gap-2 px-5 py-1.5 rounded-sm text-[10px] font-tech font-bold uppercase tracking-[0.2em] transition-all duration-300 shadow-lg ${
              isScrolled ? 'bg-brand text-white hover:bg-navy' : 'bg-white text-brand hover:bg-navy hover:text-white'
            }`}
          >
            Project Pass
            <ArrowRight size={14} />
          </a>
          
          <button 
            className={`lg:hidden p-2 transition-colors ${isScrolled ? 'text-brand' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-btn"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 lg:hidden bg-brand z-[60] pt-24 pb-10"
          >
            <div className="absolute top-6 right-6">
              <button 
                className="p-3 text-white bg-white/10 rounded-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X size={24} />
              </button>
            </div>

            <div className="container mx-auto px-8 h-full overflow-y-auto custom-scrollbar">
              <div className="flex flex-col gap-8 pb-12">
                {menuItems.map((item, idx) => (
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                    key={item.name} 
                    className="flex flex-col gap-5"
                  >
                    <NavLink 
                      item={item}
                      isScrolled={false}
                      className="text-2xl sm:text-3xl font-tech font-bold text-white uppercase tracking-[0.2em] hover:text-emerald transition-colors"
                      onClick={() => !item.submenu && setMobileMenuOpen(false)}
                    />
                    {item.submenu && (
                      <div className="flex flex-col gap-4 pl-6 border-l-2 border-white/10">
                        {item.submenu.map((sub) => (
                          <div key={sub.name} className="flex flex-col gap-3">
                            <NavLink 
                              item={sub}
                              isScrolled={false}
                              className="text-base sm:text-lg font-tech font-bold text-white/50 uppercase tracking-[0.15em] hover:text-white transition-colors"
                              onClick={() => !sub.items && setMobileMenuOpen(false)}
                            />
                            {sub.items && (
                              <div className="flex flex-col gap-3 pl-4 border-l border-white/5 mt-1">
                                {sub.items.map((nested) => (
                                  <a
                                    key={nested.name}
                                    href={getHref(nested.href)}
                                    className="text-xs sm:text-sm font-tech font-bold text-white/20 uppercase tracking-[0.1em] hover:text-white transition-colors py-1"
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    {nested.name}
                                  </a>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="pt-8 border-t border-white/10 flex flex-col gap-8"
                >
                  <div className="flex items-center gap-8 text-white/40">
                    <Facebook size={20} className="hover:text-white transition-colors" />
                    <Twitter size={20} className="hover:text-white transition-colors" />
                    <Linkedin size={20} className="hover:text-white transition-colors" />
                    <Instagram size={20} className="hover:text-white transition-colors" />
                  </div>
                  <a 
                    href={getHref('#contact')}
                    className="bg-emerald text-white px-8 py-5 rounded-sm text-center font-bold font-tech uppercase tracking-[0.25em] text-sm shadow-xl shadow-emerald/20 active:scale-95 transition-all outline-none"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Project Pass
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

