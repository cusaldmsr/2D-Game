<h1 align="center">Ninja Runner Game</h1>

<br>
<div align="center">
<img src="https://github.com/cusaldmsr/2D-Game/blob/main/StartScreenCaractor.gif" width="300">
</div>
<br>

<p align="center">
        <img src="https://img.shields.io/github/created-at/cusaldmsr/2D-Game"/>
        <img src="https://img.shields.io/github/commit-activity/m/cusaldmsr/2D-Game"/>
        <img src="https://img.shields.io/github/forks/cusaldmsr/2D-Game"/>
        <img src="https://img.shields.io/github/stars/cusaldmsr/2D-Game"/>
        <img src="https://img.shields.io/github/watchers/cusaldmsr/2D-Game"/>
</p>

## 🥷 Overview
**Ninja Runner** is a 2D side-scrolling game where the player controls a ninja character to avoid obstacles and achieve the highest score possible. The game was created as a university project.

<br>
<div align="center">
<img src="https://github.com/user-attachments/assets/f7072c87-5ce6-477a-a684-70e765427bbf" width="600">
</div>
<br>


### 🥷 Features
- **Dynamic Gameplay**: The player runs continuously and can jump over obstacles.
- **Scoring System**: Tracks and displays the score in real-time.
- **Game States**: Includes a start screen, running gameplay, and a game-over screen.
- **Sound Effects**: Integrates sounds for running, jumping, and game over events.
- **Visual Assets**: Uses custom images and animations for the ninja, obstacles, and background.

### 🥷 Live Demo

- **Try it now** : 👉 [Ninja Runner](https://cusaldmsr.github.io/2D-Game/)

---

## 🥷 Files in Repository
### 1. **index.html**
The main HTML file that structures the game.

#### Key Sections:
- **Head**: Includes the title, stylesheets, and favicon.
- **Body**: Contains game elements such as the background, player, and UI components for scores, start screen, and game-over screen.
- **Scripts**: Links to the JavaScript file for game logic.

### 2. **style.css**
Defines the visual appearance of the game elements.

#### Key Classes:
- `.background`: Sets up the background image and game area.
- `.player`: Styles the ninja character.
- `.block`: Represents the obstacles.
- `.score`: Displays the current score.
- `.startScreen` & `.gameOver`: Style the start and game-over screens.
- `.btn`: Styles the retry button.

### 3. **script.js**
Contains the game logic and interaction handling.

#### Key Functions:
- **keyCheck(event)**: Handles keypress events for starting the game and jumping.
- **run()**: Animates the ninja's running motion.
- **jump()**: Handles the jumping logic and animation.
- **moveBackground()**: Creates a scrolling effect for the background.
- **updateScore()**: Increments and updates the score.
- **createBlock()**: Dynamically generates obstacles.
- **moveBlocks()**: Animates obstacle movement and detects collisions.
- **dead()**: Handles the game-over animation and logic.
- **reload()**: Reloads the page to restart the game.

### 4. **Assets**
#### Images:
- **Background.jpg**: The main game background.
- **Run/Run (1-10).png**: Frames for the ninja running animation.
- **Jump/Jump1.png - Jump10.png**: Frames for the ninja jumping animation.
- **Dead/Dead 1.png - Dead 9.png**: Frames for the ninja death animation.
- **Game0.png**: Game-over text image.
- **Ninja1.png**: Title image for the start screen.
- **StartScreenCaractor.gif**: Animated character on the start screen.
- **spikes.gif**: Obstacle appearance.

#### Audio Files:
- **run.mp3**: Looping sound for running.
- **jump.mp3**: Sound for jumping.
- **dead.mp3**: Sound for ninja death.
- **Cipher2.mp3**: Background music for the game-over screen.

---

## 🥷 Instructions for Running
1. Clone or download the repository.
2. Ensure all asset files (images, audio) are in the correct relative paths.
3. Open `index.html` in a web browser to play the game.

---

## 🥷 Future Improvements
- **Enhancements**:
  - Add more obstacle types and increase difficulty dynamically.
  - Introduce power-ups for the player.
  - Implement a leaderboard for high scores.
- **Optimizations**:
  - Improve collision detection.
  - Use sprite sheets instead of individual images for animations.

---

## 🥷 Credits
This project was developed as part of a university course assignment. The assets and sounds are either custom-created or sourced from royalty-free repositories.

**Developer**: [Kusal Damsara](https://github.com/cusaldmsr) 🥷

