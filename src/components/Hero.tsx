import { ArrowRight, Play } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center overflow-hidden bg-charcoal">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=1920" 
          alt="Lumber loading with manipulator"
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center sm:text-left">
        <div className="max-w-3xl mx-auto sm:mx-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-oak text-charcoal px-4 py-1 text-[10px] sm:text-xs font-black uppercase tracking-widest mb-6">
              Прямой производитель
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-7xl text-white mb-6 leading-[1.2] sm:leading-[1.1] md:leading-[0.9] uppercase tracking-tighter">
              Честный <br className="sm:hidden" /> пиломатериал <br className="hidden sm:block" />
              <span className="text-oak"> в Екатеринбурге</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/70 mb-10 max-w-xl mx-auto sm:mx-0 leading-relaxed">
              Геометрия по ГОСТу, доставка манипулятором, расчет сметы за 1 минуту. Бескомпромиссное качество от производителя.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
              <button className="bg-oak hover:bg-oak-dark text-charcoal px-8 py-4 font-black uppercase tracking-tighter flex items-center justify-center space-x-3 transition-all transform hover:scale-105 active:scale-95">
                <span>Перейти в каталог</span>
                <ArrowRight size={20} />
              </button>
              <button className="border-2 border-white/20 hover:border-white text-white px-8 py-4 font-black uppercase tracking-tighter flex items-center justify-center space-x-3 transition-all active:scale-95">
                <Play size={20} fill="currentColor" />
                <span>Наше производство</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Overlay */}
      <div className="absolute bottom-0 right-0 hidden lg:flex bg-white p-12 max-w-md">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <span className="block text-4xl font-display font-black text-charcoal">12%</span>
            <span className="text-xs uppercase tracking-widest text-charcoal/50 font-bold">Влажность (камерная сушка)</span>
          </div>
          <div>
            <span className="block text-4xl font-display font-black text-charcoal">±1мм</span>
            <span className="text-xs uppercase tracking-widest text-charcoal/50 font-bold">Отклонение геометрии</span>
          </div>
          <div>
            <span className="block text-4xl font-display font-black text-charcoal">24/7</span>
            <span className="text-xs uppercase tracking-widest text-charcoal/50 font-bold">Отгрузка со склада</span>
          </div>
          <div>
            <span className="block text-4xl font-display font-black text-charcoal">ГОСТ</span>
            <span className="text-xs uppercase tracking-widest text-charcoal/50 font-bold">Контроль качества ОТК</span>
          </div>
        </div>
      </div>
    </section>
  );
}
