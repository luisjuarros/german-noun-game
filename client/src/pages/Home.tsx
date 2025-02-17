import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/lib/LanguageContext";
import { categoryTranslations } from "@/lib/translations";
import { Link } from "wouter";
import { motion } from "framer-motion";

const categories = ['animals', 'home', 'work'];

export default function Home() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-lg">
        <CardContent className="pt-6">
          <h1 className="text-3xl font-bold text-center mb-8">German Noun Categories</h1>
          <div className="grid gap-4">
            {categories.map((category, index) => (
              <Link key={category} href={`/game/${category}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="cursor-pointer hover:bg-accent">
                    <CardContent className="p-6">
                      <h2 className="text-xl font-semibold">
                        {categoryTranslations[category][language]}
                      </h2>
                      <p className="text-sm text-muted-foreground mt-2">
                        Practice 10 words related to {categoryTranslations[category][language].toLowerCase()}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
