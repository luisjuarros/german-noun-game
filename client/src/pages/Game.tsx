import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { germanNouns } from "@/data/nouns";
import { GenderButton } from "@/components/GenderButton";
import { ProgressBar } from "@/components/ProgressBar";
import { RefreshCcw, Home as HomeIcon } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";
import { Mascot } from "@/components/Mascot";
import { useLocation } from "wouter";

interface GameProps {
  params: {
    category: string;
  };
}

export default function Game({ params }: GameProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [incorrectWords, setIncorrectWords] = useState([] as typeof germanNouns[keyof typeof germanNouns]);
  const [selectedGender, setSelectedGender] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [gameComplete, setGameComplete] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [mascotState, setMascotState] = useState<'idle' | 'happy' | 'encouraging'>('idle');
  const { language } = useLanguage();
  const [, setLocation] = useLocation();

  const categoryWords = germanNouns[params.category] || [];
  const currentWord = gameComplete && incorrectWords.length > 0
    ? incorrectWords[currentWordIndex]
    : categoryWords[currentWordIndex];

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
      if (!gameComplete && !incorrectWords.includes(currentWord)) {
        setIncorrectWords(prev => [...prev, currentWord]);
      }
    } else if (gameComplete) {
      setIncorrectWords(prev => {
        const newIncorrect = prev.filter(word => word !== currentWord);
        if (newIncorrect.length === 0) {
          // All words completed, return to home
          setTimeout(() => setLocation('/'), 1000);
          setGameComplete(false);
          setCurrentWordIndex(0);
        } else if (currentWordIndex >= newIncorrect.length) {
          setCurrentWordIndex(0);
        }
        return newIncorrect;
      });
    }

    setTimeout(() => {
      setShowFeedback(false);
      setMascotState('idle');
      setSelectedGender(null);
      if (!(gameComplete && correct)) {
        nextWord();
      }
    }, 500);
  };

  const nextWord = useCallback(() => {
    setSelectedGender(null);
    setIsCorrect(null);

    if (gameComplete) {
      if (incorrectWords.length === 0) {
        // Return to home when complete
        setLocation('/');
        setGameComplete(false);
        setCurrentWordIndex(0);
      } else {
        setCurrentWordIndex(prev => 
          prev >= incorrectWords.length - 1 ? 0 : prev + 1
        );
      }
    } else if (currentWordIndex < categoryWords.length - 1) {
      setCurrentWordIndex(prev => prev + 1);
    } else {
      setGameComplete(true);
      setCurrentWordIndex(0);
    }
  }, [currentWordIndex, gameComplete, incorrectWords.length, categoryWords.length, setLocation]);

  const restartGame = () => {
    setCurrentWordIndex(0);
    setIncorrectWords([]);
    setSelectedGender(null);
    setIsCorrect(null);
    setGameComplete(false);
  };

  const goHome = () => {
    setLocation('/');
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
            current={gameComplete ? incorrectWords.length === 0 ? categoryWords.length : incorrectWords.length - currentWordIndex : currentWordIndex + 1} 
            total={gameComplete ? incorrectWords.length === 0 ? categoryWords.length : incorrectWords.length : categoryWords.length} 
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

          <div className="flex gap-4">
            <Button
              variant="outline"
              onClick={restartGame}
            >
              <RefreshCcw className="mr-2 h-4 w-4" />
              Restart Game
            </Button>
            <Button
              variant="outline"
              onClick={goHome}
            >
              <HomeIcon className="mr-2 h-4 w-4" />
              Return Home
            </Button>
          </div>
        </CardContent>
      </Card>
      <Mascot state={mascotState} />
    </div>
  );
}