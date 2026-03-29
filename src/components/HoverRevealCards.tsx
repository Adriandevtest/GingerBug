import React from 'react';

// Reemplazo simple del util 'cn' que usualmente viene de clsx/tailwind-merge en shadcn
const cn = (...classes: (string | undefined | null | false)[]) => classes.filter(Boolean).join(" ");

export interface CardItem {
  id: string | number;
  title: string;
  subtitle: string;
  imageUrl: string;
  price: string;
}

export interface HoverRevealCardsProps {
  items: CardItem[];
  onAddToCart?: (item: CardItem) => void;
  className?: string;
  cardClassName?: string;
}

const HoverRevealCards: React.FC<HoverRevealCardsProps> = ({
  items,
  onAddToCart,
  className,
  cardClassName,
}) => {
  const [addedItems, setAddedItems] = React.useState<Set<string | number>>(new Set());

  const handleAdd = (e: React.MouseEvent, item: CardItem) => {
    e.stopPropagation();
    setAddedItems(prev => new Set(prev).add(item.id));
    if (onAddToCart) onAddToCart(item);
    setTimeout(() => {
      setAddedItems(prev => {
        const next = new Set(prev);
        next.delete(item.id);
        return next;
      });
    }, 2000);
  };
  return (
    <div
      role="list"
      className={cn(
        'group grid w-full max-w-7xl grid-cols-1 gap-6 p-4 sm:grid-cols-2 lg:grid-cols-4',
        className
      )}
    >
      {items.map((item) => (
        <div
          key={item.id}
          role="listitem"
          aria-label={`${item.title}, ${item.subtitle}`}
          tabIndex={0}
          className={cn(
            'relative h-96 lg:h-[28rem] cursor-pointer overflow-hidden rounded-2xl bg-cover bg-center shadow-xl transition-all duration-500 ease-in-out',
            // On parent hover, apply these styles to all children.
            'group-hover:scale-[0.97] group-hover:opacity-40 group-hover:blur-[2px]',
            // On child hover/focus, override parent hover styles to highlight the current item.
            'hover:!scale-105 hover:!opacity-100 hover:!blur-none hover:z-10 focus-visible:!scale-105 focus-visible:!opacity-100 focus-visible:!blur-none focus-visible:z-10',
            // Accessibility
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink focus-visible:ring-offset-2 ring-offset-black',
            cardClassName
          )}
          style={{ backgroundImage: `url('${item.imageUrl}')`, backgroundColor: '#000' }}
        >
          {/* Gradient overlay for text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500 group-hover:opacity-80 hover:!opacity-100" />

          {/* Card Content */}
          <div className="absolute bottom-0 left-0 w-full p-8 text-white transition-transform duration-500 transform translate-y-4 hover:translate-y-0 opacity-90 hover:opacity-100">
            <div className="flex justify-between items-end mb-2">
              <div>
                <p className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-brand-pink mb-1">
                  {item.subtitle}
                </p>
                <h3 className="text-2xl md:text-3xl font-bold leading-tight drop-shadow-md">{item.title}</h3>
              </div>
              <p className="text-xl md:text-2xl font-black text-brand-beige drop-shadow-lg">{item.price}</p>
            </div>
            
            {/* Hover Action Button */}
            <div className="mt-6 opacity-0 transition-all duration-500 group-hover:opacity-0 hover:!opacity-100 translate-y-2 hover:translate-y-0">
              <button 
                onClick={(e) => handleAdd(e, item)}
                className={cn(
                  "w-full py-3 px-6 rounded-full font-bold tracking-wider transition-all duration-300 transform active:scale-95",
                  addedItems.has(item.id) 
                    ? "bg-brand-green text-white scale-105" 
                    : "bg-white text-brand-black hover:bg-brand-pink hover:text-white"
                )}
              >
                {addedItems.has(item.id) ? "✓ ¡Agregado!" : "Comprar Ahora"}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HoverRevealCards;
