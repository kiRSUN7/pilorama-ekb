import { Product } from '../types';
import { ShoppingCart, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { thickness, width, length } = product.dimensions;
  const pricePerPiece = (thickness * width * length / 1_000_000_000) * product.pricePerM3;

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white border border-charcoal/10 group overflow-hidden flex flex-col"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.badges.map(badge => (
            <span key={badge} className="bg-charcoal text-white text-[10px] font-black px-2 py-1 uppercase tracking-widest">
              {badge}
            </span>
          ))}
        </div>
      </div>

      <div className="p-3 sm:p-6 flex-1 flex flex-col">
        <div className="flex items-center space-x-1 sm:space-x-2 text-[8px] sm:text-[10px] font-bold text-oak uppercase tracking-widest mb-1 sm:mb-2">
          <CheckCircle2 size={10} className="sm:w-3 sm:h-3" />
          <span>{product.stockStatus === 'In Stock' ? 'В наличии' : 'Под заказ'}</span>
        </div>
        
        <h3 className="text-sm sm:text-xl mb-1 sm:mb-2 group-hover:text-oak transition-colors leading-tight">{product.name}</h3>
        <p className="hidden sm:block text-sm text-charcoal/60 mb-4 line-clamp-2">{product.description}</p>
        
        <div className="text-[9px] sm:text-xs text-charcoal/40 font-bold uppercase tracking-widest mb-3 sm:mb-6">
          {thickness}x{width}x{length} мм
        </div>

        <div className="mt-auto pt-3 sm:pt-6 border-t border-charcoal/5">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-3 sm:mb-4 gap-2 sm:gap-0">
            <div>
              <span className="block text-[8px] sm:text-[10px] uppercase text-charcoal/40 font-bold mb-0.5 sm:mb-1">м³</span>
              <span className="text-sm sm:text-lg font-display font-black">{product.pricePerM3.toLocaleString()} ₽</span>
            </div>
            <div className="text-left sm:text-right">
              <span className="block text-[8px] sm:text-[10px] uppercase text-charcoal/40 font-bold mb-0.5 sm:mb-1">шт</span>
              <span className="text-lg sm:text-2xl font-display font-black text-oak leading-none">{Math.round(pricePerPiece).toLocaleString()} ₽</span>
            </div>
          </div>

          <button className="w-full bg-charcoal hover:bg-oak text-white hover:text-charcoal py-2 sm:py-3 text-[10px] sm:text-xs font-black uppercase tracking-tighter flex items-center justify-center space-x-1 sm:space-x-2 transition-all">
            <ShoppingCart size={14} className="sm:w-[18px] sm:h-[18px]" />
            <span>В корзину</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
