import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GermanNoun, germanNouns } from "@/data/nouns";
import { GenderButton } from "@/components/GenderButton";
import { ProgressBar } from "@/components/ProgressBar";
import { RefreshCcw } from "lucide-react";

export default function Game() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [incorrectWords, setIncorrectWords] = useState<GermanNoun[]>([]);
  const [selectedGender, setSelectedGender] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [gameComplete, setGameComplete] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  const currentWord = gameComplete && incorrectWords.length > 0
    ? incorrectWords[currentWordIndex]
    : germanNouns[currentWordIndex];

  const handleGenderSelect = (gender: string) => {
    setSelectedGender(gender);
    const correct = gender === currentWord.gender;
    setIsCorrect(correct);
    setShowFeedback(true);

    if (!correct && !incorrectWords.includes(currentWord)) {
      setIncorrectWords(prev => [...prev, currentWord]);
    }

    setTimeout(() => {
      setShowFeedback(false);
      nextWord();
    }, 500);
  };

  const nextWord = useCallback(() => {
    setSelectedGender(null);
    setIsCorrect(null);

    if (gameComplete) {
      if (currentWordIndex < incorrectWords.length - 1) {
        setCurrentWordIndex(prev => prev + 1);
      } else if (incorrectWords.length > 0) {
        setIncorrectWords([]);
        setGameComplete(false);
        setCurrentWordIndex(0);
      }
    } else if (currentWordIndex < germanNouns.length - 1) {
      setCurrentWordIndex(prev => prev + 1);
    } else {
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

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 relative">
      {/* Feedback Overlay */}
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
            current={gameComplete ? incorrectWords.length - currentWordIndex : currentWordIndex + 1} 
            total={gameComplete ? incorrectWords.length : germanNouns.length} 
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
              <p className="text-muted-foreground">{currentWord.translation}</p>
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
    </div>
  );
}