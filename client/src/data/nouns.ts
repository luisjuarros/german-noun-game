export interface GermanNoun {
  word: string;
  gender: 'der' | 'die' | 'das';
  translation?: string;
}

export const germanNouns: GermanNoun[] = [
  { word: 'Haus', gender: 'das', translation: 'house' },
  { word: 'Baum', gender: 'der', translation: 'tree' },
  { word: 'Blume', gender: 'die', translation: 'flower' },
  { word: 'Tisch', gender: 'der', translation: 'table' },
  { word: 'Buch', gender: 'das', translation: 'book' },
  { word: 'Katze', gender: 'die', translation: 'cat' },
  { word: 'Auto', gender: 'das', translation: 'car' },
  { word: 'Sonne', gender: 'die', translation: 'sun' },
  { word: 'Stuhl', gender: 'der', translation: 'chair' },
  { word: 'Tür', gender: 'die', translation: 'door' },
  { word: 'Fenster', gender: 'das', translation: 'window' },
  { word: 'Mann', gender: 'der', translation: 'man' },
  { word: 'Frau', gender: 'die', translation: 'woman' },
  { word: 'Kind', gender: 'das', translation: 'child' },
  { word: 'Hund', gender: 'der', translation: 'dog' },
  { word: 'Lampe', gender: 'die', translation: 'lamp' },
  { word: 'Bett', gender: 'das', translation: 'bed' },
  { word: 'Mond', gender: 'der', translation: 'moon' },
  { word: 'Straße', gender: 'die', translation: 'street' },
  { word: 'Telefon', gender: 'das', translation: 'telephone' }
];
