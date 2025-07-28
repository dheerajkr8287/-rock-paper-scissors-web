# Rock Paper Scissors Web

A responsive, interactive web application for playing the classic "Rock, Paper, Scissors" game against the computer.

## Features

- **Simple Gameplay**: Select your move (Rock, Paper, or Scissors) and play against the computer, which chooses randomly.
- **Score Tracking**: See your score and the computer's score update live.
- **Result Display**: Get instant feedback after each round (win, lose, draw).
- **Reset Button**: Reset scores and start a new session easily.
- **Light/Dark Mode**: Toggle between light and dark themes for better viewing comfort.
- **Responsive Design**: Optimized for desktop and mobile devices.

## How It Works

- The main interface presents three choices: Rock, Paper, and Scissors (with images).
- Clicking a choice triggers the game logic (`script.js`):
  - The computer picks randomly.
  - The winner is determined according to the rules:
    - Rock beats Scissors
    - Scissors beats Paper
    - Paper beats Rock
  - Scores are updated and a message displays the round result.
- You can toggle between Light and Dark Mode using the sun/moon button.
- Use the "Reset" button to set both scores to zero.

## Project Structure

```
/
├── index.html        # Main HTML file; UI structure
├── style.css         # Styling and responsive design
├── script.js         # Game logic and interactivity
├── images/           # Game icons (rock, paper, scissors, backgrounds)
```

## Usage

1. **Clone the repository**:
   ```bash
   git clone https://github.com/dheerajkr8287/-rock-paper-scissors-web.git
   cd -rock-paper-scissors-web
   ```
2. **Open `index.html` in your browser**.

_No build steps required; it's pure HTML/CSS/JS._

## Customization

- Replace images in the `images/` folder to change icons or backgrounds.
- Modify `style.css` for different color schemes or layout tweaks.
- Extend `script.js` to add features (e.g., round history, difficulty levels).


---

Made by [dheerajkr8287](https://github.com/dheerajkr8287)
