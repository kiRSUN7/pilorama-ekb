import { CheckCircle2, ShieldCheck, Truck, Clock } from 'lucide-react';

const FEATURES = [
  {
    icon: <ShieldCheck size={32} className="text-oak" />,
    title: 'ГОСТ Качество',
    description: 'Весь пиломатериал проходит строгий контроль ОТК на соответствие геометрии и сортности.'
  },
  {
    icon: <Truck size={32} className="text-oak" />,
    title: 'Своя логистика',
    description: 'Доставка манипулятором по Екатеринбургу и области в день заказа. Разгрузка включена.'
  },
  {
    icon: <Clock size={32} className="text-oak" />,
    title: 'Скорость отгрузки',
    description: 'Складской запас более 500 м³ готовой продукции. Отгрузка 24/7 по предварительной записи.'
  },
  {
    icon: <CheckCircle2 size={32} className="text-oak" />,
    title: 'Честная цена',
    description: 'Работаем без посредников. Вы покупаете напрямую у производителя по лучшей цене.'
  }
];

export default function TrustSection() {
  return (
    <section className="py-24 bg-white border-y border-charcoal/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {FEATURES.map((feature, idx) => (
            <div key={idx} className="space-y-4">
              <div className="w-16 h-16 bg-charcoal flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl uppercase tracking-tighter">{feature.title}</h3>
              <p className="text-charcoal/60 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-video overflow-hidden bg-charcoal">
            <img 
              src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=1200" 
              alt="Our Production"
              className="w-full h-full object-cover opacity-80"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-oak text-charcoal px-6 py-3 font-black uppercase tracking-widest text-sm">
                Наше производство
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl uppercase leading-none">Бескомпромиссная честность в каждой доске</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-oak mt-2 shrink-0" />
                <p className="text-charcoal/70 leading-relaxed">
                  Мы не используем фразы «самая лучшая доска». Мы говорим фактами: влажность 12%, отклонение геометрии ±1мм, сорт подтвержден ОТК.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-oak mt-2 shrink-0" />
                <p className="text-charcoal/70 leading-relaxed">
                  Собственный лесозаготовительный участок и современное оборудование позволяют нам контролировать качество на каждом этапе.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-oak mt-2 shrink-0" />
                <p className="text-charcoal/70 leading-relaxed">
                  Прозрачное ценообразование: вы всегда знаете, за что платите. Никаких скрытых наценок за «премиальность».
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
