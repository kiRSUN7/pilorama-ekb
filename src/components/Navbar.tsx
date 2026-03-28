import { ShoppingCart, Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-charcoal text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-oak flex items-center justify-center">
              <span className="text-charcoal font-black text-xl">P</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-lg leading-none uppercase tracking-tighter">Pilorama</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-oak font-bold">Ekaterinburg</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-bold uppercase tracking-widest hover:text-oak transition-colors">Каталог</Link>
            <Link to="/" className="text-sm font-bold uppercase tracking-widest hover:text-oak transition-colors">Доставка</Link>
            <Link to="/" className="text-sm font-bold uppercase tracking-widest hover:text-oak transition-colors">Производство</Link>
            <Link to="/" className="text-sm font-bold uppercase tracking-widest hover:text-oak transition-colors">Контакты</Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <a href="tel:+79012011837" className="flex items-center space-x-2 text-oak hover:text-white transition-colors">
              <Phone size={18} />
              <span className="font-bold">+7 (901) 201-18-37</span>
            </a>
            <button className="relative p-2 hover:bg-white/10 transition-colors">
              <ShoppingCart size={24} />
              <span className="absolute -top-1 -right-1 bg-oak text-charcoal text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full">0</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <button className="p-2" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-charcoal border-t border-white/10 px-4 pt-4 pb-8 space-y-4"
          >
            <Link to="/" className="block text-xl font-display font-bold uppercase" onClick={() => setIsOpen(false)}>Каталог</Link>
            <Link to="/" className="block text-xl font-display font-bold uppercase" onClick={() => setIsOpen(false)}>Доставка</Link>
            <Link to="/" className="block text-xl font-display font-bold uppercase" onClick={() => setIsOpen(false)}>Производство</Link>
            <Link to="/" className="block text-xl font-display font-bold uppercase" onClick={() => setIsOpen(false)}>Контакты</Link>
            <div className="pt-4 border-t border-white/10">
              <a href="tel:+79012011837" className="flex items-center space-x-3 text-oak text-lg font-bold">
                <Phone size={20} />
                <span>+7 (901) 201-18-37</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
