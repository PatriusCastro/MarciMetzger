import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import GetItSold from './components/GetItSold';
import SearchListings from './components/SearchListings';
import PhotoGallery from './components/PhotoGallery';
import Services from './components/Services';
import Contact from './components/Contact';
import LogoSection from './components/LogoSection';
import MapSection from './components/MapSection';
import Footer from './components/Footer';
import ScrollAnimation from './components/ScrollAnimation';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="min-h-screen">
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <main className="pt-16">
          <Hero />
          <ScrollAnimation>
            <About />
          </ScrollAnimation>
          <ScrollAnimation>
            <SearchListings />
          </ScrollAnimation>
          <ScrollAnimation>
            <LogoSection />
          </ScrollAnimation>
          <ScrollAnimation>
            <GetItSold />
          </ScrollAnimation>
          <ScrollAnimation>
            <PhotoGallery />
          </ScrollAnimation>
          <ScrollAnimation>
            <Services />
          </ScrollAnimation>
          <ScrollAnimation>
            <Contact />
          </ScrollAnimation>
          <ScrollAnimation>
            <MapSection />
          </ScrollAnimation>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;
