# Match Removal Game - Technical Task (TT) at Stormotion
## 📋 Overview
This project is a simple match removal game where the user competes against the computer. Each player takes turns removing 1, 2, or 3 matches from a pile. The game ends when all matches are removed, and the winner is determined based on who has an even number of matches at the end. This game serves as a technical task (TT) developed for Stormotion.

## 🏗️ Project Structure

```bash
/src
  ├── assets
  │   └── css      # CSS stylesheets
  ├── components
  │   ├── Game.jsx     # Main game component
  │   ├── Menu.jsx     # Component for user input options
  │   ├── Matches.jsx  # Component to display match pile
  │   ├── ScoreBoard.jsx # Component to show player scores
  │   ├── Intro.jsx    # Intro component explaining the rules
  │   └── GameOver.jsx # Game over screen
  └── logic.js         # Core game logic and AI for computer moves
  └── App.js           # Root component
  └── index.js         # Entry point
  ```
## 🛠️ Setup Instructions
Follow these steps to run the game locally:

1. Clone the Repository:
```bash
git clone https://github.com/alexkolitenkov/matches-game-app.git
cd matches-game-app
```

2. Install Dependencies:

```bash
npm install
```
3. Run the Game:

```bash
npm run dev
```
4. Open in Browser:

- Open http://localhost:5173 to see the game.

## 📚 How to Play
1. Objective: Take turns with the computer removing 1, 2, or 3 matches from the pile.
2. Winning Condition: The game ends when all matches are taken. The player with an even number of matches wins.
3. Restart: Use the "Restart Game" button on the Game Over screen to play again.