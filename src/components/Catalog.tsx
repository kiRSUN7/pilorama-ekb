import { CATEGORIES, PRODUCTS } from '../constants';
import ProductCard from './ProductCard';
import { useState } from 'react';
import { cn } from '../lib/utils';

export default function Catalog() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts = activeCategory === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  // Group products by their base type (e.g., "Доска обрезная", "Брус")
  const groupedProducts = filteredProducts.reduce((acc, product) => {
    // Extract base name by removing the dimensions part (e.g., "25х100х6000")
    const baseName = product.name.replace(/\s\d+х\d+х\d+/, '').trim();
    if (!acc[baseName]) {
      acc[baseName] = [];
    }
    acc[baseName].push(product);
    return acc;
  }, {} as Record<string, typeof PRODUCTS>);

  return (
    <section className="py-24 industrial-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl uppercase mb-4">Каталог продукции</h2>
            <p className="text-charcoal/60 text-lg">
              Мы производим полный спектр пиломатериалов из сосны: от строительного бруса до сухой строганной доски.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <button 
              onClick={() => setActiveCategory('all')}
              className={cn(
                "px-6 py-2 text-xs font-black uppercase tracking-widest transition-all border-2",
                activeCategory === 'all' ? "bg-charcoal text-white border-charcoal" : "border-charcoal/10 hover:border-charcoal"
              )}
            >
              Все
            </button>
            {CATEGORIES.map(cat => (
              <button 
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "px-6 py-2 text-xs font-black uppercase tracking-widest transition-all border-2",
                  activeCategory === cat.id ? "bg-charcoal text-white border-charcoal" : "border-charcoal/10 hover:border-charcoal"
                )}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-16">
          {Object.entries(groupedProducts).map(([groupName, products]) => (
            <div key={groupName} className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="h-px bg-charcoal/10 flex-1" />
                <h3 className="text-2xl uppercase tracking-tighter whitespace-nowrap">{groupName}</h3>
                <div className="h-px bg-charcoal/10 flex-1" />
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                {products.map(product => (
                  <div key={product.id}>
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
