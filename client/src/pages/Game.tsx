import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GermanNoun, germanNouns } from "@/data/nouns";
import { GenderButton } from "@/components/GenderButton";
import { ProgressBar } from "@/components/ProgressBar";
import { RefreshCcw } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";
import { Mascot } from "@/components/Mascot";

export default function Game() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [incorrectWords, setIncorrectWords] = useState<GermanNoun[]>([]);
  const [selectedGender, setSelectedGender] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [gameComplete, setGameComplete] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [mascotState, setMascotState] = useState<'idle' | 'happy' | 'encouraging'>('idle');
  const { language } = useLanguage();

  const currentWord = gameComplete && incorrectWords.length > 0
    ? incorrectWords[currentWordIndex]
    : germanNouns[currentWordIndex];

  // Safe access to translation
  const translation = currentWord?.translation 
    ? translations[currentWord.translation]?.[language] ?? currentWord.translation
    : '';

  const handleGenderSelect = (gender: string) => {
    if (!currentWord) return;

    setSelectedGender(gender);
    const correct = gender === currentWord.gender;
    setIsCorrect(correct);
    setShowFeedback(true);

    setMascotState(correct ? 'happy' : 'encouraging');

    if (!correct) {
      // Only add to incorrect words if not already there and we're in the main phase
      if (!gameComplete && !incorrectWords.includes(currentWord)) {
        setIncorrectWords(prev => [...prev, currentWord]);
      }
    } else if (gameComplete) {
      // Remove the word from incorrect words when answered correctly in retry phase
      setIncorrectWords(prev => prev.filter(word => word !== currentWord));
    }

    setTimeout(() => {
      setShowFeedback(false);
      setMascotState('idle');
      nextWord();
    }, 500);
  };

  const nextWord = useCallback(() => {
    setSelectedGender(null);
    setIsCorrect(null);

    if (gameComplete) {
      if (incorrectWords.length === 0) {
        // All words have been answered correctly
        setGameComplete(false);
        setCurrentWordIndex(0);
      } else {
        // Stay in retry mode with remaining incorrect words
        // If we're at the end of the list, start over from beginning
        setCurrentWordIndex(prev => 
          prev >= incorrectWords.length - 1 ? 0 : prev + 1
        );
      }
    } else if (currentWordIndex < germanNouns.length - 1) {
      // Still in main phase
      setCurrentWordIndex(prev => prev + 1);
    } else {
      // Finished main phase, start retry phase if there are incorrect words
      setGameComplete(true);
      setCurrentWordIndex(0);
    }
  }, [currentWordIndex, gameComplete, incorrectWords.length]);

  const restartGame = () => {
    setCurrentWordIndex(0);
    setIncorrectWords([]);
    setSelectedGender(null);
    setIsCorrect(null);
    setGameComplete(false);
  };

  if (!currentWord) return null;

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 relative">
      <AnimatePresence>
        {showFeedback && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            className={`absolute inset-0 z-10 ${
              isCorrect ? "bg-green-500" : "bg-red-500"
            }`}
          />
        )}
      </AnimatePresence>

      <Card className="w-full max-w-lg relative z-20">
        <CardContent className="pt-6 flex flex-col items-center gap-8">
          <ProgressBar 
            current={gameComplete ? incorrectWords.length === 0 ? germanNouns.length : incorrectWords.length - currentWordIndex : currentWordIndex + 1} 
            total={gameComplete ? incorrectWords.length === 0 ? germanNouns.length : incorrectWords.length : germanNouns.length} 
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={currentWord.word}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center"
            >
              <h2 className="text-4xl font-bold mb-2">{currentWord.word}</h2>
              <p className="text-lg text-muted-foreground mb-1">{currentWord.plural}</p>
              <p className="text-sm text-muted-foreground">{translation}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex gap-4 flex-wrap justify-center">
            {['der', 'die', 'das'].map((gender) => (
              <GenderButton
                key={gender}
                gender={gender as 'der' | 'die' | 'das'}
                onClick={() => handleGenderSelect(gender)}
                disabled={selectedGender !== null}
                isCorrect={selectedGender === gender ? isCorrect : null}
              />
            ))}
          </div>

          <Button
            variant="outline"
            onClick={restartGame}
            className="mt-4"
          >
            <RefreshCcw className="mr-2 h-4 w-4" />
            Restart Game
          </Button>
        </CardContent>
      </Card>
      <Mascot state={mascotState} />
    </div>
  );
}