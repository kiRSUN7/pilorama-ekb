import { Phone, MapPin, Mail, Instagram, MessageCircle, ShoppingCart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white pt-24 pb-32 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-oak flex items-center justify-center">
                <span className="text-charcoal font-black text-xl">P</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-lg leading-none uppercase tracking-tighter">Pilorama</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-oak font-bold">Ekaterinburg</span>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              Производство и продажа качественного пиломатериала в Екатеринбурге и Свердловской области. Честная геометрия и честные цены.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-oak hover:text-charcoal transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-oak hover:text-charcoal transition-all">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-oak font-black uppercase tracking-widest text-xs mb-8">Продукция</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">Доска обрезная</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Брус строительный</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Вагонка и отделка</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Террасная доска</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Материалы для бани</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-oak font-black uppercase tracking-widest text-xs mb-8">Компания</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">О производстве</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Доставка и оплата</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Оптовые поставки</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Наши работы</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-oak font-black uppercase tracking-widest text-xs mb-8">Контакты</h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-oak shrink-0" />
                <span className="text-sm text-white/60">г. Среднеуральск, <br />ул. Четвертая 18</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-oak shrink-0" />
                <a href="tel:+79012011837" className="text-lg font-bold hover:text-oak transition-colors">+7 (901) 201-18-37</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-oak shrink-0" />
                <a href="mailto:piloramaekb@gmail.com" className="text-sm text-white/60 hover:text-white transition-colors">piloramaekb@gmail.com</a>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-oak font-black text-xs uppercase tracking-widest shrink-0">MAX:</span>
                <span className="text-sm text-white/60 font-bold uppercase tracking-widest">PiloramaekbMAX</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-white/20 font-bold">
          <span>© 2026 Pilorama Ekaterinburg. Все права защищены.</span>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white transition-colors">Публичная оферта</a>
          </div>
        </div>
      </div>

      {/* Mobile Sticky Buttons */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-charcoal border-t border-white/10 flex h-20">
        <a href="tel:+79012011837" className="flex-1 flex flex-col items-center justify-center space-y-1 border-r border-white/10">
          <Phone size={20} className="text-oak" />
          <span className="text-[10px] font-black uppercase tracking-widest text-white/60">Позвонить</span>
        </a>
        <button className="flex-1 flex flex-col items-center justify-center space-y-1 bg-oak text-charcoal">
          <ShoppingCart size={20} />
          <span className="text-[10px] font-black uppercase tracking-widest">Корзина (0)</span>
        </button>
      </div>
    </footer>
  );
}
