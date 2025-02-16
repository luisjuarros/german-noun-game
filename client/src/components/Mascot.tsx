import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MascotProps {
  state: 'idle' | 'happy' | 'encouraging';
  className?: string;
}

export function Mascot({ state, className }: MascotProps) {
  const variants = {
    idle: {
      y: [0, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    happy: {
      rotate: [0, -10, 10, -10, 0],
      scale: [1, 1.1, 1],
      transition: {
        duration: 0.5
      }
    },
    encouraging: {
      x: [0, -5, 5, -5, 0],
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <motion.div
      animate={state}
      variants={variants}
      className={cn("fixed bottom-8 right-8 w-32 h-32", className)}
    >
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Body */}
        <motion.circle
          cx="100"
          cy="100"
          r="80"
          fill="#FFD700"
          stroke="#000"
          strokeWidth="4"
        />
        {/* Eyes */}
        <motion.circle
          cx="70"
          cy="90"
          r="10"
          fill="#000"
          animate={state === 'happy' ? {
            scaleY: [1, 0.3, 1],
            transition: { duration: 0.3 }
          } : undefined}
        />
        <motion.circle
          cx="130"
          cy="90"
          r="10"
          fill="#000"
          animate={state === 'happy' ? {
            scaleY: [1, 0.3, 1],
            transition: { duration: 0.3 }
          } : undefined}
        />
        {/* Mouth */}
        <motion.path
          d={state === 'happy' 
            ? "M60 120 Q100 150 140 120" // Happy mouth
            : state === 'encouraging'
              ? "M70 130 Q100 120 130 130" // Encouraging mouth
              : "M70 130 Q100 140 130 130" // Normal mouth
          }
          stroke="#000"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
        {/* German flag colors on the cheeks */}
        <circle cx="60" cy="110" r="8" fill="#FF0000" opacity="0.3" />
        <circle cx="140" cy="110" r="8" fill="#FFD700" opacity="0.3" />
      </svg>
    </motion.div>
  );
}
