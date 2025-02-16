export interface GermanNoun {
  word: string;
  gender: 'der' | 'die' | 'das';
  plural: string;
  translation?: string;
}

export const germanNouns: GermanNoun[] = [
  { word: 'Haus', gender: 'das', plural: 'die Häuser', translation: 'house' },
  { word: 'Baum', gender: 'der', plural: 'die Bäume', translation: 'tree' },
  { word: 'Blume', gender: 'die', plural: 'die Blumen', translation: 'flower' },
  { word: 'Tisch', gender: 'der', plural: 'die Tische', translation: 'table' },
  { word: 'Buch', gender: 'das', plural: 'die Bücher', translation: 'book' },
  { word: 'Katze', gender: 'die', plural: 'die Katzen', translation: 'cat' },
  { word: 'Auto', gender: 'das', plural: 'die Autos', translation: 'car' },
  { word: 'Sonne', gender: 'die', plural: 'die Sonnen', translation: 'sun' },
  { word: 'Stuhl', gender: 'der', plural: 'die Stühle', translation: 'chair' },
  { word: 'Tür', gender: 'die', plural: 'die Türen', translation: 'door' },
  { word: 'Fenster', gender: 'das', plural: 'die Fenster', translation: 'window' },
  { word: 'Mann', gender: 'der', plural: 'die Männer', translation: 'man' },
  { word: 'Frau', gender: 'die', plural: 'die Frauen', translation: 'woman' },
  { word: 'Kind', gender: 'das', plural: 'die Kinder', translation: 'child' },
  { word: 'Hund', gender: 'der', plural: 'die Hunde', translation: 'dog' },
  { word: 'Lampe', gender: 'die', plural: 'die Lampen', translation: 'lamp' },
  { word: 'Bett', gender: 'das', plural: 'die Betten', translation: 'bed' },
  { word: 'Mond', gender: 'der', plural: 'die Monde', translation: 'moon' },
  { word: 'Straße', gender: 'die', plural: 'die Straßen', translation: 'street' },
  { word: 'Telefon', gender: 'das', plural: 'die Telefone', translation: 'telephone' }
];