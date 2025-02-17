export interface GermanNoun {
  word: string;
  gender: 'der' | 'die' | 'das';
  plural: string;
  translation?: string;
}

export interface NounCategory {
  id: string;
  nouns: GermanNoun[];
}

export const germanNouns: Record<string, GermanNoun[]> = {
  animals: [
    { word: 'Hund', gender: 'der', plural: 'die Hunde', translation: 'dog' },
    { word: 'Katze', gender: 'die', plural: 'die Katzen', translation: 'cat' },
    { word: 'Pferd', gender: 'das', plural: 'die Pferde', translation: 'horse' },
    { word: 'Vogel', gender: 'der', plural: 'die Vögel', translation: 'bird' },
    { word: 'Maus', gender: 'die', plural: 'die Mäuse', translation: 'mouse' },
    { word: 'Kaninchen', gender: 'das', plural: 'die Kaninchen', translation: 'rabbit' },
    { word: 'Bär', gender: 'der', plural: 'die Bären', translation: 'bear' },
    { word: 'Schlange', gender: 'die', plural: 'die Schlangen', translation: 'snake' },
    { word: 'Schwein', gender: 'das', plural: 'die Schweine', translation: 'pig' },
    { word: 'Affe', gender: 'der', plural: 'die Affen', translation: 'monkey' }
  ],
  home: [
    { word: 'Tisch', gender: 'der', plural: 'die Tische', translation: 'table' },
    { word: 'Stuhl', gender: 'der', plural: 'die Stühle', translation: 'chair' },
    { word: 'Bett', gender: 'das', plural: 'die Betten', translation: 'bed' },
    { word: 'Lampe', gender: 'die', plural: 'die Lampen', translation: 'lamp' },
    { word: 'Fenster', gender: 'das', plural: 'die Fenster', translation: 'window' },
    { word: 'Tür', gender: 'die', plural: 'die Türen', translation: 'door' },
    { word: 'Schrank', gender: 'der', plural: 'die Schränke', translation: 'cabinet' },
    { word: 'Küche', gender: 'die', plural: 'die Küchen', translation: 'kitchen' },
    { word: 'Bad', gender: 'das', plural: 'die Bäder', translation: 'bathroom' },
    { word: 'Sofa', gender: 'das', plural: 'die Sofas', translation: 'sofa' }
  ],
  work: [
    { word: 'Büro', gender: 'das', plural: 'die Büros', translation: 'office' },
    { word: 'Computer', gender: 'der', plural: 'die Computer', translation: 'computer' },
    { word: 'Tastatur', gender: 'die', plural: 'die Tastaturen', translation: 'keyboard' },
    { word: 'Telefon', gender: 'das', plural: 'die Telefone', translation: 'telephone' },
    { word: 'Drucker', gender: 'der', plural: 'die Drucker', translation: 'printer' },
    { word: 'Besprechung', gender: 'die', plural: 'die Besprechungen', translation: 'meeting' },
    { word: 'Projekt', gender: 'das', plural: 'die Projekte', translation: 'project' },
    { word: 'Chef', gender: 'der', plural: 'die Chefs', translation: 'boss' },
    { word: 'Kollegin', gender: 'die', plural: 'die Kolleginnen', translation: 'colleague' },
    { word: 'Team', gender: 'das', plural: 'die Teams', translation: 'team' }
  ]
};