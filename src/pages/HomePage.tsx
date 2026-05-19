import { useState, useEffect } from 'react';
import Hero from '../components/home/Hero';
import Brands from '../components/home/Brands';
import ClientGrid from '../components/home/ClientGrid';
import CompanyProfile from '../components/home/CompanyProfile';
import DirectorsOverview from '../components/home/DirectorsOverview';
import TechnicalStrength from '../components/home/TechnicalStrength';
import Gallery from '../components/home/Gallery';
import OtherCompanies from '../components/home/OtherCompanies';
import FactoryLocation from '../components/home/FactoryLocation';
import Certifications from '../components/home/Certifications';
import SocialCompliance from '../components/home/SocialCompliance';
import Testimonials from '../components/home/Testimonials';
import Products from '../components/home/Products';
import Factory from '../components/home/Factory';
import Sustainability from '../components/home/Sustainability';
import ExportMap from '../components/home/ExportMap';
import ContactCTA from '../components/home/ContactCTA';
import VirtualTourModal from '../components/home/VirtualTourModal';

export default function HomePage() {
  const [isTourOpen, setIsTourOpen] = useState(false);

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero onOpenTour={() => setIsTourOpen(true)} />
      <Brands />
      <ClientGrid />
      <CompanyProfile />
      <DirectorsOverview />
      <TechnicalStrength />
      <Gallery />
      <OtherCompanies />
      <FactoryLocation />
      <Certifications />
      <SocialCompliance />
      <Testimonials />
      <Products />
      <Factory onOpenTour={() => setIsTourOpen(true)} />
      <Sustainability />
      <ExportMap />
      <ContactCTA />
      <VirtualTourModal isOpen={isTourOpen} onClose={() => setIsTourOpen(false)} />
    </>
  );
}
