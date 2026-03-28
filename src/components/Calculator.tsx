import { useState, useEffect } from 'react';
import { Calculator as CalcIcon, ChevronRight, Info, Plus, Trash2, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PRODUCTS } from '../constants';
import { cn } from '../lib/utils';

interface QuoteItem {
  id: string;
  productName: string;
  m3: number;
  pcs: number;
  price: number;
  weight: number;
}

export default function Calculator() {
  const [isCustom, setIsCustom] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(PRODUCTS[0].id);
  const [customDimensions, setCustomDimensions] = useState({
    thickness: 25,
    width: 100,
    length: 6000,
    price: 15000
  });
  const [quantity, setQuantity] = useState(1);
  const [unit, setUnit] = useState<'pcs' | 'm3'>('pcs');
  const [quoteItems, setQuoteItems] = useState<QuoteItem[]>([]);
  
  const product = PRODUCTS.find(p => p.id === selectedProductId) || PRODUCTS[0];
  
  const thickness = isCustom ? customDimensions.thickness : product.dimensions.thickness;
  const width = isCustom ? customDimensions.width : product.dimensions.width;
  const length = isCustom ? customDimensions.length : product.dimensions.length;
  const pricePerM3 = isCustom ? customDimensions.price : product.pricePerM3;
  const weightPerM3 = isCustom ? 550 : product.weightPerM3; // Default weight for custom
  
  // Volume of one piece in m3
  const volumePerPiece = (thickness * width * length) / 1_000_000_000;
  
  const [m3, setM3] = useState(volumePerPiece);
  const [pcs, setPcs] = useState(1);

  useEffect(() => {
    if (unit === 'pcs') {
      const calculatedM3 = quantity * volumePerPiece;
      setM3(calculatedM3);
      setPcs(quantity);
    } else {
      const calculatedPcs = Math.ceil(quantity / volumePerPiece);
      setPcs(calculatedPcs);
      setM3(quantity);
    }
  }, [quantity, unit, volumePerPiece]);

  const totalPrice = m3 * pricePerM3;
  const totalWeight = m3 * weightPerM3;

  const addToQuote = () => {
    const name = isCustom 
      ? `Свой размер (${thickness}x${width}x${length})` 
      : product.name;

    const newItem: QuoteItem = {
      id: Math.random().toString(36).substr(2, 9),
      productName: name,
      m3,
      pcs,
      price: totalPrice,
      weight: totalWeight,
    };
    setQuoteItems([...quoteItems, newItem]);
  };

  const removeFromQuote = (id: string) => {
    setQuoteItems(quoteItems.filter(item => item.id !== id));
  };

  const grandTotal = quoteItems.reduce((acc, item) => acc + item.price, 0);
  const totalVolume = quoteItems.reduce((acc, item) => acc + item.m3, 0);

  return (
    <div className="bg-charcoal text-white border-l-4 border-oak shadow-2xl overflow-hidden">
      <div className="p-6 md:p-8">
        <div className="flex items-center space-x-3 mb-8">
          <div className="bg-oak p-2">
            <CalcIcon size={24} className="text-charcoal" />
          </div>
          <h2 className="text-2xl uppercase tracking-tighter">Калькулятор объема и цены</h2>
        </div>

        <div className="space-y-6">
          {/* Mode Toggle */}
          <div className="flex bg-white/5 p-1 mb-4">
            <button 
              onClick={() => setIsCustom(false)}
              className={cn(
                "flex-1 py-2 text-[10px] font-bold uppercase tracking-widest transition-all",
                !isCustom ? "bg-oak text-charcoal" : "text-white/40 hover:text-white"
              )}
            >
              Из каталога
            </button>
            <button 
              onClick={() => setIsCustom(true)}
              className={cn(
                "flex-1 py-2 text-[10px] font-bold uppercase tracking-widest transition-all",
                isCustom ? "bg-oak text-charcoal" : "text-white/40 hover:text-white"
              )}
            >
              Свой размер
            </button>
          </div>

          {/* Product Select or Custom Inputs */}
          {!isCustom ? (
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-white/50 font-bold mb-2">Выберите материал</label>
              <select 
                value={selectedProductId}
                onChange={(e) => setSelectedProductId(e.target.value)}
                className="w-full bg-white/5 border border-white/10 p-3 text-sm focus:border-oak outline-none transition-colors"
              >
                {PRODUCTS.map(p => (
                  <option key={p.id} value={p.id} className="bg-charcoal">{p.name}</option>
                ))}
              </select>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <label className="block text-[10px] uppercase tracking-widest text-white/50 font-bold mb-2">Цена за м³ (₽)</label>
                <input 
                  type="number"
                  value={customDimensions.price}
                  onChange={(e) => setCustomDimensions({...customDimensions, price: Number(e.target.value)})}
                  className="w-full bg-white/5 border border-white/10 p-3 text-sm focus:border-oak outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-white/50 font-bold mb-2">Толщина (мм)</label>
                <input 
                  type="number"
                  value={customDimensions.thickness}
                  onChange={(e) => setCustomDimensions({...customDimensions, thickness: Number(e.target.value)})}
                  className="w-full bg-white/5 border border-white/10 p-3 text-sm focus:border-oak outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-white/50 font-bold mb-2">Ширина (мм)</label>
                <input 
                  type="number"
                  value={customDimensions.width}
                  onChange={(e) => setCustomDimensions({...customDimensions, width: Number(e.target.value)})}
                  className="w-full bg-white/5 border border-white/10 p-3 text-sm focus:border-oak outline-none transition-colors"
                />
              </div>
              <div className="col-span-2">
                <label className="block text-[10px] uppercase tracking-widest text-white/50 font-bold mb-2">Длина (мм)</label>
                <input 
                  type="number"
                  value={customDimensions.length}
                  onChange={(e) => setCustomDimensions({...customDimensions, length: Number(e.target.value)})}
                  className="w-full bg-white/5 border border-white/10 p-3 text-sm focus:border-oak outline-none transition-colors"
                />
              </div>
            </div>
          )}

          {/* Dimensions Display (Only for Catalog mode) */}
          {!isCustom && (
            <div className="grid grid-cols-3 gap-2 py-4 border-y border-white/5">
              <div className="text-center">
                <span className="block text-[10px] uppercase text-white/40 mb-1">Толщина</span>
                <span className="font-bold">{thickness} мм</span>
              </div>
              <div className="text-center">
                <span className="block text-[10px] uppercase text-white/40 mb-1">Ширина</span>
                <span className="font-bold">{width} мм</span>
              </div>
              <div className="text-center">
                <span className="block text-[10px] uppercase text-white/40 mb-1">Длина</span>
                <span className="font-bold">{length} мм</span>
              </div>
            </div>
          )}

          {/* Quantity Input */}
          <div className="space-y-4">
            <div className="flex bg-white/5 p-1">
              <button 
                onClick={() => setUnit('pcs')}
                className={cn(
                  "flex-1 py-2 text-xs font-bold uppercase tracking-widest transition-all",
                  unit === 'pcs' ? "bg-oak text-charcoal" : "hover:bg-white/5"
                )}
              >
                Штуки
              </button>
              <button 
                onClick={() => setUnit('m3')}
                className={cn(
                  "flex-1 py-2 text-xs font-bold uppercase tracking-widest transition-all",
                  unit === 'm3' ? "bg-oak text-charcoal" : "hover:bg-white/5"
                )}
              >
                Кубы (м³)
              </button>
            </div>

            <div className="relative">
              <input 
                type="number" 
                value={quantity}
                onChange={(e) => setQuantity(Math.max(0, Number(e.target.value)))}
                className="w-full bg-white/5 border border-white/10 p-4 text-2xl font-display font-black focus:border-oak outline-none transition-colors"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 font-bold uppercase">
                {unit === 'pcs' ? 'шт' : 'м³'}
              </span>
            </div>
          </div>

          {/* Results */}
          <div className="bg-white/5 p-6 space-y-4">
            <div className="flex justify-between items-end">
              <span className="text-xs uppercase tracking-widest text-white/50 font-bold">Итоговый объем:</span>
              <span className="text-xl font-display font-black">{m3.toFixed(4)} м³</span>
            </div>
            <div className="flex justify-between items-end">
              <span className="text-xs uppercase tracking-widest text-white/50 font-bold">Количество:</span>
              <span className="text-xl font-display font-black">{pcs} шт</span>
            </div>
            <div className="pt-4 border-t border-white/10 flex justify-between items-center">
              <span className="text-sm uppercase tracking-widest text-oak font-black">Стоимость:</span>
              <span className="text-3xl font-display font-black text-oak">{Math.round(totalPrice).toLocaleString()} ₽</span>
            </div>
          </div>

          <button 
            onClick={addToQuote}
            className="w-full bg-oak hover:bg-oak-dark text-charcoal py-4 font-black uppercase tracking-tighter flex items-center justify-center space-x-3 transition-all"
          >
            <Plus size={20} />
            <span>Добавить в смету</span>
          </button>
        </div>
      </div>

      {/* Quote Summary Section */}
      <AnimatePresence>
        {quoteItems.length > 0 && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-white/5 border-t border-white/10"
          >
            <div className="p-6 md:p-8 space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <FileText size={18} className="text-oak" />
                  <h3 className="text-sm font-black uppercase tracking-widest">Ваша смета ({quoteItems.length})</h3>
                </div>
                <button 
                  onClick={() => setQuoteItems([])}
                  className="text-[10px] uppercase tracking-widest text-white/30 hover:text-white transition-colors"
                >
                  Очистить
                </button>
              </div>

              <div className="space-y-3 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                {quoteItems.map((item) => (
                  <div key={item.id} className="flex justify-between items-center bg-white/5 p-3 group">
                    <div className="flex-1">
                      <span className="block text-xs font-bold">{item.productName}</span>
                      <span className="text-[10px] text-white/50 uppercase tracking-widest">
                        {item.pcs} шт / {item.m3.toFixed(3)} м³
                      </span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm font-black">{Math.round(item.price).toLocaleString()} ₽</span>
                      <button 
                        onClick={() => removeFromQuote(item.id)}
                        className="text-white/20 hover:text-red-500 transition-colors"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-white/10">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs uppercase tracking-widest text-white/50 font-bold">Общий объем:</span>
                  <span className="text-lg font-display font-black">{totalVolume.toFixed(3)} м³</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm uppercase tracking-widest text-oak font-black">Итого к оплате:</span>
                  <span className="text-3xl font-display font-black text-oak">{Math.round(grandTotal).toLocaleString()} ₽</span>
                </div>
                <button className="w-full mt-6 bg-white text-charcoal py-4 font-black uppercase tracking-tighter flex items-center justify-center space-x-3 hover:bg-oak transition-all">
                  <span>Оформить заказ</span>
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="p-4 bg-white/5 border-t border-white/10">
        <p className="text-[10px] text-white/30 text-center uppercase tracking-widest flex items-center justify-center space-x-1">
          <Info size={12} />
          <span>Расчет является предварительным</span>
        </p>
      </div>
    </div>
  );
}
