# German Noun Gender Learning Game

An interactive web application to help users learn the genders of German nouns through an engaging game interface. The game features immediate feedback, retry system for incorrect answers, and support for multiple languages (English, Spanish, French, Italian).

## Features

- 🎯 Interactive learning with immediate feedback
- 🔄 Retry system for incorrectly answered nouns
- 🌍 Multi-language support (EN, ES, FR, IT)
- 📊 Progress tracking
- 🎨 Clean, responsive UI with smooth animations

## Prerequisites

Before running this project, make sure you have:

- Node.js (v18 or later)
- npm (comes with Node.js)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/luisjuarros/german-noun-game.git
cd german-noun-game
```

2. Install dependencies:
```bash
npm install
```

## Running the Project

1. Start the development server:
```bash
npm run dev
```

2. Open your browser and navigate to:
```
http://localhost:5000
```

## Project Structure

- `/client` - Frontend React application
  - `/src/components` - Reusable UI components
  - `/src/pages` - Application pages
  - `/src/data` - Game data (nouns, translations)
  - `/src/lib` - Utility functions and context providers
- `/server` - Backend Express server
- `/shared` - Shared types and schemas

## Built With

- React
- TypeScript
- Express
- Tailwind CSS
- Framer Motion
- shadcn/ui

## License

This project is licensed under the MIT License - see the LICENSE file for details.
