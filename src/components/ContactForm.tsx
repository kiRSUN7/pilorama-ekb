import { Send, MessageCircle, Phone } from 'lucide-react';
import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a backend or Telegram bot
    const text = `Новая заявка!\nИмя: ${formData.name}\nТелефон: ${formData.phone}\nСообщение: ${formData.message}`;
    const whatsappUrl = `https://wa.me/79012011837?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-charcoal text-white overflow-hidden flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-12 md:p-16 space-y-8">
            <h2 className="text-4xl md:text-5xl uppercase leading-none">Получите расчет <br />сметы за 15 минут</h2>
            <p className="text-white/50 text-lg">
              Оставьте заявку, и наш технолог рассчитает необходимое количество материала и стоимость доставки до вашего объекта.
            </p>
            
            <div className="space-y-6 pt-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-oak flex items-center justify-center text-charcoal">
                  <Phone size={24} />
                </div>
                <div>
                  <span className="block text-[10px] uppercase text-white/40 font-bold">Горячая линия</span>
                  <span className="text-xl font-bold">+7 (901) 201-18-37</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/10 flex items-center justify-center text-oak">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <span className="block text-[10px] uppercase text-white/40 font-bold">WhatsApp / Telegram</span>
                  <span className="text-xl font-bold">@pilorama_ekb</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 bg-oak p-12 md:p-16 text-charcoal">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-[10px] uppercase tracking-widest font-black mb-2">Ваше имя</label>
                <input 
                  required
                  type="text" 
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  placeholder="Иван Иванов"
                  className="w-full bg-white/20 border-2 border-charcoal/10 p-4 text-lg font-bold placeholder:text-charcoal/30 focus:border-charcoal outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest font-black mb-2">Телефон</label>
                <input 
                  required
                  type="tel" 
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                  placeholder="+7 (___) ___-__-__"
                  className="w-full bg-white/20 border-2 border-charcoal/10 p-4 text-lg font-bold placeholder:text-charcoal/30 focus:border-charcoal outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest font-black mb-2">Комментарий к заказу</label>
                <textarea 
                  rows={4}
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                  placeholder="Например: Доска 50х150 - 5 кубов"
                  className="w-full bg-white/20 border-2 border-charcoal/10 p-4 text-lg font-bold placeholder:text-charcoal/30 focus:border-charcoal outline-none transition-colors resize-none"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-charcoal text-white py-5 font-black uppercase tracking-tighter flex items-center justify-center space-x-3 hover:bg-charcoal/90 transition-all"
              >
                <span>Отправить заявку</span>
                <Send size={20} />
              </button>
              <p className="text-[10px] uppercase tracking-widest font-bold text-charcoal/40 text-center">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
