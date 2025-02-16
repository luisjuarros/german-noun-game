import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GenderButtonProps {
  gender: 'der' | 'die' | 'das';
  onClick: () => void;
  disabled?: boolean;
  isCorrect?: boolean | null;
}

const genderColors = {
  der: 'bg-blue-500 hover:bg-blue-600',
  die: 'bg-pink-500 hover:bg-pink-600',
  das: 'bg-green-500 hover:bg-green-600'
};

export function GenderButton({ gender, onClick, disabled, isCorrect }: GenderButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
    >
      <Button
        className={cn(
          "w-24 h-12 text-lg font-bold text-white",
          genderColors[gender],
          isCorrect === true && "bg-emerald-500 hover:bg-emerald-600",
          isCorrect === false && "bg-red-500 hover:bg-red-600"
        )}
        onClick={onClick}
        disabled={disabled}
      >
        {gender}
      </Button>
    </motion.div>
  );
}
