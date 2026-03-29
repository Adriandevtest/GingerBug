import { motion } from "framer-motion";
import { useState } from "react";

// Helper replacement for shadcn's 'cn' from clsx/tailwind-merge
const cn = (...classes: (string | undefined | null | false)[]) => classes.filter(Boolean).join(" ");

const Card = ({
  className,
  image,
  children,
}: {
  className?: string;
  image?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "w-[350px] cursor-pointer h-[400px] overflow-hidden bg-brand-black/90 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.5)] border border-white/10",
        className
      )}
    >
      {image && (
        <div className="relative h-72 rounded-xl shadow-lg overflow-hidden w-[calc(100%-1rem)] mx-2 mt-2 bg-black">
          <img
            src={image}
            alt="card"
            className="object-cover md:object-contain w-full h-full mix-blend-screen opacity-90 drop-shadow-lg"
          />
        </div>
      )}
      {children && (
        <div className="px-5 py-3 flex flex-col gap-y-1 text-white">{children}</div>
      )}
    </div>
  );
};

export interface CardData {
  image: string;
  title: string;
  description: string;
}

export const StackedCardsInteraction = ({
  cards,
  spreadDistance = 60,
  rotationAngle = 8,
  animationDelay = 0.1,
}: {
  cards: CardData[];
  spreadDistance?: number;
  rotationAngle?: number;
  animationDelay?: number;
}) => {
  const [isHovering, setIsHovering] = useState(false);

  // Limit to maximum of 3 cards
  const limitedCards = cards.slice(0, 3);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="relative w-[350px] h-[400px]">
        {limitedCards.map((card, index) => {
          const isFirst = index === 0;

          let xOffset = 0;
          let rotation = 0;

          if (limitedCards.length > 1) {
            // First card stays in place
            // Second card goes left
            // Third card goes right
            if (index === 1) {
              xOffset = -spreadDistance;
              rotation = -rotationAngle;
            } else if (index === 2) {
              xOffset = spreadDistance;
              rotation = rotationAngle;
            }
          }

          return (
            <motion.div
              key={index}
              className={cn("absolute", isFirst ? "z-10" : "z-0")}
              initial={{ x: 0, rotate: 0 }}
              animate={{
                x: isHovering ? xOffset : 0,
                rotate: isHovering ? rotation : 0,
                zIndex: isFirst ? 10 : isHovering ? 5 : 0,
              }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
                delay: index * animationDelay,
                type: "spring",
                bounce: 0.3,
              }}
              {...(isFirst && {
                onHoverStart: () => setIsHovering(true),
                onHoverEnd: () => setIsHovering(false),
              })}
            >
              <Card
                className={isFirst ? "z-10 cursor-pointer border-brand-pink/30 hover:shadow-brand-pink/20" : "z-0 opacity-80"}
                image={card.image}
              >
                <h3 className="font-bold text-xl">{card.title}</h3>
                <p className="text-sm text-brand-beige/80">{card.description}</p>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
