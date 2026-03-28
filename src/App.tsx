import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Catalog from './components/Catalog';
import Calculator from './components/Calculator';
import TrustSection from './components/TrustSection';
import LogisticsSection from './components/LogisticsSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { motion, useScroll, useSpring } from 'motion/react';

function HomePage() {
  return (
    <main className="pt-20">
      <Hero />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-24 mb-24 hidden lg:block">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-start-8 col-end-13">
            <Calculator />
          </div>
        </div>
      </div>

      {/* Mobile Calculator Toggle (Visible only on mobile) */}
      <div className="lg:hidden px-4 py-8 bg-charcoal">
        <Calculator />
      </div>

      <TrustSection />
      <Catalog />
      <LogisticsSection />
      <ContactForm />
    </main>
  );
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-oak z-[60] origin-left"
          style={{ scaleX }}
        />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
