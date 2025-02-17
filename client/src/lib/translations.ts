import { SupportedLanguage } from '@/types/languages';

type TranslationRecord = Record<SupportedLanguage, string>;

export const uiTranslations: Record<string, TranslationRecord> & {
  filter_label: TranslationRecord;
  sort_label: TranslationRecord;
  all_types: TranslationRecord;
  most_popular: TranslationRecord;
  practice_words: TranslationRecord;
  page_title: TranslationRecord;
} = {
  'filter_label': {
    en: 'Filter by type of words',
    es: 'Filtrar por tipo de palabras',
    fr: 'Filtrer par type de mots',
    it: 'Filtra per tipo di parole'
  },
  'sort_label': {
    en: 'Sort games by',
    es: 'Ordenar juegos por',
    fr: 'Trier les jeux par',
    it: 'Ordina giochi per'
  },
  'all_types': {
    en: 'All types',
    es: 'Todos los tipos',
    fr: 'Tous les types',
    it: 'Tutti i tipi'
  },
  'most_popular': {
    en: 'Most Popular',
    es: 'Más populares',
    fr: 'Plus populaires',
    it: 'Più popolari'
  },
  'practice_words': {
    en: 'Practice {count} words related to {category}',
    es: 'Practica {count} palabras relacionadas con {category}',
    fr: 'Pratiquez {count} mots liés à {category}',
    it: 'Pratica {count} parole relative a {category}'
  },
  'page_title': {
    en: 'Vocabulary',
    es: 'Vocabulario',
    fr: 'Vocabulaire',
    it: 'Vocabolario'
  }
};

export const categoryTranslations: Record<string, TranslationRecord> & {
  animals: TranslationRecord;
  home: TranslationRecord;
  work: TranslationRecord;
} = {
  'animals': {
    en: 'Animals',
    es: 'Animales',
    fr: 'Animaux',
    it: 'Animali'
  },
  'home': {
    en: 'Home',
    es: 'Hogar',
    fr: 'Maison',
    it: 'Casa'
  },
  'work': {
    en: 'Work',
    es: 'Trabajo',
    fr: 'Travail',
    it: 'Lavoro'
  }
};

export const translations: Record<string, TranslationRecord> = {
  'house': {
    en: 'house',
    es: 'casa',
    fr: 'maison',
    it: 'casa'
  },
  'tree': {
    en: 'tree',
    es: 'árbol',
    fr: 'arbre',
    it: 'albero'
  },
  'flower': {
    en: 'flower',
    es: 'flor',
    fr: 'fleur',
    it: 'fiore'
  },
  'table': {
    en: 'table',
    es: 'mesa',
    fr: 'table',
    it: 'tavolo'
  },
  'book': {
    en: 'book',
    es: 'libro',
    fr: 'livre',
    it: 'libro'
  },
  'cat': {
    en: 'cat',
    es: 'gato',
    fr: 'chat',
    it: 'gatto'
  },
  'car': {
    en: 'car',
    es: 'coche',
    fr: 'voiture',
    it: 'auto'
  },
  'sun': {
    en: 'sun',
    es: 'sol',
    fr: 'soleil',
    it: 'sole'
  },
  'chair': {
    en: 'chair',
    es: 'silla',
    fr: 'chaise',
    it: 'sedia'
  },
  'door': {
    en: 'door',
    es: 'puerta',
    fr: 'porte',
    it: 'porta'
  },
  'window': {
    en: 'window',
    es: 'ventana',
    fr: 'fenêtre',
    it: 'finestra'
  },
  'man': {
    en: 'man',
    es: 'hombre',
    fr: 'homme',
    it: 'uomo'
  },
  'woman': {
    en: 'woman',
    es: 'mujer',
    fr: 'femme',
    it: 'donna'
  },
  'child': {
    en: 'child',
    es: 'niño',
    fr: 'enfant',
    it: 'bambino'
  },
  'dog': {
    en: 'dog',
    es: 'perro',
    fr: 'chien',
    it: 'cane'
  },
  'lamp': {
    en: 'lamp',
    es: 'lámpara',
    fr: 'lampe',
    it: 'lampada'
  },
  'bed': {
    en: 'bed',
    es: 'cama',
    fr: 'lit',
    it: 'letto'
  },
  'moon': {
    en: 'moon',
    es: 'luna',
    fr: 'lune',
    it: 'luna'
  },
  'street': {
    en: 'street',
    es: 'calle',
    fr: 'rue',
    it: 'strada'
  },
  'telephone': {
    en: 'telephone',
    es: 'teléfono',
    fr: 'téléphone',
    it: 'telefono'
  }
};