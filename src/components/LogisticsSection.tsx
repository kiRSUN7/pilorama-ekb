import { MapPin, Truck, Navigation } from 'lucide-react';

export default function LogisticsSection() {
  return (
    <section className="py-24 bg-charcoal text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <div className="w-full h-full industrial-grid" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-oak font-black uppercase tracking-widest text-xs mb-4 block">Логистика</span>
            <h2 className="text-4xl md:text-5xl uppercase mb-8 leading-none">Доставим точно <br />в срок</h2>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-white/5 p-3">
                  <Truck size={24} className="text-oak" />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-tighter mb-2">Собственный автопарк</h4>
                  <p className="text-white/50 text-sm">Манипуляторы грузоподъемностью от 3 до 20 тонн. Доставка по звонку.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-white/5 p-3">
                  <MapPin size={24} className="text-oak" />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-tighter mb-2">География поставок</h4>
                  <p className="text-white/50 text-sm">Екатеринбург, Березовский, Верхняя Пышма, Арамиль и вся Свердловская область.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white/5 p-3">
                  <Navigation size={24} className="text-oak" />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-tighter mb-2">Точный расчет</h4>
                  <p className="text-white/50 text-sm">Стоимость доставки рассчитывается индивидуально в зависимости от веса и расстояния.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-white/5 border-l-4 border-oak">
              <p className="text-lg font-bold mb-4">Нужен расчет доставки?</p>
              <button className="bg-oak text-charcoal px-8 py-4 font-black uppercase tracking-tighter hover:bg-oak-dark transition-all">
                Связаться в WhatsApp
              </button>
            </div>
          </div>

          <div className="relative aspect-square lg:aspect-auto lg:h-[600px] bg-white/5 border border-white/10 overflow-hidden">
            {/* Placeholder for Map */}
            <div className="absolute inset-0 flex items-center justify-center flex-col space-y-4">
              <MapPin size={48} className="text-oak animate-bounce" />
              <div className="text-center">
                <span className="block text-xl font-display font-black uppercase">Интерактивная карта</span>
                <span className="text-white/30 text-xs uppercase tracking-widest">Зоны доставки в реальном времени</span>
              </div>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200" 
              alt="Map Background"
              className="w-full h-full object-cover opacity-20 grayscale"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
