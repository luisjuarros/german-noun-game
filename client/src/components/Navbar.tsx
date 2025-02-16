import { useLanguage } from "@/lib/LanguageContext";
import { Button } from "@/components/ui/button";
import { type SupportedLanguage } from "@/lib/translations";

const languages: { code: SupportedLanguage; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
  { code: 'fr', label: 'FR' },
  { code: 'it', label: 'IT' }
];

export function Navbar() {
  const { language, setLanguage } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background border-b z-50">
      <div className="max-w-screen-xl mx-auto px-4 h-14 flex items-center justify-between">
        <h1 className="text-lg font-semibold">German Noun Gender Game</h1>
        <div className="flex gap-2">
          {languages.map(({ code, label }) => (
            <Button
              key={code}
              variant={language === code ? "default" : "outline"}
              size="sm"
              onClick={() => setLanguage(code)}
              className="w-12"
            >
              {label}
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
}
