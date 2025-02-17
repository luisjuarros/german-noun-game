import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguage } from "@/lib/LanguageContext";
import { categoryTranslations, uiTranslations } from "@/lib/translations";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { germanNouns } from "@/data/nouns";

// Category background images
const categoryImages: Record<string, string> = {
  animals: "https://images.unsplash.com/photo-1535083783855-76ae62b2914e",
  home: "https://images.unsplash.com/photo-1484154218962-a197927d8887",
  work: "https://images.unsplash.com/photo-1497366216548-37526070297c",
};

export default function Home() {
  const { language } = useLanguage();
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("popular");

  const categories = Object.keys(germanNouns);

  return (
    <div className="min-h-screen bg-background pt-20 px-4 pb-8">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">
          {uiTranslations.page_title[language]}
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-1">
            <label className="text-sm font-medium mb-2 block">
              {uiTranslations.filter_label[language]}
            </label>
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger>
                <SelectValue placeholder={uiTranslations.all_types[language]} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{uiTranslations.all_types[language]}</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {categoryTranslations[category][language]}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex-1">
            <label className="text-sm font-medium mb-2 block">
              {uiTranslations.sort_label[language]}
            </label>
            <Select value={sort} onValueChange={setSort}>
              <SelectTrigger>
                <SelectValue placeholder={uiTranslations.most_popular[language]} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">
                  {uiTranslations.most_popular[language]}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {categories
            .filter((category) => filter === "all" || filter === category)
            .map((category, index) => (
              <Link key={category} href={`/game/${category}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="cursor-pointer overflow-hidden group">
                    <div className="relative h-48">
                      <img
                        src={categoryImages[category]}
                        alt={categoryTranslations[category][language]}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40" />
                      <div className="absolute inset-0 p-6 flex flex-col justify-between">
                        <div>
                          <h2 className="text-2xl font-bold text-white">
                            {categoryTranslations[category][language]}
                          </h2>
                          <p className="text-white/80 mt-2">
                            {uiTranslations.practice_words[language]
                              .replace('{count}', germanNouns[category].length.toString())
                              .replace('{category}', categoryTranslations[category][language].toLowerCase())}
                          </p>
                        </div>
                        <div className="text-xl font-bold text-white">
                          {germanNouns[category].length}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}