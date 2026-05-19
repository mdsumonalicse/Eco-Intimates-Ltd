/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import NewsTicker from './components/layout/NewsTicker';
import Footer from './components/layout/Footer';
import FloatingBot from './components/ui/FloatingBot';
import HomePage from './pages/HomePage';
import ProductCatalogPage from './pages/ProductCatalogPage';
import ServicesPage from './pages/ServicesPage';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="relative min-h-screen">
        <div className="fixed top-0 left-0 right-0 z-50">
          <Header />
        </div>
        
        <main className="pt-[70px]">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductCatalogPage />} />
            <Route path="/services" element={<ServicesPage />} />
          </Routes>
        </main>

        <NewsTicker />
        <Footer />
        <FloatingBot />
      </div>
    </Router>
  );
}
